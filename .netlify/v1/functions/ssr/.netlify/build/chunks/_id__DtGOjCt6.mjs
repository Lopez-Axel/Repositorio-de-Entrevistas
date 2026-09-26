import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as getInterviewById, r as getAnalysisByInterviewId } from "./googleSheets_BT1fGiM5.mjs";
//#region src/pages/api/interviews/[id].ts
var _id__exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	prerender: () => false
});
var JSON_HEADERS = { "Content-Type": "application/json" };
function jsonResponse(body, status) {
	return new Response(JSON.stringify(body), {
		status,
		headers: JSON_HEADERS
	});
}
var GET = async ({ params }) => {
	const id = params.id;
	if (!id) return jsonResponse({
		success: false,
		error: "Falta el id de la entrevista."
	}, 400);
	try {
		const interview = await getInterviewById(id);
		if (!interview) return jsonResponse({
			success: false,
			error: "La entrevista no existe en Google Sheets."
		}, 404);
		const analysis = await getAnalysisByInterviewId(id);
		return jsonResponse({
			success: true,
			interview: {
				id: interview.id,
				interviewer: interview.interviewer,
				businessName: interview.businessName ?? "",
				businessType: interview.businessType ?? "",
				location: interview.location ?? "",
				date: interview.date,
				status: analysis ? "analyzed" : interview.status,
				hasAnalysis: analysis !== null
			},
			analysis
		}, 200);
	} catch (error) {
		const failed = error instanceof Error && error.name === "sheets_read_failed";
		return jsonResponse({
			success: false,
			error: failed ? "No se pudo leer la entrevista de Google Sheets." : "Error inesperado al leer la entrevista."
		}, failed ? 502 : 500);
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/interviews/[id]@_@ts
var page = () => _id__exports;
//#endregion
export { page };
