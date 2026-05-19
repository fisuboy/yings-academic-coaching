"use client";

import { useEffect, useMemo, useState } from "react";
import { getContent } from "@/content/siteContent";
import { getLocaleSuffix, useSiteLocale } from "@/lib/locale";

const bannerStorageKey = "site-privacy-cookie-notice-dismissed";

export function PrivacyCookieBanner() {
  const { locale, isReady } = useSiteLocale();
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(window.localStorage.getItem(bannerStorageKey) === "1");
  }, []);

  const content = useMemo(() => getContent(locale).privacyBanner, [locale]);
  const legalSuffix = getLocaleSuffix(locale);

  function handleDismiss() {
    window.localStorage.setItem(bannerStorageKey, "1");
    setDismissed(true);
  }

  if (!isReady || dismissed) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 rounded-3xl border border-navy/10 bg-white/95 p-5 shadow-2xl backdrop-blur sm:p-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta">
            {content.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">{content.body}</p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
          <button
            type="button"
            onClick={handleDismiss}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#b95e3e] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/30"
          >
            {content.continueLabel}
          </button>
          <a
            href={`/cookie-policy${legalSuffix}`}
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/15"
          >
            {content.cookiePolicyLabel}
          </a>
          <a
            href={`/privacy-policy${legalSuffix}`}
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/15"
          >
            {content.privacyPolicyLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
