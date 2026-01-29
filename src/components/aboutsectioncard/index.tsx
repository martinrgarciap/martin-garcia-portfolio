import { Stack, Typography } from "@mui/material";

import { SectionCard } from "@/components";

const AboutSectionItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <SectionCard sx={{ px: 2.25, py: 1.6 }}>
    <Stack spacing={0.2}>
      <Typography variant="caption" sx={{ color: "text.secondary" }}>
        {label}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
        {value}
      </Typography>
    </Stack>
  </SectionCard>
);

export default AboutSectionItem;
