import { useCallback, useState } from "react";
import type { ReactNode } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type {
  AIAnalysis,
  AnalysisItem,
  ConfidenceLevel,
  SoftwareOpportunity,
} from "../../types/interview";

const CONFIDENCE_LABELS: Record<ConfidenceLevel, string> = {
  high: "Alta",
  medium: "Media",
  low: "Baja",
};

function ConfidenceChip({ confidence }: { confidence: ConfidenceLevel }) {
  return (
    <Chip size="small" label={`Confianza: ${CONFIDENCE_LABELS[confidence]}`} />
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Stack spacing={1}>
      <Typography variant="h6">{title}</Typography>
      {children}
    </Stack>
  );
}

interface AnswerQuote {
  questionNumber: number;
  question: string;
  answer: string;
}

/**
 * Muestra la respuesta que respalda un hallazgo. Se pide al servidor al hacer
 * clic, no se guarda y se descarta al cerrar: las respuestas nunca quedan en el
 * navegador.
 */
function EvidenceSource({
  interviewId,
  questionNumber,
}: {
  interviewId: string;
  questionNumber: number | null | undefined;
}) {
  const [quote, setQuote] = useState<AnswerQuote | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const load = useCallback(async () => {
    setOpen(true);
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/interviews/${encodeURIComponent(interviewId)}/answers`
      );
      const body: unknown = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(
          typeof (body as { error?: unknown })?.error === "string"
            ? (body as { error: string }).error
            : "No se pudieron leer las respuestas."
        );
      }
      const answers = (body as { answers?: AnswerQuote[] }).answers ?? [];
      setQuote(
        answers.find((item) => item.questionNumber === questionNumber) ?? null
      );
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "No se pudieron leer las respuestas."
      );
    } finally {
      setLoading(false);
    }
  }, [interviewId, questionNumber]);

  if (!questionNumber) {
    return null;
  }

  return (
    <>
      <Button
        size="small"
        variant="text"
        onClick={() => void load()}
        sx={{ alignSelf: "flex-start", px: 0 }}
      >
        Ver respuesta {questionNumber}
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {quote ? `Pregunta ${quote.questionNumber}` : `Pregunta ${questionNumber}`}
        </DialogTitle>
        <DialogContent>
          {loading ? (
            <Stack spacing={1} sx={{ alignItems: "center", py: 3 }}>
              <CircularProgress size={24} />
              <Typography color="text.secondary">
                Consultando Google Sheets...
              </Typography>
            </Stack>
          ) : error ? (
            <Typography color="error">{error}</Typography>
          ) : quote ? (
            <Stack spacing={1.5}>
              <Typography color="text.secondary">{quote.question}</Typography>
              <Typography sx={{ whiteSpace: "pre-wrap" }}>
                {quote.answer || "(sin respuesta)"}
              </Typography>
            </Stack>
          ) : (
            <Typography color="text.secondary">
              Esa pregunta no tiene respuesta guardada.
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function EvidenceItem({
  item,
  interviewId,
}: {
  item: AnalysisItem;
  interviewId: string;
}) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="subtitle2">{item.description}</Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
            <ConfidenceChip confidence={item.confidence} />
            {!item.mentioned && (
              <Chip size="small" label="No mencionado explícitamente" />
            )}
          </Stack>
          {item.evidence ? (
            <Typography variant="body2">Evidencia: {item.evidence}</Typography>
          ) : null}
          <EvidenceSource
            interviewId={interviewId}
            questionNumber={item.questionNumber}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}

function ItemsSection({
  title,
  items,
  interviewId,
}: {
  title: string;
  items: AnalysisItem[];
  interviewId: string;
}) {
  if (items.length === 0) {
    return (
      <Section title={title}>
        <Typography color="text.secondary">
          No se encontró información en la entrevista.
        </Typography>
      </Section>
    );
  }
  return (
    <Section title={title}>
      {items.map((item, index) => (
        <EvidenceItem
          key={`${title}-${index}`}
          item={item}
          interviewId={interviewId}
        />
      ))}
    </Section>
  );
}

function OpportunityCard({
  opportunity,
  interviewId,
}: {
  opportunity: SoftwareOpportunity;
  interviewId: string;
}) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="subtitle1">{opportunity.name}</Typography>
          <Typography variant="body2">
            Problema que resuelve: {opportunity.problem}
          </Typography>
          {opportunity.reason ? (
            <Typography variant="body2">
              Por qué aparece: {opportunity.reason}
            </Typography>
          ) : null}
          {opportunity.features.length > 0 && (
            <Stack spacing={0.5}>
              <Typography variant="body2">Posibles funcionalidades:</Typography>
              {opportunity.features.map((feature, index) => (
                <Typography
                  key={`feature-${opportunity.name}-${index}`}
                  variant="body2"
                >
                  • {feature}
                </Typography>
              ))}
            </Stack>
          )}
          {opportunity.evidence ? (
            <Typography variant="body2">
              Evidencia: {opportunity.evidence}
            </Typography>
          ) : null}
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
            <ConfidenceChip confidence={opportunity.confidence} />
            {!opportunity.mentioned && (
              <Chip size="small" label="No mencionado explícitamente" />
            )}
          </Stack>
          <EvidenceSource
            interviewId={interviewId}
            questionNumber={opportunity.questionNumber}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}

const WTP_LABELS: Record<"high" | "medium" | "low" | "unknown", string> = {
  high: "Alta",
  medium: "Media",
  low: "Baja",
  unknown: "Desconocida",
};

export default function AnalysisResults({
  analysis,
  interviewId,
}: {
  analysis: AIAnalysis;
  interviewId: string;
}) {
  return (
    <Stack spacing={4} sx={{ width: "100%", maxWidth: 720 }}>
      <Section title="Resumen del negocio">
        <Typography>{analysis.businessSummary}</Typography>
      </Section>
      <Section title="Principal problema detectado">
        <Stack spacing={1}>
          <Typography>{analysis.mainPainPoint}</Typography>
          <ConfidenceChip confidence={analysis.confidence} />
        </Stack>
      </Section>
      <ItemsSection
        title="Problemas recurrentes"
        items={analysis.mainProblems}
        interviewId={interviewId}
      />
      <ItemsSection
        title="Tareas manuales"
        items={analysis.manualTasks}
        interviewId={interviewId}
      />
      <ItemsSection
        title="Herramientas actuales"
        items={analysis.currentTools}
        interviewId={interviewId}
      />
      <ItemsSection
        title="Barreras tecnológicas"
        items={analysis.techBarriers}
        interviewId={interviewId}
      />
      <ItemsSection
        title="Necesidades detectadas"
        items={analysis.detectedNeeds}
        interviewId={interviewId}
      />
      <ItemsSection
        title="Valor esperado"
        items={analysis.expectedValue}
        interviewId={interviewId}
      />
      <Section title="Disposición a pagar">
        {analysis.willingnessToPay.mentioned ? (
          <Stack spacing={1}>
            {analysis.willingnessToPay.level && (
              <Typography>
                Nivel:{" "}
                {WTP_LABELS[analysis.willingnessToPay.level]}
              </Typography>
            )}
            {analysis.willingnessToPay.evidence ? (
              <Typography variant="body2">
                Evidencia: {analysis.willingnessToPay.evidence}
              </Typography>
            ) : null}
            <EvidenceSource
              interviewId={interviewId}
              questionNumber={analysis.willingnessToPay.questionNumber}
            />
          </Stack>
        ) : (
          <Typography color="text.secondary">
            No se mencionó la disposición a pagar en la entrevista.
          </Typography>
        )}
      </Section>
      <Section title="Modelo de pago preferido">
        {analysis.preferredPaymentModel ? (
          <Typography>{analysis.preferredPaymentModel}</Typography>
        ) : (
          <Typography color="text.secondary">
            No se mencionó un modelo de pago preferido.
          </Typography>
        )}
      </Section>
      <Section title="Oportunidades de software">
        {analysis.opportunities.length === 0 ? (
          <Typography color="text.secondary">
            No se detectaron oportunidades claras en la entrevista.
          </Typography>
        ) : (
          analysis.opportunities.map((opportunity, index) => (
            <OpportunityCard
              key={`opportunity-${index}`}
              opportunity={opportunity}
              interviewId={interviewId}
            />
          ))
        )}
      </Section>
      <Typography variant="subtitle2" color="text.secondary">
        Estas oportunidades son hipótesis generadas a partir de la entrevista y
        deben validarse con más entrevistas.
      </Typography>
      {analysis.recommendations.length > 0 && (
        <Section title="Recomendaciones">
          {analysis.recommendations.map((recommendation, index) => (
            <Typography key={`recommendation-${index}`}>
              • {recommendation}
            </Typography>
          ))}
        </Section>
      )}
    </Stack>
  );
}
