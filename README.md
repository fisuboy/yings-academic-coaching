# Ying's Academic Coaching Landing Page

Polished, responsive landing page built with Next.js + Tailwind CSS for Ying's Academic Coaching.

## Current Features

- Fully localized content in English, Spanish, and Simplified Chinese
- Language switcher with saved preference (`localStorage`)
- Discovery call booking form (static-friendly mailto flow)
- Responsive landing page sections with reusable components

## Quick Setup

### 1) Install dependencies

```bash
npm install
```

### 2) Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3) Build for production (static export)

```bash
npm run build
```

This generates a static site in the `out/` directory.

### 4) Deploy

Deploy the `out/` folder to any static host (Netlify, Cloudflare Pages, GitHub Pages, S3, etc.).

## Editing Content

- Main page content is centralized in `/Users/fisuboy/Documents/yingsTutoring/src/content/siteContent.ts`.
- `en` is complete.
- `es` and `zh` placeholders are ready for future translations.
