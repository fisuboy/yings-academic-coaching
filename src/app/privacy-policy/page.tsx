"use client";

import { LegalPageLayout, LegalSection } from "@/components/legal/LegalPageLayout";
import { legalContent, legalPageContent, legalUiContent } from "@/content/legalContent";
import { useSiteLocale } from "@/lib/locale";

function isCompletionPlaceholder(value: string) {
  return value.includes("[TO COMPLETE:") || value.includes("[POR COMPLETAR:") || value.includes("[待补充：");
}

export default function PrivacyPolicyPage() {
  const { locale, isReady } = useSiteLocale();

  if (!isReady) {
    return <main className="min-h-screen bg-warm" aria-hidden="true" />;
  }

  const ui = legalUiContent[locale];
  const content = legalPageContent[locale].privacyPage;
  const controller = legalContent.controller;
  const controllerValues = {
    legalName: isCompletionPlaceholder(controller.legalName)
      ? content.sections.placeholders.legalName
      : controller.legalName,
    taxId: isCompletionPlaceholder(controller.taxId)
      ? content.sections.placeholders.taxId
      : controller.taxId,
    websiteDomain: isCompletionPlaceholder(controller.websiteDomain)
      ? content.sections.placeholders.website
      : controller.websiteDomain,
    postalAddress: isCompletionPlaceholder(controller.postalAddress)
      ? content.sections.placeholders.postalAddress
      : controller.postalAddress
  };

  return (
    <LegalPageLayout
      locale={locale}
      title={ui.privacyTitle}
      intro={ui.privacyIntro}
      toc={content.toc}
    >
      <LegalSection id="controller" title={content.sections.controllerTitle}>
        <p>
          <strong>{content.sections.controllerLabels.brand}:</strong> {controller.brandName}
        </p>
        <p>
          <strong>{content.sections.controllerLabels.legalName}:</strong> {controllerValues.legalName}
        </p>
        <p>
          <strong>{content.sections.controllerLabels.taxId}:</strong> {controllerValues.taxId}
        </p>
        <p>
          <strong>{content.sections.controllerLabels.email}:</strong> {controller.email}
        </p>
        <p>
          <strong>{content.sections.controllerLabels.website}:</strong> {controllerValues.websiteDomain}
        </p>
        <p>
          <strong>{content.sections.controllerLabels.postalAddress}:</strong> {controllerValues.postalAddress}
        </p>
      </LegalSection>

      <LegalSection id="data-collected" title={content.sections.dataCollectedTitle}>
        <ul className="list-disc space-y-2 pl-5">
          {content.sections.dataCollected.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection id="data-collection" title={content.sections.dataCollectionTitle}>
        <ul className="list-disc space-y-2 pl-5">
          {content.sections.dataCollection.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection id="purposes" title={content.sections.purposesTitle}>
        <ul className="list-disc space-y-2 pl-5">
          {content.sections.purposes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection id="legal-basis" title={content.sections.legalBasisTitle}>
        <ul className="list-disc space-y-2 pl-5">
          {content.sections.legalBases.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection id="recipients" title={content.sections.recipientsTitle}>
        <ul className="list-disc space-y-2 pl-5">
          {content.sections.recipients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection id="transfers" title={content.sections.transfersTitle}>
        <p>{content.sections.transfers}</p>
      </LegalSection>

      <LegalSection id="retention" title={content.sections.retentionTitle}>
        <p>{content.sections.retention}</p>
      </LegalSection>

      <LegalSection id="rights" title={content.sections.rightsTitle}>
        <p>{content.sections.rightsIntro}</p>
        <ul className="list-disc space-y-2 pl-5">
          {content.sections.rights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{content.sections.supervisoryAuthority}</p>
      </LegalSection>

      <LegalSection id="security" title={content.sections.securityTitle}>
        <p>{content.sections.securityText}</p>
      </LegalSection>

      <LegalSection id="contact" title={content.sections.contactTitle}>
        <p>
          {content.sections.contactLead} <strong>{controller.email}</strong>.
        </p>
        <p>{content.sections.contactFollowUp}</p>
      </LegalSection>

      <LegalSection id="updated" title={content.sections.updatedTitle}>
        <p>{legalContent.lastUpdated}</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
