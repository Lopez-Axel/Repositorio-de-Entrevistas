import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function AnswerEditor({
  value,
  onChange,
  label = "Respuesta",
  placeholder = "Hablá con la persona y la transcripción aparece acá. También podés escribir a mano.",
  minRows = 5,
}: {
  value: string;
  onChange: (text: string) => void;
  label?: string;
  placeholder?: string;
  minRows?: number;
}) {
  return (
    <Stack spacing={1} sx={{ width: "100%" }}>
      <TextField
        label={label}
        placeholder={placeholder}
        multiline
        minRows={minRows}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </Stack>
  );
}
