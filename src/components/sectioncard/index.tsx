"use client";

import { Paper, PaperProps, alpha } from "@mui/material";

const SectionCard = (props: PaperProps) => (
  <Paper
    elevation={0}
    {...props}
    sx={{
      borderRadius: 3,
      backgroundColor: "#E9EEF7",
      backgroundImage: `linear-gradient(180deg, ${alpha("#FFFFFF", 0.9)}, ${alpha(
        "#DCE6F7",
        0.9,
      )})`,
      border: `1px solid ${alpha("#0B1220", 0.12)}`,
      boxShadow: `0 8px 30px ${alpha("#000", 0.18)}`,
      backdropFilter: "none",
      color: "#0B1220",
      ...props.sx,
    }}
  />
);

export default SectionCard;
