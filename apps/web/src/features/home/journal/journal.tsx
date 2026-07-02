import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

import { journalFeatures } from "./data";
import { JournalCard } from "./components/journal-card";

export function JournalSection() {
  return (
    <GBSection>
      <GBContainer>

        <div className="mb-14 text-center">

          <GBHeading level={2}>
            Trading Journal
          </GBHeading>

          <GBText
            variant="muted"
            className="mx-auto mt-4 max-w-2xl text-center"
          >
            Build consistency by tracking every trade,
            analyzing your performance,
            and improving your trading psychology.
          </GBText>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {journalFeatures.map((feature) => (
            <JournalCard
              key={feature.title}
              feature={feature}
            />
          ))}

        </div>

      </GBContainer>
    </GBSection>
  );
}