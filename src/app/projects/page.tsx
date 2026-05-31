import Image from "next/image";
import Link from "next/link";

type TagTone = "sky" | "violet" | "emerald" | "amber";

type ProjectTag = {
  label: string;
  tone: TagTone;
};

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tags: ProjectTag[];
  imageSrc?: string;
  imageAlt?: string;
  links: ProjectLink[];
  featured?: boolean;
};

type ProjectGroup = {
  heading: string;
  subheading: string;
  id: string;
  projects: Project[];
};

const groups: ProjectGroup[] = [
  {
    id: "web-apps",
    heading: "Web Apps",
    subheading: "Products and full-stack apps I’ve built.",
    projects: [
      {
        title: "RideShare",
        subtitle: "Distributed ride-sharing backend",
        description:
          "A distributed Uber-style ride-sharing backend built with Go microservices, RabbitMQ messaging, Docker, Kubernetes, and Tilt. It models service boundaries for API access, trip orchestration, driver workflows, and production-ready deployment manifests.",
        tags: [
          { label: "Go", tone: "emerald" },
          { label: "Microservices", tone: "sky" },
          { label: "RabbitMQ", tone: "amber" },
          { label: "Docker", tone: "sky" },
          { label: "Kubernetes", tone: "violet" },
          { label: "Tilt", tone: "emerald" },
        ],
        imageSrc: "/rideshare.png",
        imageAlt: "RideShare application screenshot",
        links: [
          {
            label: "Live Demo",
            href: "https://ride-share-seven-blond.vercel.app/",
          },
          {
            label: "GitHub",
            href: "https://github.com/martinrgarciap/RideShare",
          },
        ],
        featured: true,
      },
      {
        title: "GopherSocial",
        subtitle: "Go social-network API",
        description:
          "A Go social-network API with JWT authentication, posts, comments, followers, user feeds, invitation-based account activation, rate limiting, Swagger docs, PostgreSQL persistence, and optional Redis-backed caching. Includes a small Vite, React, and TypeScript frontend.",
        tags: [
          { label: "Go", tone: "emerald" },
          { label: "Chi", tone: "sky" },
          { label: "PostgreSQL", tone: "amber" },
          { label: "Redis", tone: "violet" },
          { label: "JWT", tone: "sky" },
          { label: "React", tone: "emerald" },
        ],
        imageSrc: "/gophersocial.png",
        imageAlt: "GopherSocial project screenshot",
        links: [
          {
            label: "Live Demo",
            href: "https://gopher-social-five.vercel.app/",
          },
          {
            label: "GitHub",
            href: "https://github.com/martinrgarciap/GopherSocial",
          },
        ],
      },
      {
        title: "PaymentFlow",
        subtitle: "Full-stack payments dashboard",
        description:
          "A full-stack payments dashboard for creating, tracking, filtering, and reviewing transactions. Built with a Spring Boot backend and a React + TypeScript frontend, with pagination, search, status updates, risk flagging, and seeded transaction data for realistic testing.",
        tags: [
          { label: "Java", tone: "emerald" },
          { label: "Spring Boot", tone: "sky" },
          { label: "PostgreSQL", tone: "amber" },
          { label: "React", tone: "sky" },
          { label: "TypeScript", tone: "violet" },
          { label: "Tailwind CSS", tone: "amber" },
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
          { label: "Next.js", tone: "sky" },
          { label: "TypeScript", tone: "violet" },
          { label: "Material UI", tone: "emerald" },
          { label: "Tailwind CSS", tone: "amber" },
        ],
        imageSrc: "/portfolio.png",
        imageAlt: "Portfolio website screenshot",
        links: [
          {
            label: "Live Demo",
            href: "https://martin-garcia-portfolio.vercel.app/",
          },
          {
            label: "GitHub",
            href: "https://github.com/martinrgarciap/martin-garcia-portfolio",
          },
        ],
      },
      {
        title: "YelpCamp Campgrounds Finder",
        subtitle: "Plan trips, save spots, search and organize",
        description:
          "A camping trip planner that helps users search campgrounds, save favorites, and organize trip details in one place. Built to feel fast, clean, and practical.",
        tags: [
          { label: "Node.js", tone: "emerald" },
          { label: "Express.js", tone: "sky" },
          { label: "MongoDB", tone: "amber" },
        ],
        imageSrc: "/campgrounds.png",
        imageAlt: "YelpCamp project screenshot",
        links: [
          {
            label: "GitHub",
            href: "https://github.com/martinrgarciap/yelpcamp",
          },
        ],
      },
    ],
  },
  {
    id: "games",
    heading: "Games",
    subheading: "Fun builds that still show engineering fundamentals.",
    projects: [
      {
        title: "Pokémon Battle",
        subtitle: "Online battle game",
        description:
          "An online Pokémon battle experience with turn logic, moves, and battle state management. Built to be snappy and replayable.",
        tags: [
          { label: "HTML", tone: "amber" },
          { label: "CSS", tone: "sky" },
          { label: "Game Logic", tone: "violet" },
          { label: "State Management", tone: "emerald" },
        ],
        imageSrc: "/pokemon.png",
        imageAlt: "Pokemon battle screenshot",
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
    id: "python",
    heading: "Python",
    subheading: "Utilities, mini-projects, and experiments.",
    projects: [
      {
        title: "Python Projects",
        subtitle: "Repo collection",
        description:
          "A collection of Python builds, including OpenCV computer-vision experiments, a webcam motion detector, and web scraping tools.",
        tags: [
          { label: "Python", tone: "sky" },
          { label: "Web Scraping", tone: "emerald" },
          { label: "Data Tools", tone: "violet" },
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

function toneClasses(tone: TagTone) {
  switch (tone) {
    case "sky":
      return "border-sky-400/20 bg-sky-400/10 text-sky-100";
    case "violet":
      return "border-violet-400/20 bg-violet-400/10 text-violet-100";
    case "emerald":
      return "border-emerald-400/20 bg-emerald-400/10 text-emerald-100";
    case "amber":
      return "border-amber-400/20 bg-amber-400/10 text-amber-100";
    default:
      return "border-white/10 bg-white/[0.06] text-slate-200";
  }
}

function ProjectTagChip({ tag }: { tag: ProjectTag }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium ${toneClasses(
        tag.tone,
      )}`}
    >
      {tag.label}
    </span>
  );
}

function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {links.map((link, index) => {
        const isPrimary = index === 0;

        return (
          <a
            key={`${link.label}-${link.href}`}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className={isPrimary ? "btn-primary" : "btn-secondary"}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
}

function ProjectCard({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <article className="surface overflow-hidden p-4 sm:p-5 lg:p-6">
      <div
        className={`grid gap-6 lg:items-center ${
          reverse
            ? "lg:grid-cols-[1.12fr_0.88fr]"
            : "lg:grid-cols-[0.88fr_1.12fr]"
        }`}
      >
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04]">
            {project.imageSrc ? (
              <Image
                src={project.imageSrc}
                alt={project.imageAlt ?? `${project.title} project preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full flex-col justify-between bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.26),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(30,41,59,0.84))] p-6">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                  <span className="h-3 w-3 rounded-full bg-sky-300" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
                    API project
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                    {project.title}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <div className="flex flex-col gap-3">
            {project.featured ? (
              <span className="eyebrow w-fit">Featured project</span>
            ) : null}

            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                {project.title}
              </h3>

              {project.subtitle ? (
                <p className="mt-2 text-base font-medium text-slate-300 sm:text-lg">
                  {project.subtitle}
                </p>
              ) : null}
            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              {project.description}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {project.tags.map((tag) => (
              <ProjectTagChip key={tag.label} tag={tag} />
            ))}
          </div>

          <ProjectLinks links={project.links} />
        </div>
      </div>
    </article>
  );
}

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
        {title}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
        {subtitle}
      </p>
    </div>
  );
}

export default function ProjectsPage() {
  const featuredProject =
    groups
      .find((group) => group.projects.some((project) => project.featured))
      ?.projects.find((project) => project.featured) ?? groups[0].projects[0];

  const remainingGroups = groups.map((group) => ({
    ...group,
    projects: group.projects.filter((project) => project !== featuredProject),
  }));

  return (
    <main className="relative overflow-hidden pb-20 sm:pb-24">
      <div className="floating-orb left-[-120px] top-24 h-[260px] w-[260px] bg-violet-500/20 sm:h-[340px] sm:w-[340px]" />
      <div className="floating-orb right-[-120px] top-24 h-[250px] w-[250px] bg-sky-500/20 sm:h-[330px] sm:w-[330px]" />
      <div className="floating-orb bottom-[-120px] left-1/3 h-[300px] w-[300px] bg-fuchsia-500/15 sm:h-[390px] sm:w-[390px]" />

      <section className="site-container pt-8 sm:pt-12 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div>
            <span className="eyebrow">Projects</span>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              Selected work across
              <br />
              web apps, games,
              <br />
              and <span className="text-gradient">practical experiments.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              A selection of projects built with a focus on clean UI, solid
              fundamentals, and shipping. I care about how things work, but also
              how they feel to use.
            </p>
          </div>

          <div className="surface p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Browse by type
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {groups.map((group) => (
                <Link
                  key={group.id}
                  href={`#${group.id}`}
                  className="pill transition hover:bg-white/[0.10]"
                >
                  {group.heading}
                </Link>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Total
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {groups.reduce(
                    (sum, group) => sum + group.projects.length,
                    0,
                  )}
                </p>
                <p className="mt-1 text-sm text-slate-300">Projects</p>
              </div>

              <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Focus
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Clean UI
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Polish and structure
                </p>
              </div>

              <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Stack
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Full stack
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Frontend to backend
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container mt-16 sm:mt-20">
        <div id="featured">
          <SectionHeader
            title="Featured"
            subtitle="The project I’d want someone to open first."
          />
          <div className="mt-6">
            <ProjectCard project={featuredProject} />
          </div>
        </div>
      </section>

      <section className="site-container mt-16 sm:mt-20">
        <div className="space-y-14">
          {remainingGroups.map((group) =>
            group.projects.length ? (
              <section key={group.id} id={group.id}>
                <SectionHeader
                  title={group.heading}
                  subtitle={group.subheading}
                />

                <div className="mt-6 space-y-5">
                  {group.projects.map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      reverse={index % 2 === 1}
                    />
                  ))}
                </div>
              </section>
            ) : null,
          )}
        </div>
      </section>
    </main>
  );
}
