"use client";

import { Box, Container, Typography } from "@mui/material";
import { ReactNode } from "react";

type SectionContainerProps = {
  id?: string;
  headline?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

const Section = ({
  id,
  headline,
  title,
  subtitle,
  children,
}: SectionContainerProps) => (
  <Box id={id} sx={{ py: { xs: 6, md: 9 } }}>
    <Container maxWidth="lg">
      {headline && (
        <Typography
          variant="overline"
          sx={{ color: "text.secondary", letterSpacing: 1.4 }}
        >
          {headline}
        </Typography>
      )}
      <Typography variant="h4" sx={{ mt: 0.5, fontWeight: 800 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ mt: 1.5, color: "text.secondary", maxWidth: 820 }}>
          {subtitle}
        </Typography>
      )}
      <Box sx={{ mt: 4 }}>{children}</Box>
    </Container>
  </Box>
);

export default Section;
