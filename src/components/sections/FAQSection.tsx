import { FAQAccordion } from "@/components/FAQAccordion";
import { Section } from "@/components/ui/Section";
import { SiteContent } from "@/types/content";

type FAQSectionProps = {
  content: SiteContent["faq"];
};

export function FAQSection({ content }: FAQSectionProps) {
  return (
    <Section id="faq" title={content.title} className="bg-warm">
      <FAQAccordion items={content.items} />
    </Section>
  );
}
