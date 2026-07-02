"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "Academy", href: "#academy" },
  { name: "Signals", href: "#signals" },
  { name: "Pricing", href: "#pricing" },
  { name: "Community", href: "#community" },
  { name: "FAQ", href: "#faq" },
];

export function NavbarLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : false;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "relative text-sm font-medium transition-colors duration-300",
              isActive
                ? "text-yellow-400"
                : "text-zinc-400 hover:text-white"
            )}
          >
            {link.name}

            <span
              className={cn(
                "absolute -bottom-2 left-0 h-0.5 rounded-full bg-yellow-400 transition-all duration-300",
                isActive ? "w-full" : "w-0 group-hover:w-full"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}