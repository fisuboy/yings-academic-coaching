import { legalContent } from "@/content/legalContent";

export type ConsentCategory = "necessary" | "analytics" | "preferences" | "marketing";

export type ConsentState = {
  necessary: true;
  analytics: boolean;
  preferences: boolean;
  marketing: boolean;
};

export const consentConfig = {
  storageKey: "cookie-consent-state",
  isConsentModeActive: legalContent.cookies.consentBannerRequired
} as const;

export const defaultConsentState: ConsentState = {
  necessary: true,
  analytics: false,
  preferences: false,
  marketing: false
};

export function canLoadCategory(consent: ConsentState, category: ConsentCategory): boolean {
  if (category === "necessary") {
    return true;
  }
  if (!consentConfig.isConsentModeActive) {
    return false;
  }
  return Boolean(consent[category]);
}

export function readStoredConsent(): ConsentState {
  if (typeof window === "undefined") {
    return defaultConsentState;
  }
  const raw = window.localStorage.getItem(consentConfig.storageKey);
  if (!raw) {
    return defaultConsentState;
  }
  try {
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      preferences: Boolean(parsed.preferences),
      marketing: Boolean(parsed.marketing)
    };
  } catch {
    return defaultConsentState;
  }
}

export function storeConsent(consent: ConsentState) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(consentConfig.storageKey, JSON.stringify(consent));
}

