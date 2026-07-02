"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import { GBButton } from "@/components/common/gb-button";

const links = [
  { name: "Home", href: "/" },
  { name: "Academy", href: "#academy" },
  { name: "Signals", href: "#signals" },
  { name: "Pricing", href: "#pricing" },
  { name: "Community", href: "#community" },
  { name: "FAQ", href: "#faq" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden"
      >
        <Menu className="h-7 w-7 text-white" />
      </button>

      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div
            className="
              fixed
              right-0
              top-0
              z-50
              flex
              h-full
              w-80
              flex-col
              border-l
              border-zinc-800
              bg-zinc-950
              p-6
            "
          >
            <div className="mb-10 flex items-center justify-between">
              <span className="text-xl font-bold text-white">
                Genesis Block
              </span>

              <button onClick={() => setOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <nav className="space-y-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg text-zinc-300 transition hover:text-yellow-400"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto">
              <GBButton className="w-full">
                Get Started
              </GBButton>
            </div>
          </div>
        </>
      )}
    </>
  );
}