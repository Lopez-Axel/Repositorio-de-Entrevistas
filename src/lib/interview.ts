import type { Interview } from "../types/interview";
import { TOTAL_QUESTIONS } from "./questions";

export interface CreateInterviewData {
  interviewer: string;
  businessName: string;
  businessType: string;
  location?: string;
}

export function createInterview(data: CreateInterviewData): Interview {
  return {
    id: crypto.randomUUID(),
    interviewer: data.interviewer,
    businessName: data.businessName,
    businessType: data.businessType,
    location: data.location,
    date: new Date().toISOString(),
    answers: [],
    status: "draft",
  };
}

/** Actualiza la respuesta en memoria. No persiste nada. */
export function setAnswer(
  interview: Interview,
  questionNumber: number,
  answer: string
): Interview {
  const existingIndex = interview.answers.findIndex(
    (item) => item.questionNumber === questionNumber
  );
  const answers =
    existingIndex >= 0
      ? interview.answers.map((item, index) =>
          index === existingIndex ? { ...item, answer } : item
        )
      : [...interview.answers, { questionNumber, answer }];
  return { ...interview, answers };
}

export function getAnswer(
  interview: Interview,
  questionNumber: number
): string {
  return (
    interview.answers.find((item) => item.questionNumber === questionNumber)
      ?.answer ?? ""
  );
}

export function answeredCount(interview: Interview): number {
  return interview.answers.filter((item) => item.answer.trim() !== "").length;
}

export function getCurrentProgress(interview: Interview): {
  current: number;
  total: number;
} {
  return { current: answeredCount(interview), total: TOTAL_QUESTIONS };
}
