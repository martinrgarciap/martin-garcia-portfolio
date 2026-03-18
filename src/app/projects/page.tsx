"use client";

import Image from "next/image";
import Link from "next/link";

import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

import { SectionCard } from "@/components";

type TagColorKey = "blue" | "green" | "purple" | "amber";

type ProjectTag = {
  label: string;
  color: TagColorKey;
};

type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tags: ProjectTag[];
  imageSrc?: string;
  imageAlt: string;
  links?: { label: string; href: string }[];
};

type ProjectGroup = {
  heading: string;
  subheading?: string;
  projects: Project[];
};

const PAGE_MAX = 1200;

const CARD_BG = "#E9EEF7";
const CARD_GRADIENT = `linear-gradient(180deg, ${alpha("#FFFFFF", 0.92)}, ${alpha(
  "#DCE6F7",
  0.92,
)})`;
const CARD_BORDER = `1px solid ${alpha("#0B1220", 0.12)}`;
const CARD_SHADOW = `0 18px 60px ${alpha("#000", 0.25)}`;

const tagColor = {
  blue: {
    bg: alpha("#3B82F6", 0.12),
    border: alpha("#3B82F6", 0.25),
    dot: "#3B82F6",
  },
  green: {
    bg: alpha("#10B981", 0.12),
    border: alpha("#10B981", 0.25),
    dot: "#10B981",
  },
  purple: {
    bg: alpha("#8B5CF6", 0.12),
    border: alpha("#8B5CF6", 0.25),
    dot: "#8B5CF6",
  },
  amber: {
    bg: alpha("#F59E0B", 0.12),
    border: alpha("#F59E0B", 0.25),
    dot: "#F59E0B",
  },
};

const groups: ProjectGroup[] = [
  {
    heading: "Web Apps",
    subheading: "Products and full-stack apps I’ve built.",
    projects: [
      {
        title: "PaymentFlow",
        subtitle: "Full-stack payments dashboard",
        description:
          "A full-stack payments dashboard for creating, tracking, filtering, and reviewing transactions. Built with a Spring Boot backend and a React + TypeScript frontend, with support for pagination, search, status updates, risk flagging, and seeded transaction data for realistic testing.",
        tags: [
          { label: "Java", color: "green" },
          { label: "Spring Boot", color: "blue" },
          { label: "PostgreSQL", color: "amber" },
          { label: "React", color: "blue" },
          { label: "TypeScript", color: "purple" },
          { label: "Tailwind CSS", color: "amber" },
        ],
        imageSrc: "/paymentflow.png",
        imageAlt: "PaymentFlow dashboard screenshot",
        links: [
          {
            label: "Live Demo",
            href: "https://paymentflow-khaki.vercel.app",
          },
          {
            label: "GitHub",
            href: "https://github.com/martinrgarciap/paymentflow",
          },
        ],
      },
      {
        title: "Portfolio Website",
        subtitle: "This site",
        description:
          "A focused, product-like portfolio with strong UI polish, responsive layout, and clear storytelling across skills, experience, and projects.",
        tags: [
          { label: "Next.js", color: "blue" },
          { label: "TypeScript", color: "purple" },
          { label: "Material UI", color: "green" },
          { label: "Tailwind CSS", color: "amber" },
        ],
        imageSrc: "/portfolio.png",
        imageAlt: "Portfolio project screenshot",
        links: [
          {
            label: "GitHub",
            href: "https://github.com/martinrgarciap/martin-garcia-portfolio",
          },
        ],
      },
      {
        title: "YelpCamp Campgrounds Finder",
        subtitle: "Plan trips • save spots • search & organize",
        description:
          "A camping trip planner that helps you search campgrounds, save favorites, and organize trip details in one place. Built to feel fast, clean, and practical.",
        tags: [
          { label: "Node.js", color: "green" },
          { label: "Express.js", color: "blue" },
          { label: "MongoDB", color: "amber" },
        ],
        imageSrc: "/campgrounds.png",
        imageAlt: "Campgrounds project screenshot",
        links: [
          {
            label: "Site",
            href: "https://yelpcamp-martin-a114876011e6.herokuapp.com/",
          },
          {
            label: "GitHub",
            href: "https://github.com/martinrgarciap/yelpcamp",
          },
        ],
      },
    ],
  },
  {
    heading: "Games",
    subheading: "Fun builds that still show engineering fundamentals.",
    projects: [
      {
        title: "Pokémon Battle",
        subtitle: "Online battle game",
        description:
          "An online Pokémon battle experience with turn logic, moves, and battle state management. Built to be snappy and replayable.",
        tags: [
          { label: "HTML", color: "amber" },
          { label: "CSS", color: "blue" },
          { label: "Game Logic", color: "purple" },
          { label: "State Management", color: "green" },
        ],
        imageSrc: "/pokemon.png",
        imageAlt: "Pokemon battle project screenshot",
        links: [
          {
            label: "Live Demo",
            href: "https://pokemon-martin-7cd2ab5b6b35.herokuapp.com/",
          },
          {
            label: "GitHub",
            href: "https://github.com/martinrgarciap/pokemonbattle",
          },
        ],
      },
    ],
  },
  {
    heading: "Python",
    subheading:
      "A collection of Python work (utilities, mini-projects, experiments).",
    projects: [
      {
        title: "Python Projects",
        subtitle: "Repo collection",
        description:
          "A couple of Python builds I’ve explored over time, including OpenCV computer-vision experiments, a webcam motion detector and web scraping tools.",
        tags: [
          { label: "Python", color: "blue" },
          { label: "Web Scraping", color: "green" },
          { label: "Data Tools", color: "purple" },
        ],
        imageSrc: "/python.png",
        imageAlt: "Python projects repository screenshot",
        links: [
          {
            label: "GitHub",
            href: "https://github.com/martinrgarciap/PythonProjects",
          },
        ],
      },
    ],
  },
];

function TagChip({
  label,
  colorKey,
}: {
  label: string;
  colorKey: TagColorKey;
}) {
  const c = tagColor[colorKey];

  return (
    <Chip
      label={label}
      variant="outlined"
      sx={{
        borderColor: c.border,
        backgroundColor: c.bg,
        color: alpha("#0B1220", 0.78),
        fontWeight: 700,
        "& .MuiChip-label": { px: 1.1 },
        "&:hover": { backgroundColor: alpha(c.dot, 0.14) },
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

function ProjectRow({ project, flip }: { project: Project; flip?: boolean }) {
  return (
    <SectionCard
      sx={{
        p: { xs: 2, sm: 2.5, md: 3 },
        backgroundColor: CARD_BG,
        backgroundImage: CARD_GRADIENT,
        border: CARD_BORDER,
        boxShadow: CARD_SHADOW,
        overflow: "hidden",
      }}
    >
      <Box
        className={`grid gap-5 lg:gap-8 ${
          flip ? "lg:grid-cols-[1.2fr_0.8fr]" : "lg:grid-cols-[0.8fr_1.2fr]"
        }`}
        sx={{ alignItems: "center" }}
      >
        <Box className={flip ? "lg:order-2" : "lg:order-1"}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              borderRadius: 3,
              border: `1px solid ${alpha("#0B1220", 0.1)}`,
              backgroundColor: alpha("#0B1220", 0.04),
              overflow: "hidden",
              aspectRatio: { xs: "16/10", md: "16/9" },
            }}
          >
            {project.imageSrc ? (
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                style={{ objectFit: "cover" }}
                priority={false}
              />
            ) : (
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at 30% 20%, ${alpha(
                    "#A78BFA",
                    0.35,
                  )}, transparent 55%), radial-gradient(circle at 80% 70%, ${alpha(
                    "#6EE7B7",
                    0.25,
                  )}, transparent 55%), ${alpha("#0B1220", 0.04)}`,
                }}
              />
            )}
          </Box>
        </Box>

        <Box className={flip ? "lg:order-1" : "lg:order-2"}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 900, color: "#0F172A", lineHeight: 1.15 }}
          >
            {project.title}
          </Typography>

          {project.subtitle ? (
            <Typography
              sx={{ mt: 0.75, fontWeight: 700, color: alpha("#0B1220", 0.65) }}
            >
              {project.subtitle}
            </Typography>
          ) : null}

          <Typography
            sx={{ mt: 1.5, color: alpha("#0B1220", 0.75), lineHeight: 1.6 }}
          >
            {project.description}
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
            {[...project.tags]
              .sort((a, b) => a.label.localeCompare(b.label))
              .map((t) => (
                <TagChip key={t.label} label={t.label} colorKey={t.color} />
              ))}
          </Stack>

          {project.links?.length ? (
            <Stack direction="row" flexWrap="wrap" gap={1.25} sx={{ mt: 2.5 }}>
              {project.links.map((l) => (
                <Box
                  key={l.href + l.label}
                  component={Link}
                  href={l.href}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      px: 1.75,
                      py: 1,
                      borderRadius: 2,
                      fontWeight: 900,
                      fontSize: 14,
                      color: "#0F172A",
                      backgroundColor: alpha("#0B1220", 0.06),
                      border: `1px solid ${alpha("#0B1220", 0.1)}`,
                      "&:hover": {
                        backgroundColor: alpha("#0B1220", 0.1),
                      },
                    }}
                  >
                    {l.label} →
                  </Box>
                </Box>
              ))}
            </Stack>
          ) : null}
        </Box>
      </Box>
    </SectionCard>
  );
}

export default function ProjectsPage() {
  return (
    <main className="relative w-full">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-[#A78BFA]/16 blur-3xl" />
        <div className="absolute top-28 -right-28 h-[520px] w-[520px] rounded-full bg-[#6EE7B7]/12 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-[620px] w-[620px] rounded-full bg-[#FF6B6B]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <Box
        sx={{
          position: "relative",
          mx: "auto",
          width: "100%",
          maxWidth: PAGE_MAX,
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 6, md: 8 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 34, md: 52 },
            fontWeight: 950,
            lineHeight: 1.05,
            letterSpacing: -0.5,
            color: "#F6F3EE",
          }}
        >
          Projects
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            maxWidth: 720,
            color: alpha("#F6F3EE", 0.7),
            fontSize: { xs: 16, md: 18 },
            lineHeight: 1.7,
          }}
        >
          A selection of work across web apps, games, and Python — built with a
          focus on clean UI, solid fundamentals, and shipping.
        </Typography>

        <Divider sx={{ mt: 4, borderColor: alpha("#F6F3EE", 0.1) }} />

        <Box sx={{ mt: 5, display: "flex", flexDirection: "column", gap: 4 }}>
          {groups.map((g) => (
            <Box
              key={g.heading}
              sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: alpha("#F6F3EE", 0.85),
                      fontWeight: 900,
                      letterSpacing: 1.5,
                      fontSize: 24,
                    }}
                  >
                    {g.heading.toUpperCase()}
                  </Typography>
                  {g.subheading ? (
                    <Typography
                      sx={{ mt: 0.75, color: alpha("#F6F3EE", 0.65) }}
                    >
                      {g.subheading}
                    </Typography>
                  ) : null}
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {g.projects.map((p, idx) => (
                  <ProjectRow key={p.title} project={p} flip={idx % 2 === 1} />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </main>
  );
}
