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
| `/` | ✅ done (native home) |
| `/price-intelligence-engine` | ✅ done (native) |
| `/real-time-price-monitoring` | ✅ done (native) |
| `/ecommerce-price-tracking` | ✅ done (native) |
| `/dynamic-pricing-software` | ✅ done (native) |
| `/for-retailers` | ✅ done (native) |
| `/pricing` | kept (old design, re-skin later) |
| `/faq` | kept (old design, re-skin later) |
| `/book-a-demo` | kept (old design, re-skin later) |
| `/404` | kept |
| `/light`, `/design-system` | ✅ deleted |

**Status: all 14 new-design routes migrated natively** (+ blog 17, glossary 20), server-rendered,
`astro check` clean (0 errors/warnings), `astro build` clean (53 pages). No `support.js` runtime.

## Shared marketing components/styles (added)
- `src/components/pl/Faq.astro` — reusable FAQ accordion (used by all 5 solution/feature pages).
- `src/styles/pl-marketing.css` — shared `mk-*` marketing section styles (hero, logos, before/after, CTA…).

## Notes on fidelity
- The design package renders pages client-side via `support.js` with auto-playing animated dashboards.
  Per the chosen approach, decorative auto-animations (scroll tours, orbits, rotating counters) are
  rendered as clean static/CSS states for Core Web Vitals; meaningful interactions are kept native:
  mega menu (CSS hover + JS mobile drawer), FAQ accordions, Solutions/Inside-PriceLeap tabs,
  integration category filter, testimonial switcher, glossary/blog search + filters, legal/blog/glossary TOC.
- `pricing`, `faq`, `book-a-demo` still use the **old** `SiteLayout`/components and old tokens. They build
  fine but visually differ from the new design — re-skin to `PriceLeapLayout` + `--pl-*` as a follow-up.

## Open TODOs
- Contact form + footer newsletter submit handlers are client-only — wire to a real endpoint.
- Fill placeholders in ported content (`[X]`, `[PLACEHOLDER]`, `[VERIFY STAT]`, sample customer names,
  `[Client name]`) before publishing.
- Re-skin `pricing` / `faq` / `book-a-demo` to the new system (or confirm keep-as-is).
- `public/sitemap.xml` regenerated from data (52 URLs). Add host redirects only if any old URL changed
  (none did — all slugs preserved).
- Old design files (`src/components/{ds,light,pricing,...}`, old `src/styles/*`, `src/layouts/SiteLayout.astro`)
  are still referenced by the 3 kept pages; delete once those are re-skinned.

## How to change the design later
Edit `src/styles/pl-tokens.css` (the `--pl-*` variables). Every component references these, so one edit
re-themes the whole site.
