import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const RECOGNITION_LANG = "es-ES";

type RecorderStatus = "idle" | "listening" | "processing" | "error" | "unsupported";

type TranscriptChangeHandler = (text: string) => void;

interface SpeechRecognitionInstance {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
  start: () => void;
  stop: () => void;
}

interface SpeechRecognitionWindow extends Window {
  SpeechRecognition?: new () => SpeechRecognitionInstance;
  webkitSpeechRecognition?: new () => SpeechRecognitionInstance;
}

function getSpeechRecognitionConstructor():
  | (new () => SpeechRecognitionInstance)
  | undefined {
  const speechWindow = window as SpeechRecognitionWindow;
  return (
    speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition
  );
}

const STATUS_LABEL: Record<RecorderStatus, string> = {
  idle: "Listo para grabar",
  listening: "Escuchando",
  processing: "Procesando",
  error: "Error de transcripción",
  unsupported: "No disponible",
};

const STATUS_COLOR: Record<
  RecorderStatus,
  "default" | "primary" | "success" | "error" | "warning"
> = {
  idle: "default",
  listening: "primary",
  processing: "primary",
  error: "error",
  unsupported: "warning",
};

export default function SpeechRecorder({
  onTranscriptChange,
}: {
  onTranscriptChange: TranscriptChangeHandler;
}) {
  const [status, setStatus] = useState<RecorderStatus>("idle");
  const [errorDetail, setErrorDetail] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const finalTranscriptRef = useRef("");
  const interimTranscriptRef = useRef("");
  const lastEmittedRef = useRef("");
  const onChangeRef = useRef<TranscriptChangeHandler>(onTranscriptChange);

  useEffect(() => {
    onChangeRef.current = onTranscriptChange;
  }, [onTranscriptChange]);

  useEffect(() => {
    if (!getSpeechRecognitionConstructor()) {
      setStatus("unsupported");
    }
  }, []);

  function emitTranscript() {
    const combined = `${finalTranscriptRef.current} ${
      interimTranscriptRef.current
    }`.trim();
    lastEmittedRef.current = combined;
    onChangeRef.current(combined);
  }

  function handleResult(event: SpeechRecognitionEvent) {
    let newFinal = "";
    let newInterim = "";
    for (let index = event.resultIndex; index < event.results.length; index++) {
      const result = event.results[index];
      const piece = result.item(0);
      if (!piece) continue;
      if (result.isFinal) {
        newFinal += piece.transcript;
      } else {
        newInterim += piece.transcript;
      }
    }
    finalTranscriptRef.current += newFinal;
    interimTranscriptRef.current = newInterim;
    emitTranscript();
  }

  function handleError(event: SpeechRecognitionErrorEvent) {
    const code = event.error;
    if (code === "not-allowed" || code === "service-not-allowed") {
      setErrorDetail(
        "Permiso de micrófono denegado. Active el micrófono en su navegador e intente nuevamente."
      );
    } else if (code === "network") {
      setErrorDetail("Error de red al transcribir. Intente nuevamente.");
    } else if (code === "no-speech") {
      setErrorDetail(
        "No se detectó voz. Acérquese al micrófono e intente nuevamente."
      );
    } else if (code === "audio-capture") {
      setErrorDetail(
        "No se detectó un micrófono disponible o está en uso por otra aplicación."
      );
    } else {
      setErrorDetail(
        "No se pudo transcribir la respuesta. Intente nuevamente."
      );
    }
    setStatus("error");
  }

  function handleEnd() {
    setStatus("idle");
  }

  function createRecognition(): SpeechRecognitionInstance | null {
    const SpeechRecognition = getSpeechRecognitionConstructor();
    if (!SpeechRecognition) return null;
    const recognition = new SpeechRecognition();
    recognition.lang = RECOGNITION_LANG;
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = handleResult;
    recognition.onerror = handleError;
    recognition.onend = handleEnd;
    recognition.onstart = () => {
      setErrorDetail(null);
      setStatus("listening");
    };
    recognitionRef.current = recognition;
    return recognition;
  }

  function startRecognition() {
    const recognition =
      recognitionRef.current ?? createRecognition();
    if (!recognition) {
      setStatus("unsupported");
      return;
    }
    try {
      // Continúa desde lo ya escrito: no se pisa el texto previo.
      finalTranscriptRef.current = lastEmittedRef.current;
      interimTranscriptRef.current = "";
      recognition.start();
      setErrorDetail(null);
      setStatus("listening");
    } catch {
      setErrorDetail("No se pudo iniciar la grabación de voz.");
      setStatus("error");
    }
  }

  function stopRecognition() {
    const recognition = recognitionRef.current;
    if (!recognition) return;
    setStatus("processing");
    recognition.stop();
  }

  const isListening = status === "listening";

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={1.5}
      sx={{
        alignItems: { xs: "stretch", sm: "center" },
        p: 1.5,
        borderRadius: 3,
        border: "1px solid",
        borderColor: isListening ? "primary.main" : "divider",
        backgroundColor: isListening ? "rgba(79, 70, 229, 0.05)" : "#fbfbfe",
        transition: "all 0.2s ease",
      }}
    >
      <Chip
        label={STATUS_LABEL[status]}
        color={STATUS_COLOR[status]}
        size="small"
        sx={{ alignSelf: { xs: "flex-start", sm: "center" } }}
      />
      <Box sx={{ flex: 1 }} />
      {isListening ? (
        <Button variant="contained" color="error" onClick={stopRecognition}>
          Detener grabación
        </Button>
      ) : (
        <Button
          variant="outlined"
          onClick={startRecognition}
          disabled={status === "unsupported" || status === "processing"}
        >
          {status === "error" ? "Reintentar" : "Grabar respuesta"}
        </Button>
      )}
      {status === "unsupported" && (
        <Typography variant="body2" color="text.secondary">
          Este navegador no soporta transcripción por voz. Podés escribir la
          respuesta a mano.
        </Typography>
      )}
      {status === "error" && errorDetail && (
        <Typography variant="body2" color="error">
          {errorDetail}
        </Typography>
      )}
    </Stack>
  );
}
