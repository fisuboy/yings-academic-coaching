import { SiteContent } from "@/types/content";
import { Locale } from "@/types/content";
import { consentConfig } from "@/lib/consent";

type FooterProps = {
  brandName: string;
  content: SiteContent["footer"];
  locale?: Locale;
};

export function Footer({ brandName, content, locale = "en" }: FooterProps) {
  const legalSuffix = locale === "en" ? "" : `?lang=${locale}`;

  return (
    <footer className="border-t border-navy/10 bg-[#f5f1ea] px-4 py-10">
      <div className="mx-auto grid w-full max-w-content gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div>
          <h2 className="text-xl font-bold text-navy">{brandName}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{content.description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <nav aria-label="Footer">
            <ul className="space-y-2 text-sm">
              {content.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-medium text-body transition-colors hover:text-terracotta"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-2 text-sm">
            <a
              href={`/privacy-policy${legalSuffix}`}
              className="block font-medium text-body transition-colors hover:text-terracotta"
            >
              {content.privacyPolicyLabel}
            </a>
            <a
              href={`/cookie-policy${legalSuffix}`}
              className="block font-medium text-body transition-colors hover:text-terracotta"
            >
              {content.cookiePolicyLabel}
            </a>
            <a
              href={`/legal-notice${legalSuffix}`}
              className="block font-medium text-body transition-colors hover:text-terracotta"
            >
              {content.legalNoticeLabel}
            </a>
            {consentConfig.isConsentModeActive && content.cookieSettingsLabel ? (
              <button
                type="button"
                className="block font-medium text-body transition-colors hover:text-terracotta"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("open-cookie-settings"));
                }}
              >
                {content.cookieSettingsLabel}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
