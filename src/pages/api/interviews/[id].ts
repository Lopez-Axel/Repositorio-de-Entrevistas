import type { APIRoute } from "astro";
import type { InterviewListItem } from "../../../types/interview";
import { SHEETS_READ_FAILED, getAnalysisByInterviewId, getInterviewById } from "../../../lib/googleSheets";

export const prerender = false;

const JSON_HEADERS = { "Content-Type": "application/json" };

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

export const GET: APIRoute = async ({ params }) => {
  const id = params.id;
  if (!id) {
    return jsonResponse(
      { success: false, error: "Falta el id de la entrevista." },
      400
    );
  }
  try {
    const interview = await getInterviewById(id);
    if (!interview) {
      return jsonResponse(
        { success: false, error: "La entrevista no existe en Google Sheets." },
        404
      );
    }
    const analysis = await getAnalysisByInterviewId(id);
    const header: InterviewListItem = {
      id: interview.id,
      interviewer: interview.interviewer,
      businessName: interview.businessName ?? "",
      businessType: interview.businessType ?? "",
      location: interview.location ?? "",
      date: interview.date,
      status: analysis ? "analyzed" : interview.status,
      hasAnalysis: analysis !== null,
    };
    return jsonResponse(
      { success: true, interview: header, analysis },
      200
    );
  } catch (error) {
    const failed = error instanceof Error && error.name === SHEETS_READ_FAILED;
    return jsonResponse(
      {
        success: false,
        error: failed
          ? "No se pudo leer la entrevista de Google Sheets."
          : "Error inesperado al leer la entrevista.",
      },
      failed ? 502 : 500
    );
  }
};
