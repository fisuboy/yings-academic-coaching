import { Section } from "@/components/ui/Section";
import { SiteContent } from "@/types/content";

type HowItWorksSectionProps = {
  content: SiteContent["howItWorks"];
};

export function HowItWorksSection({ content }: HowItWorksSectionProps) {
  return (
    <Section id="how-it-works" title={content.title} intro={content.intro} className="bg-surface">
      <div className="grid gap-5 md:grid-cols-3">
        {content.steps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
              {index + 1}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-navy">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{step.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
