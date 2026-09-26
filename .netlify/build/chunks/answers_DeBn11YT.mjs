import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as getInterviewAnswers } from "./googleSheets_BT1fGiM5.mjs";
import { t as interviewQuestions } from "./questions_Bxb1s2Em.mjs";
//#region src/pages/api/interviews/[id]/answers.ts
var answers_exports = /* @__PURE__ */ __exportAll({
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
/**
* Opt-in y explicito: se usa unicamente cuando el interviewer pide ver la
* respuesta que respalda un hallazgo. Las respuestas no se guardan en el
* navegador, solo se muestran en un dialogo y desaparecen al recargar.
*/
var GET = async ({ params }) => {
	const id = params.id;
	if (!id) return jsonResponse({
		success: false,
		error: "Falta el id de la entrevista."
	}, 400);
	try {
		const answers = await getInterviewAnswers(id);
		if (answers.length === 0) return jsonResponse({
			success: false,
			error: "La entrevista no tiene respuestas guardadas en Google Sheets."
		}, 404);
		return jsonResponse({
			success: true,
			answers: interviewQuestions.map((question) => {
				const found = answers.find((item) => item.questionNumber === question.id);
				return {
					questionNumber: question.id,
					question: question.text,
					answer: found?.answer ?? ""
				};
			})
		}, 200);
	} catch (error) {
		const failed = error instanceof Error && error.name === "sheets_read_failed";
		return jsonResponse({
			success: false,
			error: failed ? "No se pudieron leer las respuestas de Google Sheets." : "Error inesperado al leer las respuestas."
		}, failed ? 502 : 500);
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/interviews/[id]/answers@_@ts
var page = () => answers_exports;
//#endregion
export { page };
