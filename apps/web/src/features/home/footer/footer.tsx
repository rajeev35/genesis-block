import Link from "next/link";

import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBText } from "@/components/common/gb-text";

import { footerSections } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-20">

      <GBContainer>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div>

            <GBHeading level={3}>
              Genesis Block
            </GBHeading>

            <GBText
              variant="muted"
              className="mt-4"
            >
              Learn. Trade. Grow.
              India's next-generation trading platform.
            </GBText>

          </div>

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
                    className="block text-zinc-400 transition hover:text-yellow-400"
                  >
                    {link.title}
                  </Link>
                ))}

              </div>

            </div>
          ))}

        </div>

        <div className="mt-16 border-t border-zinc-800 pt-8 text-center">

          <GBText variant="muted">
            © 2026 Genesis Block. All Rights Reserved.
          </GBText>

        </div>

      </GBContainer>

    </footer>
  );
}