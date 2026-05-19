import { Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
      id="westbound-launch"
      title={content.title}
      intro={content.intro}
      className="bg-warm"
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-8">
          <p className="inline-flex rounded-full border border-terracotta/20 bg-terracotta/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-terracotta">
            {content.packageName}
          </p>
          <p className="mt-4 text-3xl font-bold text-navy">{content.packagePrice}</p>
          <p className="mt-3 leading-relaxed text-muted">{content.packageSummary}</p>

          <h3 className="mt-6 text-lg font-semibold text-navy">{content.whoItsForLabel}</h3>
          <p className="mt-2 leading-relaxed text-body">{content.whoItsForText}</p>

          <div className="mt-6">
            <Button href="#booking">{content.ctaLabel}</Button>
          </div>
        </article>

        <div className="space-y-4">
          <article className="rounded-2xl border border-navy/10 bg-white p-5 shadow-card sm:p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-terracotta">
              {content.includesLabel}
            </h3>
            <ul className="mt-3 space-y-3">
              {content.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-body">
                  <span className="inline-flex shrink-0 rounded-lg bg-navy/5 p-2 text-navy">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-navy/10 bg-white p-5 shadow-card sm:p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-terracotta">
              {content.sessionsLabel}
            </h3>
            <div className="mt-3 space-y-3">
              {content.sessions.map((session, index) => (
                <div key={session.title} className="rounded-xl border border-navy/10 bg-warm p-4">
                  <p className="text-sm font-semibold text-navy">
                    {index + 1}. {session.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{session.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-navy/10 bg-white p-5 shadow-card sm:p-6">
            <h3 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-terracotta">
              <FileText className="h-4 w-4" />
              {content.supportDocumentLabel}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-body">{content.supportDocumentText}</p>
          </article>
        </div>
      </div>

      {content.note && (
        <p className="mt-5 text-sm leading-relaxed text-muted">{content.note}</p>
      )}
    </Section>
  );
}
