import { CountUp } from "@/components/animations";
import { GBContainer } from "@/components/common/gb-container";
import { GBSection } from "@/components/common/gb-section";

const stats = [
  {
    value: 25,
    suffix: "K+",
    label: "Community Members",
  },
  {
    value: 150,
    suffix: "+",
    label: "Trading Lessons",
  },
  {
    value: 95,
    suffix: "%",
    label: "Signal Accuracy",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Market Coverage",
  },
];

export function StatsSection() {
  return (
    <GBSection>
      <GBContainer>

        <div
          className="
            grid
            grid-cols-2
            gap-6
            lg:grid-cols-4
          "
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                text-center
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[var(--primary)]
                hover:bg-white/10
              "
            >
              <h3
                className="
                  text-3xl
                  font-bold
                  text-[var(--primary)]
                  sm:text-4xl
                "
              >
                <CountUp
                  end={item.value}
                  suffix={item.suffix}
                />
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  text-zinc-400
                  sm:text-base
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </GBContainer>
    </GBSection>
  );
}