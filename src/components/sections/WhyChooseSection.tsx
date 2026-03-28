import { Globe, HeartHandshake, MapPinned, NotebookPen } from "lucide-react";
import { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SiteContent } from "@/types/content";

type WhyChooseSectionProps = {
  content: SiteContent["whyChoose"];
};

const iconMap: Record<string, ReactNode> = {
  multilingualAccess: <Globe className="h-5 w-5" />,
  spainStudyPath: <MapPinned className="h-5 w-5" />,
  personalizedGuidance: <HeartHandshake className="h-5 w-5" />,
  calmApproach: <NotebookPen className="h-5 w-5" />
};

export function WhyChooseSection({ content }: WhyChooseSectionProps) {
  return (
    <Section title={content.title} intro={content.intro} className="bg-warm">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {content.cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            icon={iconMap[card.icon]}
          />
        ))}
      </div>
    </Section>
  );
}
