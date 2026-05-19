import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import { PrivacyCookieBanner } from "@/components/legal/PrivacyCookieBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Ying's Academic Coaching | Professional English Training and Communication Support",
  description:
    "Barcelona-based, online-first one-to-one professional English training, interview and oral-expression preparation, academic communication support, and pre-arrival communication preparation for Spain."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localeInitScript = `
    (function() {
      try {
        var params = new URLSearchParams(window.location.search);
        var urlLocale = params.get('lang');
        var storedLocale = window.localStorage.getItem('site-locale');
        var locale = urlLocale === 'zh' || urlLocale === 'en' || urlLocale === 'es' || urlLocale === 'ca'
          ? urlLocale
          : (storedLocale === 'zh' || storedLocale === 'en' || storedLocale === 'es' || storedLocale === 'ca' ? storedLocale : 'en');
        window.localStorage.setItem('site-locale', locale);
        document.documentElement.lang = locale;
        document.documentElement.dataset.siteLocale = locale;
      } catch (error) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeInitScript }} />
      </head>
      <body
        className={`${inter.variable} ${notoSansSC.variable} bg-warm font-sans text-body antialiased`}
      >
        {children}
        <PrivacyCookieBanner />
      </body>
    </html>
  );
}
