import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBPricingCard } from "@/components/common/gb-pricing-card";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

export function PricingSection() {
  return (
    <GBSection>
      <GBContainer>
        <div className="mb-14 text-center">
          <GBHeading level={2}>
            Simple & Transparent Pricing
          </GBHeading>

          <GBText
            variant="muted"
            className="mt-4"
          >
            Choose the plan that fits your trading journey.
          </GBText>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <GBPricingCard
            title="Free"
            price="₹0"
            features={[
              "Trading Notes",
              "Community Access",
              "Market News",
            ]}
          />

          <GBPricingCard
            popular
            title="Pro"
            price="$19"
            features={[
              "Premium Signals",
              "Gold Analysis",
              "TradingView Tools",
              "Priority Support",
            ]}
          />
        </div>
      </GBContainer>
    </GBSection>
  );
}