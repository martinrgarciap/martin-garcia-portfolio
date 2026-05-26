"use client";

import { Box, Chip, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

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

type SkillsSectionProps = {
  showHeading?: boolean;
  heading?: string;
  subheading?: string;
  headingTone?: "light" | "dark";
  compact?: boolean;
};

const skillColor = {
  blue: {
    bg: alpha("#3B82F6", 0.12),
    border: alpha("#3B82F6", 0.22),
    dot: "#3B82F6",
  },
  green: {
    bg: alpha("#10B981", 0.12),
    border: alpha("#10B981", 0.22),
    dot: "#10B981",
  },
  purple: {
    bg: alpha("#8B5CF6", 0.12),
    border: alpha("#8B5CF6", 0.22),
    dot: "#8B5CF6",
  },
  amber: {
    bg: alpha("#F59E0B", 0.12),
    border: alpha("#F59E0B", 0.22),
    dot: "#F59E0B",
  },
  red: {
    bg: alpha("#EF4444", 0.12),
    border: alpha("#EF4444", 0.22),
    dot: "#EF4444",
  },
};

const skillGroups: SkillGroup[] = [
  {
    title: "Backend & APIs",
    description:
      "Designing production-minded APIs, service boundaries, authentication flows, and backend systems with practical data handling.",
    skills: [
      { label: "Go", color: "green" },
      { label: "Java", color: "green" },
      { label: "Spring Boot", color: "blue" },
      { label: "REST APIs", color: "blue" },
      { label: "Chi", color: "purple" },
      { label: "JWT Auth", color: "amber" },
      { label: "Microservices", color: "red" },
      { label: "Rate Limiting", color: "amber" },
      { label: "Swagger / OpenAPI", color: "purple" },
    ],
  },
  {
    title: "Data & Messaging",
    description:
      "Working with persistence, caching, queues, migrations, and data flows across full-stack and distributed systems.",
    skills: [
      { label: "PostgreSQL", color: "blue" },
      { label: "RabbitMQ", color: "amber" },
      { label: "Redis", color: "red" },
      { label: "SQL", color: "amber" },
      { label: "MongoDB", color: "green" },
      { label: "Docker Compose", color: "blue" },
      { label: "Database Migrations", color: "purple" },
      { label: "Database Seeding", color: "green" },
    ],
  },
  {
    title: "Frontend",
    description:
      "Building polished, responsive interfaces with reusable components, strong layout, and modern TypeScript workflows.",
    skills: [
      { label: "React", color: "blue" },
      { label: "Next.js", color: "purple" },
      { label: "TypeScript", color: "purple" },
      { label: "Tailwind CSS", color: "amber" },
      { label: "Vite", color: "green" },
      { label: "Material UI", color: "blue" },
      { label: "JavaScript", color: "amber" },
      { label: "Responsive Design", color: "green" },
    ],
  },
  {
    title: "Infrastructure & Shipping",
    description:
      "Using container, local Kubernetes, deployment, and collaboration tooling to build, test, and ship with confidence.",
    skills: [
      { label: "Docker", color: "blue" },
      { label: "Kubernetes", color: "purple" },
      { label: "Tilt", color: "green" },
      { label: "Vercel", color: "purple" },
      { label: "GitHub", color: "blue" },
      { label: "Git", color: "red" },
      { label: "JUnit 5", color: "green" },
      { label: "Mockito", color: "purple" },
      { label: "MockMvc", color: "blue" },
      { label: "Maven", color: "amber" },
      { label: "Postman", color: "amber" },
    ],
  },
  {
    title: "Other",
    description:
      "Additional tools and concepts I’ve used across projects and product-style builds.",
    skills: [
      { label: "Node.js", color: "green" },
      { label: "Express.js", color: "blue" },
      { label: "Python", color: "blue" },
      { label: "OpenCV", color: "purple" },
      { label: "Web Scraping", color: "amber" },
      { label: "SendGrid", color: "blue" },
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
        pl: 1.5,
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

function SkillGroupCard({
  group,
  compact = false,
}: {
  group: SkillGroup;
  compact?: boolean;
}) {
  return (
    <Box
      sx={{
        borderRadius: 5,
        background: `linear-gradient(180deg, ${alpha("#FFFFFF", 0.74)}, ${alpha(
          "#DCE6F7",
          0.86,
        )})`,
        border: `1px solid ${alpha("#0B1220", 0.08)}`,
        boxShadow: `0 10px 28px ${alpha("#000", 0.08)}`,
        p: 5,
        minHeight: compact ? "unset" : 220,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontSize: compact ? 18 : 20,
          fontWeight: 900,
          color: "#0F172A",
          lineHeight: 1.15,
        }}
      >
        {group.title}
      </Typography>

      <Typography
        sx={{
          mt: 1,
          color: alpha("#0B1220", 0.68),
          lineHeight: 1.65,
          fontSize: compact ? 14 : 15,
        }}
      >
        {group.description}
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        useFlexGap
        gap={1.15}
        sx={{ mt: 2.25 }}
      >
        {group.skills.map((skill) => (
          <SkillChip
            key={skill.label}
            label={skill.label}
            colorKey={skill.color}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default function SkillsSection({
  showHeading = true,
  heading = "Skills",
  subheading = "The tools and technologies I use to build polished full-stack products.",
  headingTone = "light",
  compact = false,
}: SkillsSectionProps) {
  const headingColor = headingTone === "light" ? "#F6F3EE" : "#0F172A";
  const subheadingColor =
    headingTone === "light" ? alpha("#F6F3EE", 0.72) : alpha("#0B1220", 0.68);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.25 }}>
      {showHeading ? (
        <Box sx={{ mb: 0.5 }}>
          <Typography
            sx={{
              fontSize: compact ? 28 : { xs: 34, md: 42 },
              fontWeight: 950,
              lineHeight: 1.05,
              letterSpacing: -0.4,
              color: headingColor,
            }}
          >
            {heading}
          </Typography>

          <Typography
            sx={{
              mt: 1,
              maxWidth: 760,
              color: subheadingColor,
              fontSize: compact ? 15 : { xs: 16, md: 17 },
              lineHeight: 1.7,
            }}
          >
            {subheading}
          </Typography>
        </Box>
      ) : null}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "1fr 1fr",
          },
          gap: 2,
          alignItems: "stretch",
        }}
      >
        {skillGroups.map((group) => (
          <SkillGroupCard key={group.title} group={group} compact={compact} />
        ))}
      </Box>
    </Box>
  );
}
