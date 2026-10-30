# PriceLeap — Astro site

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Structure
```
src/
  styles/global.css        Design tokens (CSS vars) + base/utility classes
  layouts/BaseLayout.astro Head, fonts, Nav, Footer, scroll-reveal
  data/                    All copy & numbers (site.ts, home.ts, pricing.ts) — edit here
  scripts/                 Tiny vanilla helpers: reveal, stepper, format
  components/
    ui/        Button, Logo, Pill, SectionHeading, CheckList, Icon, Accordion, PageHero
    layout/    Nav (mobile menu), Footer, AnnouncementBar
    sections/  CTABanner (shared closing banner)
    home/      Hero, DashboardPreview, TrustStrip, Problem, ProductTour,
               Capabilities, Accuracy, HowItWorks, Integrations, Results
    pricing/   BillingToggle, PlanFinder, FreePlanCard, PlanCard, EnterpriseCard, CompareTable
    demo/      DemoForm (3-step booking)
    contact/   ContactCard, CopyEmail, ContactForm, OfficeCard, HoursCard
  pages/       index, pricing, book-a-demo, contact
public/assets/ mark, icons, logos/, badges/
```

## Layout variants
`<BaseLayout chrome="minimal">` hides the marketing nav links + big footer (used on demo/contact for conversion).

## Conventions
- Zero framework JS: each interactive component ships a small `<script>` (Astro bundles + dedupes).
- Scoped `<style>` per component; shared tokens live in `global.css`.
- `data-reveal` on any element = fade-up on scroll. Respects `prefers-reduced-motion`.
- `data-at="N"` inside a stepper root = element turns `.is-on` at step N (see `scripts/stepper.ts`).
- Pricing: `data-monthly` / `data-annual` attributes swap automatically with the billing toggle.

## TODO
- Wire forms to your CRM / calendar — see `TODO` comments in `DemoForm.astro` and `ContactForm.astro`.
- Replace `[PLACEHOLDER]` values and illustrative stats.
