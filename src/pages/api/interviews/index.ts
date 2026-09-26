import type { APIRoute } from "astro";
import type { AIAnalysis, Interview, InterviewListItem } from "../../../types/interview";
import { SHEETS_READ_FAILED, getAnalysisByInterviewId, listInterviews } from "../../../lib/googleSheets";
import { saveInterviewToSheets } from "../../../lib/interviewWorkflow";

export const prerender = false;

const JSON_HEADERS = { "Content-Type": "application/json" };

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isInterviewCandidate(value: unknown): value is Partial<Interview> {
  if (!isRecord(value)) {
    return false;
  }
  return (
    typeof value.id === "string" &&
    typeof value.interviewer === "string" &&
    typeof value.date === "string" &&
    Array.isArray(value.answers)
  );
}

/**
 * Sin respuestas: el listado solo trae la cabecera y si ya fue analizada.
 * Las respuestas unicamente viven en Google Sheets.
 */
function toListItem(interview: Interview, analysis: AIAnalysis | null): InterviewListItem {
  return {
    id: interview.id,
    interviewer: interview.interviewer,
    businessName: interview.businessName ?? "",
    businessType: interview.businessType ?? "",
    location: interview.location ?? "",
    date: interview.date,
    status: analysis ? "analyzed" : interview.status,
    hasAnalysis: analysis !== null,
  };
}

export const POST: APIRoute = async ({ request }) => {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse(
      { success: false, error: "El cuerpo de la solicitud no es un JSON válido." },
      400
    );
  }
  if (!isInterviewCandidate(body)) {
    return jsonResponse(
      {
        success: false,
        error: "Faltan campos obligatorios: id, interviewer, date, answers.",
      },
      400
    );
  }
  const result = await saveInterviewToSheets({
    ...(body as Interview),
    status: "draft",
  });
  if (!result.success) {
    return jsonResponse(
      {
        success: false,
        stage: result.stage,
        error: result.error,
      },
      502
    );
  }
  return jsonResponse(
    {
      success: true,
      stage: result.stage,
      status: result.interview.status,
      savedInSheets: true,
    },
    200
  );
};

export const GET: APIRoute = async () => {
  try {
    const interviews = await listInterviews();
    const items = await Promise.all(
      interviews.map(async (interview) =>
        toListItem(interview, await getAnalysisByInterviewId(interview.id))
      )
    );
    items.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return jsonResponse({ success: true, interviews: items }, 200);
  } catch (error) {
    const failed = error instanceof Error && error.name === SHEETS_READ_FAILED;
    return jsonResponse(
      {
        success: false,
        error: failed
          ? "No se pudieron leer las entrevistas de Google Sheets."
          : "Error inesperado al leer las entrevistas.",
      },
      failed ? 502 : 500
    );
  }
};
