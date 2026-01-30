"use client";

import { CssBaseline, ThemeProvider, alpha } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import * as React from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0B1220",
      paper: "rgba(255,255,255,0.06)",
    },
    text: {
      primary: alpha("#0B1220", 0.92),
      secondary: alpha("#0B1220", 0.72),
    },
    primary: { main: "#3B82F6" },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial",
    h2: { fontWeight: 800, letterSpacing: -0.5 },
    h5: { fontWeight: 700 },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
