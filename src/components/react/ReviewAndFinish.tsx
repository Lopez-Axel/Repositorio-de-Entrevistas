import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { Interview } from "../../types/interview";
import { getAnswer, setAnswer } from "../../lib/interview";
import { cardSx, pageSx } from "../../lib/theme";
import { interviewQuestions } from "../../lib/questions";
import AnswerEditor from "./AnswerEditor";
import FollowUpSuggestions from "./FollowUpSuggestions";

export default function ReviewAndFinish({
  interview,
  saving,
  savingError,
  dirty,
  onChange,
  onBack,
  onSave,
}: {
  interview: Interview;
  saving: boolean;
  savingError: string | null;
  dirty: boolean;
  onChange: (updated: Interview) => void;
  onBack: () => void;
  onSave: () => void;
}) {
  const pairs = interviewQuestions.map((question) => ({
    question: question.text,
    answer: getAnswer(interview, question.id),
  }));
  const answered = pairs.filter((pair) => pair.answer.trim() !== "").length;
  const missing = pairs
    .map((pair, index) => (pair.answer.trim() === "" ? index + 1 : 0))
    .filter((number) => number !== 0);

  return (
    <Box sx={pageSx}>
      <Box sx={cardSx}>
        <Stack spacing={0.75}>
          <Typography variant="h2">Revisión de la entrevista</Typography>
          <Typography color="text.secondary">
            Se respondieron {answered} de {interviewQuestions.length} preguntas.
            Las respuestas están solo en memoria: revisalas y corregí lo que
            necesites antes de guardarlas en Google Sheets.
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          sx={{ mt: 2, flexWrap: "wrap", gap: 1 }}
        >
          <Chip
            size="small"
            color={dirty ? "warning" : "default"}
            variant="outlined"
            label={dirty ? "Cambios sin guardar" : "Sin cambios"}
          />
          {missing.length > 0 && (
            <Chip
              size="small"
              variant="outlined"
              label={`Sin responder: ${missing.join(", ")}`}
            />
          )}
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Stack spacing={1}>
          {interviewQuestions.map((question, index) => {
            const answer = getAnswer(interview, question.id);
            return (
              <Accordion
                key={question.id}
                defaultExpanded={index === 0 || answer.trim() === ""}
                disableGutters
                elevation={0}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "12px !important",
                  "&::before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Typography sx={{ fontSize: 18, color: "text.secondary" }}>
                      ⌄
                    </Typography>
                  }
                >
                  <Stack spacing={0.5} sx={{ pr: 1 }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Pregunta {question.id}
                    </Typography>
                    <Typography variant="body2">{question.text}</Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <AnswerEditor
                    value={answer}
                    onChange={(text) => onChange(setAnswer(interview, question.id, text))}
                    label={`Respuesta ${question.id}`}
                    placeholder="La persona no respondió esta pregunta."
                    minRows={3}
                  />
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Stack>

        <Box sx={{ mt: 3 }}>
          <FollowUpSuggestions pairs={pairs} />
        </Box>

        {savingError && (
          <Box sx={{ mt: 3 }}>
            <Alert severity="error">{savingError}</Alert>
          </Box>
        )}

        <Divider sx={{ my: 3 }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{ justifyContent: "space-between" }}
        >
          <Button
            variant="text"
            onClick={onBack}
            disabled={saving}
            sx={{ color: "text.secondary" }}
          >
            Volver a las preguntas
          </Button>
          <Stack direction="row" spacing={1.5}>
            <Button
              variant="contained"
              size="large"
              onClick={onSave}
              disabled={saving}
            >
              {saving ? "Guardando en Google Sheets…" : "Guardar entrevista"}
            </Button>
          </Stack>
        </Stack>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block", mt: 1.5 }}
        >
          "Guardar entrevista" escribe en la hoja Interviews. El análisis con IA
          es un paso aparte y opcional.
        </Typography>
      </Box>
    </Box>
  );
}
