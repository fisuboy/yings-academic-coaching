# Ying's Academic Coaching

Professional English training and communication-support website built with Next.js and Tailwind CSS.

The site is structured as a static-export-friendly multilingual landing page for a Barcelona-based, online-first one-to-one service. It includes a discovery-call lead form, privacy/legal pages, and a lightweight locale persistence flow.

## Current Features

- Four website languages:
  - English (`en`)
  - Spanish (`es`)
  - Simplified Chinese (`zh`)
  - Catalan (`ca`)
- Language switcher with saved preference
- Static-export-friendly Next.js setup
- Discovery-call / contact flow with manual follow-up model
- Form submission helper ready to connect to Formspree or another static-friendly form service
- Privacy Policy, Cookie Policy, and Legal Notice pages
- Privacy / cookie banner and form privacy acknowledgement flow
- Reusable landing-page section components

## Stack

- Next.js 15
- React 19
- Tailwind CSS 3
- TypeScript
- Lucide React

## Quick Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Build static output

```bash
npm run build
```

This exports the site to `out/`.

### 4. Deploy

Deploy the `out/` directory to any static host:

- Netlify
- Cloudflare Pages
- GitHub Pages
- Amazon S3 / CloudFront
- any static file host

## Project Structure

Key files:

- Main localized site content:
  - `/Users/fisuboy/Documents/yingsTutoring/src/content/siteContent.ts`
- Legal / privacy / cookie content:
  - `/Users/fisuboy/Documents/yingsTutoring/src/content/legalContent.ts`
- Locale helpers and persistence:
  - `/Users/fisuboy/Documents/yingsTutoring/src/lib/locale.ts`
- Booking submission helper:
  - `/Users/fisuboy/Documents/yingsTutoring/src/lib/bookingSubmission.ts`
- Consent / cookie banner config:
  - `/Users/fisuboy/Documents/yingsTutoring/src/lib/consent.ts`
- Main landing page composition:
  - `/Users/fisuboy/Documents/yingsTutoring/src/components/LandingPage.tsx`

App routes:

- Home:
  - `/Users/fisuboy/Documents/yingsTutoring/src/app/page.tsx`
- Privacy Policy:
  - `/Users/fisuboy/Documents/yingsTutoring/src/app/privacy-policy/page.tsx`
- Cookie Policy:
  - `/Users/fisuboy/Documents/yingsTutoring/src/app/cookie-policy/page.tsx`
- Legal Notice:
  - `/Users/fisuboy/Documents/yingsTutoring/src/app/legal-notice/page.tsx`

## Editing Content

Homepage and booking content is centralized in:

- `/Users/fisuboy/Documents/yingsTutoring/src/content/siteContent.ts`

Legal and privacy content is centralized in:

- `/Users/fisuboy/Documents/yingsTutoring/src/content/legalContent.ts`

English is the master source for structure and meaning. Spanish, Simplified Chinese, and Catalan follow the same content architecture.

## Booking Form Integration

The current form is built for a manual review / follow-up workflow rather than direct calendar booking.

The submission layer is prepared so it can be connected to:

- Formspree
- Basin
- Getform
- another static-friendly form backend

Current integration point:

- `/Users/fisuboy/Documents/yingsTutoring/src/lib/bookingSubmission.ts`

If you connect Formspree, update the submission endpoint/config there and review the privacy-policy text in:

- `/Users/fisuboy/Documents/yingsTutoring/src/content/legalContent.ts`
- `/Users/fisuboy/Documents/yingsTutoring/src/content/siteContent.ts`

## Localization Notes

- Supported locales: `en`, `es`, `zh`, `ca`
- User-selected language is persisted locally
- The privacy banner, privacy modal, booking form copy, footer legal links, and legal page labels all follow the active locale

## Legal / Privacy Notes

The site includes:

- Privacy Policy
- Cookie Policy
- Legal Notice

Some legal identity details are intentionally left as placeholders until final business details are confirmed before launch.

Review these before going live:

- legal name
- tax ID / NIE / NIF details
- postal address
- final form processor details
- retention periods, if needed

## Useful Commands

Type check:

```bash
npx tsc --noEmit
```

Development server:

```bash
npm run dev
```

Production build:

```bash
npm run build
```
