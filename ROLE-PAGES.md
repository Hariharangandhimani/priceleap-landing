# Role landing pages

Six "By Role" solution pages, ported from the design package (`priceleap-roles/`) to
**native Astro** (no `support.js` / `.html`). Each preserves the original design, layout
and animations, and uses the shared `PriceLeapLayout` (one Header/Footer, GTM, fonts,
favicon) with per-page `title`, meta `description`, canonical, Open Graph tags and
JSON-LD passed through as props.

## Routes added

| Route | File | `<title>` | H1 |
|---|---|---|---|
| `/solutions/category-managers` | `src/pages/solutions/category-managers.astro` | Pricing Tool for Category Managers \| priceleap.ai | Pricing tool for category managers |
| `/solutions/revenue-managers` | `src/pages/solutions/revenue-managers.astro` | Pricing Intelligence for Revenue Managers \| priceleap.ai | Pricing intelligence for revenue managers |
| `/solutions/pricing-managers` | `src/pages/solutions/pricing-managers.astro` | Pricing Software for Pricing Managers \| priceleap.ai | Pricing software for pricing managers |
| `/solutions/merchandising-managers` | `src/pages/solutions/merchandising-managers.astro` | Pricing Tool for Merchandising Managers \| priceleap.ai | Pricing tool for merchandising managers |
| `/solutions/marketing-managers` | `src/pages/solutions/marketing-managers.astro` | Competitor Promotion Tracking for Marketers \| priceleap.ai | Competitor promotion tracking for marketing managers |
| `/solutions/ecommerce-managers` | `src/pages/solutions/ecommerce-managers.astro` | Pricing Tool for Ecommerce Managers \| priceleap.ai | Pricing tool for ecommerce managers |

## SEO per page

- 140–160 char meta `description`, canonical `https://priceleap.ai/solutions/<slug>`, and
  OG `title`/`description`/`url` (handled by `PriceLeapLayout` from the props).
- Two JSON-LD blocks, no duplicate `@type`s:
  - **FAQPage** — the page's exact Q&A (link markers like `[[Price history|…]]` stripped
    to plain text in the schema).
  - **BreadcrumbList** — Home (`/`) › Solutions (`/solutions/`) › Role (the canonical URL).

## Navigation + sitemap

- Wired into the Solutions mega-menu **By Role** group in `src/data/plnav.ts`
  (route consts on `L`: `roleCategory`, `rolePricing`, `roleMarketing`, `roleEcom`,
  `roleRevenue`, `roleMerch`). The one remaining **By Role** item still pointing at `#`
  is **Product Managers**, which has no page in the design package.
- All six routes appear in `dist/sitemap-0.xml` via `@astrojs/sitemap` (no manual edit).

## Animations (reimplemented as vanilla JS + CSS, no framework runtime)

Each page runs a 1s `setInterval` paint loop plus an `IntersectionObserver` scroll-reveal;
responsive values that were `window.innerWidth`-driven in the original are CSS media
queries. FAQ accordions are single-open.

- **category-managers** — product table with a toggling price-trend column and cycling
  filter chips; category Q&A table; weekly checklist that fills in on reveal.
- **revenue-managers** — centered hero; two follow/hold line charts that draw on reveal;
  three revenue cards cycling the highlight.
- **pricing-managers** — hero Preview→SmartPrice cycle with a custom-% toggle;
  spreadsheet-vs-priceleap comparison with a cycling row highlight.
- **merchandising-managers** — product-groups table with periodic row re-checks
  (Checking… → Just now, spinner, flash); static market-signals grid; group-settings
  cycling highlight.
- **marketing-managers** — hero PriceLeap Agent chat sequence (chips → ask → typing →
  weekly-summary reply); "weekend price cut" 4-step timeline that fills on reveal;
  three-beliefs row with a cycling highlight.
- **ecommerce-managers** — "a week of catalog pricing" day selector that auto-advances
  every 4s (stops on click) and re-renders the notification center (filters, unread
  badge, notes); "everyday problems" row with a cycling highlight.

## Placeholder / sample content to note

- Hero **Book a Demo** CTAs link to `/book-a-demo`.
- In-copy link markers resolve to real pages where they exist
  (`/price-intelligence-engine`, `/dynamic-pricing-software`); markers such as
  *price drop alert*, *competitor URL*, *MAP Monitoring*, *marketplace resellers*,
  *Manage competitors* point at `#` in the source and remain `#` (no destination page yet).
- All dashboard figures (product names, prices, group names, notification text) are the
  **sample data from the design package**, not live data.

## Verification (per page, headless Chrome against the built `dist/`)

Exactly one `<h1>`; one `<header>` / one `<footer>`; FAQPage + BreadcrumbList present; the
loop animations tick and interactions work (FAQ toggle, day selector, etc.); the By Role
menu link resolves; canonical correct; no leftover `{{ }}`; no horizontal scroll at 375px
and 768px; 0 console errors and 0 real 404s.
