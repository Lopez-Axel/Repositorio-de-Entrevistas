import { createTheme } from "@mui/material/styles";

export const palette = {
  background: "#f4f5fb",
  surface: "#ffffff",
  border: "#e3e6f0",
  text: "#131a2b",
  muted: "#6b7392",
  primary: "#4f46e5",
  primaryDark: "#3f37c9",
  accent: "#0d9488",
  success: "#059669",
  warning: "#d97706",
  error: "#dc2626",
};

export const fontStack = [
  "'Inter'",
  "-apple-system",
  "BlinkMacSystemFont",
  "'Segoe UI'",
  "Roboto",
  "'Helvetica Neue'",
  "Arial",
  "sans-serif",
].join(", ");

export const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: palette.primary, dark: palette.primaryDark },
    secondary: { main: palette.accent },
    success: { main: palette.success },
    warning: { main: palette.warning },
    error: { main: palette.error },
    background: { default: palette.background, paper: palette.surface },
    text: { primary: palette.text, secondary: palette.muted },
    divider: palette.border,
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: fontStack,
    h1: { fontSize: "2.1rem", fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontSize: "1.65rem", fontWeight: 700, letterSpacing: "-0.01em" },
    h3: { fontSize: "1.3rem", fontWeight: 700 },
    h4: { fontSize: "1.1rem", fontWeight: 700 },
    h5: { fontSize: "1rem", fontWeight: 700 },
    h6: { fontSize: "0.95rem", fontWeight: 700 },
    subtitle1: { fontWeight: 600 },
    subtitle2: { fontWeight: 600, fontSize: "0.82rem" },
    body1: { fontSize: "0.97rem", lineHeight: 1.6 },
    body2: { fontSize: "0.88rem", lineHeight: 1.55 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "9px 18px",
          textTransform: "none",
          fontWeight: 600,
        },
        sizeLarge: { padding: "12px 24px", fontSize: "0.98rem" },
      },
    },
    MuiPaper: {
      styleOverrides: { rounded: { borderRadius: 16 } },
    },
    MuiCard: {
      defaultProps: { variant: "outlined" },
      styleOverrides: {
        root: {
          borderColor: palette.border,
          boxShadow: "0 1px 2px rgba(19, 26, 43, 0.04)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: "#fbfbfe",
          "& fieldset": { borderColor: palette.border },
          "&:hover fieldset": { borderColor: "#c9cee0" },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600, borderRadius: 8 },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: { height: 6, borderRadius: 999, backgroundColor: "#e6e8f2" },
        bar: { borderRadius: 999 },
      },
    },
    MuiAlert: {
      styleOverrides: { root: { borderRadius: 12 } },
    },
  },
});

export const cardSx = {
  p: { xs: 2, sm: 3 },
  borderRadius: 3,
  border: `1px solid ${palette.border}`,
  boxShadow: "0 1px 2px rgba(19, 26, 43, 0.04)",
  backgroundColor: palette.surface,
} as const;

export const pageSx = {
  width: "100%",
  maxWidth: 760,
  mx: "auto",
  py: { xs: 3, sm: 5 },
} as const;
