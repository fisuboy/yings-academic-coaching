"use client";

import { useMemo } from "react";
import { getContent } from "@/content/siteContent";
import { useSiteLocale } from "@/lib/locale";
import { AcademicPreparationSection } from "@/components/sections/AcademicPreparationSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ServiceBoundarySection } from "@/components/sections/ServiceBoundarySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SupportiveApproachSection } from "@/components/sections/SupportiveApproachSection";
import { WhoWeHelpSection } from "@/components/sections/WhoWeHelpSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";

export function LandingPage() {
  const { locale, isReady, setLocale } = useSiteLocale();
  const content = useMemo(() => getContent(locale), [locale]);

  if (!isReady) {
    return <main className="min-h-screen bg-warm" aria-hidden="true" />;
  }

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
        <AboutSection content={content.about} />
        <WhoWeHelpSection content={content.whoWeHelp} />
        <ServicesSection content={content.services} />
        <AcademicPreparationSection content={content.academicPreparation} />
        <PricingSection content={content.pricing} />
        <ServiceBoundarySection content={content.serviceBoundary} />
        <HowItWorksSection content={content.howItWorks} />
        <WhyChooseSection content={content.whyChoose} />
        <SupportiveApproachSection content={content.supportiveApproach} />
        <FAQSection content={content.faq} />
        <BookingSection content={content.booking} locale={locale} />
        <FinalCTASection content={content.finalCta} />
      </main>
      <Footer brandName={content.brandName} content={content.footer} locale={locale} />
    </>
  );
}
