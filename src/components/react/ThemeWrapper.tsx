import type { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../../lib/theme";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
}
