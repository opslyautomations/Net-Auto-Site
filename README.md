# Net Automotive Detailing — Production Website

**Domain:** www.netautomotivedetailing.com  
**Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · App Router  
**Owner:** Eli · (808) 777-8964 · office@netautomotivedetailing.com

---

## Quick Start

```bash
npm install
npm run dev        # Dev server at localhost:3000
npm run build      # Production build
npm run start      # Start production server
```

**Note:** If `npm run build` fails with a module resolution error, use:
```bash
node node_modules/next/dist/bin/next build
```

---

## Site Structure — 57 Total Routes

| Section | Count |
|---------|-------|
| Static pages (home, about, reviews, etc.) | 10 |
| Service pages `/services/[slug]` | 10 |
| Location pages `/service-areas/[slug]` | 19 |
| Blog posts `/blog/[slug]` | 20 |
| sitemap.xml + robots.txt + llms.txt | 3 |
| custom 404 not-found | 1 |

---

## Key Files

| File | Purpose |
|------|---------|
| `lib/services.ts` | All 10 service definitions |
| `lib/locations.ts` | All 19 location definitions |
| `lib/blogPosts.ts` | All 20 blog posts with full content |
| `lib/schema.ts` | JSON-LD schema builders |
| `lib/seo.ts` | buildMetadata() helper |
| `lib/constants.ts` | NAP, site config constants |
| `components/GHLForm.tsx` | GoHighLevel form embed component |
| `app/layout.tsx` | Root layout — GHL scripts loaded here |

---

## GoHighLevel Integration

- **Form ID:** `ABvoqJpqtmxcoFgbknFG`
- **Chat Widget ID:** `69a639dba27e8c57320e7fb7`
- Form script: `strategy="lazyOnload"` in root layout (loads once site-wide)
- Chat widget: `strategy="afterInteractive"` in root layout (loads once site-wide)

---

## Deployment (Vercel)

1. Push to GitHub
2. Connect to Vercel project
3. Set custom domain: `www.netautomotivedetailing.com`
4. Deploy

---

## Post-Launch Checklist

- [ ] Submit `/sitemap.xml` to Google Search Console
- [ ] Submit `/sitemap.xml` to Bing Webmaster Tools  
- [ ] Verify domain in Google Search Console
- [ ] Link Google Business Profile to the website URL
- [ ] Test GHL form → confirm submission reaches Eli's pipeline
- [ ] Test GHL chat widget → confirm it connects to LeadConnector account
- [ ] Add real before/after photos to `/public/images/` and gallery page
- [ ] Add owner bio for Eli in `app/about/page.tsx` (marked TODO)
- [ ] Confirm business hours with Eli and update in `lib/constants.ts`
- [ ] Add Facebook/Instagram URLs to `lib/constants.ts` sameAs array when live
- [ ] Review Privacy Policy and Terms of Service with legal counsel
- [ ] Create OG images (1200×630px) in `/public/og/` for each page type
- [ ] Validate pages with opengraph.xyz and Facebook Sharing Debugger
- [ ] Run Lighthouse audit on homepage, 1 service page, 1 location page, 1 blog post

---

## Brand Colors

| Name | Hex |
|------|-----|
| Navy (primary/bg) | `#0A1F3D` |
| Gold (CTA/accent) | `#F08C2A` |
| Light Blue | `#B1D1E7` |
| Soft Gray (section bg) | `#F4F6F9` |
| Muted Text | `#6B7A90` |

---

## TODO Items in Code

- `app/about/page.tsx` — Owner bio placeholder
- `app/contact/page.tsx` — Confirm hours with Eli
- `app/privacy/page.tsx` — Needs legal review
- `app/terms/page.tsx` — Needs legal review
- `public/og/` — OG images needed (1200×630px per page type)
- `public/images/` — Real before/after gallery photos

---

## Security Headers

Configured in `next.config.ts` — X-Frame-Options, X-Content-Type-Options,
Referrer-Policy, Permissions-Policy, HSTS, Content-Security-Policy.
