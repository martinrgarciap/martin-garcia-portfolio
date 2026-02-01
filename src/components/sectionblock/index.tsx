"use client";

import { Box, Typography, alpha } from "@mui/material";

function SectionBlock(props: {
  id?: string;
  headline?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const { id, headline, title, subtitle, children } = props;

  return (
    <Box
      component="section"
      id={id}
      sx={{
        scrollMarginTop: 96,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}
    >
      {headline && (
        <Typography
          variant="overline"
          sx={{ letterSpacing: 1.2, color: alpha("#fff", 0.6) }}
        >
          {headline}
        </Typography>
      )}

      <Typography
        variant="h4"
        sx={{
          mt: 0.5,
          fontWeight: 900,
          letterSpacing: -0.5,
          color: alpha("#fff", 0.92),
        }}
      >
        {title}
      </Typography>

      {subtitle ? (
        <Typography
          sx={{
            mt: 1,
            color: alpha("#fff", 0.72),
            lineHeight: 1.7,
            maxWidth: "70ch",
          }}
        >
          {subtitle}
        </Typography>
      ) : null}

      <Box
        sx={{
          mt: 2.25,
          flex: 1,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default SectionBlock;
