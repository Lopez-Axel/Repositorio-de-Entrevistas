import { GOOGLE_SCRIPT_URL, OPENROUTER_MODEL } from "astro:env/server";
import type { AIAnalysis, Interview, InterviewAnswer, InterviewStatus } from "../types/interview";
import { normalizeStoredAnalysis } from "./validation";

const REQUEST_TIMEOUT_MS = 20000;
export const SHEETS_SAVE_FAILED = "sheets_save_failed";
export const SHEETS_READ_FAILED = "sheets_read_failed";

export const INTERVIEWS_SHEET = "Interviews";
export const ANALYSIS_SHEET = "AI_Analysis";

function scriptUrl(): string {
  const url = GOOGLE_SCRIPT_URL.trim();
  if (url === "") {
    throw new Error("Falta configurar GOOGLE_SCRIPT_URL.");
  }
  return url;
}

function sheetsSaveError(target: "entrevista" | "análisis"): Error {
  const error = new Error(
    `${SHEETS_SAVE_FAILED}: no se pudo guardar ${target} en Google Sheets.`
  );
  error.name = SHEETS_SAVE_FAILED;
  return error;
}

function sheetsReadError(): Error {
  const error = new Error(
    `${SHEETS_READ_FAILED}: no se pudo leer Google Sheets.`
  );
  error.name = SHEETS_READ_FAILED;
  return error;
}

function toAnswersMap(
  answers: Interview["answers"]
): Record<string, string> {
  const map: Record<string, string> = {};
  for (const item of answers) {
    map[String(item.questionNumber)] = item.answer;
  }
  return map;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isJsonContentType(contentType: string | null): boolean {
  return typeof contentType === "string" && contentType.includes("application/json");
}

async function postToScript(
  payload: Record<string, unknown>,
  target: "entrevista" | "análisis"
): Promise<void> {
  const url = scriptUrl();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
      signal: controller.signal,
    });
  } catch {
    throw sheetsSaveError(target);
  } finally {
    clearTimeout(timeout);
  }
  if (!response.ok) {
    throw sheetsSaveError(target);
  }
  // Si el despliegue exige iniciar sesion con Google, Apps Script responde con
  // un HTML de login en lugar de JSON: hay que tratarlo como fallo, no como OK.
  if (!isJsonContentType(response.headers.get("content-type"))) {
    throw sheetsSaveError(target);
  }
  const body: unknown = await response.json().catch(() => null);
  if (!isRecord(body)) {
    throw sheetsSaveError(target);
  }
  // Contrato actual: { ok: true }. Se tolera { success: true } por si el
  // despliegue todavia usa el doPost viejo.
  if (body.ok !== true && body.success !== true) {
    throw sheetsSaveError(target);
  }
}

export async function saveInterview(interview: Interview): Promise<void> {
  await postToScript(
    {
      type: "interview",
      id: interview.id,
      interviewer: interview.interviewer,
      businessName: interview.businessName ?? "",
      businessType: interview.businessType ?? "",
      location: interview.location ?? "",
      date: interview.date,
      status: interview.status,
      answers: toAnswersMap(interview.answers),
    },
    "entrevista"
  );
}

export async function saveAnalysis(
  interviewId: string,
  rawJson: string
): Promise<void> {
  await postToScript(
    { type: "analysis", interviewId, model: OPENROUTER_MODEL, rawJson },
    "análisis"
  );
}

const STATUSES: InterviewStatus[] = [
  "draft",
  "completed",
  "analyzing",
  "analyzed",
  "error",
];

function readString(
  row: Record<string, unknown>,
  ...keys: string[]
): string {
  for (const key of keys) {
    const value = row[key];
    if (typeof value === "string" && value.trim() !== "") {
      return value.trim();
    }
    if (typeof value === "number" && Number.isFinite(value)) {
      return String(value);
    }
  }
  return "";
}

function readStatus(row: Record<string, unknown>): InterviewStatus {
  const raw = readString(row, "status").toLowerCase();
  return STATUSES.includes(raw as InterviewStatus)
    ? (raw as InterviewStatus)
    : "completed";
}

/** Reconstruye las respuestas desde las columnas answer_1 ... answer_13. */
function readAnswers(row: Record<string, unknown>): InterviewAnswer[] {
  const answers: InterviewAnswer[] = [];
  for (const [key, value] of Object.entries(row)) {
    const match = /^answer_?(\d+)$/i.exec(key);
    if (!match) continue;
    const text = typeof value === "string" ? value : "";
    if (text.trim() === "") continue;
    answers.push({ questionNumber: Number(match[1]), answer: text });
  }
  return answers.sort((a, b) => a.questionNumber - b.questionNumber);
}

function toInterview(row: Record<string, unknown>): Interview | null {
  const id = readString(row, "id", "interview_id", "interviewId");
  if (id === "") return null;
  const interview: Interview = {
    id,
    interviewer: readString(row, "interviewer", "entrevistador"),
    businessName: readString(row, "business_name", "businessName", "negocio"),
    businessType: readString(row, "business_type", "businessType", "tipo"),
    location: readString(row, "location", "ubicacion", "ubicación"),
    date: readString(row, "date", "fecha", "created_at"),
    answers: readAnswers(row),
    status: readStatus(row),
  };
  return interview.date === "" ? { ...interview, date: new Date(0).toISOString() } : interview;
}

async function getFromScript(
  sheet: string,
  id?: string
): Promise<Record<string, unknown>[]> {
  const url = new URL(scriptUrl());
  url.searchParams.set("sheet", sheet);
  if (id) {
    url.searchParams.set("id", id);
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  let response: Response;
  try {
    response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
    });
  } catch {
    throw sheetsReadError();
  } finally {
    clearTimeout(timeout);
  }
  if (!response.ok) {
    throw sheetsReadError();
  }
  if (!isJsonContentType(response.headers.get("content-type"))) {
    throw sheetsReadError();
  }
  const body: unknown = await response.json().catch(() => null);
  if (!isRecord(body)) {
    throw sheetsReadError();
  }
  // Se acepta tanto { ok: true, data: [...] } como { data: [...] } para no
  // romper si el doGet todavia no devuelve el flag.
  if (body.ok === false) {
    throw sheetsReadError();
  }
  if (!Array.isArray(body.data)) {
    throw sheetsReadError();
  }
  return body.data.filter(isRecord);
}

export async function listInterviews(): Promise<Interview[]> {
  const rows = await getFromScript(INTERVIEWS_SHEET);
  return rows
    .map(toInterview)
    .filter((interview): interview is Interview => interview !== null);
}

export async function getInterviewById(
  id: string
): Promise<Interview | null> {
  const rows = await getFromScript(INTERVIEWS_SHEET, id);
  for (const row of rows) {
    const interview = toInterview(row);
    if (interview && interview.id === id) {
      return interview;
    }
  }
  return null;
}

/**
 * La fila de AI_Analysis guarda el analisis en raw_json (la respuesta exacta
 * del modelo) y ademas unas columnas planas para poder leerla en la hoja. Si no
 * esta raw_json, se usa la fila misma: compatible con el layout anterior.
 */
function analysisFromRow(row: Record<string, unknown>): AIAnalysis | null {
  const { interview_id, interviewId, id, raw_json, rawJson, ...rest } = row;
  void id;
  void interview_id;
  void interviewId;
  const raw = raw_json ?? rawJson;
  if (typeof raw === "string" && raw.trim() !== "") {
    try {
      const parsed: unknown = JSON.parse(raw);
      const analysis = normalizeStoredAnalysis(parsed);
      if (analysis) {
        return analysis;
      }
    } catch {
      // Cae al layout plano de abajo.
    }
  }
  return normalizeStoredAnalysis(rest);
}

export async function getAnalysisByInterviewId(
  interviewId: string
): Promise<AIAnalysis | null> {
  const rows = await getFromScript(ANALYSIS_SHEET, interviewId);
  for (const row of rows) {
    const analysis = analysisFromRow(row);
    if (analysis) {
      return analysis;
    }
  }
  return null;
}

/**
 * Respuestas de una entrevista ya guardada. Se usa unicamente cuando el
 * interviewer pide ver la evidencia de un hallazgo: viaja al navegador, no se
 * guarda y desaparece al recargar.
 */
export async function getInterviewAnswers(
  interviewId: string
): Promise<InterviewAnswer[]> {
  const interview = await getInterviewById(interviewId);
  return interview ? interview.answers : [];
}
