export type Locale = "zh" | "es" | "en";

export type NavLink = {
  label: string;
  href: string;
};

export type CardItem = {
  title: string;
  description: string;
};

export type IconCardItem = CardItem & {
  icon: string;
};

export type StepItem = {
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

export type HeaderContent = {
  navLinks: NavLink[];
  primaryCta: string;
  languageLabel: string;
  languageNotice: string;
};

export type HeroContent = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  trustItems: string[];
  visualTitle: string;
  visualSubtitle: string;
};

export type SectionContent = {
  title: string;
  intro: string;
};

export type AcademicPreparationContent = SectionContent & {
  points: string[];
  closingText: string;
};

export type FinalCTAContent = {
  headline: string;
  text: string;
  primaryCta: string;
  secondaryCta: string;
  contacts: ContactItem[];
};

export type FooterContent = {
  description: string;
  navLinks: NavLink[];
  privacyLabel: string;
  termsLabel: string;
};

export type SiteContent = {
  brandName: string;
  localeTagline: string;
  header: HeaderContent;
  hero: HeroContent;
  whoWeHelp: SectionContent & {
    cards: CardItem[];
  };
  services: SectionContent & {
    cards: IconCardItem[];
  };
  academicPreparation: AcademicPreparationContent;
  howItWorks: SectionContent & {
    steps: StepItem[];
  };
  whyChoose: SectionContent & {
    cards: IconCardItem[];
  };
  supportiveApproach: {
    title: string;
    text: string;
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
  finalCta: FinalCTAContent;
  footer: FooterContent;
};
