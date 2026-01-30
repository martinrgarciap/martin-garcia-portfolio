"use client";

import { Chip, Stack } from "@mui/material";
import { alpha } from "@mui/material/styles";

const SkillCards = ({ skills }: { skills: string[] }) => (
  <Stack
    direction="row"
    flexWrap="wrap"
    gap={0.9}
    sx={{ alignContent: "flex-start" }}
  >
    {skills.map((s) => (
      <Chip
        key={s}
        label={s}
        variant="outlined"
        sx={{
          borderColor: alpha("#0B1220", 0.12),
          color: alpha("#0B1220", 0.75),
          backgroundColor: alpha("#FFFFFF", 0.55),
          "&:hover": { backgroundColor: alpha("#FFFFFF", 0.7) },
        }}
      />
    ))}
  </Stack>
);

export default SkillCards;
