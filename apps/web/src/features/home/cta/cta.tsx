import { FadeIn } from "@/components/animations";

import { GBButton } from "@/components/common/gb-button";
import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

export function CTASection() {
  return (
    <GBSection>
      <GBContainer>

        <FadeIn>

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-yellow-500/20
              bg-gradient-to-br
              from-yellow-500/10
              via-zinc-900
              to-black
              px-6
              py-16
              text-center
              shadow-[0_0_80px_rgba(250,204,21,0.08)]
              sm:px-10
              lg:px-20
              lg:py-24
            "
          >

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.15),transparent_65%)]" />

            <div className="relative z-10 mx-auto max-w-4xl">

              <GBHeading
                level={2}
                className="
                  text-center
                  leading-tight
                "
              >
                Ready to Become a Consistent
                <br className="hidden md:block" />
                & Profitable Trader?
              </GBHeading>

              <GBText
                variant="muted"
                className="
                  mx-auto
                  mt-6
                  max-w-2xl
                  text-center
                  text-base
                  leading-8
                  sm:text-lg
                "
              >
                Join thousands of traders learning professional strategies,
                receiving premium signals, and improving every single day.
              </GBText>

              {/* Stats */}

              <div className="mt-10 flex flex-wrap justify-center gap-8">

                <div>
                  <p className="text-3xl font-bold text-yellow-400">
                    25K+
                  </p>
                  <GBText variant="muted">
                    Traders
                  </GBText>
                </div>

                <div>
                  <p className="text-3xl font-bold text-yellow-400">
                    150+
                  </p>
                  <GBText variant="muted">
                    Lessons
                  </GBText>
                </div>

                <div>
                  <p className="text-3xl font-bold text-yellow-400">
                    95%
                  </p>
                  <GBText variant="muted">
                    Accuracy
                  </GBText>
                </div>

              </div>

              {/* Buttons */}

              <div
                className="
                  mt-12
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-4
                  sm:flex-row
                "
              >
                <GBButton>
                  🚀 Start Learning
                </GBButton>

                <GBButton variant="outline">
                  Join Community
                </GBButton>
              </div>

              {/* Trust */}

              <GBText
                variant="gold"
                className="mt-8 text-center font-semibold"
              >
                ⭐ Trusted by 25,000+ Traders Across India
              </GBText>

            </div>

          </div>

        </FadeIn>

      </GBContainer>
    </GBSection>
  );
}