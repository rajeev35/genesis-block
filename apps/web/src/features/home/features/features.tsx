import {
  BookOpen,
  CandlestickChart,
  Signal,
} from "lucide-react";

import { StaggerContainer, StaggerItem } from "@/components/animations";

import { GBContainer } from "@/components/common/gb-container";
import { GBFeatureCard } from "@/components/common/gb-feature-card";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

export function FeaturesSection() {
  return (
    <GBSection>
      <GBContainer>

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <GBHeading level={2}>
            Everything You Need
          </GBHeading>

          <GBText
            variant="muted"
            className="mx-auto mt-4 text-base sm:text-lg"
          >
            One Platform for Every Trader.
          </GBText>

        </div>

        <StaggerContainer
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          <StaggerItem>
            <GBFeatureCard
              icon={<BookOpen size={28} />}
              title="Trading Academy"
              description="Professional trading education from beginner to advanced."
            />
          </StaggerItem>

          <StaggerItem>
            <GBFeatureCard
              icon={<Signal size={28} />}
              title="Premium Signals"
              description="High accuracy trading signals with proper risk management."
            />
          </StaggerItem>

          <StaggerItem>
            <GBFeatureCard
              icon={<CandlestickChart size={28} />}
              title="Gold Analysis"
              description="Daily XAUUSD market analysis with key levels."
            />
          </StaggerItem>

        </StaggerContainer>

      </GBContainer>
    </GBSection>
  );
}