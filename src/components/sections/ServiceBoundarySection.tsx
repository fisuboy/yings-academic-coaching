import { ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SiteContent } from "@/types/content";

type ServiceBoundarySectionProps = {
  content: SiteContent["serviceBoundary"];
};

export function ServiceBoundarySection({ content }: ServiceBoundarySectionProps) {
  return (
    <Section className="bg-surface">
      <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-8">
        <div className="inline-flex rounded-xl bg-navy/5 p-3 text-navy" aria-hidden="true">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <h2 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">{content.title}</h2>
        <p className="mt-3 max-w-3xl text-muted">{content.intro}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-navy/10 bg-warm p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-terracotta">
              {content.includesTitle}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-body">
              {content.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-xl border border-navy/10 bg-warm p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-terracotta">
              {content.excludesTitle}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-body">
              {content.excludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </Section>
  );
}
