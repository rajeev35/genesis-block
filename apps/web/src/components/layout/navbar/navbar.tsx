import { GBContainer } from "@/components/common/gb-container";
import { NavbarActions } from "./navbar-actions";
import { NavbarLinks } from "./navbar-links";
import { NavbarLogo } from "./navbar-logo";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-black/70 backdrop-blur-xl">
      <GBContainer>
        <div className="flex h-18 items-center justify-between">
          <NavbarLogo />

          <NavbarLinks />

          <NavbarActions />

          <MobileMenu />
        </div>
      </GBContainer>
    </header>
  );
}