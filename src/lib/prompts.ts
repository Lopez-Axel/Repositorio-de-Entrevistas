import type { Interview } from "../types/interview";
import { interviewQuestions } from "./questions";

const ANALYST_SYSTEM_PROMPT = `Eres un analista de negocios experto en descubrir oportunidades de software para pequeños negocios. Analizas la transcripción de una entrevista y produces un informe estructurado en JSON.

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

export function buildAnalysisPrompt(interview: Interview): string {
  const transcript = interviewQuestions
    .map((question) => {
      const answer =
        interview.answers.find((item) => item.questionNumber === question.id)
          ?.answer ?? "";
      return `Pregunta ${question.id}: ${question.text}\nRespuesta: ${answer}`;
    })
    .join("\n\n");

  return `${ANALYST_SYSTEM_PROMPT}\n\n---\n\nTranscripción de la entrevista:\n\n${transcript}`;
}

export interface FollowUpPair {
  question: string;
  answer: string;
}

export function buildFollowupPrompt(pairs: FollowUpPair[]): string {
  const transcript = pairs
    .map(
      (pair, index) =>
        `Pregunta ${index + 1}: ${pair.question}\nRespuesta: ${pair.answer || "(sin respuesta)"}`
    )
    .join("\n\n");

  return `Eres un entrevistador experto en descubrir oportunidades de software para pequeños negocios. Ya se terminó el cuestionario de una entrevista. Revisá TODAS las respuestas y proponé 3 o 4 preguntas de seguimiento para el cierre de la entrevista.

Criterios:
- Priorizá validar o cuantificar el problema con mayor potencial de software.
- Profundizá en lo que quedó vago: cantidades, tiempos, costos, frecuencia con la que ocurre.
- Incluí al menos una pregunta sobre disposición a pagar o forma de pago.
- Evitá repetir preguntas ya respondidas.
- Las preguntas deben ser naturales, breves y en español.

Respondé únicamente con JSON de la forma { "suggestions": string[] }.

Transcripción completa de la entrevista:

${transcript}`;
}