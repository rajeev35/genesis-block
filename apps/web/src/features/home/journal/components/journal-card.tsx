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
    <GBCard className="transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/40">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10">
        <CheckCircle2 className="text-yellow-400" size={24} />
      </div>

      <GBHeading level={4}>
        {feature.title}
      </GBHeading>

      <GBText
        variant="muted"
        className="mt-3"
      >
        {feature.description}
      </GBText>
    </GBCard>
  );
}