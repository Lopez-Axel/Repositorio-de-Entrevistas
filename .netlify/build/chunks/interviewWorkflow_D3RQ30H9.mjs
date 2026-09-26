import { a as getInterviewById, c as saveInterview, l as parseAndValidateAnalysis, s as saveAnalysis } from "./googleSheets_BT1fGiM5.mjs";
import { t as analyzeInterview } from "./openrouter_CpVXeC_2.mjs";
//#region src/lib/interviewWorkflow.ts
var ANALYSIS_FALLBACK = "No se pudo completar el análisis. La entrevista ya está guardada en Google Sheets.";
var SAVE_FALLBACK = "No se pudo guardar la entrevista en Google Sheets.";
function describeError(error, fallback) {
	if (!(error instanceof Error) || !error.message) return fallback;
	if (error.name === "sheets_save_failed") return SAVE_FALLBACK;
	if (error.message.startsWith(`sheets_save_failed:`)) return SAVE_FALLBACK;
	if (error.message === "invalid_json") return "El análisis devuelto por la IA no es un JSON válido.";
	if (error.message === "invalid_structure") return "El análisis devuelto por la IA no tiene la estructura esperada.";
	return error.message;
}
async function pushInterview(interview) {
	const completed = {
		...interview,
		status: "completed"
	};
	try {
		await saveInterview(completed);
	} catch (error) {
		return {
			success: false,
			stage: "save",
			error: describeError(error, "No se pudo guardar la entrevista en Google Sheets."),
			interview: {
				...completed,
				status: "error"
			}
		};
	}
	return {
		success: true,
		stage: "saved",
		interview: completed
	};
}
/**
* Paso 1 (por defecto): guarda la entrevista en Google Sheets. No llama a la IA.
*/
async function saveInterviewToSheets(interview) {
	return pushInterview(interview);
}
/**
* Paso 2 (opt-in): lee la entrevista desde Google Sheets, asegura el guardado y
* recién entonces llama a OpenRouter y guarda el análisis. El navegador solo
* manda el id: las respuestas nunca salen de Sheets.
*/
async function analyzeSavedInterview(interviewId) {
	let interview;
	try {
		const found = await getInterviewById(interviewId);
		if (!found) return {
			success: false,
			stage: "read",
			error: "La entrevista no existe en Google Sheets."
		};
		interview = found;
	} catch {
		return {
			success: false,
			stage: "read",
			error: "No se pudo leer la entrevista de Google Sheets."
		};
	}
	const saved = await pushInterview(interview);
	if (!saved.success) return saved;
	const analyzing = {
		...saved.interview,
		status: "analyzing"
	};
	try {
		const raw = await analyzeInterview(analyzing);
		const analysis = parseAndValidateAnalysis(raw);
		await saveAnalysis(analyzing.id, raw);
		return {
			success: true,
			stage: "analyzed",
			interview: {
				...analyzing,
				status: "analyzed",
				aiAnalysis: analysis
			},
			analysis
		};
	} catch (error) {
		return {
			success: false,
			stage: "analysis",
			error: describeError(error, ANALYSIS_FALLBACK),
			interview: {
				...analyzing,
				status: "error"
			}
		};
	}
}
//#endregion
export { saveInterviewToSheets as n, analyzeSavedInterview as t };
