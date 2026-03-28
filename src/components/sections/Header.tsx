"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Locale, NavLink } from "@/types/content";
import { cn } from "@/lib/cn";

type HeaderProps = {
  brandName: string;
  links: NavLink[];
  primaryCtaLabel: string;
  languageLabel: string;
  languageNotice: string;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

const localeLabels: Array<{ code: Locale; label: string }> = [
  { code: "zh", label: "中文" },
  { code: "es", label: "ES" },
  { code: "en", label: "EN" }
];

export function Header({
  brandName,
  links,
  primaryCtaLabel,
  languageLabel,
  languageNotice,
  locale,
  onLocaleChange
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-warm/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-content items-center justify-between gap-4 px-4 py-3">
        <a href="#home" className="text-lg font-bold text-navy">
          {brandName}
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-body transition-colors hover:text-terracotta focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/25"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div>
            <p className="sr-only">{languageLabel}</p>
            <div className="inline-flex rounded-xl border border-navy/15 bg-white p-1">
              {localeLabels.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => onLocaleChange(item.code)}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/30",
                    locale === item.code
                      ? "bg-navy text-white"
                      : "text-body hover:bg-navy/5"
                  )}
                  aria-pressed={locale === item.code}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <Button href="#contact">{primaryCtaLabel}</Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex rounded-lg p-2 text-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/30 lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <p className="mx-auto hidden w-full max-w-content px-4 pb-3 text-xs text-muted lg:block">
        {languageNotice}
      </p>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-navy/10 bg-surface transition-all duration-200 lg:hidden",
          isMenuOpen ? "max-h-[520px]" : "max-h-0"
        )}
      >
        <div className="mx-auto flex w-full max-w-content flex-col gap-3 px-4 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-2 text-sm font-medium text-body hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/30"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
              {languageLabel}
            </p>
            <div className="inline-flex rounded-xl border border-navy/15 bg-warm p-1">
              {localeLabels.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => onLocaleChange(item.code)}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/30",
                    locale === item.code
                      ? "bg-navy text-white"
                      : "text-body hover:bg-navy/5"
                  )}
                  aria-pressed={locale === item.code}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted">{languageNotice}</p>
          <Button href="#contact" className="w-full">
            {primaryCtaLabel}
          </Button>
        </div>
      </div>
    </header>
  );
}
