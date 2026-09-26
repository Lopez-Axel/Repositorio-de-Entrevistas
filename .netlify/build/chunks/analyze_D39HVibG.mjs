import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as analyzeSavedInterview } from "./interviewWorkflow_D3RQ30H9.mjs";
//#region src/pages/api/analyze.ts
var analyze_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
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
/**
* Opt-in: el navegador solo manda el id. Las respuestas se leen del servidor
* desde Google Sheets, asi el analisis se puede pedir incluso despues de
* recargar la pagina.
*/
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
	const interviewId = isRecord(body) ? body.interviewId : void 0;
	if (typeof interviewId !== "string" || interviewId.trim() === "") return jsonResponse({
		success: false,
		error: "Falta el interviewId."
	}, 400);
	const result = await analyzeSavedInterview(interviewId.trim());
	if (!result.success) return jsonResponse({
		success: false,
		stage: result.stage,
		error: result.error
	}, result.stage === "read" ? 404 : 502);
	return jsonResponse({
		success: true,
		stage: result.stage,
		analysis: result.analysis
	}, 200);
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/analyze@_@ts
var page = () => analyze_exports;
//#endregion
export { page };
