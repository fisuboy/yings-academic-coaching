import { BadgeCheck, GraduationCap, NotebookPen } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SiteContent } from "@/types/content";

type AboutSectionProps = {
  content: SiteContent["about"];
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <Section id="about" title={content.title} intro={content.intro} className="bg-surface">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-8">
          <div className="inline-flex rounded-xl bg-navy/5 p-3 text-navy" aria-hidden="true">
            <NotebookPen className="h-5 w-5" />
          </div>
          <p className="mt-4 text-lg leading-relaxed text-body">{content.story}</p>
        </article>

        <aside className="space-y-4">
          {/* Replace this placeholder area with Ying's profile photo if desired. */}
          <div className="rounded-2xl border border-navy/10 bg-gradient-to-br from-[#fff8ee] to-white p-6 shadow-card">
            <div className="inline-flex rounded-xl bg-terracotta/10 p-3 text-terracotta" aria-hidden="true">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-navy">{content.highlightsTitle}</h3>
            <ul className="mt-4 space-y-3">
              {content.credentials.map((item) => (
                <li key={item} className="flex items-start gap-2 text-body">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
