"use client";

import { Paper, PaperProps } from "@mui/material";

export default function SectionCard({ sx, ...props }: PaperProps) {
  return (
    <Paper
      elevation={0}
      {...props}
      sx={{
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.10)",
        background:
          "linear-gradient(180deg, rgba(15,23,42,0.78) 0%, rgba(15,23,42,0.56) 100%)",
        boxShadow: "0 24px 80px rgba(2, 6, 23, 0.42)",
        backdropFilter: "blur(18px)",
        color: "#E5EEF8",
        ...sx,
      }}
    />
  );
}
