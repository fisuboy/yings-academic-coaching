import { BadgeCheck, GraduationCap, NotebookPen } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SiteContent } from "@/types/content";

type AboutSectionProps = {
  content: SiteContent["about"];
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <Section id="about" title={content.title} intro={content.intro} className="bg-surface">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <aside className="space-y-5">
          <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card">
            {/* Replace this founder photo if you want to swap in a different portrait later. */}
            <img
              src="/images/founder-about.png"
              alt="Founder working in a bright Barcelona study setting"
              className="h-80 w-full object-cover object-center sm:h-[26rem]"
            />
          </div>
          <div className="rounded-2xl border border-navy/10 bg-gradient-to-br from-[#fff8ee] to-white p-6 shadow-card sm:p-7">
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

        <div className="space-y-5">
          <article className="rounded-2xl border border-navy/10 bg-white p-7 shadow-card sm:p-9">
            <div className="inline-flex rounded-xl bg-navy/5 p-3 text-navy" aria-hidden="true">
              <NotebookPen className="h-5 w-5" />
            </div>
            <p className="mt-5 max-w-3xl text-[1.08rem] leading-relaxed text-body sm:text-[1.15rem] sm:leading-[1.9]">
              {content.story}
            </p>
          </article>

          <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card">
            {/* Replace this supporting image if you want a different detail shot for the About section later. */}
            <img
              src="/images/about-filler.png"
              alt="Study desk details with Barcelona references and English-learning materials"
              className="h-64 w-full object-cover object-[center_42%] sm:h-72"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
