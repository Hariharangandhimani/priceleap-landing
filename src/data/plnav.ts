// Mega-menu + footer navigation data for the PriceLeap design.
// Extracted from the design package's "Site Header.dc.html" so the header is data-driven and reusable.

export const L = {
  pie: '/price-intelligence-engine',
  rtm: '/real-time-price-monitoring',
  dps: '/dynamic-pricing-software',
  ret: '/for-retailers',
  ecom: '/ecommerce-price-tracking',
  about: '/about',
  contact: '/contact',
  privacy: '/privacy-policy',
  terms: '/terms',
  blog: '/blog',
  glossary: '/glossary',
  pricing: '/pricing',
  faq: '/faq',
  demo: '/book-a-demo',
  compData: '/competitive-data',
  scraping: '/price-scraping',
  matching: '/product-matching',
  predictive: '/predictive-pricing',
  solBrands: '/solutions/brands',
  solElectronics: '/solutions/electronics-retail',
  solAuto: '/solutions/automotive-parts',
  solDrop: '/solutions/drop-shippers',
  roleCategory: '/solutions/category-managers',
  rolePricing: '/solutions/pricing-managers',
  roleMarketing: '/solutions/marketing-managers',
  roleEcom: '/solutions/ecommerce-managers',
  roleRevenue: '/solutions/revenue-managers',
  roleMerch: '/solutions/merchandising-managers',
};

export type MenuItem = { t: string; d?: string; href: string };

export const PRODUCT: MenuItem[] = [
  { t: 'Price Intelligence Engine', d: 'Live competitor prices, index and positioning.', href: L.pie },
  { t: 'Pricing Decision Engine', d: 'Rules, floors and ceilings that turn data into moves.', href: '#' },
  { t: 'Margin Protection Engine', d: 'Guardrails that stop prices eroding margin.', href: '#' },
  { t: 'Competitive Data', d: 'Clean, matched competitor data at catalog scale.', href: L.compData },
  { t: 'Price Scraping', d: 'Managed extraction from any marketplace or store.', href: L.scraping },
  { t: 'Product Matching', d: 'AI matching with human QC on every SKU.', href: L.matching },
  { t: 'Price Engine', d: 'The core engine behind every price recommendation.', href: '#' },
  { t: 'Price Optimization', d: 'Find the price that balances volume and margin.', href: '#' },
  { t: 'Predictive Pricing', d: 'Forecast market moves before they happen.', href: L.predictive },
];

export type SolGroup = { t: string; d: string; items: MenuItem[] };
export const SOL: SolGroup[] = [
  { t: 'By Industry', d: 'Built for your market', items: [
    { t: 'For Retailers', href: L.ret }, { t: 'For Ecommerce', href: L.ecom }, { t: 'For Brands & Manufacturers', href: L.solBrands },
    { t: 'For Marketplace Sellers', href: '#' }, { t: 'For Electronics Retail', href: L.solElectronics }, { t: 'Automotive Parts & Accessories', href: L.solAuto }, { t: 'For Drop Shippers', href: L.solDrop } ] },
  { t: 'By Role', d: 'Built for your team', items: [
    { t: 'Category Managers', href: L.roleCategory }, { t: 'Pricing Managers', href: L.rolePricing }, { t: 'Product Managers', href: '#' },
    { t: 'Marketing Managers', href: L.roleMarketing }, { t: 'Ecommerce Managers', href: '#' }, { t: 'Revenue Managers', href: L.roleRevenue }, { t: 'Merchandising Managers', href: L.roleMerch } ] },
  { t: 'By Need', d: 'Built for your goal', items: [
    { t: 'Price Tracking', href: L.ecom }, { t: 'MAP Monitoring', href: '#' }, { t: 'Price Intelligence', href: L.pie } ] },
  { t: 'By Size', d: 'Built for your scale', items: [
    { t: 'Small Scale', href: '#' }, { t: 'Medium', href: '#' }, { t: 'Enterprise', href: '#' } ] },
  { t: 'Distributors', d: 'Built for distribution', items: [
    { t: 'For Electronics Distributor', href: '#' }, { t: 'For OEM Distributors', href: '#' } ] },
];

export const FEAT: MenuItem[] = [
  { t: 'Real Time Price Monitoring', d: 'Priority SKUs refreshed through the day.', href: L.rtm },
  { t: 'Dynamic Repricing', d: 'Automatic price moves inside your rules.', href: L.dps },
  { t: 'Price Comparison', d: 'Side-by-side view against every rival.', href: '#' },
  { t: 'Competitor Tracking', d: 'Follow assortment, promos and stock.', href: '#' },
  { t: 'Price Alerts', d: 'Email, Slack and SMS when markets move.', href: '#' },
  { t: 'Integrations', d: 'API, ERP, Shopify, Snowflake and more.', href: '#' },
  { t: 'Recommended Retail Price', d: 'Set and monitor RRP across channels.', href: '#' },
];

export const PLAT = [
  { t: 'Campaigns / Grouping', d: 'Group SKUs and run pricing campaigns.', ab: 'CG' },
  { t: 'Workspace', d: 'Shared views, filters and saved reports.', ab: 'WS' },
  { t: 'Team', d: 'Roles, permissions and approvals.', ab: 'TM' },
  { t: 'Usage', d: 'SKU volume, refresh and credits.', ab: 'US' },
];

export const RES: { t: string; items: MenuItem[] }[] = [
  { t: 'RESOURCES', items: [
    { t: 'Blog', href: L.blog }, { t: 'Case studies', href: '#' }, { t: 'Glossary', href: L.glossary },
    { t: 'Ebooks & Guide', href: '#' }, { t: 'Help Center', href: '#' }, { t: 'Academy', href: '#' } ] },
  { t: 'COMPANY', items: [
    { t: 'About Us', href: L.about }, { t: 'Customer Testimonials', href: '#' }, { t: 'Data Compliance', href: L.privacy },
    { t: 'Careers', href: '#' }, { t: 'Partners', href: '#' }, { t: 'Contact Us', href: L.contact } ] },
];

export type Featured = { k: string; tag: string; stat: string; sub: string; t: string; d: string; cta: string; href: string };
export const FEATURED: Record<string, Featured> = {
  product: { k: 'FEATURED', tag: 'PRICE INDEX', stat: '105.4', sub: '▼ 3.6% VS MARKET · 12,480 SKUS', t: 'See where you stand on every SKU', d: 'One index across your full catalog, refreshed in real time.', cta: 'See it on your data', href: L.contact },
  solutions: { k: 'CUSTOMER RESULT', tag: 'BUY BOX WIN RATE', stat: '28% → 90%+', sub: 'CONSUMER ELECTRONICS · 6 WEEKS', t: 'Win the Buy Box without racing to the bottom', d: 'Automated responses to undercuts, inside the margin floor.', cta: 'Talk to sales', href: L.contact },
  features: { k: 'MOST USED', tag: 'PRICE ALERT', stat: '−6.2%', sub: 'RIVAL B · 14:32 · SLACK + EMAIL', t: 'Know the minute a competitor moves', d: 'Real-time alerts routed to the right team, with context.', cta: 'Explore monitoring', href: L.rtm },
  resources: { k: 'START HERE', tag: 'GUIDE', stat: 'Live in days', sub: 'CONNECT · MATCH · PRICE', t: 'The pricing team’s setup guide', d: 'Connect your catalog, set rules and go live.', cta: 'Read the guide', href: '#' },
};

// Top-level nav order. menu = dropdown key, or href for a direct link.
export const TOP: { key: string; label: string; href?: string }[] = [
  { key: 'product', label: 'Product' },
  { key: 'solutions', label: 'Solutions' },
  { key: 'features', label: 'Features' },
  { key: 'pricing', label: 'Pricing', href: L.pricing },
  { key: 'resources', label: 'Resources' },
];

// Footer columns
export const FOOTER_COLS: { t: string; items: MenuItem[] }[] = [
  { t: 'PRODUCT', items: [
    { t: 'Price Intelligence', href: L.pie }, { t: 'Decision Engine', href: '#' }, { t: 'Dynamic Pricing', href: L.dps }, { t: 'PriceLeap Agent', href: '#' }, { t: 'Reports', href: '#' } ] },
  { t: 'SOLUTIONS', items: [
    { t: 'E-commerce brands', href: L.ecom }, { t: 'Marketplace sellers', href: '#' }, { t: 'Retailers', href: L.ret }, { t: 'D2C stores', href: '#' }, { t: 'MAP monitoring', href: '#' } ] },
  { t: 'RESOURCES', items: [
    { t: 'Blog', href: L.blog }, { t: 'Glossary', href: L.glossary }, { t: 'FAQ', href: L.faq }, { t: 'Integrations', href: '#' }, { t: 'API docs', href: '#' } ] },
  { t: 'COMPANY', items: [
    { t: 'About', href: L.about }, { t: 'Customers', href: '#' }, { t: 'Careers', href: '#' }, { t: 'Contact', href: L.contact }, { t: 'Book a demo', href: L.demo } ] },
  { t: 'LEGAL', items: [
    { t: 'Privacy policy', href: L.privacy }, { t: 'Terms of service', href: L.terms }, { t: 'Security', href: '#' }, { t: 'DPA', href: '#' }, { t: 'Cookie settings', href: '#' } ] },
];
