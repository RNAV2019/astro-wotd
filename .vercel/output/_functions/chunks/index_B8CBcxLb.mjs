import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createComponent, S as createAstro, _ as addAttribute, a as renderComponent, c as renderSlot, d as renderTemplate, g as renderHead, h as maybeRenderHead, n as renderScript } from "./server_eIjUU75i.mjs";
import "./compiler_Ca1DtYCd.mjs";
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title } = Astro.props;
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Word of the Day — Daily vocabulary with definitions and pronunciation"><meta name="generator"${addAttribute(Astro.generator, "content")}><meta name="theme-color" content="#0c0a09"><!-- Favicons --><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fafaf9"><link rel="manifest" href="/manifest.json"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"><title>${title}</title><!-- Init theme before first paint to prevent flash --><script>
			const theme = localStorage.getItem("theme") || "light";
			document.documentElement.setAttribute("data-theme", theme);
		<\/script>${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}<script src="/app.js"><\/script></body></html>`;
}, "/home/ryan/Projects/astro-wotd/src/layouts/Layout.astro", void 0);
//#endregion
//#region src/components/Card.astro
createAstro("https://astro.build");
var $$Card = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Card;
	const { text } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="w-full overflow-hidden rounded-lg border" style="border-color: var(--border);"><div class="flex items-center justify-between border-b px-4 py-2.5" style="background: var(--bg-surface); border-color: var(--border);"><span class="text-xs font-semibold tracking-widest uppercase" style="color: var(--text-muted); font-family: var(--font-sans);">Example</span><button id="example-tts" style="color: var(--text-subtle);" aria-label="Pronounce example"><!-- Volume1 icon (Lucide) --><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div><div class="px-4 py-4" style="background: var(--bg);"><p id="example-sentence" class="text-sm leading-relaxed italic" style="color: var(--text-muted); font-family: var(--font-serif);">${text}</p></div></div>`;
}, "/home/ryan/Projects/astro-wotd/src/components/Card.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
	return renderTemplate`${renderScript($$result, "/home/ryan/Projects/astro-wotd/src/pages/index.astro?astro&type=script&index=0&lang.ts")}${renderComponent($$result, "Layout", $$Layout, { "title": "Word of the Day" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="fixed top-5 right-5 z-10"><button id="theme-toggle" class="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition-colors" style="border: 1.5px solid var(--border-strong); color: var(--text-muted); font-family: var(--font-sans); letter-spacing: 0.04em;" aria-label="Toggle theme"><svg id="sun-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg><svg id="moon-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg><span id="theme-label">Light</span></button></div><main class="flex min-h-screen flex-col items-center justify-center p-6" style="background: var(--bg);"><div class="flex w-full max-w-lg flex-col items-center gap-7"><!-- Date header --><div class="text-center"><p class="text-xs tracking-widest uppercase" style="color: var(--text-subtle); font-family: var(--font-sans);">Word of the Day &middot; ${today}</p><div class="mx-auto mt-2.5 h-px w-9" style="background: var(--text);"></div></div><!-- Word content — starts invisible, fades in after JS populates it --><div id="word-content" class="flex w-full flex-col items-center gap-7" style="opacity: 0; transform: translateY(6px); transition: opacity 0.3s ease, transform 0.3s ease;"><!-- Word + TTS --><div class="text-center"><div class="mb-3 flex items-center justify-center gap-3"><h1 id="word" class="text-6xl font-black leading-none tracking-tight sm:text-7xl" style="font-family: var(--font-serif); color: var(--text);"></h1><button id="word-tts" style="color: var(--text-subtle); flex-shrink: 0;" aria-label="Pronounce word"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg></button></div><span id="type-of-word" class="inline-block px-3 py-1 text-xs tracking-widest uppercase" style="background: var(--text); color: var(--bg); font-family: var(--font-sans); display: none;"></span></div><!-- Definition --><p id="definition" class="max-w-md text-center text-lg italic leading-relaxed" style="color: var(--text-muted); font-family: var(--font-serif);"></p><!-- Example card --><div id="example-card" class="w-full" style="display: none;">${renderComponent($$result, "Card", $$Card, { "text": "" })}</div></div></div></main><footer class="fixed bottom-5 left-5 right-5 flex items-center justify-between"><a href="https://github.com/RNAV2019/astro-wotd" target="_blank" rel="noopener noreferrer" aria-label="View on GitHub" style="color: var(--text-subtle); line-height: 0;"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"></path></svg></a><span class="text-xs" style="color: var(--text-subtle); font-family: var(--font-sans); letter-spacing: 0.05em;">wordnik.com</span></footer>` })}`;
}, "/home/ryan/Projects/astro-wotd/src/pages/index.astro", void 0);
var $$file = "/home/ryan/Projects/astro-wotd/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
