import type { ReactNode } from "react";

type IconBtnProps = {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
  newTab?: boolean;
};

export default function IconBtn({
  href,
  label,
  children,
  className = "",
  newTab = true,
}: IconBtnProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer noopener" : undefined}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.09] hover:text-white ${className}`}
    >
      {children}
    </a>
  );
}
