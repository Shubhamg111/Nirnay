# Nirnay — Astro Starter

A production-ready multi-category blog (Finance, Tech, Gadgets) with four working
financial calculators, built with Astro + React islands + Tailwind.

## Getting started

1. Install Node.js (v18+): https://nodejs.org
2. Install dependencies:
   ```
   npm install
   ```
3. Run the dev server:
   ```
   npm run dev
   ```
   Visit http://localhost:4321
4. Build for production:
   ```
   npm run build
   npm run preview   # sanity-check the production build locally
   ```

## Site structure

- **Sections**: `finance`, `tech`, `gadgets` — defined in `src/lib/categories.ts`
- **Categories**: each section has its own set of categories (e.g. Finance →
  "NEPSE Basics", "Mutual Funds"; Tech → "Software", "AI Tools"; Gadgets →
  "Reviews", "Buying Guides")
- **URLs**: `/blog/{section}/{slug}` for posts, `/blog/{section}` for a section's
  archive, `/blog` for everything

## Adding a new blog post

Create a `.md` file in `src/content/blog/`:

```md
---
title: "Your Post Title"
description: "One-line summary for SEO/social sharing"
pubDate: 2026-08-01
section: "finance"          # finance | tech | gadgets
category: "NEPSE Basics"    # must match one of the categories for that section
tags: ["tag1", "tag2"]
draft: false
---

Your content here in Markdown.
```

Valid `section` → `category` pairs are defined in `src/content/config.ts` and
`src/lib/categories.ts` — keep both in sync if you add a new category. Wrong
combinations fail `npm run build` with a clear error, on purpose.

## Calculators

Located at `/tools`, each is a React island with a real formula (not a mock):

| Page | What it does |
|---|---|
| `/tools/sip-calculator` | Monthly SIP future value |
| `/tools/lumpsum-calculator` | One-time investment + optional monthly top-ups |
| `/tools/emi-calculator` | Loan EMI, total interest, amortization split |
| `/tools/fd-calculator` | Bank FD maturity value with selectable compounding |

Components live in `src/components/calculators/`. To add a new calculator: create
a `.jsx` component there, then a thin `.astro` page in `src/pages/tools/` that
imports it with `client:load`, then add it to the list in `src/pages/tools/index.astro`.

## SEO / production checklist already handled

- Per-page meta tags, canonical URLs, Open Graph, Twitter cards (`BaseLayout.astro`)
- `robots` meta tag (defaults to `index, follow`; pass `noindex` prop to hide a page)
- `sitemap.xml` auto-generated via `@astrojs/sitemap`
- `public/robots.txt` and `public/favicon.svg` included
- Custom `404.astro` page
- JSON-LD structured data on every article

## Before deploying

1. Update `site: 'https://your-domain.com'` in `astro.config.mjs` to your real domain
2. Update the `Sitemap:` line in `public/robots.txt` to match
3. Replace `public/images/og-default.jpg` with a real social-share image (1200×630px)
4. Push to GitHub, connect the repo to Vercel or Netlify (free tiers work fine) —
   every `git push` after that rebuilds and redeploys automatically

## Content already included

- 5 finance posts (NEPSE basics, mutual funds vs stocks, NEPSE index, real estate)
- 1 tech post (AI tools roundup)
- 1 gadgets post (budget smartphone buying guide)

Use these as templates for tone and structure when adding more.
# Nirnay
