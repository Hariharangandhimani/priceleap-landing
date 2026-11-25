# Feature pages

Four `/features/*` pages, ported from the delivered `priceleap-features/` wireframes to
**native Astro** (no `support.js` runtime, no `.html`). Design, copy and markup are
preserved exactly; copy is final/signed-off. Each uses the shared `PriceLeapLayout`
(one Header/Footer, GTM, fonts, favicon) with per-page `title`, meta `description`,
canonical, Open Graph tags, and JSON-LD via props.

## Added (new routes — none existed before)

| Route | File | `<title>` |
|---|---|---|
| `/features/competitor-tracking` | `src/pages/features/competitor-tracking.astro` | Competitor Tracking Software \| priceleap.ai |
| `/features/price-alerts` | `src/pages/features/price-alerts.astro` | Competitor Price Alerts Software \| priceleap.ai |
| `/features/price-comparison` | `src/pages/features/price-comparison.astro` | Price Comparison Software for Sellers \| priceleap.ai |
| `/features/recommended-retail-price` | `src/pages/features/recommended-retail-price.astro` | Recommended Retail Price (RRP) Tracking \| priceleap.ai |

Also added: `public/assets/ct-01-tracking-modes.png`, `pa-01-alert-rules.png`,
`pc-01-competitor-table.png`, `rrp-01-product-info.png`.

**Not copied** (deliberately — the native build doesn't use them): `public/support.js`
and both `Site Header.dc.html` copies. This site renders one native `PriceLeapLayout`
Header/mega-menu and Footer sitewide, so the dc runtime + header fragments aren't needed.

## SEO per page

- 140–160 char meta description, canonical `https://priceleap.ai/features/<slug>`, and
  OG title/description/url/type/image (from `PriceLeapLayout` props).
- Two JSON-LD blocks, no duplicate `@type`: **FAQPage** (the exact on-page Q&A, link
  markers stripped to plain text) + **BreadcrumbList** (Home › Features › `<Page>`).

## Navigation + sitemap

- Wired into the **Features** mega-menu (`src/data/plnav.ts` `FEAT`): Competitor Tracking,
  Price Alerts, Price Comparison, Recommended Retail Price now point at the 4 routes.
  (Real Time Price Monitoring → `/real-time-price-monitoring` and Dynamic Repricing →
  `/dynamic-pricing-software` were already wired; Integrations stays `#` — no page.)
- All 4 routes auto-included in `dist/sitemap-0.xml` via `@astrojs/sitemap`.

## Site-wide items (spec step 7)

- **"Get a demo" → "Book a Demo":** done in the Header (desktop CTA + mobile drawer),
  now pointing at `/book-a-demo`. Every on-page CTA already reads "Book a Demo".
- **"LIVE MONITORING ACTIVE" badge, footer "real-time" tagline, and the nav descriptions
  "Auto-reprice within your rules" / "See price changes in minutes" / "Get notified the
  moment prices move":** not present in this site's native Header/Footer (they existed only
  in the design-package `Site Header.dc.html`), so there was nothing to remove.

## Internal link audit (spec step 6)

The wireframes link to `/features/...` and `/product/...` paths that differ from this
site's routes. Mapped to the real equivalents (not invented):

| Link in wireframe | Resolved to | Status |
|---|---|---|
| `/features/real-time-price-monitoring` | `/real-time-price-monitoring` | ✅ exists |
| `/features/dynamic-repricing` | `/dynamic-pricing-software` | ✅ exists |
| `/product/price-intelligence` | `/price-intelligence-engine` | ✅ exists |
| `/features/competitor-tracking` · `/features/price-alerts` · `/features/price-comparison` · `/features/recommended-retail-price` | same | ✅ new (these pages) |
| `/book-a-demo` | `/book-a-demo` | ✅ exists |
| `/solutions/by-need/map-monitoring` | `#` | ⚠️ **no page on this site** — "MAP Monitoring" link on the RRP page points to `#`. MAP Monitoring is still a `#` placeholder in the mega-menu too. Create the page, then repoint. |

## Verification

`astro build` passes (82 pages). Headless Chrome against the built `dist/`, all 4 routes:
exactly one `<h1>`; one `<header>` / one `<footer>`; FAQPage + BreadcrumbList present;
canonical + 5 OG tags; the per-page animation loops tick; FAQ accordion toggles; Features
menu links resolve; no leftover `{{ }}`; no horizontal scroll at 375px and 768px; 0 console
errors and 0 real 404s. Mega-menu hover/panel works on desktop and the burger drawer
below 1080px (shared `PriceLeapLayout` header, already in use sitewide).

## Open before launch (product team — from the specs)

These are **product/data** follow-ups carried over from the wireframes, not code issues:

- **Retake screenshots** so they show the real states the copy describes:
  - `pc-01-competitor-table.png` — show a **No match** competitor cell.
  - `rrp-01-product-info.png` — show **empty MAP field** behaviour and the **Set validity**
    date control in its real state.
- **Set validity** behaviour (MAP/MSRP date ranges) — confirm final UX before the RRP page
  copy about validity dates goes live.
- **Webhook alerts by plan** — Price Alerts copy says webhook/Slack come with Growth & Scale;
  confirm the final plan matrix.
- **Competitor limit per plan** — Competitor Tracking implies limits; confirm per-plan caps.
- **Microsoft Teams channel** and **"+ Add alert" options** — confirm the final list of
  delivery channels and alert types shown on the Price Alerts page.
- **MAP Monitoring page** — referenced from the RRP page; create `/solutions/by-need/map-monitoring`
  (or the equivalent) and repoint the link.
