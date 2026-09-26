import { r as OPENROUTER_MODEL, t as GOOGLE_SCRIPT_URL } from "./server_tVmon0oh.mjs";
//#region src/lib/validation.ts
var CONFIDENCE_VALUES = [
	"high",
	"medium",
	"low"
];
var EVIDENCE_TYPES = [
	"explicit",
	"inference",
	"opportunity"
];
var WTP_LEVELS = [
	"high",
	"medium",
	"low",
	"unknown"
];
function isRecord$1(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isConfidence(value) {
	return typeof value === "string" && CONFIDENCE_VALUES.includes(value);
}
/** Numero de pregunta (1-12) o null. Nunca se inventa ni se adivina. */
function normalizeQuestionNumber(value) {
	const parsed = typeof value === "string" ? Number(value) : value;
	if (typeof parsed !== "number" || !Number.isInteger(parsed)) return null;
	return parsed >= 1 && parsed <= 12 ? parsed : null;
}
function normalizeAnalysisItem(value) {
	if (!isRecord$1(value)) return {
		description: "",
		evidence: null,
		mentioned: false,
		evidenceType: "inference",
		confidence: "medium"
	};
	return {
		description: typeof value.description === "string" ? value.description : "",
		questionNumber: normalizeQuestionNumber(value.questionNumber),
		evidence: typeof value.evidence === "string" ? value.evidence : null,
		mentioned: typeof value.mentioned === "boolean" ? value.mentioned : false,
		evidenceType: EVIDENCE_TYPES.includes(value.evidenceType) ? value.evidenceType : "inference",
		confidence: isConfidence(value.confidence) ? value.confidence : "medium"
	};
}
function normalizeItems(value) {
	return Array.isArray(value) ? value.map(normalizeAnalysisItem) : [];
}
function normalizeSoftwareOpportunity(value) {
	if (!isRecord$1(value)) return {
		name: "",
		problem: "",
		reason: "",
		features: [],
		evidence: null,
		mentioned: false,
		evidenceType: "opportunity",
		confidence: "medium"
	};
	return {
		name: typeof value.name === "string" ? value.name : "",
		problem: typeof value.problem === "string" ? value.problem : "",
		reason: typeof value.reason === "string" ? value.reason : "",
		features: Array.isArray(value.features) ? value.features.filter((item) => typeof item === "string") : [],
		questionNumber: normalizeQuestionNumber(value.questionNumber),
		evidence: typeof value.evidence === "string" ? value.evidence : null,
		mentioned: typeof value.mentioned === "boolean" ? value.mentioned : false,
		evidenceType: EVIDENCE_TYPES.includes(value.evidenceType) ? value.evidenceType : "opportunity",
		confidence: isConfidence(value.confidence) ? value.confidence : "medium"
	};
}
function normalizeWillingnessToPay(value) {
	if (!isRecord$1(value)) return { mentioned: false };
	return {
		mentioned: typeof value.mentioned === "boolean" ? value.mentioned : false,
		level: typeof value.level === "string" && WTP_LEVELS.includes(value.level) ? value.level : void 0,
		questionNumber: normalizeQuestionNumber(value.questionNumber),
		evidence: typeof value.evidence === "string" ? value.evidence : null
	};
}
function invalidStructure() {
	throw new Error("invalid_structure");
}
function buildAnalysis(parsed) {
	const { businessSummary, mainProblems, mainPainPoint, confidence } = parsed;
	if (typeof businessSummary !== "string" || businessSummary.trim() === "" || !Array.isArray(mainProblems) || typeof mainPainPoint !== "string" || mainPainPoint.trim() === "" || !isConfidence(confidence)) invalidStructure();
	return {
		businessSummary,
		mainProblems: mainProblems.map(normalizeAnalysisItem),
		mainPainPoint,
		confidence,
		manualTasks: normalizeItems(parsed.manualTasks),
		currentTools: normalizeItems(parsed.currentTools),
		techBarriers: normalizeItems(parsed.techBarriers),
		detectedNeeds: normalizeItems(parsed.detectedNeeds),
		expectedValue: normalizeItems(parsed.expectedValue),
		preferredPaymentModel: typeof parsed.preferredPaymentModel === "string" ? parsed.preferredPaymentModel : "",
		opportunities: Array.isArray(parsed.opportunities) ? parsed.opportunities.map(normalizeSoftwareOpportunity) : [],
		willingnessToPay: normalizeWillingnessToPay(parsed.willingnessToPay),
		recommendations: Array.isArray(parsed.recommendations) ? parsed.recommendations.filter((item) => typeof item === "string") : []
	};
}
/** Si una celda guardo el objeto como texto JSON, se vuelve a parsear. */
function reviveJsonStrings(value) {
	if (typeof value !== "string") return value;
	const trimmed = value.trim();
	if (!trimmed.startsWith("{") && !trimmed.startsWith("[")) return value;
	try {
		return JSON.parse(trimmed);
	} catch {
		return value;
	}
}
function parseAndValidateAnalysis(raw) {
	const cleaned = raw.trim().replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
	let parsed;
	try {
		parsed = JSON.parse(cleaned);
	} catch {
		throw new Error("invalid_json");
	}
	if (!isRecord$1(parsed)) invalidStructure();
	return buildAnalysis(parsed);
}
/**
* Normaliza un analisis que ya viene guardado en Sheets (viene como objeto y
* no como texto). Devuelve null si la fila esta incompleta, para que la UI
* muestre "sin analisis" en lugar de romperse.
*/
function normalizeStoredAnalysis(value) {
	if (!isRecord$1(value)) return null;
	const revived = {};
	for (const [key, item] of Object.entries(value)) revived[key] = reviveJsonStrings(item);
	try {
		return buildAnalysis(revived);
	} catch {
		return null;
	}
}
//#endregion
//#region src/lib/googleSheets.ts
var REQUEST_TIMEOUT_MS = 2e4;
var SHEETS_SAVE_FAILED = "sheets_save_failed";
var SHEETS_READ_FAILED = "sheets_read_failed";
var INTERVIEWS_SHEET = "Interviews";
var ANALYSIS_SHEET = "AI_Analysis";
function scriptUrl() {
	const url = GOOGLE_SCRIPT_URL.trim();
	if (url === "") throw new Error("Falta configurar GOOGLE_SCRIPT_URL.");
	return url;
}
function sheetsSaveError(target) {
	const error = /* @__PURE__ */ new Error(`${SHEETS_SAVE_FAILED}: no se pudo guardar ${target} en Google Sheets.`);
	error.name = SHEETS_SAVE_FAILED;
	return error;
}
function sheetsReadError() {
	const error = /* @__PURE__ */ new Error(`${SHEETS_READ_FAILED}: no se pudo leer Google Sheets.`);
	error.name = SHEETS_READ_FAILED;
	return error;
}
function toAnswersMap(answers) {
	const map = {};
	for (const item of answers) map[String(item.questionNumber)] = item.answer;
	return map;
}
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isJsonContentType(contentType) {
	return typeof contentType === "string" && contentType.includes("application/json");
}
async function postToScript(payload, target) {
	const url = scriptUrl();
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
	let response;
	try {
		response = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
			redirect: "follow",
			signal: controller.signal
		});
	} catch {
		throw sheetsSaveError(target);
	} finally {
		clearTimeout(timeout);
	}
	if (!response.ok) throw sheetsSaveError(target);
	if (!isJsonContentType(response.headers.get("content-type"))) throw sheetsSaveError(target);
	const body = await response.json().catch(() => null);
	if (!isRecord(body)) throw sheetsSaveError(target);
	if (body.ok !== true && body.success !== true) throw sheetsSaveError(target);
}
async function saveInterview(interview) {
	await postToScript({
		type: "interview",
		id: interview.id,
		interviewer: interview.interviewer,
		businessName: interview.businessName ?? "",
		businessType: interview.businessType ?? "",
		location: interview.location ?? "",
		date: interview.date,
		status: interview.status,
		answers: toAnswersMap(interview.answers)
	}, "entrevista");
}
async function saveAnalysis(interviewId, rawJson) {
	await postToScript({
		type: "analysis",
		interviewId,
		model: OPENROUTER_MODEL,
		rawJson
	}, "análisis");
}
var STATUSES = [
	"draft",
	"completed",
	"analyzing",
	"analyzed",
	"error"
];
function readString(row, ...keys) {
	for (const key of keys) {
		const value = row[key];
		if (typeof value === "string" && value.trim() !== "") return value.trim();
		if (typeof value === "number" && Number.isFinite(value)) return String(value);
	}
	return "";
}
function readStatus(row) {
	const raw = readString(row, "status").toLowerCase();
	return STATUSES.includes(raw) ? raw : "completed";
}
/** Reconstruye las respuestas desde las columnas answer_1 ... answer_13. */
function readAnswers(row) {
	const answers = [];
	for (const [key, value] of Object.entries(row)) {
		const match = /^answer_?(\d+)$/i.exec(key);
		if (!match) continue;
		const text = typeof value === "string" ? value : "";
		if (text.trim() === "") continue;
		answers.push({
			questionNumber: Number(match[1]),
			answer: text
		});
	}
	return answers.sort((a, b) => a.questionNumber - b.questionNumber);
}
function toInterview(row) {
	const id = readString(row, "id", "interview_id", "interviewId");
	if (id === "") return null;
	const interview = {
		id,
		interviewer: readString(row, "interviewer", "entrevistador"),
		businessName: readString(row, "business_name", "businessName", "negocio"),
		businessType: readString(row, "business_type", "businessType", "tipo"),
		location: readString(row, "location", "ubicacion", "ubicación"),
		date: readString(row, "date", "fecha", "created_at"),
		answers: readAnswers(row),
		status: readStatus(row)
	};
	return interview.date === "" ? {
		...interview,
		date: (/* @__PURE__ */ new Date(0)).toISOString()
	} : interview;
}
async function getFromScript(sheet, id) {
	const url = new URL(scriptUrl());
	url.searchParams.set("sheet", sheet);
	if (id) url.searchParams.set("id", id);
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
	let response;
	try {
		response = await fetch(url, {
			method: "GET",
			redirect: "follow",
			signal: controller.signal
		});
	} catch {
		throw sheetsReadError();
	} finally {
		clearTimeout(timeout);
	}
	if (!response.ok) throw sheetsReadError();
	if (!isJsonContentType(response.headers.get("content-type"))) throw sheetsReadError();
	const body = await response.json().catch(() => null);
	if (!isRecord(body)) throw sheetsReadError();
	if (body.ok === false) throw sheetsReadError();
	if (!Array.isArray(body.data)) throw sheetsReadError();
	return body.data.filter(isRecord);
}
async function listInterviews() {
	return (await getFromScript(INTERVIEWS_SHEET)).map(toInterview).filter((interview) => interview !== null);
}
async function getInterviewById(id) {
	const rows = await getFromScript(INTERVIEWS_SHEET, id);
	for (const row of rows) {
		const interview = toInterview(row);
		if (interview && interview.id === id) return interview;
	}
	return null;
}
/**
* La fila de AI_Analysis guarda el analisis en raw_json (la respuesta exacta
* del modelo) y ademas unas columnas planas para poder leerla en la hoja. Si no
* esta raw_json, se usa la fila misma: compatible con el layout anterior.
*/
function analysisFromRow(row) {
	const { interview_id, interviewId, id, raw_json, rawJson, ...rest } = row;
	const raw = raw_json ?? rawJson;
	if (typeof raw === "string" && raw.trim() !== "") try {
		const analysis = normalizeStoredAnalysis(JSON.parse(raw));
		if (analysis) return analysis;
	} catch {}
	return normalizeStoredAnalysis(rest);
}
async function getAnalysisByInterviewId(interviewId) {
	const rows = await getFromScript(ANALYSIS_SHEET, interviewId);
	for (const row of rows) {
		const analysis = analysisFromRow(row);
		if (analysis) return analysis;
	}
	return null;
}
/**
* Respuestas de una entrevista ya guardada. Se usa unicamente cuando el
* interviewer pide ver la evidencia de un hallazgo: viaja al navegador, no se
* guarda y desaparece al recargar.
*/
async function getInterviewAnswers(interviewId) {
	const interview = await getInterviewById(interviewId);
	return interview ? interview.answers : [];
}
//#endregion
export { getInterviewById as a, saveInterview as c, getInterviewAnswers as i, parseAndValidateAnalysis as l, SHEETS_SAVE_FAILED as n, listInterviews as o, getAnalysisByInterviewId as r, saveAnalysis as s, SHEETS_READ_FAILED as t };
