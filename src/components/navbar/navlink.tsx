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
  return (
    <Link
      className={`mx-2 p-2  rounded-md ${pathname === href ? "bg-black text-white" : "bg-white hover:bg-black hover:text-white"}  ${className}`}
      href={href}
    >
      {text}
    </Link>
  );
};

export default NavLink;
