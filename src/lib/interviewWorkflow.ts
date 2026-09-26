import type { AIAnalysis, Interview } from "../types/interview";
import { SHEETS_SAVE_FAILED, getInterviewById, saveAnalysis, saveInterview } from "./googleSheets";
import { analyzeInterview } from "./openrouter";
import { parseAndValidateAnalysis } from "./validation";

export type Stage = "read" | "save" | "analysis";

export interface FlowSuccess {
  success: true;
  stage: "saved" | "analyzed";
  interview: Interview;
  analysis?: AIAnalysis;
}

export interface FlowFailure {
  success: false;
  stage: Stage;
  error: string;
  interview?: Interview;
}

export type FlowResult = FlowSuccess | FlowFailure;

const ANALYSIS_FALLBACK =
  "No se pudo completar el análisis. La entrevista ya está guardada en Google Sheets.";

const SAVE_FALLBACK = "No se pudo guardar la entrevista en Google Sheets.";

function describeError(error: unknown, fallback: string): string {
  if (!(error instanceof Error) || !error.message) {
    return fallback;
  }
  // Los errores de Sheets llegan con el prefijo interno: nunca se muestra.
  if (error.name === SHEETS_SAVE_FAILED) {
    return SAVE_FALLBACK;
  }
  if (error.message.startsWith(`${SHEETS_SAVE_FAILED}:`)) {
    return SAVE_FALLBACK;
  }
  if (error.message === "invalid_json") {
    return "El análisis devuelto por la IA no es un JSON válido.";
  }
  if (error.message === "invalid_structure") {
    return "El análisis devuelto por la IA no tiene la estructura esperada.";
  }
  return error.message;
}

async function pushInterview(interview: Interview): Promise<FlowResult> {
  const completed: Interview = { ...interview, status: "completed" };
  try {
    await saveInterview(completed);
  } catch (error) {
    return {
      success: false,
      stage: "save",
      error: describeError(
        error,
        "No se pudo guardar la entrevista en Google Sheets."
      ),
      interview: { ...completed, status: "error" },
    };
  }
  return { success: true, stage: "saved", interview: completed };
}

/**
 * Paso 1 (por defecto): guarda la entrevista en Google Sheets. No llama a la IA.
 */
export async function saveInterviewToSheets(
  interview: Interview
): Promise<FlowResult> {
  return pushInterview(interview);
}

/**
 * Paso 2 (opt-in): lee la entrevista desde Google Sheets, asegura el guardado y
 * recién entonces llama a OpenRouter y guarda el análisis. El navegador solo
 * manda el id: las respuestas nunca salen de Sheets.
 */
export async function analyzeSavedInterview(
  interviewId: string
): Promise<FlowResult> {
  let interview: Interview;
  try {
    const found = await getInterviewById(interviewId);
    if (!found) {
      return {
        success: false,
        stage: "read",
        error: "La entrevista no existe en Google Sheets.",
      };
    }
    interview = found;
  } catch {
    return {
      success: false,
      stage: "read",
      error: "No se pudo leer la entrevista de Google Sheets.",
    };
  }

  const saved = await pushInterview(interview);
  if (!saved.success) {
    return saved;
  }
  const completed = saved.interview;
  const analyzing: Interview = { ...completed, status: "analyzing" };
  try {
    const raw = await analyzeInterview(analyzing);
    const analysis = parseAndValidateAnalysis(raw);
    // Se guarda la respuesta EXACTA del modelo: si el prompt suma campos mas
    // adelante, ya quedan en la hoja sin volver a correr nada.
    await saveAnalysis(analyzing.id, raw);
    return {
      success: true,
      stage: "analyzed",
      interview: { ...analyzing, status: "analyzed", aiAnalysis: analysis },
      analysis,
    };
  } catch (error) {
    return {
      success: false,
      stage: "analysis",
      error: describeError(error, ANALYSIS_FALLBACK),
      interview: { ...analyzing, status: "error" },
    };
  }
}
