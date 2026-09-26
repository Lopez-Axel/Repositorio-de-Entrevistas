import { i as OPENROUTER_MODEL_FALLBACK, n as OPENROUTER_API_KEY, r as OPENROUTER_MODEL } from "./server_tVmon0oh.mjs";
import { t as interviewQuestions } from "./questions_Bxb1s2Em.mjs";
//#region src/lib/prompts.ts
var ANALYST_SYSTEM_PROMPT = `Eres un analista de negocios experto en descubrir oportunidades de software para pequeños negocios. Analizas la transcripción de una entrevista y produces un informe estructurado en JSON.

Esquema JSON requerido:
{
  "businessSummary": "resumen del negocio",
  "mainProblems": [{ "description": "problema", "questionNumber": 3, "evidence": "cita textual o null", "mentioned": true, "evidenceType": "explicit | inference | opportunity", "confidence": "high | medium | low" }],
  "mainPainPoint": "principal dolor del negocio",
  "confidence": "high | medium | low",
  "manualTasks": [{ "description": "tarea manual", "questionNumber": 4, "evidence": "cita o null", "mentioned": true, "evidenceType": "...", "confidence": "..." }],
  "currentTools": [{ "description": "herramienta actual", "questionNumber": 6, "evidence": "cita o null", "mentioned": true, "evidenceType": "...", "confidence": "..." }],
  "techBarriers": [{ "description": "barrera tecnológica", "questionNumber": 7, "evidence": "cita o null", "mentioned": true, "evidenceType": "...", "confidence": "..." }],
  "detectedNeeds": [{ "description": "necesidad detectada", "questionNumber": 5, "evidence": "cita o null", "mentioned": true, "evidenceType": "...", "confidence": "..." }],
  "expectedValue": [{ "description": "valor esperado", "questionNumber": 9, "evidence": "cita o null", "mentioned": true, "evidenceType": "...", "confidence": "..." }],
  "preferredPaymentModel": "modelo de pago preferido o cadena vacía si no se mencionó",
  "opportunities": [{ "name": "oportunidad", "problem": "problema que resuelve", "reason": "por qué aparece", "features": ["funcionalidad"], "questionNumber": 8, "evidence": "cita o null", "mentioned": true, "evidenceType": "...", "confidence": "..." }],
  "willingnessToPay": { "mentioned": true, "level": "high | medium | low | unknown", "questionNumber": 12, "evidence": "cita o null" },
  "recommendations": ["recomendación"]
}

Reglas:
- Distingue hechos explícitos ("explicit"), inferencias razonadas ("inference") y oportunidades de software ("opportunity").
- NO inventes información. Si el entrevistado no mencionó un dato, usa "mentioned": false y "evidence": null. No completes ausencias por contexto.
- "questionNumber" es el número de la pregunta (1 a 12) que sostiene el hallazgo. Poné el número solo si la respuesta lo menciona; si el hallazgo se deduce de varias respuestas o de ninguna en particular, usá null. No adivines ni inventes números.
- Si el entrevistado no habló de disposición a pagar, usa "willingnessToPay": { "mentioned": false }.
- Una sección sin datos debe devolverse como array vacío.
- Responde únicamente con el JSON, sin texto adicional ni bloques de markdown.`;
function buildAnalysisPrompt(interview) {
	return `${ANALYST_SYSTEM_PROMPT}\n\n---\n\nTranscripción de la entrevista:\n\n${interviewQuestions.map((question) => {
		const answer = interview.answers.find((item) => item.questionNumber === question.id)?.answer ?? "";
		return `Pregunta ${question.id}: ${question.text}\nRespuesta: ${answer}`;
	}).join("\n\n")}`;
}
function buildFollowupPrompt(pairs) {
	return `Eres un entrevistador experto en descubrir oportunidades de software para pequeños negocios. Ya se terminó el cuestionario de una entrevista. Revisá TODAS las respuestas y proponé 3 o 4 preguntas de seguimiento para el cierre de la entrevista.

Criterios:
- Priorizá validar o cuantificar el problema con mayor potencial de software.
- Profundizá en lo que quedó vago: cantidades, tiempos, costos, frecuencia con la que ocurre.
- Incluí al menos una pregunta sobre disposición a pagar o forma de pago.
- Evitá repetir preguntas ya respondidas.
- Las preguntas deben ser naturales, breves y en español.

Respondé únicamente con JSON de la forma { "suggestions": string[] }.

Transcripción completa de la entrevista:

${pairs.map((pair, index) => `Pregunta ${index + 1}: ${pair.question}\nRespuesta: ${pair.answer || "(sin respuesta)"}`).join("\n\n")}`;
}
//#endregion
//#region src/lib/openrouter.ts
var OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
var REQUEST_TIMEOUT_MS = 12e4;
var RETRY_BACKOFF_MS = [2e3, 6e3];
var OpenRouterError = class extends Error {
	status;
	constructor(message, status) {
		super(message);
		this.name = "OpenRouterError";
		this.status = status;
	}
};
/**
* 429 y 5xx valen otro intento con otro modelo; 400/401/403/404 son errores de
* configuracion y reintentar solo gasta tiempo.
*/
function isTransient(error) {
	if (error instanceof OpenRouterError) return error.status === 429 || error.status >= 500;
	return true;
}
function extractContent(data) {
	if (typeof data !== "object" || data === null) throw new OpenRouterError("OpenRouter devolvió una respuesta inesperada.", 0);
	const choices = data.choices;
	if (!Array.isArray(choices) || choices.length === 0) throw new OpenRouterError("OpenRouter devolvió una respuesta vacía.", 0);
	const message = choices[0].message;
	const content = typeof message === "object" && message !== null ? message.content : void 0;
	if (typeof content !== "string" || content.trim() === "") throw new OpenRouterError("OpenRouter devolvió una respuesta vacía.", 0);
	return content;
}
async function callOpenRouter(messages, model) {
	const apiKey = OPENROUTER_API_KEY.trim();
	if (apiKey === "") throw new OpenRouterError("Falta la variable OPENROUTER_API_KEY.", 401);
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
	try {
		const response = await fetch(OPENROUTER_ENDPOINT, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model,
				messages
			}),
			signal: controller.signal
		});
		if (!response.ok) {
			const detail = await response.text().then((text) => text.slice(0, 200)).catch(() => "");
			throw new OpenRouterError(`OpenRouter respondió con estado HTTP ${response.status}${detail ? `: ${detail}` : ""}.`, response.status);
		}
		return extractContent(await response.json());
	} catch (error) {
		if (error instanceof OpenRouterError) throw error;
		if (error instanceof Error && error.name === "AbortError") throw new OpenRouterError(`OpenRouter no respondió en ${REQUEST_TIMEOUT_MS / 1e3}s.`, 408);
		throw error;
	} finally {
		clearTimeout(timeout);
	}
}
/** Modelos a probar, en orden. OPENROUTER_MODEL es el principal. */
function modelChain() {
	const configured = [OPENROUTER_MODEL, OPENROUTER_MODEL_FALLBACK].flatMap((value) => (value ?? "").split(",")).map((model) => model.trim()).filter((model) => model !== "");
	return [...new Set(configured)];
}
function wait(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
async function openRouterChat(messages) {
	const models = modelChain();
	if (models.length === 0) throw new Error("Falta configurar OPENROUTER_MODEL.");
	const failures = [];
	for (const model of models) for (let attempt = 0; attempt <= RETRY_BACKOFF_MS.length; attempt++) try {
		return await callOpenRouter(messages, model);
	} catch (error) {
		const message = error instanceof Error ? error.message : "error desconocido";
		if (!isTransient(error)) throw error;
		failures.push(`${model}: ${message}`);
		const backoff = RETRY_BACKOFF_MS[attempt];
		if (backoff !== void 0) await wait(backoff);
	}
	throw new Error(`No se pudo completar la consulta a la IA. ${failures.join(" | ")}`);
}
async function analyzeInterview(interview) {
	return openRouterChat([{
		role: "system",
		content: buildAnalysisPrompt(interview)
	}, {
		role: "user",
		content: "Realiza el análisis de la entrevista. Devuelve únicamente el JSON."
	}]);
}
//#endregion
export { openRouterChat as n, buildFollowupPrompt as r, analyzeInterview as t };
