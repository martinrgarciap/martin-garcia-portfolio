"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  text,
  className,
}: {
  href: string;
  text?: string;
  className?: string;
}) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={[
        "mx-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors",
        active
          ? "bg-[#0F172A] text-[#F6F1E7]"
          : "text-[#334155] hover:bg-white/70 hover:text-[#0F172A]",
        className,
      ].join(" ")}
    >
      {text}
    </Link>
  );
};

export default NavLink;
