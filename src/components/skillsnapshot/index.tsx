type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
  dotClass: string;
  chipClass: string;
};

type SkillsSectionProps = {
  showHeading?: boolean;
  heading?: string;
  subheading?: string;
  headingTone?: "light" | "dark";
  compact?: boolean;
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Responsive UI with clean structure and reusable components.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    dotClass: "bg-sky-400",
    chipClass: "border-sky-400/20 bg-sky-400/10 text-sky-100",
  },
  {
    title: "Backend",
    description: "Practical full-stack architecture, APIs, and data handling.",
    skills: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"],
    dotClass: "bg-violet-400",
    chipClass: "border-violet-400/20 bg-violet-400/10 text-violet-100",
  },
  {
    title: "Shipping",
    description:
      "Testing, version control, and deployment tools that keep work moving.",
    skills: ["Git", "GitHub", "JUnit 5", "Vercel", "Railway"],
    dotClass: "bg-emerald-400",
    chipClass: "border-emerald-400/20 bg-emerald-400/10 text-emerald-100",
  },
];

export default function SkillsSection({
  showHeading = true,
  heading = "Selected stack",
  subheading = "A focused snapshot of the tools I use most often.",
  headingTone = "light",
  compact = false,
}: SkillsSectionProps) {
  const isDarkHeading = headingTone === "dark";

  const headingClass = isDarkHeading ? "text-slate-950" : "text-white";
  const subheadingClass = isDarkHeading ? "text-slate-600" : "text-slate-300";
  const cardClass = isDarkHeading
    ? "rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-6"
    : "rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-lg sm:p-6";
  const titleClass = isDarkHeading ? "text-slate-950" : "text-white";
  const bodyClass = isDarkHeading ? "text-slate-600" : "text-slate-300";

  return (
    <div className="flex flex-col gap-5">
      {showHeading ? (
        <div>
          <h3
            className={`text-3xl font-semibold tracking-[-0.05em] sm:text-4xl ${headingClass}`}
          >
            {heading}
          </h3>
          <p
            className={`mt-3 max-w-3xl text-sm leading-7 sm:text-base ${subheadingClass}`}
          >
            {subheading}
          </p>
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className={cardClass}>
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${group.dotClass}`} />
              <h4
                className={`text-lg font-semibold tracking-[-0.03em] sm:text-xl ${titleClass}`}
              >
                {group.title}
              </h4>
            </div>

            <p
              className={`mt-3 text-sm leading-7 ${compact ? "max-w-none" : "max-w-md"} ${bodyClass}`}
            >
              {group.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium ${group.chipClass}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
