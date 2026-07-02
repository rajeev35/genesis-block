import { CheckCircle2 } from "lucide-react";

import { GBCard } from "@/components/common/gb-card";
import { GBHeading } from "@/components/common/gb-heading";
import { GBText } from "@/components/common/gb-text";

import type { JournalFeature } from "../types";

interface JournalCardProps {
  feature: JournalFeature;
}

export function JournalCard({ feature }: JournalCardProps) {
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
      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[var(--primary)]/10
            text-[var(--primary)]
          "
        >
          <CheckCircle2 size={20} />
        </div>

        <GBHeading level={4}>
          {feature.title}
        </GBHeading>

      </div>

      <GBText
        variant="muted"
        className="mt-4 text-sm leading-7 sm:text-base"
      >
        {feature.description}
      </GBText>
    </GBCard>
  );
}