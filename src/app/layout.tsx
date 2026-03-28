import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
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
  title: "Ying's Academic Coaching | English & Chinese Support for Study in Spain",
  description:
    "One-to-one academic coaching and tutoring in English and Chinese for students preparing for academic life in Spain, with a multilingual website experience."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body
        className={`${inter.variable} ${notoSansSC.variable} bg-warm font-sans text-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
