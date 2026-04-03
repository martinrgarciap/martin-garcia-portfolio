import { ExperienceTimeline, SectionBlock, SkillsSection } from "@/components";

const TIMELINE = [
  {
    title: "Scrum Master",
    org: "Auto Loans Services Canada",
    date: "Jun 2024 — Jan 2026",
    bullets: [
      "Facilitated sprint ceremonies, backlog refinement, and team alignment across cross-functional work.",
      "Tracked delivery health through Jira boards, dashboards, and Agile metrics.",
      "Led retrospectives and follow-ups that improved visibility, rhythm, and execution.",
    ],
  },
  {
    title: "Software Engineer",
    org: "Influitive",
    date: "Jan 2022 — Jun 2024",
    bullets: [
      "Built and maintained customer-facing web applications used by large enterprise clients.",
      "Developed reusable React and Next.js components with TypeScript and clean frontend patterns.",
      "Integrated frontend work with GraphQL and REST APIs while improving UI quality and reliability.",
    ],
  },
  {
    title: "Area Supervisor",
    org: "Canada's Wonderland",
    date: "Sept 2019 — Jun 2021",
    bullets: [
      "Oversaw operations across multiple high-volume food and beverage locations.",
      "Led frontline teams, handled staffing decisions, and maintained service standards during peak demand.",
      "Balanced team coordination, guest experience, and day-to-day execution in fast-paced environments.",
    ],
  },
];

const workingStyle = [
  {
    title: "Clarity first",
    desc: "I like clear scope, strong priorities, and less confusion before execution starts.",
    accent: "from-sky-400 to-cyan-300",
  },
  {
    title: "Calm systems",
    desc: "Reusable patterns and strong defaults make teams move faster with less friction.",
    accent: "from-violet-400 to-fuchsia-300",
  },
  {
    title: "Iterate well",
    desc: "I prefer steady improvements, visible progress, and product decisions grounded in use.",
    accent: "from-emerald-400 to-teal-300",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden pb-20 sm:pb-24">
      <div className="floating-orb left-[-120px] top-24 h-[260px] w-[260px] bg-violet-500/20 sm:h-[340px] sm:w-[340px]" />
      <div className="floating-orb right-[-120px] top-28 h-[240px] w-[240px] bg-sky-500/20 sm:h-[320px] sm:w-[320px]" />
      <div className="floating-orb bottom-[-120px] left-1/3 h-[280px] w-[280px] bg-fuchsia-500/15 sm:h-[380px] sm:w-[380px]" />

      <section className="site-container pt-8 sm:pt-12 lg:pt-16">
        <div className="surface-strong p-6 sm:p-8 lg:p-10">
          <span className="eyebrow">About me</span>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                Building clean products
                <br />
                with strong UI instincts
                <br />
                and <span className="text-gradient">practical delivery.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I’m Martin Garcia, a software developer who enjoys turning
                unclear requirements into polished, usable experiences. I care
                about interface quality, calm execution, and building things
                that feel intentional from both the product and engineering
                side.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Focus
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Frontend-first mindset
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Strong attention to layout, spacing, polish, and the way a
                  product feels in use.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Strength
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Product + execution
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  I like bridging clean implementation with practical team
                  delivery and clear priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container mt-16 sm:mt-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionBlock
            id="skills"
            title="What I work with"
            subtitle="A focused snapshot of the tools I’m most comfortable building and shipping with."
          >
            <div className="mt-0">
              <SkillsSection showHeading={false} compact />
            </div>
          </SectionBlock>

          <SectionBlock
            id="experience"
            title="Experience"
            subtitle="A quick view of the environments where I’ve delivered the most value."
          >
            <ExperienceTimeline items={TIMELINE} />
          </SectionBlock>
        </div>
      </section>

      <section className="site-container mt-16 sm:mt-20">
        <SectionBlock
          id="working-style"
          headline="Working style"
          title="How I like to work"
          subtitle="The habits and patterns I try to bring into teams and projects."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {workingStyle.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 sm:p-6"
              >
                <div
                  className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${item.accent}`}
                />
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </SectionBlock>
      </section>

      <footer className="site-container pt-14 text-sm text-slate-400">
        © {new Date().getFullYear()} Martin Garcia
      </footer>
    </main>
  );
}
