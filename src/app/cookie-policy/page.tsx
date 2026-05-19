"use client";

import { LegalPageLayout, LegalSection } from "@/components/legal/LegalPageLayout";
import { legalContent, legalUiContent } from "@/content/legalContent";
import { useSiteLocale } from "@/lib/locale";

export default function CookiePolicyPage() {
  const { locale, isReady } = useSiteLocale();

  if (!isReady) {
    return <main className="min-h-screen bg-warm" aria-hidden="true" />;
  }

  const ui = legalUiContent[locale];
  const c = legalContent;
  const cookieUi = ui.cookiePage;
  const visibleInventory = c.cookies.inventory.filter((item) => item.active);

  function localizeCategoryLabel(categoryId: "necessary" | "analytics" | "preferences" | "marketing") {
    return cookieUi.categoryLabels[categoryId];
  }

  function localizeCategoryDescription(
    categoryId: "necessary" | "analytics" | "preferences" | "marketing"
  ) {
    return cookieUi.categoryDescriptions[categoryId];
  }

  function localizeTechnologyLabel(technology: "Cookie" | "Local Storage" | "Session Storage" | "Other") {
    return cookieUi.technologyLabels[technology];
  }

  function localizePartyLabel(party: "First-party" | "Third-party") {
    return cookieUi.partyLabels[party];
  }

  return (
    <LegalPageLayout
      locale={locale}
      title={ui.cookieTitle}
      intro={ui.cookieIntro}
      toc={[
        { id: "what-are-cookies", label: cookieUi.tocWhatAreCookies },
        { id: "categories", label: cookieUi.tocCategories },
        { id: "inventory", label: cookieUi.tocInventory },
        { id: "management", label: cookieUi.tocManagement },
        { id: "updated", label: cookieUi.tocUpdated }
      ]}
    >
      <LegalSection id="what-are-cookies" title={cookieUi.sectionWhatAreCookies}>
        <p>{cookieUi.sectionWhatAreCookiesBody}</p>
        <p>{ui.noBannerNotice}</p>
      </LegalSection>

      <LegalSection id="categories" title={cookieUi.sectionCategories}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-navy/10">
                <th className="px-3 py-2 font-semibold text-navy">{cookieUi.tableCategory}</th>
                <th className="px-3 py-2 font-semibold text-navy">{cookieUi.tableDescription}</th>
                <th className="px-3 py-2 font-semibold text-navy">{cookieUi.tableStatus}</th>
                <th className="px-3 py-2 font-semibold text-navy">{cookieUi.tableConsentRequired}</th>
              </tr>
            </thead>
            <tbody>
              {c.cookies.categories.map((category) => (
                <tr key={category.id} className="border-b border-navy/10 align-top">
                  <td className="px-3 py-2 text-body">{localizeCategoryLabel(category.id)}</td>
                  <td className="px-3 py-2 text-muted">{localizeCategoryDescription(category.id)}</td>
                  <td className="px-3 py-2 text-body">
                    {category.active ? cookieUi.statusActive : cookieUi.statusInactive}
                  </td>
                  <td className="px-3 py-2 text-body">
                    {category.requiresConsent ? cookieUi.consentYes : cookieUi.consentNo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection id="inventory" title={cookieUi.sectionInventory}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-navy/10">
                <th className="px-3 py-2 font-semibold text-navy">{cookieUi.tableName}</th>
                <th className="px-3 py-2 font-semibold text-navy">{cookieUi.tableProvider}</th>
                <th className="px-3 py-2 font-semibold text-navy">{cookieUi.tableTechnology}</th>
                <th className="px-3 py-2 font-semibold text-navy">{cookieUi.tableCategory}</th>
                <th className="px-3 py-2 font-semibold text-navy">{cookieUi.tablePurpose}</th>
                <th className="px-3 py-2 font-semibold text-navy">{cookieUi.tableDuration}</th>
                <th className="px-3 py-2 font-semibold text-navy">{cookieUi.tableParty}</th>
              </tr>
            </thead>
            <tbody>
              {visibleInventory.map((item) => (
                <tr key={`${item.name}-${item.provider}`} className="border-b border-navy/10 align-top">
                  <td className="px-3 py-2 text-body">{item.name}</td>
                  <td className="px-3 py-2 text-body">
                    {item.name === "site-locale" ? cookieUi.inventoryLocalization.siteLocaleProvider : item.provider}
                  </td>
                  <td className="px-3 py-2 text-body">{localizeTechnologyLabel(item.technology)}</td>
                  <td className="px-3 py-2 text-body">{localizeCategoryLabel(item.category)}</td>
                  <td className="px-3 py-2 text-muted">
                    {item.name === "site-locale" ? cookieUi.inventoryLocalization.siteLocalePurpose : item.purpose}
                  </td>
                  <td className="px-3 py-2 text-body">
                    {item.name === "site-locale" ? cookieUi.inventoryLocalization.siteLocaleDuration : item.duration}
                  </td>
                  <td className="px-3 py-2 text-body">{localizePartyLabel(item.party)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection id="management" title={cookieUi.sectionManagement}>
        <p>{cookieUi.managementBody}</p>
        {c.cookies.consentBannerRequired ? (
          <p>{cookieUi.managementWithConsent}</p>
        ) : (
          <p>{cookieUi.managementNoConsent}</p>
        )}
      </LegalSection>

      <LegalSection id="updated" title={cookieUi.sectionUpdated}>
        <p>{c.lastUpdated}</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
