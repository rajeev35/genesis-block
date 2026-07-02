import { GBButton } from "@/components/common/gb-button";
import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

export function CTASection() {
  return (
    <GBSection>

      <GBContainer>

        <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 via-zinc-900 to-black px-8 py-20 text-center">

          <GBHeading
            level={2}
            className="max-w-3xl mx-auto"
          >
            Ready to Become a Consistent & Profitable Trader?
          </GBHeading>

          <GBText
            variant="muted"
            className="mx-auto mt-6 max-w-2xl text-center"
          >
            Join thousands of traders learning professional strategies,
            receiving premium signals,
            and improving every single day.
          </GBText>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <GBButton>
              Start Learning
            </GBButton>

            <GBButton variant="outline">
              Join Community
            </GBButton>

          </div>

          <GBText
            variant="gold"
            className="mt-8 text-center font-semibold"
          >
            🚀 Trusted by 25,000+ Traders Across India
          </GBText>

        </div>

      </GBContainer>

    </GBSection>
  );
}