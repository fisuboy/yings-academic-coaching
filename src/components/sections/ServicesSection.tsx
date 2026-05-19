import {
  Compass,
  Languages,
  Mail,
  MessageCircle,
  Mic,
  UserRound
} from "lucide-react";
import { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SiteContent } from "@/types/content";

type ServicesSectionProps = {
  content: SiteContent["services"];
};

const iconMap: Record<string, ReactNode> = {
  englishTutoring: <Languages className="h-5 w-5" />,
  interviewPreparation: <MessageCircle className="h-5 w-5" />,
  academicCommunication: <Mail className="h-5 w-5" />,
  presentationConfidence: <Mic className="h-5 w-5" />,
  preArrivalOrientation: <Compass className="h-5 w-5" />,
  personalizedSupport: <UserRound className="h-5 w-5" />
};

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <Section id="services" title={content.title} intro={content.intro} className="bg-surface">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {content.cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            details={card.details}
            icon={iconMap[card.icon]}
          />
        ))}
      </div>
    </Section>
  );
}
