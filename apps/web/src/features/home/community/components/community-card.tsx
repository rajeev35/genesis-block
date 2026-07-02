import { Users } from "lucide-react";

import { GBButton } from "@/components/common/gb-button";
import { GBCard } from "@/components/common/gb-card";
import { GBHeading } from "@/components/common/gb-heading";
import { GBText } from "@/components/common/gb-text";

import type { CommunityPlatform } from "../types";

interface CommunityCardProps {
  platform: CommunityPlatform;
}

export function CommunityCard({ platform }: CommunityCardProps) {
  return (
    <GBCard
      className="
        h-full
        border-white/10
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[var(--primary)]
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-[var(--primary)]/10
          text-[var(--primary)]
        "
      >
        <Users size={22} />
      </div>

      {/* Title */}
      <GBHeading
        level={4}
        className="mt-6"
      >
        {platform.name}
      </GBHeading>

      {/* Members */}
      <GBText
        variant="gold"
        className="mt-2 text-lg font-semibold"
      >
        {platform.members}
      </GBText>

      {/* Description */}
      <GBText
        variant="muted"
        className="mt-4 flex-1 text-sm leading-7 sm:text-base"
      >
        {platform.description}
      </GBText>

      {/* CTA */}
      <GBButton
        className="mt-8 w-full"
      >
        {platform.buttonText}
      </GBButton>
    </GBCard>
  );
}