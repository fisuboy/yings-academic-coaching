"use client";

import { useCallback, useEffect, useState } from "react";
import { Locale } from "@/types/content";

export const localeStorageKey = "site-locale";
export const defaultLocale: Locale = "en";
const localeEventName = "site-locale-change";

export function isSiteLocale(value?: string | null): value is Locale {
  return value === "zh" || value === "en" || value === "es" || value === "ca";
}

function readLocaleFromUrl(): Locale | null {
  if (typeof window === "undefined") {
    return null;
  }

  const locale = new URLSearchParams(window.location.search).get("lang");
  return isSiteLocale(locale) ? locale : null;
}

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") {
    return null;
  }

  const stored = window.localStorage.getItem(localeStorageKey);
  return isSiteLocale(stored) ? stored : null;
}

function applyLocaleToDocument(locale: Locale) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.lang = locale;
  document.documentElement.dataset.siteLocale = locale;
}

export function resolveInitialLocale(): Locale {
  return readLocaleFromUrl() ?? readStoredLocale() ?? defaultLocale;
}

export function initializeSiteLocale(): Locale {
  const locale = resolveInitialLocale();

  if (typeof window !== "undefined") {
    window.localStorage.setItem(localeStorageKey, locale);
  }

  applyLocaleToDocument(locale);
  return locale;
}

export function setSiteLocale(locale: Locale) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(localeStorageKey, locale);
  }

  applyLocaleToDocument(locale);

  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(localeEventName, { detail: locale }));
  }
}

export function useSiteLocale() {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setLocaleState(initializeSiteLocale());
    setIsReady(true);

    function syncFromSource() {
      setLocaleState(resolveInitialLocale());
    }

    window.addEventListener(localeEventName, syncFromSource);
    window.addEventListener("storage", syncFromSource);
    window.addEventListener("popstate", syncFromSource);

    return () => {
      window.removeEventListener(localeEventName, syncFromSource);
      window.removeEventListener("storage", syncFromSource);
      window.removeEventListener("popstate", syncFromSource);
    };
  }, []);

  const updateLocale = useCallback((nextLocale: Locale) => {
    setSiteLocale(nextLocale);
    setLocaleState(nextLocale);
  }, []);

  return {
    locale,
    isReady,
    setLocale: updateLocale
  };
}

export function getLocaleSuffix(locale: Locale) {
  return locale === "en" ? "" : `?lang=${locale}`;
}
