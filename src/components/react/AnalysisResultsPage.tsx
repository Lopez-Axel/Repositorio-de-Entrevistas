import { useCallback, useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { AIAnalysis, InterviewListItem } from "../../types/interview";
import { fetchInterview, requestAnalysis } from "../../lib/api";
import { cardSx, pageSx } from "../../lib/theme";
import AnalysisResults from "./AnalysisResults";
import ThemeWrapper from "./ThemeWrapper";

function ResultsContent({ id }: { id: string }) {
  const [interview, setInterview] = useState<InterviewListItem | null>(null);
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzeError, setAnalyzeError] = useState<string | null>(null);
  const [dialog, setDialog] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try {
      const result = await fetchInterview(id);
      setInterview(result.interview);
      setAnalysis(result.analysis);
    } catch (cause) {
      setLoadError(
        cause instanceof Error
          ? cause.message
          : "No se pudo cargar la entrevista."
      );
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    void load();
  }, [load]);

  async function handleAnalyze() {
    setDialog(false);
    setAnalyzing(true);
    setAnalyzeError(null);
    try {
      setAnalysis(await requestAnalysis(id));
    } catch (cause) {
      setAnalyzeError(
        cause instanceof Error
          ? cause.message
          : "No se pudo completar el análisis."
      );
    } finally {
      setAnalyzing(false);
    }
  }

  if (loading) {
    return (
      <Box sx={pageSx}>
        <Stack spacing={2} sx={{ alignItems: "center", py: 6 }}>
          <CircularProgress />
          <Typography color="text.secondary">
            Consultando Google Sheets...
          </Typography>
        </Stack>
      </Box>
    );
  }

  if (loadError || !interview) {
    return (
      <Box sx={pageSx}>
        <Box sx={cardSx}>
          <Stack spacing={2}>
            <Typography variant="h2">No pudimos leer la entrevista</Typography>
            <Alert severity="error">{loadError}</Alert>
            <Typography color="text.secondary">
              Verificá la conexión con Google Sheets y que el despliegue de Apps
              Script esté accesible.
            </Typography>
            <Stack direction="row" spacing={1.5}>
              <Button variant="contained" onClick={() => void load()}>
                Reintentar
              </Button>
              <Button variant="outlined" component="a" href="/">
                Volver al inicio
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    );
  }

  if (analysis) {
    return (
      <Box sx={pageSx}>
        <Stack spacing={2} sx={{ mb: 2 }}>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Button
              size="small"
              component="a"
              href="/"
              sx={{ alignSelf: "flex-start" }}
            >
              ← Volver al inicio
            </Button>
            <Typography variant="caption" color="text.secondary">
              {interview.businessName} · Entrevistado por{" "}
              {interview.interviewer}
            </Typography>
          </Stack>
        </Stack>
        <AnalysisResults analysis={analysis} interviewId={id} />
      </Box>
    );
  }

  return (
    <Box sx={pageSx}>
      <Box sx={cardSx}>
        <Stack spacing={2}>
          <Typography variant="h2">Todavía no hay un análisis</Typography>
          <Typography color="text.secondary">
            {interview.businessName} · {interview.businessType} · Entrevista de{" "}
            {interview.interviewer}. Las respuestas están guardadas en Google
            Sheets y el análisis con IA es opcional.
          </Typography>
          {analyzeError && <Alert severity="warning">{analyzeError}</Alert>}
          <Stack direction="row" spacing={1.5}>
            <Button
              variant="contained"
              size="large"
              onClick={() => setDialog(true)}
              disabled={analyzing}
            >
              {analyzing ? "Analizando..." : "Analizar con IA"}
            </Button>
            <Button variant="outlined" component="a" href="/">
              Volver al inicio
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Dialog open={dialog} onClose={() => setDialog(false)}>
        <DialogTitle>Analizar con IA</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Se enviarán las respuestas guardadas en Google Sheets al modelo de
            IA. El análisis se guarda en la hoja AI_Analysis. Esta acción no se
            puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialog(false)}>Cancelar</Button>
          <Button variant="contained" onClick={() => void handleAnalyze()}>
            Analizar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default function AnalysisResultsPage({ id }: { id: string }) {
  return (
    <ThemeWrapper>
      <ResultsContent id={id} />
    </ThemeWrapper>
  );
}
