"use client";

import SocialLinks from "@/components/sociallinks";
import TypingAnimation from "@/components/typing-animation";

const SKILLS = [
  "React",
  "Next.js",
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

export default function Home() {
  return (
    <main className="w-full absolute min-h-screen flex flex-col gap-8 md:flex-row md:items-startjustify-center items-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#A78BFA]/20 blur-3xl" />
        <div className="absolute top-24 -right-24 h-[420px] w-[420px] rounded-full bg-[#6EE7B7]/16 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-[520px] w-[520px] rounded-full bg-[#FF6B6B]/14 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <section className=" md:w-3/5 relative mx-auto flex w-full max-w-6xl justify-center px-6 py-16 md:py-24">
        <div className="items-center">
          <div>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
              Hello! I’m{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#2215b2] via-[#1994c8] to-[#5c40b1] bg-clip-text text-transparent">
                  Martin Garcia
                </span>
              </span>
            </h1>

            <p className="mt-5 text-pretty text-lg leading-relaxed text-[#A7B0C3] md:text-xl">
              I build clean, fast, customer-facing experiences and love turning
              messy requirements into polished product.
            </p>

            <div className="mt-6 flex items-baseline gap-3 text-lg md:text-xl">
              <span className="text-[#A7B0C3]">I am a</span>
              <span className="font-semibold text-[#F6F3EE]">
                <TypingAnimation
                  sequenceText={[
                    "Frontend Software Engineer",
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
      <section className="w-full md:w-2/5 mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Skills Snapshot</h2>
            </div>

            <a
              href="/about"
              className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              See more →
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white/80"
              >
                {skill}
              </span>
            ))}
          </div>
          <SocialLinks />
        </div>
      </section>
    </main>
  );
}
