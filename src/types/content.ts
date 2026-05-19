export type Locale = "zh" | "en" | "es" | "ca";

export type NavLink = {
  label: string;
  href: string;
};

export type CardItem = {
  title: string;
  description: string;
  details?: string[];
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
  actionLabel?: string;
  helperText?: string;
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
  visualEyebrow: string;
  visualTitle: string;
  visualSubtitle: string;
  visualCards: CardItem[];
};

export type SectionContent = {
  title: string;
  intro: string;
};

export type PackageSession = {
  title: string;
  description: string;
};

export type AcademicPreparationContent = SectionContent & {
  packageName: string;
  packagePrice: string;
  packageSummary: string;
  whoItsForLabel: string;
  whoItsForText: string;
  includesLabel: string;
  includes: string[];
  sessionsLabel: string;
  sessions: PackageSession[];
  supportDocumentLabel: string;
  supportDocumentText: string;
  ctaLabel: string;
  note?: string;
};

export type AboutContent = {
  title: string;
  intro: string;
  story: string;
  highlightsTitle: string;
  credentials: string[];
};

export type PrivacyBannerContent = {
  title: string;
  body: string;
  continueLabel: string;
  cookiePolicyLabel: string;
  privacyPolicyLabel: string;
};

export type BookingOption = {
  value: string;
  label: string;
};

export type BookingContent = {
  title: string;
  intro: string;
  trustItems: string[];
  paths: {
    messageUs: {
      title: string;
      description: string;
      helper: string;
      channels: ContactItem[];
    };
    requestCall: {
      title: string;
      description: string;
      ctaLabel: string;
    };
  };
  form: {
    id: string;
    title: string;
    description: string;
    helper: string;
    requiredNotice: string;
    recommendedNotice: string;
    submitLabel: string;
    submittingLabel: string;
    successTitle: string;
    successMessage: string;
    successFollowUp: string;
    resetLabel: string;
    fields: {
      fullName: string;
      email: string;
      contactHandle: string;
      role: string;
      stage: string;
      supportNeeds: string;
      sessionLanguage: string;
      timezone: string;
      timeWindow: string;
      message: string;
      honeypot: string;
    };
    hints: {
      contactHandle: string;
      message: string;
    };
    placeholders: {
      contactHandle: string;
      timezone: string;
      timeWindow: string;
      message: string;
    };
    options: {
      role: BookingOption[];
      stage: BookingOption[];
      supportNeeds: BookingOption[];
      sessionLanguage: BookingOption[];
    };
    validation: {
      fullNameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      roleRequired: string;
      stageRequired: string;
      supportNeedsRequired: string;
      timezoneRequired: string;
      timeWindowRequired: string;
      privacyAcknowledgementRequired: string;
      submitFailed: string;
    };
    privacyNotice: {
      text: string;
      cookiePolicyLabel: string;
      privacyPolicyLabel: string;
      legalNoticeLabel: string;
    };
    privacyAcknowledgement: {
      labelBeforeLink: string;
      privacyPolicyLabel: string;
      labelAfterLink: string;
    };
    privacyModal: {
      triggerLabel: string;
      title: string;
      intro: string;
      sections: {
        title: string;
        body: string[];
      }[];
      moreInfoText: string;
      closeLabel: string;
    };
  };
};

export type PricingCard = {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlight?: string;
};

export type PricingContent = SectionContent & {
  cards: PricingCard[];
  footnote: string;
};

export type ServiceBoundaryContent = {
  title: string;
  intro: string;
  includesTitle: string;
  excludesTitle: string;
  includes: string[];
  excludes: string[];
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
  privacyPolicyLabel: string;
  cookiePolicyLabel: string;
  legalNoticeLabel: string;
  cookieSettingsLabel?: string;
};

export type SiteContent = {
  brandName: string;
  localeTagline: string;
  privacyBanner: PrivacyBannerContent;
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
  pricing: PricingContent;
  academicPreparation: AcademicPreparationContent;
  serviceBoundary: ServiceBoundaryContent;
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
