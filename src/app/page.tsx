"use client";

import {
  SectionBlock,
  SectionCard,
  SkillsSection,
  TypingAnimation,
} from "@/components";

import { Box } from "@mui/material";

export default function Home() {
  return (
    <main className="relative min-h-[100dvh] m-5 flex flex-col gap-8 min-[900px]:flex-row items-center ">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#A78BFA]/20 blur-3xl" />
        <div className="absolute top-24 -right-24 h-[420px] w-[420px] rounded-full bg-[#6EE7B7]/16 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-[520px] w-[520px] rounded-full bg-[#FF6B6B]/14 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <section className="relative mx-auto flex w-full max-w-6xl justify-center px-6 py-16 min-[900px]:py-24">
        <div className="items-center">
          <div>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight min-[900px]:text-6xl">
              Hello! I’m{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#2215b2] via-[#1994c8] to-[#5c40b1] bg-clip-text text-transparent">
                  Martin Garcia
                </span>
              </span>
            </h1>

            <p className="mt-5 text-pretty text-lg leading-relaxed text-[#A7B0C3] min-[900px]:text-xl">
              I build clean, fast, customer-facing experiences and love turning
              messy requirements into polished product.
            </p>

            <div className="mt-6 flex items-baseline gap-3 text-lg min-[900px]:text-xl">
              <span className="text-[#A7B0C3]">I am a</span>
              <span className="font-semibold text-[#F6F3EE]">
                <TypingAnimation
                  sequenceText={[
                    "Front-end Software Engineer",
                    "Software Developer",
                    "Full Stack Developer",
                    "Team Player",
                    "Coder",
                    "Leader",
                    "Scrum Master",
                    "Electrical Engineer",
                  ]}
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <SectionBlock id="skills" title="What I Know">
        <SectionCard
          sx={{
            p: { xs: 2, md: 3 },
            width: "100%",
            flex: { xs: "unset", md: 1 },
            minHeight: { xs: "auto", md: 0 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              flex: { xs: "unset", md: 1 },
              minHeight: 0,
              overflow: { xs: "visible", md: "auto" },
              pr: { md: 0.5 },
            }}
          >
            <SkillsSection
              subheading="The tools and technologies I use to build polished full-stack products."
              headingTone="dark"
            />
          </Box>
        </SectionCard>
      </SectionBlock>
    </main>
  );
}
