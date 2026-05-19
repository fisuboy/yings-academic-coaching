import { BadgeEuro, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SiteContent } from "@/types/content";

type PricingSectionProps = {
  content: SiteContent["pricing"];
};

export function PricingSection({ content }: PricingSectionProps) {
  return (
    <Section id="pricing" title={content.title} intro={content.intro} className="bg-surface">
      <div className="grid gap-5 md:grid-cols-3">
        {content.cards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card"
          >
            {card.highlight && (
              <p className="inline-flex rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold text-terracotta">
                {card.highlight}
              </p>
            )}
            <h3 className="mt-3 text-xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-2 inline-flex items-center gap-2 text-2xl font-bold text-navy">
              <BadgeEuro className="h-5 w-5 text-terracotta" aria-hidden="true" />
              {card.price}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
            <ul className="mt-4 space-y-2">
              {card.features.map((feature) => (
                <li key={feature} className="inline-flex items-start gap-2 text-sm text-body">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-5 text-sm text-muted">{content.footnote}</p>
    </Section>
  );
}
