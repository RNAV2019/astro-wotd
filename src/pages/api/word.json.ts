import type { APIRoute } from "astro";

interface WordResponse {
	word: string;
	typeOfWord: string;
	definition: string;
	example: string;
	audioUrl: string | null;
}

let memCache: { date: string; data: WordResponse } | null = null;

function todayUTC(): string {
	return new Date().toISOString().split("T")[0];
}

function secondsUntilMidnight(): number {
	const now = new Date();
	const midnight = new Date(now);
	midnight.setUTCHours(24, 0, 0, 0);
	return Math.floor((midnight.getTime() - now.getTime()) / 1000);
}

async function fetchWordnikAudio(
	apiKey: string,
	word: string
): Promise<string | null> {
	const resp = await fetch(
		`https://api.wordnik.com/v4/word.json/${word}/audio?useCanonical=false&limit=5&api_key=${apiKey}`
	);
	if (!resp.ok) return null;
	const data = await resp.json();
	if (!Array.isArray(data) || data.length === 0) return null;
	// Prefer AHD (American Heritage Dictionary) recording, then any available
	const audio =
		data.find((a: { createdBy: string }) => a.createdBy === "ahd") ??
		data[0];
	return (audio?.fileUrl as string) ?? null;
}

async function fetchWordnik(
	apiKey: string,
	date: string
): Promise<WordResponse | null> {
	const resp = await fetch(
		`https://api.wordnik.com/v4/words.json/wordOfTheDay?date=${date}&api_key=${apiKey}`
	);
	if (!resp.ok) return null;

	const data = await resp.json();
	const def = data.definitions?.[0];
	if (!data.word || !def?.text) return null;

	const audioUrl = await fetchWordnikAudio(apiKey, data.word).catch(
		() => null
	);

	return {
		word: data.word,
		typeOfWord: def.partOfSpeech ?? "",
		definition: def.text,
		example: data.examples?.[0]?.text ?? "",
		audioUrl,
	};
}

export const GET: APIRoute = async () => {
	const today = todayUTC();

	if (memCache?.date === today) {
		return respond(memCache.data, secondsUntilMidnight(), "HIT");
	}

	const apiKey = import.meta.env.WORDNIK_API_KEY as string | undefined;

	if (!apiKey) {
		return new Response(
			JSON.stringify({ error: "WORDNIK_API_KEY is not set" }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}

	const wordData = await fetchWordnik(apiKey, today).catch(() => null);

	if (!wordData) {
		return new Response(
			JSON.stringify({ error: "Failed to fetch word of the day from Wordnik" }),
			{ status: 502, headers: { "Content-Type": "application/json" } }
		);
	}

	memCache = { date: today, data: wordData };
	return respond(wordData, secondsUntilMidnight(), "MISS");
};

function respond(
	data: WordResponse,
	ttl: number,
	cacheStatus: "HIT" | "MISS"
) {
	return new Response(JSON.stringify(data), {
		headers: {
			"Content-Type": "application/json",
			"Cache-Control": `public, max-age=${ttl}, stale-while-revalidate=3600`,
			"X-Cache": cacheStatus,
		},
	});
}
