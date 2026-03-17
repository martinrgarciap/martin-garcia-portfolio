"use client";

import { Box, Chip, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

import { SectionCard } from "@/components";

type SkillColorKey = "blue" | "green" | "purple" | "amber" | "red";

type SkillItem = {
  label: string;
  color: SkillColorKey;
};

type SkillGroup = {
  title: string;
  description: string;
  skills: SkillItem[];
};

const CARD_BG = "#E9EEF7";
const CARD_GRADIENT = `linear-gradient(180deg, ${alpha("#FFFFFF", 0.92)}, ${alpha(
  "#DCE6F7",
  0.92,
)})`;
const CARD_BORDER = `1px solid ${alpha("#0B1220", 0.12)}`;
const CARD_SHADOW = `0 18px 60px ${alpha("#000", 0.25)}`;

const skillColor = {
  blue: {
    bg: alpha("#3B82F6", 0.12),
    border: alpha("#3B82F6", 0.24),
    dot: "#3B82F6",
  },
  green: {
    bg: alpha("#10B981", 0.12),
    border: alpha("#10B981", 0.24),
    dot: "#10B981",
  },
  purple: {
    bg: alpha("#8B5CF6", 0.12),
    border: alpha("#8B5CF6", 0.24),
    dot: "#8B5CF6",
  },
  amber: {
    bg: alpha("#F59E0B", 0.12),
    border: alpha("#F59E0B", 0.24),
    dot: "#F59E0B",
  },
  red: {
    bg: alpha("#EF4444", 0.12),
    border: alpha("#EF4444", 0.24),
    dot: "#EF4444",
  },
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description:
      "Building polished, responsive interfaces with a strong focus on usability, visual structure, and state-driven UI.",
    skills: [
      { label: "React", color: "blue" },
      { label: "Next.js", color: "purple" },
      { label: "TypeScript", color: "purple" },
      { label: "JavaScript", color: "amber" },
      { label: "Tailwind CSS", color: "amber" },
      { label: "Material UI", color: "blue" },
      { label: "HTML", color: "amber" },
      { label: "CSS", color: "blue" },
      { label: "Responsive Design", color: "green" },
    ],
  },
  {
    title: "Backend",
    description:
      "Designing APIs and backend systems with clean architecture, validation, and practical full-stack integration.",
    skills: [
      { label: "Java", color: "green" },
      { label: "Spring Boot", color: "blue" },
      { label: "Spring Data JPA", color: "green" },
      { label: "Hibernate", color: "purple" },
      { label: "REST APIs", color: "blue" },
      { label: "Validation", color: "amber" },
      { label: "Pagination", color: "red" },
      { label: "Filtering & Search", color: "red" },
      { label: "Exception Handling", color: "amber" },
    ],
  },
  {
    title: "Databases & Data",
    description:
      "Working with relational and document databases, query logic, and data-driven application flows.",
    skills: [
      { label: "PostgreSQL", color: "blue" },
      { label: "MongoDB", color: "green" },
      { label: "SQL", color: "amber" },
      { label: "H2", color: "purple" },
      { label: "Database Seeding", color: "red" },
      { label: "Specifications", color: "purple" },
    ],
  },
  {
    title: "Testing & Tools",
    description:
      "Using practical tooling to build, test, debug, and ship software with confidence.",
    skills: [
      { label: "JUnit 5", color: "green" },
      { label: "Mockito", color: "purple" },
      { label: "MockMvc", color: "blue" },
      { label: "Maven", color: "amber" },
      { label: "Git", color: "red" },
      { label: "GitHub", color: "blue" },
      { label: "Postman", color: "amber" },
      { label: "Vercel", color: "purple" },
      { label: "Railway", color: "green" },
    ],
  },
  {
    title: "Other",
    description:
      "Additional technologies and concepts I’ve used across projects, experiments, and product-style builds.",
    skills: [
      { label: "Node.js", color: "green" },
      { label: "Express.js", color: "blue" },
      { label: "Python", color: "blue" },
      { label: "OpenCV", color: "purple" },
      { label: "Web Scraping", color: "amber" },
      { label: "UI/UX Thinking", color: "red" },
      { label: "Product Mindset", color: "green" },
      { label: "Agile / Scrum", color: "purple" },
    ],
  },
];

function SkillChip({
  label,
  colorKey,
}: {
  label: string;
  colorKey: SkillColorKey;
}) {
  const c = skillColor[colorKey];

  return (
    <Chip
      label={label}
      variant="outlined"
      sx={{
        borderColor: c.border,
        backgroundColor: c.bg,
        color: alpha("#0B1220", 0.8),
        fontWeight: 800,
        "& .MuiChip-label": { px: 1.1 },
        "&:hover": { backgroundColor: alpha(c.dot, 0.16) },
        position: "relative",
        pl: 1.2,
        "&:before": {
          content: '""',
          position: "absolute",
          left: 10,
          width: 8,
          height: 8,
          borderRadius: 999,
          backgroundColor: c.dot,
        },
      }}
    />
  );
}

function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <SectionCard
      sx={{
        p: { xs: 2, sm: 2.5, md: 3 },
        backgroundColor: CARD_BG,
        backgroundImage: CARD_GRADIENT,
        border: CARD_BORDER,
        boxShadow: CARD_SHADOW,
      }}
    >
      <Typography
        sx={{
          fontSize: 24,
          fontWeight: 900,
          color: "#0F172A",
          lineHeight: 1.1,
        }}
      >
        {group.title}
      </Typography>

      <Typography
        sx={{
          mt: 1.25,
          color: alpha("#0B1220", 0.72),
          lineHeight: 1.7,
        }}
      >
        {group.description}
      </Typography>

      <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2.25 }}>
        {[...group.skills]
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((skill) => (
            <SkillChip
              key={skill.label}
              label={skill.label}
              colorKey={skill.color}
            />
          ))}
      </Stack>
    </SectionCard>
  );
}

export default function SkillsSection() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: 34, md: 52 },
            fontWeight: 950,
            lineHeight: 1.05,
            letterSpacing: -0.5,
            color: "#F6F3EE",
          }}
        >
          Skills
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            maxWidth: 760,
            color: alpha("#F6F3EE", 0.72),
            fontSize: { xs: 16, md: 18 },
            lineHeight: 1.7,
          }}
        >
          A mix of frontend, backend, testing, and deployment tools I’ve used to
          build polished interfaces and full-stack applications.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "1fr 1fr",
          },
          gap: 3,
        }}
      >
        {skillGroups.map((group) => (
          <SkillGroupCard key={group.title} group={group} />
        ))}
      </Box>
    </Box>
  );
}
