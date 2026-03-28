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
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">
            Preparation Focus
          </p>
          <p className="mt-4 text-lg leading-relaxed text-body">{content.closingText}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {content.points.map((point) => (
            <article
              key={point}
              className="rounded-2xl border border-navy/10 bg-surface p-5 shadow-card"
            >
              <div className="inline-flex rounded-lg bg-navy/5 p-2 text-navy">
                <Check className="h-4 w-4" />
              </div>
              <p className="mt-3 leading-relaxed text-body">{point}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
