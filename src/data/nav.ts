export type NavItem = { t: string; d: string; href: string; tag?: string };
export type Menu = { key: string; label: string; eyebrow: string; all: { label: string; href: string }; items: NavItem[]; links: { label: string; href: string }[]; featured: { tag: string; stat: string; bar: number; sub: string; title: string; desc: string; cta: string; href: string } };
export const MENUS: Menu[] = [
  { key: 'product', label: 'Product', eyebrow: 'PLATFORM', all: { label: 'Explore the platform', href: '/price-intelligence-engine' }, items: [
    { t: 'Price Intelligence', d: 'Live competitor prices, index and positioning.', href: '/price-intelligence-engine' },
    { t: 'Decision Engine', d: 'Rules with floors, ceilings and MAP built in.', href: '/dynamic-pricing-software' },
    { t: 'Dynamic Pricing', d: 'AI price recommendations inside your margin.', href: '/dynamic-pricing-software' },
    { t: 'Real-Time Monitoring', d: 'Live prices from the sites you compete on.', href: '/real-time-price-monitoring' },
    { t: 'Product Matching', d: 'AI matching plus human QC on every SKU.', href: '/price-intelligence-engine' },
    { t: 'MAP Monitoring', d: 'Violation alerts and promotion tracking.', href: '/real-time-price-monitoring' } ],
    links: [{ label: 'Data accuracy', href: '/#accuracy' }, { label: 'Security', href: '/#integrations' }, { label: 'Contact sales', href: '/contact' }],
    featured: { tag: 'PRICE INDEX · LIVE', stat: '105.4', bar: 72, sub: '▼ 3.6% vs market', title: 'See where you stand on every SKU', desc: 'One index across your full catalog, refreshed in real time.', cta: 'Book a demo', href: '/book-a-demo' } },
  { key: 'solutions', label: 'Solutions', eyebrow: 'BY TEAM & INDUSTRY', all: { label: 'All solutions', href: '/for-retailers' }, items: [
    { t: 'E-commerce brands', d: 'Protect price position across every channel.', href: '/ecommerce-price-tracking' },
    { t: 'Marketplace sellers', d: 'Win the Buy Box without racing to the bottom.', href: '/price-intelligence-engine' },
    { t: 'Retailers', d: 'Monitor thousands of SKUs against every rival.', href: '/for-retailers' },
    { t: 'D2C stores', d: 'Stay competitive without giving away margin.', href: '/ecommerce-price-tracking' },
    { t: 'Consumer electronics', d: 'Track fast-moving prices and launches.', href: '/real-time-price-monitoring' },
    { t: 'Automotive parts', d: 'Match parts by fitment, brand and condition.', href: '/for-retailers' } ],
    links: [{ label: 'Pricing teams', href: '/about' }, { label: 'Category managers', href: '/for-retailers' }, { label: 'Marketplace ops', href: '/contact' }],
    featured: { tag: 'CUSTOMER RESULT', stat: '28% → 90%+', bar: 90, sub: 'BUY BOX WIN RATE · 6 WEEKS', title: 'Consumer electronics seller', desc: 'Automated responses to undercuts, inside the margin floor.', cta: 'Read the results', href: '/about' } },
  { key: 'resources', label: 'Resources', eyebrow: 'LEARN', all: { label: 'Resource center', href: '/design-system' }, items: [
    { t: 'How it works', d: 'From catalog upload to live pricing in days.', href: '/#how' },
    { t: 'Data accuracy', d: 'How every match is verified before it counts.', href: '/#accuracy' },
    { t: 'Integrations', d: '20+ connectors, REST API and webhooks.', href: '/#integrations' },
    { t: 'Pricing', d: 'Usage-based plans for every catalog size.', href: '/pricing' },
    { t: 'Contact sales', d: 'Get answers from a pricing specialist.', href: '/contact' },
    { t: 'Design system', d: 'Explore the reusable product language.', href: '/design-system' } ],
    links: [{ label: 'Privacy policy', href: '/privacy-policy' }, { label: 'Terms', href: '/terms' }, { label: 'Contact sales', href: '/contact' }],
    featured: { tag: 'GUIDE', stat: 'Live in days', bar: 40, sub: 'TYPICAL SETUP · 5 MIN', title: 'The pricing team’s setup guide', desc: 'Connect your catalog, set rules and go live.', cta: 'Book a demo', href: '/book-a-demo' } }
];
export const DIRECT = [{ label: 'Integrations', href: '/#integrations' }, { label: 'Pricing', href: '/pricing' }];

export type MegaLink = { label: string; description?: string; href: string; tag?: string };
export type MegaColumn = { title: string; links: MegaLink[] };
export type MegaMenu = { key: string; label: string; eyebrow: string; intro: string; href: string; columns: MegaColumn[]; featured: { eyebrow: string; title: string; body: string; href: string; cta: string } };

export const MEGA_MENUS: MegaMenu[] = [
  {
    key: 'product', label: 'Product', eyebrow: 'THE PRICING INTELLIGENCE PLATFORM', href: '/price-intelligence-engine',
    intro: 'One connected workspace for seeing the market, making pricing decisions, and protecting margin.',
    columns: [
      { title: 'Price Intelligence', links: [
        { label: 'Price Intelligence Engine', description: 'See every competitor and position.', href: '/price-intelligence-engine' },
        { label: 'Pricing Decision Engine', description: 'Turn signals into rules and action.', href: '/dynamic-pricing-software' },
        { label: 'Margin Protection Engine', description: 'Keep every move inside your floor.', href: '/dynamic-pricing-software' },
        { label: 'Competitive Data', description: 'Reliable, verified market coverage.', href: '/real-time-price-monitoring' },
        { label: 'Price Scraping', description: 'Collect live public market prices.', href: '/real-time-price-monitoring' },
        { label: 'Product Matching', description: 'Match variants with confidence.', href: '/price-intelligence-engine' },
      ] },
      { title: 'AI Platform', links: [
        { label: 'Price Engine', description: 'Plug intelligence into your stack.', href: '/price-intelligence-engine' },
        { label: 'Price Optimization', description: 'Make the next best price obvious.', href: '/dynamic-pricing-software' },
        { label: 'Predictive Pricing', description: 'Plan for demand and market moves.', href: '/dynamic-pricing-software', tag: 'COMING SOON' },
      ] },
    ],
    featured: { eyebrow: 'LIVE PRICE INDEX', title: 'Know where you stand before the market moves.', body: 'Explore a real competitor sample built around your catalog.', href: '/book-a-demo', cta: 'See your sample →' },
  },
  {
    key: 'solutions', label: 'Solutions', eyebrow: 'BUILT AROUND YOUR BUSINESS', href: '/for-retailers',
    intro: 'Choose the view that matches your team, industry, business size, or immediate pricing challenge.',
    columns: [
      { title: 'By Industry', links: [
        { label: 'For Retailers', href: '/for-retailers' }, { label: 'For Ecommerce', href: '/ecommerce-price-tracking' }, { label: 'For Brands & Manufacturers', href: '/ecommerce-price-tracking' }, { label: 'For Marketplace Sellers', href: '/price-intelligence-engine' }, { label: 'For Electronics Retail', href: '/real-time-price-monitoring' }, { label: 'Automotive Parts & Accessories', href: '/for-retailers' }, { label: 'For Drop shippers', href: '/ecommerce-price-tracking' },
      ] },
      { title: 'By Role', links: [
        { label: 'Category Managers', href: '/for-retailers' }, { label: 'Pricing Managers', href: '/pricing' }, { label: 'Product Managers', href: '/price-intelligence-engine' }, { label: 'Marketing Managers', href: '/ecommerce-price-tracking' }, { label: 'Ecommerce Managers', href: '/ecommerce-price-tracking' }, { label: 'Revenue Managers', href: '/dynamic-pricing-software' }, { label: 'Merchandising Managers', href: '/for-retailers' },
      ] },
      { title: 'By Need', links: [
        { label: 'Price Tracking', href: '/real-time-price-monitoring' }, { label: 'MAP Monitoring', href: '/real-time-price-monitoring' }, { label: 'Price Intelligence', href: '/price-intelligence-engine' },
      ] },
      { title: 'By Size', links: [
        { label: 'Small Scale', href: '/pricing' }, { label: 'Medium', href: '/pricing' }, { label: 'Enterprise', href: '/book-a-demo' }, { label: 'For Electronics Distributor', href: '/for-retailers' },
      ] },
    ],
    featured: { eyebrow: 'BUILT FOR SCALE', title: 'From one category to millions of SKUs.', body: 'See how teams move from spreadsheets to a pricing system they can trust.', href: '/about', cta: 'Explore the story →' },
  },
  {
    key: 'features', label: 'Features', eyebrow: 'SEE THE SYSTEM IN MOTION', href: '/real-time-price-monitoring',
    intro: 'The daily workflows that turn competitor data into better pricing decisions.',
    columns: [
      { title: 'Market Intelligence', links: [
        { label: 'Real-Time Price Monitoring', href: '/real-time-price-monitoring' }, { label: 'Dynamic Repricing', href: '/dynamic-pricing-software' }, { label: 'Price Comparison', href: '/ecommerce-price-tracking' }, { label: 'Competitor Tracking', href: '/real-time-price-monitoring' }, { label: 'Price Alerts', href: '/real-time-price-monitoring' }, { label: 'Integrations', href: '/#integrations' }, { label: 'Recommended Retail Price', href: '/dynamic-pricing-software' },
      ] },
      { title: 'Platform Management', links: [
        { label: 'Campaigns / Grouping', href: '/for-retailers' }, { label: 'Workspace', href: '/about' }, { label: 'Team', href: '/contact' }, { label: 'Usage', href: '/pricing' },
      ] },
    ],
    featured: { eyebrow: 'WORKSPACE PREVIEW', title: 'One place to monitor, decide, and act.', body: 'Bring your catalog, competitors, rules, and alerts together.', href: '/book-a-demo', cta: 'Book a walkthrough →' },
  },
  {
    key: 'resources', label: 'Resources', eyebrow: 'LEARN, COMPARE, GET STARTED', href: '/design-system',
    intro: 'Practical resources for pricing teams building a stronger competitive edge.',
    columns: [
      { title: 'Resources', links: [
        { label: 'Blog', href: '/design-system#blog' }, { label: 'Case Studies', href: '/about' }, { label: 'Glossary', href: '/design-system#glossary' }, { label: 'Ebooks & Guides', href: '/book-a-demo' }, { label: 'Help Center', href: '/contact' }, { label: 'Academy', href: '/design-system' },
      ] },
      { title: 'Company', links: [
        { label: 'About Us', href: '/about' }, { label: 'Customer Testimonials', href: '/about' }, { label: 'Data Compliance', href: '/privacy-policy' }, { label: 'Careers', href: '/contact' }, { label: 'Partners', href: '/contact' }, { label: 'Contact Us', href: '/contact' },
      ] },
    ],
    featured: { eyebrow: 'START HERE', title: 'Bring a real pricing question.', body: 'We will show you the data, workflow, and next step in 15 minutes.', href: '/book-a-demo', cta: 'Book a demo →' },
  },
];
