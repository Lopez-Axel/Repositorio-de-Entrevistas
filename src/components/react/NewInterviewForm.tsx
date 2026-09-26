import { useState } from "react";
import type { ChangeEvent } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import type { Interview } from "../../types/interview";
import { createInterview } from "../../lib/interview";
import { cardSx, pageSx } from "../../lib/theme";
import InterviewFlow from "./InterviewFlow";
import ThemeWrapper from "./ThemeWrapper";

function NewInterviewFormContent() {
  const [interviewer, setInterviewer] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [location, setLocation] = useState("");
  const [interview, setInterview] = useState<Interview | null>(null);

  const canSubmit =
    interviewer.trim() !== "" &&
    businessName.trim() !== "" &&
    businessType.trim() !== "";

  function handleChange(setter: (value: string) => void) {
    return (event: ChangeEvent<HTMLInputElement>) => setter(event.target.value);
  }

  function handleSubmit() {
    if (!canSubmit) return;
    // Sin navegacion y sin almacenamiento: la entrevista vive en memoria
    // hasta que se guarde en Google Sheets.
    setInterview(
      createInterview({
        interviewer: interviewer.trim(),
        businessName: businessName.trim(),
        businessType: businessType.trim(),
        location: location.trim() || undefined,
      })
    );
  }

  if (interview) {
    return <InterviewFlow interview={interview} onExit={() => setInterview(null)} />;
  }

  return (
    <Box sx={pageSx}>
      <Box sx={cardSx}>
        <Stack spacing={0.75} sx={{ mb: 3 }}>
          <Typography variant="h2">Nueva entrevista</Typography>
          <Typography color="text.secondary">
            Contanos los datos del negocio para empezar. Después vas a responder
            las 12 preguntas y al final se guardan en Google Sheets, donde podés
            pedir el análisis con IA si lo necesitás.
          </Typography>
        </Stack>

        <Stack
          component="form"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
          spacing={2.5}
        >
          <TextField
            label="Nombre del entrevistador"
            helperText="Quién realiza la entrevista."
            required
            autoFocus
            value={interviewer}
            onChange={handleChange(setInterviewer)}
          />
          <TextField
            label="Nombre del negocio"
            helperText="Cómo lo llama el dueño del negocio."
            required
            value={businessName}
            onChange={handleChange(setBusinessName)}
          />
          <TextField
            label="Tipo de negocio"
            helperText="Ej.: peluquería, verdulería, taller mecánico."
            required
            value={businessType}
            onChange={handleChange(setBusinessType)}
          />
          <TextField
            label="Ubicación (opcional)"
            helperText="Ciudad o barrio, si es relevante para el análisis."
            value={location}
            onChange={handleChange(setLocation)}
          />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ pt: 1, justifyContent: "flex-end" }}
          >
            <Button
              variant="text"
              component="a"
              href="/"
              sx={{ color: "text.secondary" }}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={!canSubmit}
            >
              Comenzar entrevista
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default function NewInterviewForm() {
  return (
    <ThemeWrapper>
      <NewInterviewFormContent />
    </ThemeWrapper>
  );
}
