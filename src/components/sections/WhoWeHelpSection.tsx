import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SiteContent } from "@/types/content";

type WhoWeHelpSectionProps = {
  content: SiteContent["whoWeHelp"];
};

export function WhoWeHelpSection({ content }: WhoWeHelpSectionProps) {
  return (
    <Section title={content.title} intro={content.intro} className="bg-warm">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {content.cards.map((card) => (
          <Card key={card.title} title={card.title} description={card.description} />
        ))}
      </div>
    </Section>
  );
}
