import Link from "next/link";

import NavLink from "./navlink";

const NavBar = () => (
  <div className="w-full pl-10 flex justify-between bg-black px-5 py-2 font-kode-mono">
    <Link href="/" className="bg-white text-black font-bold rounded-md px-2">
      <div>Martin</div>
      <div className="ml-2">Garcia</div>
    </Link>
    <nav className="flex items-center">
      <NavLink href="/" text="Home" />
      <NavLink href="/about" text="About Me" />
      <NavLink href="/projects" text="Projects" />
      <NavLink href="/socials" text="Socials" />
    </nav>
  </div>
);

export default NavBar;
