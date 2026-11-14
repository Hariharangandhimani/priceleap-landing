# PriceLeap redesign migration

Branch: `feat/priceleap-redesign`

Goal: replace the old design with the new PriceLeap design package (`~/Downloads/priceleap-astro`),
rebuilt **natively in Astro** (server-rendered, componentised, no `support.js` client runtime) so the
site keeps the same design + flow while being optimised for Core Web Vitals and SEO.

## Decisions (approved)
- **Architecture:** rebuild natively in Astro. The design package ships pages as a client-side template
  runtime (`<x-dc>`, `<sc-for>`, `<sc-if>`, `{{ }}` + `support.js`). We translate those into real Astro
  components; content renders server-side. `support.js` is **not** used.
- **Keep** the existing `pricing`, `faq`, `book-a-demo` pages (no equivalent in the new package).
- **Drop** `light` and `design-system` (internal demos).
- **Blog (17 posts) + glossary (20 terms):** rendered from existing `src/data/blog.json` /
  `src/data/glossary.json` through the new template design.
- Purely decorative auto-animations (endless `setInterval` repaints) are rendered as clean static/CSS
  states — better for INP/LCP. Meaningful interactions (mega menu, mobile nav, tabs, accordions, TOC,
  scroll progress) are kept.

## Design system foundation (added)
- `src/styles/pl-tokens.css` — `--pl-*` design tokens (copied from package).
- `src/styles/pl-global.css` — resets, `.pl-*` primitives, shared keyframes, reduced-motion.
- `src/data/plnav.ts` — mega-menu + footer nav data (reusable).
- `src/data/pllegal.json` — privacy + terms document content (extracted from package).
- `src/layouts/PriceLeapLayout.astro` — base layout (fonts, meta/OG, canonical, JSON-LD slot, Header, Footer).
- `src/components/pl/Header.astro` — sticky header + mega menu (CSS hover panels; JS for Solutions tabs + mobile drawer).
- `src/components/pl/Footer.astro` — site footer.
- `src/components/pl/LegalDoc.astro` — reusable legal template (hero + sticky TOC + sections + progress).

## Route map (old → new)
| Route | Status |
|---|---|
| `/privacy-policy` | ✅ done (native) |
| `/terms` | ✅ done (native) |
| `/glossary` + `/glossary/[slug]` (20) | ✅ done (native, from glossary.json) |
| `/blog` + `/blog/[slug]` (17) | ✅ done (native, from blog.json) |
| `/about` | ✅ done (native) |
| `/contact` | ✅ done (native; form endpoint TODO) |
| `/` | ⏳ pending (home — heaviest, ~15 animated widgets) |
| `/price-intelligence-engine` | ⏳ pending (marketing) |
| `/real-time-price-monitoring` | ⏳ pending (marketing) |
| `/ecommerce-price-tracking` | ⏳ pending (marketing) |
| `/dynamic-pricing-software` | ⏳ pending (marketing) |
| `/for-retailers` | ⏳ pending (marketing) |
| `/pricing` | keep (old design, re-skin later) |
| `/faq` | keep (old design, re-skin later) |
| `/book-a-demo` | keep (old design, re-skin later) |
| `/404` | keep |
| `/light`, `/design-system` | to delete |

Done so far: **45 routes** native, server-rendered, building clean, no `support.js` runtime.
Remaining: home + 5 marketing pages, then wiring (sitemap/redirects), cleanup (delete
`light`/`design-system` + unused old components/styles), and re-skin of pricing/faq/book-a-demo.

## Open TODOs
- Contact form + newsletter submit handlers are client-only — wire to a real endpoint.
- Fill placeholders in ported content (`[X]`, `[PLACEHOLDER]`, `[VERIFY STAT]`, sample customer names).
- Re-skin `pricing` / `faq` / `book-a-demo` to the new system (or confirm keep-as-is).
- Add redirects for any changed URLs; update `public/sitemap.xml`.
- Remove old design files (components, styles, data) once nothing references them.

## How to change the design later
Edit `src/styles/pl-tokens.css` (the `--pl-*` variables). Every component references these, so one edit
re-themes the whole site.
