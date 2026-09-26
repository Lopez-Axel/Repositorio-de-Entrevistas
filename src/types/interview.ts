export type InterviewStatus = "draft" | "completed" | "analyzing" | "analyzed" | "error";

export interface InterviewAnswer {
  questionNumber: number;
  answer: string;
}

export interface Interview {
  id: string;
  interviewer: string;
  businessName?: string;
  businessType?: string;
  location?: string;
  date: string;
  answers: InterviewAnswer[];
  status: InterviewStatus;
  aiAnalysis?: AIAnalysis;
}

/** Cabecera de entrevista sin respuestas: es lo unico que viaja al navegador. */
export interface InterviewListItem {
  id: string;
  interviewer: string;
  businessName: string;
  businessType: string;
  location: string;
  date: string;
  status: InterviewStatus;
  hasAnalysis: boolean;
}

export type EvidenceType = "explicit" | "inference" | "opportunity";
export type ConfidenceLevel = "high" | "medium" | "low";

export interface AnalysisItem {
  description: string;
  /** Pregunta (1-12) que sostiene el hallazgo, si se puede atribuir. */
  questionNumber?: number | null;
  evidence: string | null;
  mentioned: boolean;
  evidenceType: EvidenceType;
  confidence: ConfidenceLevel;
}

export interface WillingnessToPay {
  mentioned: boolean;
  level?: "high" | "medium" | "low" | "unknown";
  questionNumber?: number | null;
  evidence?: string | null;
}

export interface SoftwareOpportunity {
  name: string;
  problem: string;
  reason: string;
  features: string[];
  questionNumber?: number | null;
  evidence: string | null;
  mentioned: boolean;
  evidenceType: EvidenceType;
  confidence: ConfidenceLevel;
}

export interface AIAnalysis {
  businessSummary: string;
  mainProblems: AnalysisItem[];
  mainPainPoint: string;
  confidence: ConfidenceLevel;
  manualTasks: AnalysisItem[];
  currentTools: AnalysisItem[];
  techBarriers: AnalysisItem[];
  detectedNeeds: AnalysisItem[];
  expectedValue: AnalysisItem[];
  preferredPaymentModel: string;
  opportunities: SoftwareOpportunity[];
  willingnessToPay: WillingnessToPay;
  recommendations: string[];
}