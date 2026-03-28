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
  kind?: "email" | "wechat" | "whatsapp";
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

export type AboutContent = {
  title: string;
  intro: string;
  story: string;
  credentials: string[];
};

export type BookingOption = {
  value: string;
  label: string;
};

export type BookingContent = {
  title: string;
  intro: string;
  responseTime: string;
  fallbackContactLabel: string;
  fallbackContactValue: string;
  fallbackContactHref: string;
  formTitle: string;
  formDescription: string;
  requiredNotice: string;
  submitLabel: string;
  successMessage: string;
  fields: {
    fullName: string;
    email: string;
    preferredContact: string;
    contactHandle: string;
    stage: string;
    goals: string;
    sessionLanguage: string;
    timezone: string;
  };
  placeholders: {
    goals: string;
    timezone: string;
    contactHandle: string;
  };
  options: {
    preferredContact: BookingOption[];
    stage: BookingOption[];
    sessionLanguage: BookingOption[];
  };
  validation: {
    fullNameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    goalsRequired: string;
  };
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
  about: AboutContent;
  booking: BookingContent;
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
