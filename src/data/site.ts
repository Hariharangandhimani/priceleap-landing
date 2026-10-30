export const site = {
  name: 'PriceLeap',
  title: 'Pricing Intelligence Software for E-commerce & Marketplaces | PriceLeap',
  description: 'PriceLeap gives e-commerce and marketplace teams real-time competitor price tracking, verified data accuracy, and dynamic pricing that protects every point of margin.',
  email: 'sales_team@priceleap.ai',
  signInUrl: 'https://app.priceleap.ai',
};

export const routes = {
  home: '/',
  demo: '/book-a-demo',
  contact: '/contact',
  pricing: '/pricing',
};

export const mainNav = [
  { label: 'Product', href: '/#product' },
  { label: 'Solutions', href: '/#capabilities' },
  { label: 'Accuracy', href: '/#accuracy' },
  { label: 'How it works', href: '/#how' },
  { label: 'Integrations', href: '/#integrations' },
  { label: 'Pricing', href: routes.pricing },
];

export const footerNav = [
  { title: 'Solutions', links: [
    { label: 'Pricing Intelligence Software', href: '#' },
    { label: 'Dynamic Pricing Software', href: '#' },
    { label: 'Price Tracking Software', href: '#' },
    { label: 'Competitor Intelligence', href: '#' },
    { label: 'MAP Monitoring', href: '#' },
    { label: 'Pricing Software for E-commerce', href: '#' },
  ] },
  { title: 'By audience', links: [
    { label: 'Retailers', href: '#' }, { label: 'Brands', href: '#' }, { label: 'Marketplaces', href: '#' }, { label: 'Distributors', href: '#' },
  ] },
  { title: 'Company', links: [
    { label: 'Pricing', href: routes.pricing }, { label: 'Contact', href: routes.contact }, { label: 'Security', href: '/#integrations' }, { label: 'Blog', href: '#' },
  ] },
];
