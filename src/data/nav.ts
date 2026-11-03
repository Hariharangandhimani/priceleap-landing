export type NavItem = { t: string; d: string; href: string; tag?: string };
export type Menu = { key: string; label: string; eyebrow: string; all: { label: string; href: string }; items: NavItem[]; links: { label: string; href: string }[]; featured: { tag: string; stat: string; bar: number; sub: string; title: string; desc: string; cta: string; href: string } };
export const MENUS: Menu[] = [
  { key: 'product', label: 'Product', eyebrow: 'PLATFORM', all: { label: 'Explore the platform', href: '/product' }, items: [
    { t: 'Price Intelligence', d: 'Live competitor prices, index and positioning.', href: '/product/price-intelligence' },
    { t: 'Decision Engine', d: 'Rules with floors, ceilings and MAP built in.', href: '/product/decision-engine' },
    { t: 'Dynamic Pricing', d: 'AI price recommendations inside your margin.', href: '/product/dynamic-pricing' },
    { t: 'PriceLeap Agent', d: 'Plain-English answers on prices and rivals.', href: '/product/agent', tag: 'NEW' },
    { t: 'Product Matching', d: 'AI matching plus human QC on every SKU.', href: '/product/matching' },
    { t: 'MAP Monitoring', d: 'Violation alerts and promotion tracking.', href: '/product/map-monitoring' } ],
    links: [{ label: 'Data accuracy', href: '/accuracy' }, { label: 'Security', href: '/security' }, { label: 'Changelog', href: '/changelog' }],
    featured: { tag: 'PRICE INDEX · LIVE', stat: '105.4', bar: 72, sub: '▼ 3.6% vs market', title: 'See where you stand on every SKU', desc: 'One index across your full catalog, refreshed in real time.', cta: 'See a sample of your data', href: '/demo' } },
  { key: 'solutions', label: 'Solutions', eyebrow: 'BY TEAM & INDUSTRY', all: { label: 'All solutions', href: '/solutions' }, items: [
    { t: 'E-commerce brands', d: 'Protect price position across every channel.', href: '/solutions/brands' },
    { t: 'Marketplace sellers', d: 'Win the Buy Box without racing to the bottom.', href: '/solutions/marketplaces' },
    { t: 'Retailers', d: 'Monitor thousands of SKUs against every rival.', href: '/solutions/retailers' },
    { t: 'D2C stores', d: 'Stay competitive without giving away margin.', href: '/solutions/d2c' },
    { t: 'Consumer electronics', d: 'Track fast-moving prices and launches.', href: '/industries/electronics' },
    { t: 'Automotive parts', d: 'Match parts by fitment, brand and condition.', href: '/industries/automotive' } ],
    links: [{ label: 'Pricing teams', href: '#' }, { label: 'Category managers', href: '#' }, { label: 'Marketplace ops', href: '#' }],
    featured: { tag: 'CUSTOMER RESULT', stat: '28% → 90%+', bar: 90, sub: 'BUY BOX WIN RATE · 6 WEEKS', title: 'Consumer electronics seller', desc: 'Automated responses to undercuts, inside the margin floor.', cta: 'Read customer stories', href: '/customers' } },
  { key: 'resources', label: 'Resources', eyebrow: 'LEARN', all: { label: 'Resource center', href: '/resources' }, items: [
    { t: 'How it works', d: 'From catalog upload to live pricing in days.', href: '/how-it-works' },
    { t: 'Data accuracy', d: 'How every match is verified before it counts.', href: '/accuracy' },
    { t: 'Integrations', d: '20+ connectors, REST API and webhooks.', href: '/integrations' },
    { t: 'API docs', d: 'Pull live competitor data into your stack.', href: '/docs' },
    { t: 'Customer stories', d: 'Results from pricing teams like yours.', href: '/customers' },
    { t: 'Blog', d: 'Pricing strategy, marketplaces and MAP.', href: '/blog' } ],
    links: [{ label: 'Help center', href: '#' }, { label: 'Status', href: '#' }, { label: 'Contact sales', href: '/contact' }],
    featured: { tag: 'GUIDE', stat: 'Live in days', bar: 40, sub: 'TYPICAL SETUP · 5 MIN', title: 'The pricing team’s setup guide', desc: 'Connect your catalog, set rules and go live.', cta: 'Read the guide', href: '/resources/setup' } }
];
export const DIRECT = [{ label: 'Integrations', href: '/integrations' }, { label: 'Pricing', href: '/pricing' }];
