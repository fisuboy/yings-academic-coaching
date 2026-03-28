import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SiteContent } from "@/types/content";

type AcademicPreparationSectionProps = {
  content: SiteContent["academicPreparation"];
};

export function AcademicPreparationSection({
  content
}: AcademicPreparationSectionProps) {
  return (
    <Section
      id="academic-preparation"
      title={content.title}
      intro={content.intro}
      className="bg-warm"
    >
      <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">
          {content.focusLabel}
        </p>
        <p className="mt-4 max-w-4xl text-lg leading-relaxed text-body">{content.closingText}</p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {content.points.map((point) => (
          <article
            key={point}
            className="rounded-2xl border border-navy/10 bg-surface p-5 shadow-card"
          >
            <div className="flex items-start gap-3">
              <div className="inline-flex shrink-0 rounded-lg bg-navy/5 p-2 text-navy">
                <Check className="h-4 w-4" />
              </div>
              <p className="pt-0.5 leading-relaxed text-body">{point}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
