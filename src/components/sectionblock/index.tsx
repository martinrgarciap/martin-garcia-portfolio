type SectionBlockProps = {
  id?: string;
  headline?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionBlock({
  id,
  headline,
  title,
  subtitle,
  children,
  className = "",
}: SectionBlockProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      {headline ? <p className="eyebrow">{headline}</p> : null}

      <h2 className={`section-title ${headline ? "mt-4" : ""}`}>{title}</h2>

      {subtitle ? (
        <p className="section-copy mt-4 max-w-3xl">{subtitle}</p>
      ) : null}

      <div className="mt-8">{children}</div>
    </section>
  );
}
