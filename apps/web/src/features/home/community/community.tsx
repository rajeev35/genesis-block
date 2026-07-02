import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

import { communityPlatforms } from "./data";
import { CommunityCard } from "./components/community-card";

export function CommunitySection() {
  return (
    <GBSection>
      <GBContainer>
        <div className="mb-14 text-center">
          <GBHeading level={2}>
            Join Our Trading Community
          </GBHeading>

          <GBText
            variant="muted"
            className="mx-auto mt-4 max-w-2xl text-center"
          >
            Learn together, share ideas and receive premium market updates
            with thousands of traders.
          </GBText>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {communityPlatforms.map((platform) => (
            <CommunityCard
              key={platform.name}
              platform={platform}
            />
          ))}
        </div>
      </GBContainer>
    </GBSection>
  );
}