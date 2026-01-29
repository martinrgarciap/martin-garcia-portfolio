"use client";

import { Chip, Stack } from "@mui/material";
import { alpha } from "@mui/material/styles";

const SkillCards = ({ skills }: { skills: string[] }) => (
  <Stack direction="row" flexWrap="wrap" gap={1}>
    {skills.map((s) => (
      <Chip
        key={s}
        label={s}
        variant="outlined"
        sx={{
          borderColor: alpha("#FFFFFF", 0.18),
          color: "text.secondary",
          backgroundColor: alpha("#FFFFFF", 0.04),
          "&:hover": { backgroundColor: alpha("#FFFFFF", 0.07) },
        }}
      />
    ))}
  </Stack>
);

export default SkillCards;
