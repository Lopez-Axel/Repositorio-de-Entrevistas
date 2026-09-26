import type { APIRoute } from "astro";
import { interviewQuestions } from "../../../../lib/questions";
import { SHEETS_READ_FAILED, getInterviewAnswers } from "../../../../lib/googleSheets";

export const prerender = false;

const JSON_HEADERS = { "Content-Type": "application/json" };

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

/**
 * Opt-in y explicito: se usa unicamente cuando el interviewer pide ver la
 * respuesta que respalda un hallazgo. Las respuestas no se guardan en el
 * navegador, solo se muestran en un dialogo y desaparecen al recargar.
 */
export const GET: APIRoute = async ({ params }) => {
  const id = params.id;
  if (!id) {
    return jsonResponse(
      { success: false, error: "Falta el id de la entrevista." },
      400
    );
  }
  try {
    const answers = await getInterviewAnswers(id);
    if (answers.length === 0) {
      return jsonResponse(
        {
          success: false,
          error: "La entrevista no tiene respuestas guardadas en Google Sheets.",
        },
        404
      );
    }
    return jsonResponse(
      {
        success: true,
        answers: interviewQuestions.map((question) => {
          const found = answers.find(
            (item) => item.questionNumber === question.id
          );
          return {
            questionNumber: question.id,
            question: question.text,
            answer: found?.answer ?? "",
          };
        }),
      },
      200
    );
  } catch (error) {
    const failed = error instanceof Error && error.name === SHEETS_READ_FAILED;
    return jsonResponse(
      {
        success: false,
        error: failed
          ? "No se pudieron leer las respuestas de Google Sheets."
          : "Error inesperado al leer las respuestas.",
      },
      failed ? 502 : 500
    );
  }
};
