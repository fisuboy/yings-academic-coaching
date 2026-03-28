import { Mail, MessageCircleMore, MessagesSquare } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SiteContent } from "@/types/content";

type FinalCTASectionProps = {
  content: SiteContent["finalCta"];
};

const contactIconMap: Record<string, ReactNode> = {
  email: <Mail className="h-4 w-4" />,
  wechat: <MessageCircleMore className="h-4 w-4" />,
  whatsapp: <MessagesSquare className="h-4 w-4" />
};

export function FinalCTASection({ content }: FinalCTASectionProps) {
  return (
    <Section id="contact" className="bg-surface">
      <div className="rounded-3xl border border-navy/10 bg-navy px-6 py-10 text-white shadow-card sm:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              {content.headline}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200">{content.text}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#booking">{content.primaryCta}</Button>
              <Button href="#contact" variant="secondary">
                {content.secondaryCta}
              </Button>
            </div>
          </div>

          <ul className="space-y-3 rounded-2xl border border-white/20 bg-white/5 p-5">
            {content.contacts.map((contact) => (
              <li key={contact.label}>
                <div className="text-sm text-slate-300">{contact.label}</div>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="mt-1 inline-flex items-center gap-2 text-base font-medium text-white transition-colors hover:text-gold"
                  >
                    {contact.kind ? contactIconMap[contact.kind] ?? null : null}
                    {contact.value}
                  </a>
                ) : (
                  <p className="mt-1 inline-flex items-center gap-2 text-base font-medium text-white">
                    {contact.kind ? contactIconMap[contact.kind] ?? null : null}
                    {contact.value}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
