import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

import { SignalCard } from "./components/signal-card";
import { signals } from "./data";

export function SignalsSection() {
  return (
    <GBSection>
      <GBContainer>

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <GBHeading level={2}>
            Premium Trading Signals
          </GBHeading>

          <GBText
            variant="muted"
            className="mx-auto mt-4 text-base sm:text-lg"
          >
            High-probability Forex, Gold and Crypto signals shared by our experts.
          </GBText>

        </div>

        <StaggerContainer
          className="
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {signals.map((signal) => (
            <StaggerItem
              key={`${signal.pair}-${signal.entry}`}
            >
              <SignalCard signal={signal} />
            </StaggerItem>
          ))}
        </StaggerContainer>

      </GBContainer>
    </GBSection>
  );
}