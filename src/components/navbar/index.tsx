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
        <NavLink href="/socials" text="Socials" />
      </nav>
    </div>
  </header>
);

export default NavBar;
