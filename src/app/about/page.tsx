import { ExperienceTimeline, SectionBlock } from "@/components";

const TIMELINE = [
  {
    title: "Software Developer & Scrum Master Intern",
    org: "Auto Loans Services Canada",
    date: "June 2024 - Present",
    location: "Toronto, ON",
    bullets: [
      "Developed React and TypeScript features for an internal auto finance lead-management platform, enabling finance managers to search, filter, contact, and update leads throughout the loan-approval workflow.",
      "Contributed to a Go lead service and React integration via REST and gRPC APIs, using MongoDB, Redis, and AWS while writing tests, validating changes, and reviewing code.",
      "Facilitated stand-ups, sprint planning, and backlog refinement; translated requirements into user stories and acceptance criteria, tracked blockers, and coordinated frontend, backend, and QA delivery.",
    ],
  },
  {
    title: "Software Engineer",
    org: "Influitive",
    date: "January 2022 - January 2024",
    location: "Toronto, ON",
    bullets: [
      "Developed and maintained customer-facing web applications used by 400+ enterprise customers, shipping production features for organizations including AWS, Adobe, Cisco, and IBM.",
      "Built reusable, well-documented components with React, Next.js, TypeScript, and Storybook, improving app performance by 30% through optimized rendering, clean code practices, and peer reviews.",
      "Implemented responsive, accessible, API-driven interfaces integrated with REST and GraphQL services, maintaining SEO, automated testing, and code quality across customer-facing workflows.",
      "Shipped full-stack features by pairing React UI changes with Go REST API updates, PostgreSQL-backed data access, integration debugging, production validation, and unit and integration testing.",
      "Reduced UI rendering overhead by 20% through debugging, error handling, API query optimization, and performance tuning while supporting CI/CD deployments across AWS and GCP.",
    ],
  },
  {
    title: "Area Supervisor",
    org: "Canada's Wonderland",
    date: "September 2019 - June 2021",
    location: "Vaughan, ON",
    bullets: [
      "Triaged POS hardware and software incidents by investigating errors, documenting symptoms and operational impact, resolving common issues, and escalating complex failures to IT teams to minimize downtime.",
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

const stackGroups = [
  {
    title: "Backend & APIs",
    dotClass: "bg-sky-400",
    chipClass: "border-sky-400/20 bg-sky-400/10 text-sky-100",
    chips: [
      "Go",
      "Java",
      "Spring Boot",
      "REST APIs",
      "Chi",
      "JWT Auth",
      "Microservices",
      "Swagger",
    ],
  },
  {
    title: "Data & Messaging",
    dotClass: "bg-violet-400",
    chipClass: "border-violet-400/20 bg-violet-400/10 text-violet-100",
    chips: ["PostgreSQL", "RabbitMQ", "Redis", "SQL", "MongoDB"],
  },
  {
    title: "Frontend",
    dotClass: "bg-emerald-400",
    chipClass: "border-emerald-400/20 bg-emerald-400/10 text-emerald-100",
    chips: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    title: "Infrastructure & Tools",
    dotClass: "bg-amber-400",
    chipClass: "border-amber-400/20 bg-amber-400/10 text-amber-100",
    chips: ["Docker", "Kubernetes", "Tilt", "GitHub", "Vercel", "JUnit 5"],
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden pb-20 sm:pb-24">
      <div className="floating-orb left-[-120px] top-24 h-[260px] w-[260px] bg-violet-500/20 sm:h-[340px] sm:w-[340px]" />
      <div className="floating-orb right-[-120px] top-28 h-[240px] w-[240px] bg-sky-500/20 sm:h-[320px] sm:w-[320px]" />
      <div className="floating-orb bottom-[-120px] left-1/3 h-[280px] w-[280px] bg-fuchsia-500/15 sm:h-[380px] sm:w-[380px]" />

      <section className="site-container pt-8 sm:pt-12 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <span className="eyebrow">About me</span>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              I build clean,
              <br />
              polished products
              <br />
              with strong{" "}
              <span className="text-gradient">frontend instincts.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I’m Martin Garcia, a software developer who enjoys turning unclear
              requirements into usable, modern product experiences. I care about
              layout, flow, polish, and building things that feel intentional
              from both the engineering and product side.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="pill">Frontend-first</span>
              <span className="pill">Product-minded</span>
              <span className="pill">Full-stack capable</span>
            </div>
          </div>

          <div className="surface p-5 sm:p-6 lg:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Core stack
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                  What I build with
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {stackGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 sm:p-5"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${group.dotClass}`}
                    />
                    <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.chips.map((chip) => (
                      <span
                        key={chip}
                        className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium ${group.chipClass}`}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-container mt-16 sm:mt-20">
        <SectionBlock
          id="experience"
          title="Experience"
          subtitle="A quick view of the environments where I’ve delivered the most value."
        >
          <ExperienceTimeline items={TIMELINE} />
        </SectionBlock>
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
