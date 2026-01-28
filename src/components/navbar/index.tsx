import SocialLinks from "@/components/sociallinks";
import Link from "next/link";

import NavLink from "./navlink";

const NavBar = () => (
  <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur">
    <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
      <Link
        href="/"
        className="rounded-lg bg-[#0F172A] px-3 py-2 font-bold text-white shadow-sm transition hover:brightness-95"
      >
        <div>Martin Garcia Portfolio</div>
      </Link>
      <nav className="flex items-center">
        <NavLink href="/" text="Home" />
        <NavLink href="/about" text="About Me" />
        <NavLink href="/projects" text="Projects" />
        <SocialLinks
          iconClassName="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10
               transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30
               text-[#334155] hover:bg-white/70 hover:text-[#0F172A]
               
               "
        />
      </nav>
    </div>
  </header>
);

export default NavBar;
