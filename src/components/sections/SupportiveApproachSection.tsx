import { Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SiteContent } from "@/types/content";

type SupportiveApproachSectionProps = {
  content: SiteContent["supportiveApproach"];
};

export function SupportiveApproachSection({ content }: SupportiveApproachSectionProps) {
  return (
    <Section className="bg-surface">
      <div className="rounded-3xl border border-navy/10 bg-gradient-to-r from-[#fff7eb] to-white p-8 shadow-card sm:p-10">
        <Quote className="h-8 w-8 text-terracotta" aria-hidden="true" />
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy">{content.title}</h2>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-body">{content.text}</p>
      </div>
    </Section>
  );
}
