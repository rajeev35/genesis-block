import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

import { goldAnalysis } from "./data";
import { GoldCard } from "./components/gold-card";

export function GoldAnalysisSection() {
  return (
    <GBSection>

      <GBContainer>

        <div className="mb-14 flex flex-col items-center">

            <GBHeading level={2}>
              Daily Gold Analysis
            </GBHeading>

            <GBText
                variant="muted"
                className="mt-4 max-w-2xl text-center"
            >
                Get daily professional Gold (XAU/USD) market outlook,
                support & resistance levels,
                trend direction,
                and trading opportunities.
            </GBText>

        </div>

        <div className="mx-auto max-w-xl">
          <GoldCard data={goldAnalysis} />
        </div>

      </GBContainer>

    </GBSection>
  );
}