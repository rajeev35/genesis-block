"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { GBContainer } from "@/components/common/gb-container";

import { MobileMenu } from "./mobile-menu";
import { NavbarActions } from "./navbar-actions";
import { NavbarLinks } from "./navbar-links";
import { NavbarLogo } from "./navbar-logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-yellow-500/10 bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <GBContainer>
        <div className="flex h-20 items-center justify-between">

          <NavbarLogo />

          <NavbarLinks />

          <NavbarActions />

          <MobileMenu />

        </div>
      </GBContainer>
    </header>
  );
}