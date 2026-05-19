"use client";

import { LegalPageLayout, LegalSection } from "@/components/legal/LegalPageLayout";
import { legalContent, legalPageContent, legalUiContent } from "@/content/legalContent";
import { useSiteLocale } from "@/lib/locale";

function isCompletionPlaceholder(value: string) {
  return value.includes("[TO COMPLETE:") || value.includes("[POR COMPLETAR:") || value.includes("[待补充：");
}

export default function LegalNoticePage() {
  const { locale, isReady } = useSiteLocale();

  if (!isReady) {
    return <main className="min-h-screen bg-warm" aria-hidden="true" />;
  }

  const ui = legalUiContent[locale];
  const content = legalPageContent[locale].legalNoticePage;
  const controller = legalContent.controller;
  const ownerValues = {
    legalName: isCompletionPlaceholder(controller.legalName)
      ? content.sections.placeholders.legalName
      : controller.legalName,
    taxId: isCompletionPlaceholder(controller.taxId)
      ? content.sections.placeholders.taxId
      : controller.taxId,
    postalAddress: isCompletionPlaceholder(controller.postalAddress)
      ? content.sections.placeholders.postalAddress
      : controller.postalAddress,
    websiteDomain: isCompletionPlaceholder(controller.websiteDomain)
      ? content.sections.placeholders.websiteDomain
      : controller.websiteDomain
  };

  return (
    <LegalPageLayout
      locale={locale}
      title={ui.legalTitle}
      intro={ui.legalIntro}
      toc={content.toc}
    >
      <LegalSection id="owner" title={content.sections.ownerTitle}>
        <p>
          <strong>{content.sections.ownerLabels.brand}:</strong> {controller.brandName}
        </p>
        <p>
          <strong>{content.sections.ownerLabels.legalName}:</strong> {ownerValues.legalName}
        </p>
        <p>
          <strong>{content.sections.ownerLabels.taxId}:</strong> {ownerValues.taxId}
        </p>
        <p>
          <strong>{content.sections.ownerLabels.email}:</strong> {controller.email}
        </p>
        <p>
          <strong>{content.sections.ownerLabels.postalAddress}:</strong> {ownerValues.postalAddress}
        </p>
        <p>
          <strong>{content.sections.ownerLabels.websiteDomain}:</strong> {ownerValues.websiteDomain}
        </p>
      </LegalSection>

      <LegalSection id="purpose" title={content.sections.purposeTitle}>
        <p>{content.sections.purposeText}</p>
      </LegalSection>

      <LegalSection id="conditions" title={content.sections.conditionsTitle}>
        <ul className="list-disc space-y-2 pl-5">
          {content.sections.conditions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection id="ip" title={content.sections.intellectualPropertyTitle}>
        <p>{content.sections.intellectualPropertyText}</p>
      </LegalSection>

      <LegalSection id="liability" title={content.sections.liabilityTitle}>
        <p>{content.sections.liabilityText}</p>
      </LegalSection>

      <LegalSection id="links" title={content.sections.linksTitle}>
        <p>{content.sections.linksText}</p>
      </LegalSection>

      <LegalSection id="law" title={content.sections.lawTitle}>
        <p>{content.sections.lawText}</p>
      </LegalSection>

      <LegalSection id="contact" title={content.sections.contactTitle}>
        <p>
          {content.sections.contactLead} <strong>{controller.email}</strong>.
        </p>
      </LegalSection>

      <LegalSection id="updated" title={content.sections.updatedTitle}>
        <p>{legalContent.lastUpdated}</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
