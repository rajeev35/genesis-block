import { ArrowUpRight } from "lucide-react";

import { GBCard } from "@/components/common/gb-card";
import { GBHeading } from "@/components/common/gb-heading";
import { GBText } from "@/components/common/gb-text";

import type { GoldAnalysis } from "../types";

interface GoldCardProps {
  data: GoldAnalysis;
}

export function GoldCard({ data }: GoldCardProps) {
  return (
    <GBCard
      className="
        border-white/10
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[var(--primary)]
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <GBHeading level={3}>
          XAU/USD
        </GBHeading>

        <span className="rounded-full bg-green-500/15 px-3 py-1 text-sm font-semibold text-green-400">
          {data.trend}
        </span>
      </div>

      {/* Market Data */}
      <div className="mt-8 space-y-4">

        <div className="flex items-center justify-between">
          <GBText variant="muted">
            Current Price
          </GBText>

          <span className="font-semibold text-white">
            {data.currentPrice}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <GBText variant="muted">
            Support
          </GBText>

          <span className="font-medium">
            {data.support}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <GBText variant="muted">
            Resistance
          </GBText>

          <span className="font-medium">
            {data.resistance}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <GBText variant="muted">
            Target
          </GBText>

          <span className="font-bold text-yellow-400">
            {data.target}
          </span>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-8 rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-4">

        <div className="flex items-center gap-2 text-yellow-400">

          <ArrowUpRight size={18} />

          <span className="font-medium">
            Daily Professional Gold Analysis
          </span>

        </div>

      </div>

    </GBCard>
  );
}