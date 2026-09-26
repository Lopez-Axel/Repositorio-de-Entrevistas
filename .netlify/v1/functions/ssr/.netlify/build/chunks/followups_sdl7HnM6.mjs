import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { n as openRouterChat, r as buildFollowupPrompt } from "./openrouter_CpVXeC_2.mjs";
//#region src/pages/api/followups.ts
var followups_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var MAX_PAIRS = 20;
var JSON_HEADERS = { "Content-Type": "application/json" };
function jsonResponse(body, status) {
	return new Response(JSON.stringify(body), {
		status,
		headers: JSON_HEADERS
	});
}
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function parsePairs(value) {
	if (!Array.isArray(value)) return [];
	return value.filter(isRecord).map((item) => ({
		question: typeof item.question === "string" ? item.question : "",
		answer: typeof item.answer === "string" ? item.answer : ""
	})).filter((pair) => pair.question.trim() !== "").slice(0, MAX_PAIRS);
}
function parseSuggestions(raw) {
	const cleaned = raw.trim().replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
	let parsed;
	try {
		parsed = JSON.parse(cleaned);
	} catch {
		throw new Error("La IA no devolvió un JSON válido.");
	}
	if (!isRecord(parsed) || !Array.isArray(parsed.suggestions)) throw new Error("La IA no devolvió sugerencias válidas.");
	return parsed.suggestions.filter((item) => typeof item === "string" && item.trim() !== "").slice(0, 5);
}
var POST = async ({ request }) => {
	let body;
	try {
		body = await request.json();
	} catch {
		return jsonResponse({
			success: false,
			error: "El cuerpo de la solicitud no es un JSON válido."
		}, 400);
	}
	const pairs = parsePairs((isRecord(body) ? body : {}).pairs);
	if (pairs.length === 0) return jsonResponse({
		success: false,
		error: "Faltan las respuestas de la entrevista (pairs)."
	}, 400);
	try {
		return jsonResponse({
			success: true,
			suggestions: parseSuggestions(await openRouterChat([{
				role: "system",
				content: buildFollowupPrompt(pairs)
			}, {
				role: "user",
				content: "Generá las sugerencias de cierre. Devolvé únicamente el JSON."
			}]))
		}, 200);
	} catch (error) {
		return jsonResponse({
			success: false,
			error: error instanceof Error && error.message ? error.message : "No se pudieron generar las sugerencias."
		}, 500);
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/followups@_@ts
var page = () => followups_exports;
//#endregion
export { page };
