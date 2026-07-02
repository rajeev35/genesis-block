import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

import { GoldCard } from "./components/gold-card";
import { goldAnalysis } from "./data";

export function GoldAnalysisSection() {
  return (
    <GBSection>
      <GBContainer>

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <GBHeading level={2}>
            Daily Gold Analysis
          </GBHeading>

          <GBText
            variant="muted"
            className="mx-auto mt-4 text-base sm:text-lg"
          >
            Get daily professional Gold (XAU/USD) market outlook,
            support & resistance levels,
            trend direction,
            and trading opportunities.
          </GBText>

        </div>

        <StaggerContainer className="mx-auto max-w-2xl">

          <StaggerItem>
            <GoldCard data={goldAnalysis} />
          </StaggerItem>

        </StaggerContainer>

      </GBContainer>
    </GBSection>
  );
}