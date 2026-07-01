"use client";

import Link from "next/link";
import { GBButton } from "@/components/common/gb-button";

export function NavbarActions() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Link
        href="/login"
        className="text-sm text-zinc-400 hover:text-white"
      >
        Login
      </Link>

      <GBButton>
        Get Started
      </GBButton>
    </div>
  );
}