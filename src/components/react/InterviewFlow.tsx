import { useEffect, useRef, useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { AIAnalysis, Interview } from "../../types/interview";
import { getAnswer, getCurrentProgress, setAnswer } from "../../lib/interview";
import { requestAnalysis, saveInterview } from "../../lib/api";
import { cardSx, pageSx } from "../../lib/theme";
import { interviewQuestions } from "../../lib/questions";
import AnswerEditor from "./AnswerEditor";
import ReviewAndFinish from "./ReviewAndFinish";
import SpeechRecorder from "./SpeechRecorder";

type Phase = "interview" | "review" | "saved" | "analyzed";
type Pending = "save" | "analysis" | null;

export default function InterviewFlow({
  interview,
  onExit,
}: {
  interview: Interview;
  onExit?: () => void;
}) {
  const [state, setState] = useState(interview);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerText, setAnswerText] = useState("");
  const [phase, setPhase] = useState<Phase>("interview");
  const [dirty, setDirty] = useState(false);
  const [pending, setPending] = useState<Pending>(null);
  const [failedStage, setFailedStage] = useState<"save" | "analysis" | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [analyzeDialog, setAnalyzeDialog] = useState(false);
  const stateRef = useRef(state);
  stateRef.current = state;

  const questionNumber = currentIndex + 1;
  const question = interviewQuestions[currentIndex];
  const progress = getCurrentProgress(state);
  const isLastQuestion = currentIndex === interviewQuestions.length - 1;

  useEffect(() => {
    setAnswerText(getAnswer(stateRef.current, questionNumber));
    // Solo al cambiar de pregunta: al escribir ya se actualiza el estado.
  }, [currentIndex]);

  useEffect(() => {
    if (!dirty || phase === "analyzed") {
      return;
    }
    const handler = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty, phase]);

  function handleAnswerChange(text: string) {
    setAnswerText(text);
    setState((current) => setAnswer(current, questionNumber, text));
    setDirty(true);
  }

  function messageOf(cause: unknown, fallback: string): string {
    return cause instanceof Error && cause.message ? cause.message : fallback;
  }

  /** Paso 1: guarda la entrevista en Google Sheets. No llama a la IA. */
  async function handleSave(): Promise<void> {
    setPending("save");
    setError(null);
    try {
      await saveInterview(state);
      setFailedStage(null);
      setDirty(false);
      setPhase("saved");
    } catch (cause) {
      setFailedStage("save");
      setError(
        messageOf(cause, "No se pudo guardar la entrevista en Google Sheets.")
      );
    } finally {
      setPending(null);
    }
  }

  /** Paso 2 (opt-in): el servidor lee las respuestas desde Sheets y analiza. */
  async function handleAnalyze(): Promise<void> {
    setAnalyzeDialog(false);
    setPending("analysis");
    setError(null);
    try {
      const analysis: AIAnalysis = await requestAnalysis(state.id);
      setFailedStage(null);
      setState({ ...state, status: "analyzed", aiAnalysis: analysis });
      setDirty(false);
      setPhase("analyzed");
    } catch (cause) {
      setFailedStage("analysis");
      setError(
        messageOf(
          cause,
          "No se pudo completar el análisis. La entrevista ya está guardada en Google Sheets."
        )
      );
    } finally {
      setPending(null);
    }
  }

  function backToReview() {
    setPhase("review");
    setCurrentIndex(interviewQuestions.length - 1);
  }

  if (phase === "review") {
    return (
      <ReviewAndFinish
        interview={state}
        saving={pending === "save"}
        savingError={error}
        dirty={dirty}
        onChange={setState}
        onBack={() => {
          setPhase("interview");
          setCurrentIndex(interviewQuestions.length - 1);
        }}
        onSave={() => {
          void handleSave();
        }}
      />
    );
  }

  if (phase === "saved" || phase === "analyzed") {
    const analyzed = phase === "analyzed";
    return (
      <Box sx={pageSx}>
        <Box sx={cardSx}>
          <Stack spacing={2.5}>
            <Stack spacing={0.75}>
              <Typography variant="h2">
                {analyzed ? "Entrevista analizada" : "Entrevista guardada"}
              </Typography>
              <Typography color="text.secondary">
                {analyzed
                  ? "Las respuestas quedaron en Google Sheets y el análisis se guardó en la hoja AI_Analysis."
                  : "Las respuestas se guardaron en la hoja Interviews de Google Sheets. El análisis con IA es opcional."}
              </Typography>
            </Stack>

            {error && (
              <Alert severity={failedStage === "save" ? "error" : "warning"}>
                {error}
              </Alert>
            )}

            {pending === "analysis" && (
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                <CircularProgress size={22} />
                <Typography color="text.secondary">
                  Analizando las respuestas con inteligencia artificial...
                </Typography>
              </Stack>
            )}

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              {analyzed ? (
                <>
                  <Button
                    variant="contained"
                    component="a"
                    href={`/results/${state.id}`}
                  >
                    Ver resultados
                  </Button>
                  <Button variant="outlined" component="a" href="/">
                    Volver al inicio
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => setAnalyzeDialog(true)}
                    disabled={pending !== null}
                  >
                    Analizar con IA
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={backToReview}
                    disabled={pending !== null}
                  >
                    Volver a la revisión
                  </Button>
                  <Button component="a" href="/">
                    Inicio
                  </Button>
                </>
              )}
            </Stack>
          </Stack>
        </Box>

        <Dialog open={analyzeDialog} onClose={() => setAnalyzeDialog(false)}>
          <DialogTitle>Analizar con IA</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Se enviarán las 12 respuestas al modelo de IA para detectar
              problemas, necesidades y oportunidades de software. El análisis se
              guarda en la hoja AI_Analysis de Google Sheets. Esta acción no se
              puede deshacer.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setAnalyzeDialog(false)}>Cancelar</Button>
            <Button variant="contained" onClick={() => void handleAnalyze()}>
              Analizar
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  }

  return (
    <Box sx={pageSx}>
      <Box sx={cardSx}>
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Typography variant="overline" color="text.secondary">
                Pregunta {questionNumber} de {interviewQuestions.length}
              </Typography>
              <Chip
                size="small"
                color={dirty ? "warning" : "default"}
                variant="outlined"
                label={dirty ? "Sin guardar" : "Sin cambios"}
              />
            </Stack>
            <Typography variant="h3" sx={{ textWrap: "balance" }}>
              {question.text}
            </Typography>
          </Stack>

          <SpeechRecorder onTranscriptChange={handleAnswerChange} />

          <AnswerEditor
            value={answerText}
            onChange={handleAnswerChange}
            label="Transcripción de la respuesta"
          />

          <Typography variant="caption" color="text.secondary">
            Las respuestas no se guardan en el navegador. Al final vas a poder
            guardarlas en Google Sheets y, si querés, pedir el análisis con IA.
          </Typography>

          <Stack spacing={1}>
            <LinearProgress
              variant="determinate"
              value={(progress.current / progress.total) * 100}
            />
            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Typography variant="caption" color="text.secondary">
                {progress.current} de {progress.total} respuestas completadas
              </Typography>
              <Stack direction="row" spacing={1.5}>
                <Button
                  variant="outlined"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(currentIndex - 1)}
                >
                  Anterior
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    if (isLastQuestion) {
                      setPhase("review");
                    } else {
                      setCurrentIndex(currentIndex + 1);
                    }
                  }}
                >
                  {isLastQuestion ? "Revisar y guardar" : "Siguiente"}
                </Button>
              </Stack>
            </Stack>
          </Stack>

          {onExit && (
            <Button
              size="small"
              onClick={onExit}
              sx={{ alignSelf: "flex-start", color: "text.secondary" }}
            >
              Descartar y empezar de nuevo
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
