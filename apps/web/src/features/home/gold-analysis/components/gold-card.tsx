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
    <GBCard className="transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/40">

      <div className="flex items-center justify-between">
        <GBHeading level={3}>XAU/USD</GBHeading>

        <span className="rounded-full bg-green-500/15 px-3 py-1 text-sm font-semibold text-green-400">
          {data.trend}
        </span>
      </div>

      <div className="mt-8 space-y-4">

        <div className="flex justify-between">
          <GBText variant="muted">Current Price</GBText>
          <span className="font-semibold">{data.currentPrice}</span>
        </div>

        <div className="flex justify-between">
          <GBText variant="muted">Support</GBText>
          <span>{data.support}</span>
        </div>

        <div className="flex justify-between">
          <GBText variant="muted">Resistance</GBText>
          <span>{data.resistance}</span>
        </div>

        <div className="flex justify-between">
          <GBText variant="muted">Target</GBText>
          <span className="text-yellow-400 font-semibold">
            {data.target}
          </span>
        </div>

      </div>

      <div className="mt-8 flex items-center gap-2 rounded-xl bg-yellow-500/10 p-4 text-yellow-400">
        <ArrowUpRight size={18} />
        Daily Professional Gold Analysis
      </div>

    </GBCard>
  );
}