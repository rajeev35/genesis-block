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
    <GBCard className="transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/40">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500/10">
        <Users className="text-yellow-400" size={28} />
      </div>

      <GBHeading level={4}>{platform.name}</GBHeading>

      <GBText variant="gold" className="mt-2">
        {platform.members}
      </GBText>

      <GBText variant="muted" className="mt-4">
        {platform.description}
      </GBText>

      <GBButton className="mt-6 w-full">
        {platform.buttonText}
      </GBButton>
    </GBCard>
  );
}