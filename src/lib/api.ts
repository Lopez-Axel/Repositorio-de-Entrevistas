import type {
  AIAnalysis,
  Interview,
  InterviewListItem,
} from "../types/interview";

/**
 * El navegador nunca guarda respuestas: solo pide cabeceras y analisis al
 * servidor, que a su vez los lee de Google Sheets.
 */

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

async function readError(response: Response, fallback: string): Promise<Error> {
  const body: unknown = await response.json().catch(() => null);
  if (isRecord(body) && typeof body.error === "string" && body.error) {
    return new Error(body.error);
  }
  return new Error(fallback);
}

export async function fetchInterviews(): Promise<InterviewListItem[]> {
  const response = await fetch("/api/interviews");
  if (!response.ok) {
    throw await readError(
      response,
      "No se pudieron cargar las entrevistas de Google Sheets."
    );
  }
  const body: unknown = await response.json();
  if (!isRecord(body) || !Array.isArray(body.interviews)) {
    throw new Error("La respuesta del servidor no es válida.");
  }
  return body.interviews as InterviewListItem[];
}

export async function fetchInterview(id: string): Promise<{
  interview: InterviewListItem;
  analysis: AIAnalysis | null;
}> {
  const response = await fetch(`/api/interviews/${encodeURIComponent(id)}`);
  if (!response.ok) {
    throw await readError(
      response,
      "No se pudo cargar la entrevista de Google Sheets."
    );
  }
  const body: unknown = await response.json();
  if (!isRecord(body) || !isRecord(body.interview)) {
    throw new Error("La respuesta del servidor no es válida.");
  }
  return {
    interview: body.interview as unknown as InterviewListItem,
    analysis: (body.analysis as AIAnalysis | null) ?? null,
  };
}

/** Paso 1: guarda la entrevista en Google Sheets. No llama a la IA. */
export async function saveInterview(interview: Interview): Promise<void> {
  const response = await fetch("/api/interviews", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...interview, status: "draft" }),
  });
  if (!response.ok) {
    throw await readError(
      response,
      "No se pudo guardar la entrevista en Google Sheets."
    );
  }
}

/** Paso 2 (opt-in): pide el analisis usando solo el id. */
export async function requestAnalysis(id: string): Promise<AIAnalysis> {
  const response = await fetch("/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ interviewId: id }),
  });
  if (!response.ok) {
    throw await readError(
      response,
      "No se pudo completar el análisis. La entrevista ya está guardada en Google Sheets."
    );
  }
  const body: unknown = await response.json();
  if (!isRecord(body) || !isRecord(body.analysis)) {
    throw new Error("El servidor no devolvió un análisis válido.");
  }
  return body.analysis as unknown as AIAnalysis;
}
