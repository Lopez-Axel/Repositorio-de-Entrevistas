import { useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface FollowUpPair {
  question: string;
  answer: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export default function FollowUpSuggestions({
  pairs,
  compact = false,
}: {
  pairs: FollowUpPair[];
  compact?: boolean;
}) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [state, setState] = useState<"idle" | "loading" | "ready" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function generate() {
    setState("loading");
    setErrorMessage("");
    try {
      const response = await fetch("/api/followups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pairs }),
      });
      const result: unknown = await response.json().catch(() => null);
      if (!response.ok || !isRecord(result) || !Array.isArray(result.suggestions)) {
        setErrorMessage(
          isRecord(result) && typeof result.error === "string"
            ? result.error
            : "No se pudieron generar sugerencias."
        );
        setState("error");
        return;
      }
      setSuggestions(
        (result.suggestions as unknown[]).filter(
          (item): item is string => typeof item === "string"
        )
      );
      setState("ready");
    } catch {
      setErrorMessage("No se pudieron generar sugerencias.");
      setState("error");
    }
  }

  if (pairs.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        p: compact ? 2 : 2.5,
        borderRadius: 3,
        border: "1px dashed",
        borderColor: "divider",
        backgroundColor: "#fafaff",
      }}
    >
      <Stack spacing={1.5}>
        <Stack spacing={0.25}>
          <Typography variant="subtitle1">
            Sugerencias para el cierre de la entrevista
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Se generan una sola vez, con todas las respuestas cargadas. Elegí las
            que te sirvan para profundizar.
          </Typography>
        </Stack>

        {state === "idle" || state === "error" ? (
          <Box>
            <Button variant="outlined" onClick={generate}>
              Generar sugerencias
            </Button>
          </Box>
        ) : null}

        {state === "loading" && (
          <Typography variant="body2" color="text.secondary">
            Generando sugerencias...
          </Typography>
        )}

        {state === "error" && <Alert severity="warning">{errorMessage}</Alert>}

        {state === "ready" && suggestions.length === 0 && (
          <Typography variant="body2" color="text.secondary">
            No se generaron sugerencias para esta entrevista.
          </Typography>
        )}

        {state === "ready" && suggestions.length > 0 && (
          <Stack spacing={1} component="ol" sx={{ m: 0, pl: 2.5 }}>
            {suggestions.map((suggestion, index) => (
              <Typography key={`followup-${index}`} component="li" variant="body2">
                {suggestion}
              </Typography>
            ))}
          </Stack>
        )}

        {state === "ready" && (
          <Box>
            <Button size="small" onClick={generate}>
              Regenerar
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
}
