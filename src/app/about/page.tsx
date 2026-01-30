"use client";

import {
  AboutSectionCard,
  ExperienceTimeline,
  SectionCard,
  SkillCards,
} from "@/components";
import type { TimelineEntry } from "@/components/experiencetimeline";
import * as React from "react";

import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

const HIGHLIGHTS = [
  { label: "Experience", value: "2+ yrs" },
  { label: "Focus", value: "Frontend + Product UI" },
  { label: "Strength", value: "Delivery + Ownership" },
];

const SKILLS = [
  "React",
  "Next.js (App Router)",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "HTML/CSS",
  "REST APIs",
  "GraphQL (Apollo)",
  "PostgreSQL / SQL",
  "Git",
  "CI/CD",
  "Jira / Agile",
];

const TIMELINE: TimelineEntry[] = [
  {
    title: "Scrum Master",
    org: "Auto Loans Services Canada",
    date: "Jun 2024 — Present",
    bullets: [
      "Facilitate standups, sprint planning, refinements, and retros to keep delivery predictable.",
      "Track Agile metrics (burndown, throughput, carryover) and remove blockers early.",
      "Align stakeholders on scope and priorities using Jira + Confluence.",
    ],
  },
  {
    title: "Software Engineer",
    org: "Influitive",
    date: "Jan 2022 — Jun 2024",
    bullets: [
      "Built and maintained customer-facing web features for enterprise users.",
      "Improved UI consistency and accessibility while collaborating with Design + QA.",
      "Integrated frontend with GraphQL/REST and supported releases via CI/CD workflows.",
    ],
  },
];

function SectionBlock(props: {
  id?: string;
  headline: string;
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
      <Typography
        variant="overline"
        sx={{ letterSpacing: 1.2, color: alpha("#fff", 0.6) }}
      >
        {headline}
      </Typography>

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

export default function AboutPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `
          radial-gradient(800px 400px at 12% 10%, ${alpha("#3B82F6", 0.22)}, transparent 60%),
          radial-gradient(900px 500px at 85% 25%, ${alpha("#8B5CF6", 0.18)}, transparent 55%),
          linear-gradient(180deg, #0B1220 0%, #0B1220 55%, #09101C 100%)
        `,
      }}
    >
      <Box sx={{ pt: { xs: 6, md: 9 }, pb: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          <SectionCard sx={{ p: { xs: 2.75, md: 4 } }}>
            <Stack spacing={2.2}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  letterSpacing: -1,
                  lineHeight: 1.05,
                  color: "text.primary",
                }}
              >
                About{" "}
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(90deg, #3B82F6 0%, #22D3EE 50%, #8B5CF6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Martin
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: 16,
                  lineHeight: 1.7,
                  maxWidth: "90ch",
                }}
              >
                I’m a software engineer who cares about clean UI, predictable
                delivery, and building products people actually enjoy using. I
                like turning unclear requirements into simple, polished
                experiences — and I’m happiest when I’m shipping, iterating, and
                improving.
              </Typography>

              <Divider sx={{ borderColor: alpha("#0B1220", 0.12) }} />

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                  gap: { xs: 1.25, md: 1.5 },
                }}
              >
                {HIGHLIGHTS.map((h) => (
                  <Box key={h.label}>
                    <AboutSectionCard label={h.label} value={h.value} />
                  </Box>
                ))}
              </Box>

              <SectionCard
                sx={{
                  p: 2,
                  width: "100%",
                  borderColor: alpha("#0B1220", 0.12),
                  background: `linear-gradient(180deg, ${alpha(
                    "#3B82F6",
                    0.12,
                  )}, ${alpha("#FFFFFF", 0.75)})`,
                }}
              >
                <Typography sx={{ fontWeight: 800, color: "text.primary" }}>
                  What I’m optimizing for
                </Typography>
                <Typography sx={{ color: "text.secondary", mt: 0.7 }}>
                  A product-focused team where I can own features end-to-end,
                  collaborate closely, and keep improving the craft.
                </Typography>
              </SectionCard>
            </Stack>
          </SectionCard>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            columnGap: { md: 5 },
            rowGap: { xs: 6, md: 0 },
            alignItems: "start",
          }}
        >
          <Box sx={{ minHeight: 0 }}>
            <SectionBlock
              id="skills"
              headline="Toolbox"
              title="What I work with"
              subtitle="A snapshot of the tools I’m comfortable shipping with. (You can keep your Skills Snapshot on Home too — this page is the deeper version.)"
            >
              <SectionCard
                sx={{
                  p: { xs: 2, md: 3 },
                  width: "100%",
                  flex: 1,
                  minHeight: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ flex: 1, minHeight: 0, overflow: "auto", pr: 0.5 }}>
                  <SkillCards skills={SKILLS} />
                </Box>
              </SectionCard>
            </SectionBlock>
          </Box>

          <Box sx={{ minHeight: 0 }}>
            <SectionBlock
              id="experience"
              headline="Timeline"
              title="Experience"
              subtitle="A quick narrative of where I’ve delivered value recently."
            >
              <Box
                sx={{ width: "100%", flex: 1, minHeight: 0, display: "flex" }}
              >
                <ExperienceTimeline items={TIMELINE} />
              </Box>
            </SectionBlock>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Box sx={{ mt: { xs: 6, md: 7 } }}>
          <SectionBlock
            id="values"
            headline="Working style"
            title="How I like to work"
            subtitle="Patterns I try to bring to teams so work stays calm and output stays high."
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: { xs: 1.75, md: 2 },
              }}
            >
              {[
                {
                  title: "Clarity → Execution",
                  desc: "I’m big on aligning scope and success criteria early, then moving fast with confidence.",
                },
                {
                  title: "Strong defaults",
                  desc: "Reusable components, predictable patterns, and conventions that keep the codebase clean.",
                },
                {
                  title: "Iterate in public",
                  desc: "Ship, measure, refine. I prefer small wins that compound instead of big-bang launches.",
                },
              ].map((c) => (
                <SectionCard key={c.title} sx={{ p: 3 }}>
                  <Typography sx={{ fontWeight: 900, color: "text.primary" }}>
                    {c.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mt: 1 }}>
                    {c.desc}
                  </Typography>
                </SectionCard>
              ))}
            </Box>
          </SectionBlock>
        </Box>
      </Container>

      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="caption" sx={{ color: alpha("#fff", 0.7) }}>
            © {new Date().getFullYear()} Martin Garcia — built with Next.js +
            MUI
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
