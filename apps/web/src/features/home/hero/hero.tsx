import { FadeIn } from "@/components/animations";

import { GradientBackground } from "@/components/background/gradient-background";
import { GlowBackground } from "@/components/background/glow-background";
import { GridBackground } from "@/components/background/grid-background";
import { MouseGlow } from "@/components/background/mouse-glow";

import { GBBadge } from "@/components/common/gb-badge";
import { GBButton } from "@/components/common/gb-button";
import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

import { DashboardPreview } from "./components/dashboard-preview";

export function HeroSection() {
  return (
    <GBSection className="relative overflow-hidden">

      {/* Background */}
      <GradientBackground />
      <GridBackground />
      <GlowBackground />
      <MouseGlow />

      <GBContainer className="relative z-10">
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
          "
        >

          {/* Left Side */}
          <FadeIn>
            <div className="text-center lg:text-left">

              <GBBadge>
                🚀 India's Trading Community
              </GBBadge>

              <GBHeading
                level={1}
                className="
                  mt-6
                  text-4xl
                  leading-tight
                  sm:text-5xl
                  lg:text-7xl
                "
              >
                Learn.
                <br />
                Trade.
                <br />
                Grow.
              </GBHeading>

              <GBText
                variant="muted"
                className="
                  mx-auto
                  mt-6
                  max-w-xl
                  text-base
                  sm:text-lg
                  lg:mx-0
                "
              >
                Professional Trading Education,
                Premium Signals,
                Gold Analysis,
                Trading Journal,
                and Community —
                all in one platform.
              </GBText>

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:justify-center
                  lg:justify-start
                "
              >
                <GBButton className="w-full sm:w-auto">
                  Start Learning
                </GBButton>

                <GBButton
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Explore Signals
                </GBButton>
              </div>

            </div>
          </FadeIn>

          {/* Right Side */}
          <FadeIn delay={0.2}>
            <div
              className="
                mx-auto
                w-full
                max-w-md
                lg:max-w-none
              "
            >
              <DashboardPreview />
            </div>
          </FadeIn>

        </div>
      </GBContainer>

    </GBSection>
  );
}