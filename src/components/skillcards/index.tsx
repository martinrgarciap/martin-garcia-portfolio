"use client";

import { Box, Chip, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

type Section = {
  title: string;
  color: string;
  skills: string[];
};

const sortAZ = (arr: string[]) =>
  [...arr].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" }),
  );

const sections: Section[] = [
  {
    title: "Frontend",
    color: "#3B82F6",
    skills: [
      "Component Architecture",
      "CSS3",
      "HTML5",
      "JavaScript (ES6+)",
      "Material UI",
      "Next.js (App Router)",
      "Next.js Server Components",
      "React",
      "Responsive Design",
      "Server Actions",
      "State Management",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    title: "APIs & Data",
    color: "#10B981",
    skills: [
      "API Integration",
      "GraphQL (Apollo Client)",
      "PostgreSQL",
      "REST APIs",
      "SQL",
    ],
  },
  {
    title: "Delivery & Tools",
    color: "#A78BFA",
    skills: [
      "Agile / Scrum",
      "CI/CD (Exposure)",
      "Confluence",
      "Git / Version Control",
      "Jira",
    ],
  },
  {
    title: "Engineering Practices",
    color: "#F59E0B",
    skills: [
      "Code Reviews",
      "Debugging",
      "Performance Optimization",
      "Testing (Post-deployment / QA)",
    ],
  },
];

export default function SkillCards() {
  return (
    <Stack gap={2.25} sx={{ alignContent: "flex-start" }}>
      {sections.map((section) => {
        const skills = sortAZ(section.skills);

        return (
          <Box key={section.title}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                mb: 1.25,
                px: 1.25,
                py: 0.6,
                borderRadius: 999,
                border: `1px solid ${alpha(section.color, 0.25)}`,
                backgroundColor: alpha(section.color, 0.1),
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: section.color,
                  boxShadow: `0 0 0 3px ${alpha(section.color, 0.15)}`,
                }}
              />
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: alpha("#0B1220", 0.78),
                }}
              >
                {section.title}
              </Typography>
            </Box>

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
          </Box>
        );
      })}
    </Stack>
  );
}
