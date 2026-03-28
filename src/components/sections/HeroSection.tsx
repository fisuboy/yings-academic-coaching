import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { HeroContent } from "@/types/content";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <Section id="home" className="bg-hero-glow pt-28 sm:pt-32">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-sm font-semibold text-navy">
            {content.eyebrow}
          </p>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
            {content.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{content.subheadline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#booking">{content.primaryCta}</Button>
            <Button href="#contact" variant="secondary">
              {content.secondaryCta}
            </Button>
          </div>
          <ul className="mt-7 flex flex-wrap items-center gap-5 text-sm text-body">
            {content.trustItems.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-terracotta" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          {/* Replace this placeholder block with your own hero image or photo. */}
          <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-white via-[#fff8f1] to-[#f4ede3] p-8 shadow-card">
            <div className="absolute -left-6 top-6 h-24 w-24 rounded-full bg-gold/20 blur-xl" />
            <div className="absolute -right-5 bottom-4 h-20 w-20 rounded-full bg-terracotta/20 blur-xl" />
            <div className="relative rounded-2xl border border-navy/10 bg-white/95 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">
                {content.visualEyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-navy">{content.visualTitle}</h2>
              <p className="mt-4 leading-relaxed text-muted">{content.visualSubtitle}</p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {content.visualCards.map((card) => (
                <div key={card.title} className="rounded-xl border border-navy/10 bg-white p-4">
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
