"use client";

import { TrendingUp, Activity, BarChart3 } from "lucide-react";

import { FadeIn } from "@/components/animations";

export function DashboardPreview() {
  return (
    <FadeIn delay={0.3}>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-yellow-500/30">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">
            Genesis Dashboard
          </h3>

          <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
            ● Live
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-5">

          {/* Gold Signal */}
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 transition hover:border-yellow-500/30">

            <div className="flex items-center justify-between">

              <p className="text-sm text-zinc-400">
                Gold Signal
              </p>

              <TrendingUp
                size={20}
                className="text-green-400"
              />

            </div>

            <p className="mt-3 text-3xl font-bold text-white">
              BUY XAUUSD
            </p>

            <div className="mt-3 flex items-center gap-2 text-green-400">
              <TrendingUp size={18} />
              +248 Pips
            </div>

          </div>

          {/* Accuracy */}
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 transition hover:border-yellow-500/30">

            <div className="flex items-center justify-between">

              <p className="text-sm text-zinc-400">
                Accuracy
              </p>

              <Activity
                size={20}
                className="text-yellow-400"
              />

            </div>

            <p className="mt-3 text-5xl font-bold text-yellow-400">
              95%
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Last 90 Days
            </p>

          </div>

          {/* Community */}
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 transition hover:border-yellow-500/30">

            <div className="flex items-center justify-between">

              <p className="text-sm text-zinc-400">
                Community
              </p>

              <BarChart3
                size={20}
                className="text-blue-400"
              />

            </div>

            <p className="mt-3 text-3xl font-bold text-white">
              25K+
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Active Traders
            </p>

          </div>

        </div>

      </div>
    </FadeIn>
  );
}