export const ANNUAL_DISCOUNT = 0.2;

export const freePlans = [
  { id: 'guest', kicker: 'GUEST ACCESS', name: 'Explore PriceLeap', desc: 'Try the platform before signing up. See live pricing data with no account needed.', tag: 'No sign-up', cta: 'Explore without an account', href: '#', pm: 150, comp: 2,
    stats: [['5', 'products / day'], ['150', 'products / mo'], ['2', 'competitors'], ['1x', 'daily refresh']] },
  { id: 'zero', kicker: 'ZERO PLAN · FREE ACCOUNT', name: '14-day free trial', short: 'Free trial', desc: 'Sign up and unlock more capacity. Full access to the platform — no card needed.', tag: '14-day trial', cta: 'Start 14-day trial', href: '#', pm: 300, comp: 3,
    stats: [['10', 'products / day'], ['300', 'products / mo'], ['3', 'competitors'], ['1x', 'daily refresh']] },
];

export const paidPlans = [
  { id: 'starter', name: 'Starter', desc: 'For growing sellers who need reliable competitor visibility without complexity.', price: 89, pm: 1500, comp: 5, refresh: '1x', daily: '50 products / day', cta: 'Get started free', href: '#',
    features: ['Real-time competitor price tracking', 'Price alert notifications (email)', 'Basic pricing rules engine', 'CSV export and dashboard access', 'REST API access', 'Daily price monitoring'] },
  { id: 'growth', name: 'Growth', popular: true, desc: 'For serious sellers managing competitive catalogs who need real-time intelligence.', price: 159, pm: 3000, comp: 5, refresh: '2x', daily: '100 products / day', cta: 'Start free trial', href: '#',
    features: ['Everything in Starter', '2x daily price refresh', 'Advanced pricing rules + auto-response', 'Margin protection system', 'Slack + webhook alerts', 'Decision engine with audit trail'] },
  { id: 'scale', name: 'Scale', desc: 'For high-volume operations with large catalogs that need faster, deeper coverage.', price: 299, pm: 6000, comp: 5, refresh: '3x', daily: '200 products / day', cta: 'Get started free', href: '#',
    features: ['Everything in Growth', '3x daily price refresh', 'Priority alert processing', 'Full automation mode', 'Advanced ERP integration', 'Dedicated onboarding support'] },
];

export const enterprisePlans = [
  { id: 'enterprise', kicker: 'ENTERPRISE PACK', name: 'Enterprise', desc: 'For large retail and distribution operations monitoring thousands of SKUs across multiple competitors. High-volume, high-frequency, fully managed.', price: 'Custom pricing', priceNote: 'based on usage', pm: 30000, comp: 10,
    stats: [['30,000', 'products / mo (max)'], ['10', 'competitors (max)'], ['10x', 'daily refresh (max)']], daily: 'Up to 1,000 products / day', cta: 'Talk to sales →', href: '/book-a-demo',
    features: ['Everything in Scale', 'Up to 10x daily price refresh', 'Up to 10 competitor sources', 'Custom rule logic and workflows', 'Dedicated success manager', '99.95% uptime SLA'] },
  { id: 'engine', kicker: 'PRICE ENGINE INTEGRATION', name: 'Price Engine', desc: 'Full integration of the PriceLeap pricing intelligence engine directly into your existing systems — ERP, PIM, ecommerce platform, or internal tooling. Unlimited capacity, built for your stack.', price: 'Custom', priceNote: 'fully tailored', pm: 1e12, comp: 1e12,
    stats: [['∞', 'products / mo'], ['∞', 'competitors'], ['∞', 'refresh cadence']], daily: 'Unlimited capacity', cta: 'Request a proposal →', href: '/contact',
    features: ['White-label pricing engine', 'Native ERP / PIM integration', 'Unlimited competitor sources', 'Custom data pipelines', 'On-premise or private cloud deployment', 'Dedicated engineering support'] },
];

export const compareCols = [
  { id: 'guest', label: 'Guest' }, { id: 'zero', label: 'Zero (Free)' }, { id: 'starter', label: 'Starter' },
  { id: 'growth', label: 'Growth', popular: true }, { id: 'scale', label: 'Scale' }, { id: 'enterprise', label: 'Enterprise' },
];
export const compareRows: [string, string[]][] = [
  ['Monthly price', ['Free', 'Free', '$89', '$159', '$299', 'Custom']],
  ['Products monitored / day', ['5', '10', '50', '100', '200', 'Up to 1,000']],
  ['Products tracked / month', ['150', '300', '1,500', '3,000', '6,000', 'Up to 30,000']],
  ['Competitors monitored', ['2', '3', '5', '5', '5', 'Up to 10']],
  ['Daily price refresh', ['1x', '1x', '1x', '2x', '3x', 'Up to 10x']],
  ['Pricing rules engine', ['—', '—', '✓', '✓', '✓', '✓']],
  ['Margin protection', ['—', '—', '—', '✓', '✓', '✓']],
  ['Slack / webhook alerts', ['—', '—', '—', '✓', '✓', '✓']],
  ['REST API access', ['—', '—', '✓', '✓', '✓', '✓']],
  ['Dedicated success manager', ['—', '—', '—', '—', '—', '✓']],
  ['Uptime SLA', ['—', '—', '—', '—', '—', '99.95%']],
];

export const finderVolumes = [100, 300, 500, 1000, 1500, 2000, 3000, 4500, 6000, 10000, 20000, 30000, 50000];
export const finderCompetitors: [string, number][] = [['1–3', 3], ['5', 5], ['10', 10], ['10+', 11]];
