"use client";

import { useMemo, useState } from "react";
import { getContent } from "@/content/siteContent";
import { Locale } from "@/types/content";
import { AcademicPreparationSection } from "@/components/sections/AcademicPreparationSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SupportiveApproachSection } from "@/components/sections/SupportiveApproachSection";
import { WhoWeHelpSection } from "@/components/sections/WhoWeHelpSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";

export function LandingPage() {
  const [locale, setLocale] = useState<Locale>("zh");
  const content = useMemo(() => getContent(locale), [locale]);

  return (
    <>
      <Header
        brandName={content.brandName}
        links={content.header.navLinks}
        primaryCtaLabel={content.header.primaryCta}
        languageLabel={content.header.languageLabel}
        languageNotice={content.header.languageNotice}
        locale={locale}
        onLocaleChange={setLocale}
      />
      <main>
        <HeroSection content={content.hero} />
        <WhoWeHelpSection content={content.whoWeHelp} />
        <ServicesSection content={content.services} />
        <AcademicPreparationSection content={content.academicPreparation} />
        <HowItWorksSection content={content.howItWorks} />
        <WhyChooseSection content={content.whyChoose} />
        <SupportiveApproachSection content={content.supportiveApproach} />
        <FAQSection content={content.faq} />
        <FinalCTASection content={content.finalCta} />
      </main>
      <Footer brandName={content.brandName} content={content.footer} />
    </>
  );
}
