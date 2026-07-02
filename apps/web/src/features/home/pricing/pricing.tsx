import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

import { PricingCard } from "./components/pricing-card";
import { pricingPlans } from "./data";

export function PricingSection() {
  return (
    <GBSection>
      <GBContainer>

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <GBHeading level={2}>
            Choose Your Plan
          </GBHeading>

          <GBText
            variant="muted"
            className="mx-auto mt-4 text-base sm:text-lg"
          >
            Start free and upgrade anytime to unlock premium trading tools,
            expert analysis and exclusive community access.
          </GBText>

        </div>

        <StaggerContainer
          className="
            grid
            gap-8
            sm:grid-cols-2
            xl:grid-cols-3
            items-stretch
          "
        >
          {pricingPlans.map((plan) => (
            <StaggerItem key={plan.name}>
              <PricingCard plan={plan} />
            </StaggerItem>
          ))}
        </StaggerContainer>

      </GBContainer>
    </GBSection>
  );
}