import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { HeroContent } from "@/types/content";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <Section id="home" className="bg-hero-glow pt-24 sm:pt-28">
      <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold text-navy sm:text-sm">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 max-w-[11ch] text-balance text-[2.9rem] font-bold leading-[0.98] tracking-tight text-navy sm:text-[3.5rem] lg:text-[4.55rem]">
            {content.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{content.subheadline}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="#booking">{content.primaryCta}</Button>
            <Button href="#contact" variant="secondary">
              {content.secondaryCta}
            </Button>
          </div>
          <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-body">
            {content.trustItems.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-terracotta" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-navy/10 bg-gradient-to-br from-white via-[#fff8f1] to-[#f4ede3] p-6 shadow-card">
            <div className="absolute -left-6 top-6 h-20 w-20 rounded-full bg-gold/20 blur-xl" />
            <div className="absolute -right-5 bottom-4 h-16 w-16 rounded-full bg-terracotta/20 blur-xl" />
            <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-white/95">
              {/* Replace this local hero photo if you want to swap in a different Spain/classroom image later. */}
              <img
                src="/images/hero-image.png"
                alt="One-to-one study session in a bright Barcelona apartment-style classroom setting"
                className="h-56 w-full object-cover object-[72%_center] sm:h-64"
              />
              <div className="border-t border-navy/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-terracotta sm:text-sm">
                  {content.visualEyebrow}
                </p>
                <h2 className="mt-2 text-xl font-semibold leading-snug text-navy sm:text-[1.65rem]">
                  {content.visualTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{content.visualSubtitle}</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {content.visualCards.map((card) => (
                <div key={card.title} className="rounded-xl border border-navy/10 bg-white p-3.5">
                  <p className="text-sm font-semibold text-navy">{card.title}</p>
                  <p className="mt-1 text-xs text-muted">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
