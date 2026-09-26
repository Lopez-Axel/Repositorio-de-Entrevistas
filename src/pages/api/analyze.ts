import type { APIRoute } from "astro";
import { analyzeSavedInterview } from "../../lib/interviewWorkflow";

export const prerender = false;

const JSON_HEADERS = { "Content-Type": "application/json" };

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Opt-in: el navegador solo manda el id. Las respuestas se leen del servidor
 * desde Google Sheets, asi el analisis se puede pedir incluso despues de
 * recargar la pagina.
 */
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
  const interviewId = isRecord(body) ? body.interviewId : undefined;
  if (typeof interviewId !== "string" || interviewId.trim() === "") {
    return jsonResponse(
      { success: false, error: "Falta el interviewId." },
      400
    );
  }

  const result = await analyzeSavedInterview(interviewId.trim());
  if (!result.success) {
    return jsonResponse(
      {
        success: false,
        stage: result.stage,
        error: result.error,
      },
      result.stage === "read" ? 404 : 502
    );
  }
  return jsonResponse(
    { success: true, stage: result.stage, analysis: result.analysis },
    200
  );
};
