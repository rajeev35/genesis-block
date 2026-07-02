import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

import { JournalCard } from "./components/journal-card";
import { journalFeatures } from "./data";

export function JournalSection() {
  return (
    <GBSection>
      <GBContainer>

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <GBHeading level={2}>
            Trading Journal
          </GBHeading>

          <GBText
            variant="muted"
            className="mx-auto mt-4 text-base sm:text-lg"
          >
            Build consistency by tracking every trade,
            analyzing your performance,
            and improving your trading psychology.
          </GBText>

        </div>

        <StaggerContainer
          className="
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >

          {journalFeatures.map((feature) => (
            <StaggerItem key={feature.title}>
              <JournalCard feature={feature} />
            </StaggerItem>
          ))}

        </StaggerContainer>

      </GBContainer>
    </GBSection>
  );
}