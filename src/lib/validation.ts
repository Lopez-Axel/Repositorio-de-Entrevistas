import type {
  AIAnalysis,
  AnalysisItem,
  ConfidenceLevel,
  EvidenceType,
  SoftwareOpportunity,
  WillingnessToPay,
} from "../types/interview";

const CONFIDENCE_VALUES: ConfidenceLevel[] = ["high", "medium", "low"];
const EVIDENCE_TYPES: EvidenceType[] = ["explicit", "inference", "opportunity"];
const WTP_LEVELS: WillingnessToPay["level"][] = ["high", "medium", "low", "unknown"];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isConfidence(value: unknown): value is ConfidenceLevel {
  return (
    typeof value === "string" &&
    (CONFIDENCE_VALUES as string[]).includes(value)
  );
}

/** Numero de pregunta (1-12) o null. Nunca se inventa ni se adivina. */
function normalizeQuestionNumber(value: unknown): number | null {
  const parsed = typeof value === "string" ? Number(value) : value;
  if (typeof parsed !== "number" || !Number.isInteger(parsed)) {
    return null;
  }
  return parsed >= 1 && parsed <= 12 ? parsed : null;
}

function normalizeAnalysisItem(value: unknown): AnalysisItem {
  if (!isRecord(value)) {
    return {
      description: "",
      evidence: null,
      mentioned: false,
      evidenceType: "inference",
      confidence: "medium",
    };
  }
  return {
    description: typeof value.description === "string" ? value.description : "",
    questionNumber: normalizeQuestionNumber(value.questionNumber),
    evidence: typeof value.evidence === "string" ? value.evidence : null,
    mentioned: typeof value.mentioned === "boolean" ? value.mentioned : false,
    evidenceType: (EVIDENCE_TYPES as string[]).includes(value.evidenceType as string)
      ? (value.evidenceType as EvidenceType)
      : "inference",
    confidence: isConfidence(value.confidence) ? value.confidence : "medium",
  };
}

function normalizeItems(value: unknown): AnalysisItem[] {
  return Array.isArray(value) ? value.map(normalizeAnalysisItem) : [];
}

function normalizeSoftwareOpportunity(value: unknown): SoftwareOpportunity {
  if (!isRecord(value)) {
    return {
      name: "",
      problem: "",
      reason: "",
      features: [],
      evidence: null,
      mentioned: false,
      evidenceType: "opportunity",
      confidence: "medium",
    };
  }
  return {
    name: typeof value.name === "string" ? value.name : "",
    problem: typeof value.problem === "string" ? value.problem : "",
    reason: typeof value.reason === "string" ? value.reason : "",
    features: Array.isArray(value.features)
      ? value.features.filter((item): item is string => typeof item === "string")
      : [],
    questionNumber: normalizeQuestionNumber(value.questionNumber),
    evidence: typeof value.evidence === "string" ? value.evidence : null,
    mentioned: typeof value.mentioned === "boolean" ? value.mentioned : false,
    evidenceType: (EVIDENCE_TYPES as string[]).includes(value.evidenceType as string)
      ? (value.evidenceType as EvidenceType)
      : "opportunity",
    confidence: isConfidence(value.confidence) ? value.confidence : "medium",
  };
}

function normalizeWillingnessToPay(value: unknown): WillingnessToPay {
  if (!isRecord(value)) {
    return { mentioned: false };
  }
  return {
    mentioned: typeof value.mentioned === "boolean" ? value.mentioned : false,
    level:
      typeof value.level === "string" &&
      (WTP_LEVELS as string[]).includes(value.level)
        ? (value.level as WillingnessToPay["level"])
        : undefined,
    questionNumber: normalizeQuestionNumber(value.questionNumber),
    evidence: typeof value.evidence === "string" ? value.evidence : null,
  };
}

function invalidStructure(): never {
  throw new Error("invalid_structure");
}

function buildAnalysis(parsed: Record<string, unknown>): AIAnalysis {
  const { businessSummary, mainProblems, mainPainPoint, confidence } = parsed;
  if (
    typeof businessSummary !== "string" ||
    businessSummary.trim() === "" ||
    !Array.isArray(mainProblems) ||
    typeof mainPainPoint !== "string" ||
    mainPainPoint.trim() === "" ||
    !isConfidence(confidence)
  ) {
    invalidStructure();
  }
  return {
    businessSummary,
    mainProblems: mainProblems.map(normalizeAnalysisItem),
    mainPainPoint,
    confidence,
    manualTasks: normalizeItems(parsed.manualTasks),
    currentTools: normalizeItems(parsed.currentTools),
    techBarriers: normalizeItems(parsed.techBarriers),
    detectedNeeds: normalizeItems(parsed.detectedNeeds),
    expectedValue: normalizeItems(parsed.expectedValue),
    preferredPaymentModel:
      typeof parsed.preferredPaymentModel === "string"
        ? parsed.preferredPaymentModel
        : "",
    opportunities: Array.isArray(parsed.opportunities)
      ? parsed.opportunities.map(normalizeSoftwareOpportunity)
      : [],
    willingnessToPay: normalizeWillingnessToPay(parsed.willingnessToPay),
    recommendations: Array.isArray(parsed.recommendations)
      ? parsed.recommendations.filter((item): item is string => typeof item === "string")
      : [],
  };
}

/** Si una celda guardo el objeto como texto JSON, se vuelve a parsear. */
function reviveJsonStrings(value: unknown): unknown {
  if (typeof value !== "string") {
    return value;
  }
  const trimmed = value.trim();
  if (!trimmed.startsWith("{") && !trimmed.startsWith("[")) {
    return value;
  }
  try {
    return JSON.parse(trimmed);
  } catch {
    return value;
  }
}

export function parseAndValidateAnalysis(raw: string): AIAnalysis {
  const cleaned = raw
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();
  let parsed: unknown;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    throw new Error("invalid_json");
  }
  if (!isRecord(parsed)) {
    invalidStructure();
  }
  return buildAnalysis(parsed);
}

/**
 * Normaliza un analisis que ya viene guardado en Sheets (viene como objeto y
 * no como texto). Devuelve null si la fila esta incompleta, para que la UI
 * muestre "sin analisis" en lugar de romperse.
 */
export function normalizeStoredAnalysis(value: unknown): AIAnalysis | null {
  if (!isRecord(value)) {
    return null;
  }
  const revived: Record<string, unknown> = {};
  for (const [key, item] of Object.entries(value)) {
    revived[key] = reviveJsonStrings(item);
  }
  try {
    return buildAnalysis(revived);
  } catch {
    return null;
  }
}