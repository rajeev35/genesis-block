import { GBContainer } from "@/components/common/gb-container";
import { GBSection } from "@/components/common/gb-section";

const stats = [
  {
    value: "25K+",
    label: "Community Members",
  },
  {
    value: "150+",
    label: "Trading Lessons",
  },
  {
    value: "95%",
    label: "Signal Accuracy",
  },
  {
    value: "24/7",
    label: "Market Coverage",
  },
];

export function StatsSection() {
  return (
    <GBSection className="py-12">
      <GBContainer>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-center"
            >
              <h3 className="text-4xl font-bold text-yellow-400">
                {item.value}
              </h3>

              <p className="mt-2 text-zinc-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </GBContainer>
    </GBSection>
  );
}