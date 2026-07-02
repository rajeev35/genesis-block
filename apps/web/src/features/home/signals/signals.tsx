import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

import { signals } from "./data";
import { SignalCard } from "./components/signal-card";

export function SignalsSection() {
  return (
    <GBSection>
      <GBContainer>
        <div className="mb-14 text-center">
          <GBHeading level={2}>
            Premium Trading Signals
          </GBHeading>

          <GBText variant="muted" className="mt-4">
            High-probability Forex, Gold and Crypto signals shared by our experts.
          </GBText>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {signals.map((signal) => (
            <SignalCard
              key={`${signal.pair}-${signal.entry}`}
              signal={signal}
            />
          ))}
        </div>
      </GBContainer>
    </GBSection>
  );
}