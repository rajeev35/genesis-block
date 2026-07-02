import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

import { CommunityCard } from "./components/community-card";
import { communityPlatforms } from "./data";

export function CommunitySection() {
  return (
    <GBSection>
      <GBContainer>

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <GBHeading level={2}>
            Join Our Trading Community
          </GBHeading>

          <GBText
            variant="muted"
            className="mx-auto mt-4 text-base sm:text-lg"
          >
            Learn together, share ideas and receive premium market updates
            with thousands of traders.
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
          {communityPlatforms.map((platform) => (
            <StaggerItem key={platform.name}>
              <CommunityCard platform={platform} />
            </StaggerItem>
          ))}
        </StaggerContainer>

      </GBContainer>
    </GBSection>
  );
}