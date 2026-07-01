"use client";

import { Menu } from "lucide-react";

export function MobileMenu() {
  return (
    <button className="lg:hidden">
      <Menu className="h-6 w-6 text-white" />
    </button>
  );
}