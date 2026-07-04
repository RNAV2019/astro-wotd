import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/word.json.ts
var word_json_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var memCache = null;
function todayUTC() {
	return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
}
function secondsUntilMidnight() {
	const now = /* @__PURE__ */ new Date();
	const midnight = new Date(now);
	midnight.setUTCHours(24, 0, 0, 0);
	return Math.floor((midnight.getTime() - now.getTime()) / 1e3);
}
async function fetchWordnikAudio(apiKey, word) {
	const resp = await fetch(`https://api.wordnik.com/v4/word.json/${word}/audio?useCanonical=false&limit=5&api_key=${apiKey}`);
	if (!resp.ok) return null;
	const data = await resp.json();
	if (!Array.isArray(data) || data.length === 0) return null;
	return (data.find((a) => a.createdBy === "ahd") ?? data[0])?.fileUrl ?? null;
}
async function fetchWordnik(apiKey, date) {
	const resp = await fetch(`https://api.wordnik.com/v4/words.json/wordOfTheDay?date=${date}&api_key=${apiKey}`);
	if (!resp.ok) return null;
	const data = await resp.json();
	const def = data.definitions?.[0];
	if (!data.word || !def?.text) return null;
	const audioUrl = await fetchWordnikAudio(apiKey, data.word).catch(() => null);
	return {
		word: data.word,
		typeOfWord: def.partOfSpeech ?? "",
		definition: def.text,
		example: data.examples?.[0]?.text ?? "",
		audioUrl
	};
}
var GET = async () => {
	const today = todayUTC();
	if (memCache?.date === today) return respond(memCache.data, secondsUntilMidnight(), "HIT");
	const wordData = await fetchWordnik("f0vg6k8re1pls11ez8rodavjq47ulqrd7p1n0d13qwoq77fp3", today).catch(() => null);
	if (!wordData) return new Response(JSON.stringify({ error: "Failed to fetch word of the day from Wordnik" }), {
		status: 502,
		headers: { "Content-Type": "application/json" }
	});
	memCache = {
		date: today,
		data: wordData
	};
	return respond(wordData, secondsUntilMidnight(), "MISS");
};
function respond(data, ttl, cacheStatus) {
	return new Response(JSON.stringify(data), { headers: {
		"Content-Type": "application/json",
		"Cache-Control": `public, max-age=${ttl}, stale-while-revalidate=3600`,
		"X-Cache": cacheStatus
	} });
}
//#endregion
//#region \0virtual:astro:page:src/pages/api/word.json@_@ts
var page = () => word_json_exports;
//#endregion
export { page };
