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

  // Bonus
  "Next.js Server Components",
  "Server Actions",
];

const SkillSnapshot = () => (
  <section className="w-full lg:w-1/2 mx-auto max-w-5xl px-6">
    <div
      className="
        rounded-2xl
        border
        p-6
        shadow-[0_8px_30px_rgba(0,0,0,0.18)]
      "
      style={{
        backgroundColor: "#E9EEF7",
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(220,230,247,0.9))",
        borderColor: "rgba(11,18,32,0.12)",
        color: "#0B1220",
      }}
    >
      <div className="flex items-end justify-center gap-6">
        <h2 className="text-2xl font-bold" style={{ color: "#0B1220" }}>
          Skills Snapshot
        </h2>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="rounded-full border px-3 py-1 text-sm"
            style={{
              borderColor: "rgba(11,18,32,0.12)",
              backgroundColor: "rgba(11,18,32,0.06)",
              color: "rgba(11,18,32,0.72)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default SkillSnapshot;
