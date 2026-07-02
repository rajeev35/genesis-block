import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqItems } from "./data";

export function FAQSection() {
  return (
    <GBSection>
      <GBContainer>

        <div className="mb-14 text-center">

          <GBHeading level={2}>
            Frequently Asked Questions
          </GBHeading>

          <GBText
            variant="muted"
            className="mx-auto mt-4 max-w-2xl text-center"
          >
            Everything you need to know about Genesis Block,
            memberships and our trading services.
          </GBText>

        </div>

        <div className="mx-auto max-w-4xl">

          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="text-zinc-400 leading-7">
                  {item.answer}
                </AccordionContent>

              </AccordionItem>
            ))}
          </Accordion>

        </div>

      </GBContainer>
    </GBSection>
  );
}