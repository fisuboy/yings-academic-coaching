import Link from "next/link";
import { ReactNode } from "react";
import { legalUiContent } from "@/content/legalContent";

type TocItem = {
  id: string;
  label: string;
};

type LegalPageLayoutProps = {
  title: string;
  intro: string;
  toc: readonly TocItem[];
  locale?: keyof typeof legalUiContent;
  children: ReactNode;
};

export function LegalPageLayout({ title, intro, toc, locale = "en", children }: LegalPageLayoutProps) {
  const ui = legalUiContent[locale] ?? legalUiContent.en;

  return (
    <main className="min-h-screen bg-warm px-4 py-10 sm:py-12">
      <div className="mx-auto w-full max-w-content">
        <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-card sm:p-8">
          <Link
            href="/"
            className="text-sm font-medium text-navy transition-colors hover:text-terracotta"
          >
            {ui.backToHome}
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">{intro}</p>
          {ui.availabilityNotice ? (
            <p className="mt-3 text-sm text-muted">{ui.availabilityNotice}</p>
          ) : null}
        </div>

        <section className="mt-6 rounded-2xl border border-navy/10 bg-white p-5 shadow-card sm:p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-terracotta">{ui.quickNav}</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm font-medium text-body transition-colors hover:text-terracotta"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <article className="mt-6 space-y-6">{children}</article>
      </div>
    </main>
  );
}

type LegalSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 rounded-2xl border border-navy/10 bg-white p-5 shadow-card sm:p-7">
      <h2 className="text-2xl font-semibold text-navy">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-body sm:text-base">{children}</div>
    </section>
  );
}
