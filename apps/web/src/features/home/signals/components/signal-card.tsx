import { TrendingDown, TrendingUp } from "lucide-react";

import { GBCard } from "@/components/common/gb-card";
import { GBHeading } from "@/components/common/gb-heading";
import { GBText } from "@/components/common/gb-text";

import type { Signal } from "../types";

interface SignalCardProps {
  signal: Signal;
}

export function SignalCard({ signal }: SignalCardProps) {
  const isBuy = signal.type === "BUY";

  return (
    <GBCard className="transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/40">
      <div className="flex items-center justify-between">
        <GBHeading level={4}>{signal.pair}</GBHeading>

        <span
          className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
            isBuy
              ? "bg-green-500/15 text-green-400"
              : "bg-red-500/15 text-red-400"
          }`}
        >
          {isBuy ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {signal.type}
        </span>
      </div>

      <div className="mt-6 space-y-2 text-sm">
        <div className="flex justify-between">
          <GBText variant="muted">Entry</GBText>
          <span>{signal.entry}</span>
        </div>

        <div className="flex justify-between">
          <GBText variant="muted">Target</GBText>
          <span>{signal.target}</span>
        </div>

        <div className="flex justify-between">
          <GBText variant="muted">Stop Loss</GBText>
          <span>{signal.stopLoss}</span>
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-yellow-500/10 p-3 text-center">
        <GBText variant="muted">Accuracy</GBText>

        <p className="mt-1 text-xl font-bold text-yellow-400">
          {signal.accuracy}
        </p>
      </div>
    </GBCard>
  );
}