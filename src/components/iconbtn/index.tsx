import Link from "next/link";

const IconBtn = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/80
               transition hover:bg-white/15 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
  >
    {children}
  </Link>
);

export default IconBtn;
