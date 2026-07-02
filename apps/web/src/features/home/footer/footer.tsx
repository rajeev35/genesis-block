import Link from "next/link";

import { FadeIn } from "@/components/animations";

import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBText } from "@/components/common/gb-text";

import { footerSections } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">

      <GBContainer>

        <FadeIn>

          <div
            className="
              grid
              gap-12
              py-16
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {/* Brand */}

            <div>

              <GBHeading level={3}>
                Genesis Block
              </GBHeading>

              <GBText
                variant="muted"
                className="mt-4 max-w-xs leading-7"
              >
                Learn. Trade. Grow.
                India's next-generation trading platform.
              </GBText>

            </div>

            {/* Footer Links */}

            {footerSections.map((section) => (
              <div key={section.title}>

                <GBHeading
                  level={4}
                  className="mb-5"
                >
                  {section.title}
                </GBHeading>

                <div className="space-y-3">

                  {section.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="
                        block
                        text-zinc-400
                        transition-colors
                        duration-300
                        hover:text-[var(--primary)]
                      "
                    >
                      {link.title}
                    </Link>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </FadeIn>

        {/* Bottom */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-white/10
            py-8
            text-center
            sm:flex-row
          "
        >

          <GBText variant="muted">
            © 2026 Genesis Block. All Rights Reserved.
          </GBText>

          <GBText variant="gold">
            Made with ❤️ for Traders
          </GBText>

        </div>

      </GBContainer>

    </footer>
  );
}