import {
  BookOpen,
  CandlestickChart,
  Signal,
} from "lucide-react";

import { GBContainer } from "@/components/common/gb-container";
import { GBFeatureCard } from "@/components/common/gb-feature-card";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

export function FeaturesSection() {
  return (
    <GBSection>
      <GBContainer>

        <div className="mb-14 text-center">

          <GBHeading level={2}>
            Everything You Need
          </GBHeading>

          <GBText
            variant="muted"
            className="mt-4"
          >
            One Platform for Every Trader.
          </GBText>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <GBFeatureCard
            icon={<BookOpen size={28} />}
            title="Trading Academy"
            description="Professional trading education from beginner to advanced."
          />

          <GBFeatureCard
            icon={<Signal size={28} />}
            title="Premium Signals"
            description="High accuracy trading signals with proper risk management."
          />

          <GBFeatureCard
            icon={<CandlestickChart size={28} />}
            title="Gold Analysis"
            description="Daily XAUUSD market analysis with key levels."
          />

        </div>

      </GBContainer>
    </GBSection>
  );
}