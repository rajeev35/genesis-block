"use client";

import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Academy", href: "/academy" },
  { name: "Signals", href: "/signals" },
  { name: "Pricing", href: "/pricing" },
  { name: "Community", href: "/community" },
];

export function NavbarLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-sm font-medium text-zinc-400 transition hover:text-white"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}