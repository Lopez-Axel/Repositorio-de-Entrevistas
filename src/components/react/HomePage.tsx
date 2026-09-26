import { useCallback, useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { InterviewListItem } from "../../types/interview";
import { fetchInterviews } from "../../lib/api";
import ThemeWrapper from "./ThemeWrapper";

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("es", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function InterviewRow({ interview }: { interview: InterviewListItem }) {
  return (
    <Box
      sx={{
        p: 2,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        backgroundColor: "background.paper",
        display: "flex",
        flexWrap: "wrap",
        gap: 1.5,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Stack spacing={0.5} sx={{ minWidth: 220, flex: 1 }}>
        <Typography variant="subtitle1">
          {interview.businessName || "Entrevista sin nombre"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {[
            interview.businessType,
            interview.location,
            formatDate(interview.date),
          ]
            .filter(Boolean)
            .join(" · ")}
        </Typography>
        <Stack
          direction="row"
          spacing={0.75}
          sx={{ pt: 0.5, flexWrap: "wrap", gap: 0.75 }}
        >
          <Chip
            size="small"
            color={interview.hasAnalysis ? "success" : "default"}
            label={interview.hasAnalysis ? "Analizada" : "Guardada en Sheets"}
          />
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ alignSelf: "center" }}
          >
            Entrevistador: {interview.interviewer}
          </Typography>
        </Stack>
      </Stack>
      <Button
        size="small"
        variant={interview.hasAnalysis ? "contained" : "outlined"}
        component="a"
        href={`/results/${interview.id}`}
      >
        {interview.hasAnalysis ? "Ver resultados" : "Abrir"}
      </Button>
    </Box>
  );
}

function HomeContent() {
  const [interviews, setInterviews] = useState<InterviewListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setInterviews(await fetchInterviews());
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "No se pudieron cargar las entrevistas."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const analyzed = interviews.filter((item) => item.hasAnalysis).length;

  return (
    <Stack spacing={3}>
      <div className="stat-row">
        <div className="stat-pill">
          <div className="stat-pill__value">{interviews.length}</div>
          <div className="stat-pill__label">Entrevistas</div>
        </div>
        <div className="stat-pill">
          <div className="stat-pill__value">{analyzed}</div>
          <div className="stat-pill__label">Con análisis</div>
        </div>
        <div className="stat-pill">
          <div className="stat-pill__value">
            {interviews.length - analyzed}
          </div>
          <div className="stat-pill__label">Sin análisis</div>
        </div>
      </div>

      <section id="entrevistas">
        <h2 className="section-title">Entrevistas guardadas</h2>
        <p className="section-subtitle">
          Se leen directamente de Google Sheets. El navegador no guarda nada: ni
          respuestas, ni cabeceras, ni borradores.
        </p>
        {loading ? (
          <Stack spacing={1.5} sx={{ alignItems: "center", py: 4 }}>
            <CircularProgress size={26} />
            <Typography color="text.secondary">
              Consultando Google Sheets...
            </Typography>
          </Stack>
        ) : error ? (
          <Stack spacing={1.5}>
            <Alert severity="error">{error}</Alert>
            <Box>
              <Button variant="outlined" onClick={() => void load()}>
                Reintentar
              </Button>
            </Box>
          </Stack>
        ) : interviews.length === 0 ? (
          <Alert severity="info">
            Todavía no hay entrevistas guardadas en Google Sheets.
          </Alert>
        ) : (
          <Stack spacing={1.5}>
            {interviews.map((interview) => (
              <InterviewRow key={interview.id} interview={interview} />
            ))}
          </Stack>
        )}
      </section>
    </Stack>
  );
}

export default function HomePage() {
  return (
    <ThemeWrapper>
      <HomeContent />
    </ThemeWrapper>
  );
}
