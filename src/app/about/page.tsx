"use client";

import { ExperienceTimeline, SectionCard, SkillCards } from "@/components";
import type { TimelineEntry } from "@/components/experiencetimeline";
import * as React from "react";

import { Box, Container, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

const SKILLS = [
  // Frontend
  "React",
  "Next.js (App Router)",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Material UI",
  "HTML5",
  "CSS3",
  "Responsive Design",
  "Component Architecture",
  "State Management",

  // APIs / Data
  "REST APIs",
  "GraphQL (Apollo Client)",
  "PostgreSQL",
  "SQL",
  "API Integration",

  // Dev Practices
  "Git / Version Control",
  "Code Reviews",
  "Debugging",
  "Testing (Post-deployment / QA)",
  "Performance Optimization",

  // Delivery / Tools
  "CI/CD (Exposure)",
  "Jira",
  "Agile / Scrum",
  "Confluence",

  // Bonus (only if you’re comfortable)
  "Next.js Server Components",
  "Server Actions",
];

const TIMELINE: TimelineEntry[] = [
  {
    title: "Scrum Master",
    org: "Auto Loans Services Canada",
    date: "Jun 2024 — Jan 2026",
    bullets: [
      "Facilitated daily standups, sprint planning, and backlog refinement for cross-functional teams, using Jira to align priorities, clarify scope, and keep sprint commitments on track through consistent execution.",
      "Maintained Jira boards and dashboards while monitoring key Agile metrics (e.g., burndown, carryover, throughput), improving visibility into progress and enabling earlier detection of delivery risks and slippage.",
      "Led sprint retrospectives and captured actionable follow-ups in Confluence, driving continuous improvement through documented experiments and agreed process adjustments across sprint cycles.",
    ],
  },
  {
    title: "Software Engineer",
    org: "Influitive",
    date: "Jan 2022 — Jun 2024",
    bullets: [
      "Contributed to the development and maintenance of customer-facing web applications used by 400+ enterprise customers, supporting feature delivery and ongoing reliability for organizations including AWS, Adobe, Cisco, and IBM.",
      "Built and optimized reusable React and Next.js components using TypeScript, improving maintainability through consistent patterns, type safety, and clean component architecture across the codebase.",
      "Implemented pixel-accurate, responsive UI using Material UI and Tailwind CSS, partnering closely with design and QA to validate UX details, edge cases, and cross-browser behavior before release.",
      "Integrated frontend features with GraphQL and REST APIs, strengthening data flow and error handling while improving performance through better client-side state management and optimized request patterns.",
    ],
  },
  {
    title: "Area Supervisor",
    org: "Canada's Wonderland",
    date: "Sept 2019 — Jun 2021",
    bullets: [
      "Oversaw day-to-day operations across multiple high-volume food & beverage locations, coordinating staffing, station coverage, and service flow to maintain speed, quality, and guest experience during peak demand.",
      "Led and coached frontline teams (hiring/onboarding, shift leadership, performance feedback), ensuring adherence to safety, cash-handling, and operational standards while improving team consistency and accountability.",
      "Planned and executed daily labor and scheduling decisions based on forecasted traffic and real-time conditions, reallocating resources quickly to reduce bottlenecks and keep service levels stable.",
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
                  Me
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: 16,
                  lineHeight: 1.7,
                  width: "100%",
                }}
              >
                I’m a software engineer who cares about clean UI, predictable
                delivery, and building products people actually enjoy using. I
                like turning unclear requirements into simple, polished
                experiences — and I’m happiest when I’m shipping, iterating, and
                improving.
              </Typography>
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
              subtitle="A snapshot of the tools I’m comfortable shipping with."
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
