import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { o as listInterviews, r as getAnalysisByInterviewId } from "./googleSheets_BT1fGiM5.mjs";
import { n as saveInterviewToSheets } from "./interviewWorkflow_D3RQ30H9.mjs";
//#region src/pages/api/interviews/index.ts
var interviews_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
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
function isInterviewCandidate(value) {
	if (!isRecord(value)) return false;
	return typeof value.id === "string" && typeof value.interviewer === "string" && typeof value.date === "string" && Array.isArray(value.answers);
}
/**
* Sin respuestas: el listado solo trae la cabecera y si ya fue analizada.
* Las respuestas unicamente viven en Google Sheets.
*/
function toListItem(interview, analysis) {
	return {
		id: interview.id,
		interviewer: interview.interviewer,
		businessName: interview.businessName ?? "",
		businessType: interview.businessType ?? "",
		location: interview.location ?? "",
		date: interview.date,
		status: analysis ? "analyzed" : interview.status,
		hasAnalysis: analysis !== null
	};
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
	if (!isInterviewCandidate(body)) return jsonResponse({
		success: false,
		error: "Faltan campos obligatorios: id, interviewer, date, answers."
	}, 400);
	const result = await saveInterviewToSheets({
		...body,
		status: "draft"
	});
	if (!result.success) return jsonResponse({
		success: false,
		stage: result.stage,
		error: result.error
	}, 502);
	return jsonResponse({
		success: true,
		stage: result.stage,
		status: result.interview.status,
		savedInSheets: true
	}, 200);
};
var GET = async () => {
	try {
		const interviews = await listInterviews();
		const items = await Promise.all(interviews.map(async (interview) => toListItem(interview, await getAnalysisByInterviewId(interview.id))));
		items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
		return jsonResponse({
			success: true,
			interviews: items
		}, 200);
	} catch (error) {
		const failed = error instanceof Error && error.name === "sheets_read_failed";
		return jsonResponse({
			success: false,
			error: failed ? "No se pudieron leer las entrevistas de Google Sheets." : "Error inesperado al leer las entrevistas."
		}, failed ? 502 : 500);
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/interviews/index@_@ts
var page = () => interviews_exports;
//#endregion
export { page };
