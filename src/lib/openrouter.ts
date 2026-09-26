import {
  OPENROUTER_API_KEY,
  OPENROUTER_MODEL,
  OPENROUTER_MODEL_FALLBACK,
} from "astro:env/server";
import type { Interview } from "../types/interview";
import { buildAnalysisPrompt } from "./prompts";

const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const REQUEST_TIMEOUT_MS = 120000;
const RETRY_BACKOFF_MS = [2000, 6000];

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

class OpenRouterError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "OpenRouterError";
    this.status = status;
  }
}

/**
 * 429 y 5xx valen otro intento con otro modelo; 400/401/403/404 son errores de
 * configuracion y reintentar solo gasta tiempo.
 */
function isTransient(error: unknown): boolean {
  if (error instanceof OpenRouterError) {
    return error.status === 429 || error.status >= 500;
  }
  // Timeout o fallo de red: transitorio.
  return true;
}

function extractContent(data: unknown): string {
  if (typeof data !== "object" || data === null) {
    throw new OpenRouterError("OpenRouter devolvió una respuesta inesperada.", 0);
  }
  const choices = (data as { choices?: unknown }).choices;
  if (!Array.isArray(choices) || choices.length === 0) {
    throw new OpenRouterError("OpenRouter devolvió una respuesta vacía.", 0);
  }
  const message = (choices[0] as { message?: unknown }).message;
  const content =
    typeof message === "object" && message !== null
      ? (message as { content?: unknown }).content
      : undefined;
  if (typeof content !== "string" || content.trim() === "") {
    throw new OpenRouterError("OpenRouter devolvió una respuesta vacía.", 0);
  }
  return content;
}

async function callOpenRouter(
  messages: ChatMessage[],
  model: string
): Promise<string> {
  const apiKey = OPENROUTER_API_KEY.trim();
  if (apiKey === "") {
    throw new OpenRouterError("Falta la variable OPENROUTER_API_KEY.", 401);
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch(OPENROUTER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model, messages }),
      signal: controller.signal,
    });
    if (!response.ok) {
      const detail = await response
        .text()
        .then((text) => text.slice(0, 200))
        .catch(() => "");
      throw new OpenRouterError(
        `OpenRouter respondió con estado HTTP ${response.status}${
          detail ? `: ${detail}` : ""
        }.`,
        response.status
      );
    }
    const data: unknown = await response.json();
    return extractContent(data);
  } catch (error) {
    if (error instanceof OpenRouterError) {
      throw error;
    }
    if (error instanceof Error && error.name === "AbortError") {
      throw new OpenRouterError(
        `OpenRouter no respondió en ${REQUEST_TIMEOUT_MS / 1000}s.`,
        408
      );
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

/** Modelos a probar, en orden. OPENROUTER_MODEL es el principal. */
export function modelChain(): string[] {
  const configured = [OPENROUTER_MODEL, OPENROUTER_MODEL_FALLBACK]
    .flatMap((value) => (value ?? "").split(","))
    .map((model) => model.trim())
    .filter((model) => model !== "");
  return [...new Set(configured)];
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function openRouterChat(messages: ChatMessage[]): Promise<string> {
  const models = modelChain();
  if (models.length === 0) {
    throw new Error("Falta configurar OPENROUTER_MODEL.");
  }
  const failures: string[] = [];
  for (const model of models) {
    for (let attempt = 0; attempt <= RETRY_BACKOFF_MS.length; attempt++) {
      try {
        return await callOpenRouter(messages, model);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "error desconocido";
        if (!isTransient(error)) {
          // Error de configuracion: no tiene sentido seguir con otro modelo.
          throw error;
        }
        failures.push(`${model}: ${message}`);
        const backoff = RETRY_BACKOFF_MS[attempt];
        if (backoff !== undefined) {
          await wait(backoff);
        }
      }
    }
  }
  throw new Error(
    `No se pudo completar la consulta a la IA. ${failures.join(" | ")}`
  );
}

export async function analyzeInterview(interview: Interview): Promise<string> {
  return openRouterChat([
    { role: "system", content: buildAnalysisPrompt(interview) },
    {
      role: "user",
      content: "Realiza el análisis de la entrevista. Devuelve únicamente el JSON.",
    },
  ]);
}
