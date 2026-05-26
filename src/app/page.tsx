import { SectionBlock, SkillsSection } from "@/components";
import Link from "next/link";

const focusAreas = [
  {
    label: "Go",
    className: "border-emerald-400/20 bg-emerald-400/10 text-emerald-100",
  },
  {
    label: "React",
    className: "border-sky-400/20 bg-sky-400/10 text-sky-100",
  },
  {
    label: "Next.js",
    className: "border-violet-400/20 bg-violet-400/10 text-violet-100",
  },
  {
    label: "PostgreSQL",
    className: "border-amber-400/20 bg-amber-400/10 text-amber-100",
  },
];

const strengths = [
  {
    title: "Frontend polish",
    text: "Clean layouts, strong spacing, and interfaces that feel intentional.",
    accent: "from-sky-400 to-cyan-300",
  },
  {
    title: "Full-stack thinking",
    text: "Modern UI paired with practical backend structure and clear data flow.",
    accent: "from-violet-400 to-fuchsia-300",
  },
  {
    title: "Product mindset",
    text: "I care about usability, presentation, and how the whole thing feels.",
    accent: "from-emerald-400 to-teal-300",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-20 sm:pb-24">
      <div className="floating-orb left-[-100px] top-24 h-[260px] w-[260px] bg-violet-500/20 sm:h-[340px] sm:w-[340px]" />
      <div className="floating-orb right-[-120px] top-16 h-[240px] w-[240px] bg-sky-500/20 sm:h-[320px] sm:w-[320px]" />
      <div className="floating-orb bottom-[-120px] left-1/3 h-[280px] w-[280px] bg-fuchsia-500/15 sm:h-[380px] sm:w-[380px]" />

      <section className="site-container pt-8 sm:pt-12 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div>
            <span className="eyebrow">Toronto-based software developer</span>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.065em] text-white sm:text-5xl lg:text-7xl">
              Clean interfaces.
              <br />
              Smart systems.
              <br />
              <span className="text-gradient">Built with taste.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I’m{" "}
              <span className="font-semibold text-white">Martin Garcia</span>, a
              developer focused on building polished, modern product experiences
              with strong frontend execution and solid full-stack foundations.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {focusAreas.map((item) => (
                <span
                  key={item.label}
                  className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium ${item.className}`}
                >
                  {item.label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold text-slate-300 transition duration-200 hover:bg-white/[0.06] hover:text-white"
              >
                About Me
              </Link>
            </div>
          </div>

          <div className="surface-strong p-5 sm:p-6 lg:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Selected strengths
            </p>

            <div className="mt-5 space-y-4">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 sm:p-5"
                >
                  <div
                    className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${item.accent}`}
                  />
                  <h2 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-container mt-16 sm:mt-20">
        <SectionBlock
          id="skills"
          title="Selected stack"
          subtitle="The core tools I use most, kept focused."
        >
          <SkillsSection showHeading={false} compact />
        </SectionBlock>
      </section>
    </main>
  );
}
