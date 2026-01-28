const SKILLS = [
  // Frontend
  "React",
  "Next.js (App Router)",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Material UI",
  "HTML5",
  "CSS3",
  "Responsive Design",
  "Component Architecture",
  "State Management",

  // APIs / Data
  "REST APIs",
  "GraphQL (Apollo Client)",
  "PostgreSQL",
  "SQL",
  "API Integration",

  // Dev Practices
  "Git / Version Control",
  "Code Reviews",
  "Debugging",
  "Testing (Post-deployment / QA)",
  "Performance Optimization",

  // Delivery / Tools
  "CI/CD (Exposure)",
  "Jira",
  "Agile / Scrum",
  "Confluence",

  // Bonus (only if you’re comfortable)
  "Next.js Server Components",
  "Server Actions",
];

const SkillSnapshot = () => (
  <section className="w-full lg:w-1/2 mx-auto max-w-5xl px-6 pb-20">
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="flex items-end justify-center gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Skills Snapshot</h2>
        </div>
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
