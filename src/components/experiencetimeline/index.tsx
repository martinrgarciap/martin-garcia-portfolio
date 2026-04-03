type TimelineEntry = {
  title: string;
  org: string;
  date: string;
  bullets: string[];
};

type ExperienceTimelineProps = {
  items: TimelineEntry[];
};

export type { TimelineEntry };

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="surface p-5 sm:p-6 lg:p-7">
      <div className="space-y-8">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <article
              key={`${item.title}-${item.org}`}
              className={`relative pl-8 ${!isLast ? "pb-8" : ""}`}
            >
              {!isLast ? (
                <div className="absolute left-[9px] top-7 h-[calc(100%+10px)] w-px bg-white/10" />
              ) : null}

              <div className="absolute left-0 top-2 h-5 w-5 rounded-full border border-sky-400/30 bg-sky-400/10">
                <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400" />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <span className="text-sm font-medium text-slate-400">
                    {item.org}
                  </span>
                </div>

                <p className="text-sm text-slate-400">{item.date}</p>
              </div>

              <ul className="mt-4 space-y-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/35" />
                    <span className="text-sm leading-7 text-slate-300 sm:text-base">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
