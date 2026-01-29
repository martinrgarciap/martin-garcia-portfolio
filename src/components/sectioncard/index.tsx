"use client";

import { Paper, PaperProps, alpha } from "@mui/material";

const SectionCard = (props: PaperProps) => (
  <Paper
    elevation={0}
    {...props}
    sx={{
      borderRadius: 3,
      border: `1px solid ${alpha("#FFFFFF", 0.1)}`,
      background: `linear-gradient(180deg, ${alpha("#FFFFFF", 0.06)}, ${alpha(
        "#FFFFFF",
        0.03,
      )})`,
      backdropFilter: "blur(10px)",
      ...props.sx,
    }}
  />
);

export default SectionCard;
