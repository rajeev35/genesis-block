"use client";

import Link from "next/link";

import { GBButton } from "@/components/common/gb-button";

export function NavbarActions() {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      <Link
        href="/login"
        className="
          text-sm
          font-medium
          text-zinc-400
          transition-all
          duration-300
          hover:text-white
        "
      >
        Login
      </Link>

      <GBButton
        className="
          px-6
          shadow-lg
          shadow-yellow-500/20
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:shadow-yellow-500/40
        "
      >
        Get Started
      </GBButton>
    </div>
  );
}