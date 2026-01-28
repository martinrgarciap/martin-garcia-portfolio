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

const SkillSnapshot = () => (
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
    </div>
  </section>
);

export default SkillSnapshot;
