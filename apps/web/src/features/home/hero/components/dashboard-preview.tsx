import { TrendingUp } from "lucide-react";

export function DashboardPreview() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl">

      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          Genesis Dashboard
        </h3>

        <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
          Live
        </div>
      </div>

      <div className="space-y-4">

        <div className="rounded-xl bg-zinc-900 p-4">
          <p className="text-sm text-zinc-400">
            Gold Signal
          </p>

          <p className="mt-2 text-2xl font-bold text-white">
            BUY XAUUSD
          </p>

          <div className="mt-2 flex items-center gap-2 text-green-400">
            <TrendingUp size={18} />
            +248 pips
          </div>
        </div>

        <div className="rounded-xl bg-zinc-900 p-4">
          <p className="text-sm text-zinc-400">
            Accuracy
          </p>

          <p className="mt-2 text-4xl font-bold text-yellow-400">
            95%
          </p>
        </div>

      </div>

    </div>
  );
}