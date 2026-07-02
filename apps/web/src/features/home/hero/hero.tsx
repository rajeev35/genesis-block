import { GradientBackground } from "@/components/background/gradient-background";
import { GlowBackground } from "@/components/background/glow-background";
import { GridBackground } from "@/components/background/grid-background";

import { GBBadge } from "@/components/common/gb-badge";
import { GBButton } from "@/components/common/gb-button";
import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

import { DashboardPreview } from "./components/dashboard-preview";

export function HeroSection() {
  return (
    <GBSection className="relative overflow-hidden pt-24">

      {/* Background */}
      <GradientBackground />
      <GridBackground />
      <GlowBackground />

      <GBContainer className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}
          <div>
            <GBBadge>
              🚀 India's Trading Community
            </GBBadge>

            <GBHeading
              level={1}
              className="mt-6 text-5xl lg:text-7xl"
            >
              Learn.
              <br />
              Trade.
              <br />
              Grow.
            </GBHeading>

            <GBText
              variant="muted"
              className="mt-8 max-w-xl text-lg"
            >
              Professional Trading Education,
              Premium Signals,
              Gold Analysis,
              Trading Journal,
              and Community —
              all in one platform.
            </GBText>

            <div className="mt-10 flex flex-wrap gap-4">
              <GBButton>
                Start Learning
              </GBButton>

              <GBButton variant="outline">
                Explore Signals
              </GBButton>
            </div>
          </div>

          {/* Right Side */}
          <DashboardPreview />

        </div>
      </GBContainer>
    </GBSection>
  );
}