import type { APIRoute } from "astro";
import { openRouterChat } from "../../lib/openrouter";
import { buildFollowupPrompt } from "../../lib/prompts";

export const prerender = false;

const MAX_PAIRS = 20;

const JSON_HEADERS = { "Content-Type": "application/json" };

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parsePairs(value: unknown): { question: string; answer: string }[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .filter(isRecord)
    .map((item) => ({
      question: typeof item.question === "string" ? item.question : "",
      answer: typeof item.answer === "string" ? item.answer : "",
    }))
    .filter((pair) => pair.question.trim() !== "")
    .slice(0, MAX_PAIRS);
}

function parseSuggestions(raw: string): string[] {
  const cleaned = raw
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();
  let parsed: unknown;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    throw new Error("La IA no devolvió un JSON válido.");
  }
  if (!isRecord(parsed) || !Array.isArray(parsed.suggestions)) {
    throw new Error("La IA no devolvió sugerencias válidas.");
  }
  return (parsed.suggestions as unknown[])
    .filter((item): item is string => typeof item === "string" && item.trim() !== "")
    .slice(0, 5);
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
  const payload = isRecord(body) ? body : {};
  const pairs = parsePairs(payload.pairs);
  if (pairs.length === 0) {
    return jsonResponse(
      { success: false, error: "Faltan las respuestas de la entrevista (pairs)." },
      400
    );
  }
  try {
    const raw = await openRouterChat([
      { role: "system", content: buildFollowupPrompt(pairs) },
      {
        role: "user",
        content:
          "Generá las sugerencias de cierre. Devolvé únicamente el JSON.",
      },
    ]);
    const suggestions = parseSuggestions(raw);
    return jsonResponse({ success: true, suggestions }, 200);
  } catch (error) {
    const message =
      error instanceof Error && error.message
        ? error.message
        : "No se pudieron generar las sugerencias.";
    return jsonResponse({ success: false, error: message }, 500);
  }
};
