export const products = [
  { name: 'Wireless ANC Headphones', sku: 'WH-ANC-700', ours: 24990, comps: [25490, 24790, 25990, 26490], map: 23990, msrp: 29990, floor: 22490 },
  { name: 'True Wireless Earbuds Pro', sku: 'TWS-PRO-2', ours: 18900, comps: [18690, 19490, 18990], map: 17990, msrp: 21990, floor: 17800 },
  { name: 'Smart Fitness Watch 46mm', sku: 'SFW-46-BLK', ours: 9499, comps: [9990, 10490, 9799, 9690], map: 8999, msrp: 11990, floor: 8400 },
  { name: 'Portable Bluetooth Speaker', sku: 'PBS-MINI-4', ours: 5999, comps: [6290, 5899, 6490], map: 5499, msrp: 7490, floor: 5300 },
  { name: 'Mechanical Keyboard TKL', sku: 'MKB-TKL-RGB', ours: 7499, comps: [7290, 7690, 7990, 7390, 7590], map: 6999, msrp: 8990, floor: 6900 },
  { name: '4K Action Camera Pro', sku: 'AC-4K-PRO', ours: 21990, comps: [22490, 21490, 23990], map: 20990, msrp: 26990, floor: 19990 },
];

export const agentToasts = [
  { kind: 'PRICE DROP', msg: 'Retailer B cut True Wireless Earbuds Pro by 2.4%. Matching keeps you above your 18% floor.', cta: 'Match price' },
  { kind: 'COMPETITOR OOS', msg: 'D2C store C is out of stock on Smart Fitness Watch 46mm. Room to raise ₹300 safely.', cta: 'Raise price' },
  { kind: 'MAP ALERT', msg: 'Seller 2841 listed Wireless ANC Headphones 8.0% below MAP on Marketplace A.', cta: 'Open case' },
];

export const badges = [
  { src: '/assets/badges/iso-27001.avif', alt: 'ISO 27001 certified' },
  { src: '/assets/badges/aws-partner.webp', alt: 'AWS Partner' },
  { src: '/assets/badges/gdpr.webp', alt: 'GDPR compliant' },
  { src: '/assets/badges/google-cloud.webp', alt: 'Google Cloud Partner' },
  { src: '/assets/badges/iso-9001.webp', alt: 'ISO 9001 certified' },
  { src: '/assets/badges/microsoft-partner.webp', alt: 'Microsoft Partner' },
  { src: '/assets/badges/cmmi.webp', alt: 'CMMI Dev ML3 appraised', light: true },
  { src: '/assets/badges/automation-anywhere.webp', alt: 'Automation Anywhere partner' },
];

export const pains = [
  "Stale competitor prices you can't act on",
  'Wrong product matches skewing your view',
  'Manual price-checking across dozens of sites',
  'Discounting that quietly gives away margin',
];

export const tour = [
  { title: 'Add products', desc: 'Paste URLs, upload a file, or connect your catalog.', screen: 'Add Products', sub: 'AI tracks pricing, finds competitors and monitors their prices.' },
  { title: 'Monitor the market', desc: 'Every price move, stock-out and promo, as it happens.', screen: 'Price Intelligence', sub: 'Monitor competitor prices and track your market position.' },
  { title: 'Dynamic pricing', desc: 'Rules with floors, ceilings and MAP built in.', screen: 'Dynamic Pricing', sub: 'Set how prices adjust automatically and when to get notified.' },
  { title: 'Ask the Agent', desc: 'Plain-English answers on prices, rivals and alerts.', screen: 'PriceLeap Agent', sub: 'Online · grounded in your live catalog data' },
];

export const accuracySteps = [
  { icon: 'link', title: 'AI matching', desc: 'Exact, similar, and white-label products — even without barcodes.', metric: '1,204,860 matched' },
  { icon: 'user', title: 'Human quality control', desc: 'Every match reviewed by a trained QC analyst before it counts.', metric: '100% reviewed' },
  { icon: 'pulse', title: 'Anomaly detection', desc: 'Automated checks flag price and match outliers in real time.', metric: '312 outliers held' },
  { icon: 'shield', title: 'Accuracy SLA in writing', desc: 'A contractual guarantee — not a marketing number.', metric: '[PLACEHOLDER]% guaranteed' },
];

export const accuracyItems = [
  { ours: 'Wireless ANC Headphones', sku: 'WH-ANC-700', cand: 'Sonix 700 ANC Over-Ear Headphones, Black', site: 'MARKETPLACE A', price: '₹25,490', type: 'Exact match', conf: [72, 93.4, 98.7, 98.7, 98.7] },
  { ours: 'Smart Fitness Watch 46mm', sku: 'SFW-46-BLK', cand: 'FitPro 46 mm Smartwatch — Midnight', site: 'D2C STORE C', price: '₹9,990', type: 'Similar product', conf: [64, 90.1, 96.2, 96.2, 96.2] },
  { ours: 'Portable Bluetooth Speaker', sku: 'PBS-MINI-4', cand: 'Mini Boom 4 Wireless Speaker', site: 'MARKETPLACE D', price: '₹6,290', type: 'White-label', conf: [58, 88.6, 95.4, 95.4, 95.4] },
];

export const accuracyChecks = [
  { label: 'Brand & model', by: 'AI', at: 0 },
  { label: 'Variant & colour', by: 'AI', at: 0 },
  { label: 'Specs confirmed', by: 'QC', at: 1 },
  { label: 'Price within band', by: 'AUTO', at: 2 },
];

export const howSteps = [
  { title: 'Connect your catalog', desc: 'Upload your products or sync from Shopify, marketplaces, or a feed in minutes.' },
  { title: 'We match & monitor', desc: 'AI matches every product and human QC verifies it — then we track prices in real time.' },
  { title: 'Get pricing intelligence', desc: 'See your price index, competitive gaps, and the biggest pricing opportunities.' },
  { title: 'Optimize & act', desc: 'Push dynamic pricing rules or apply AI recommendations to win on margin.' },
];

export const integrationCats = ['All', 'Ecommerce', 'ERP & CRM', 'Data & BI', 'Alerts'];
export const integrations = [
  { logo: 'shopify', name: 'Shopify', api: 'ADMIN API', cat: 1, connected: true },
  { logo: 'amazon', name: 'Amazon Seller Central', api: 'SP-API', cat: 1 },
  { logo: 'flipkart', name: 'Flipkart', api: 'SELLER API', cat: 1 },
  { logo: 'woocommerce', name: 'WooCommerce', api: 'REST API', cat: 1 },
  { logo: 'bigcommerce', name: 'BigCommerce', api: 'REST API', cat: 1 },
  { logo: 'ebay', name: 'eBay Seller Hub', api: 'OAUTH 2.0', cat: 1 },
  { logo: 'walmart', name: 'Walmart Marketplace', api: 'PARTNER API', cat: 1 },
  { logo: 'magento', name: 'Magento', api: 'REST API', cat: 1 },
  { logo: 'etsy', name: 'Etsy', api: 'OPEN API', cat: 1 },
  { logo: 'target', name: 'Target Plus', api: 'PARTNER API', cat: 1 },
  { logo: 'salesforce', name: 'Salesforce', api: 'COMMERCE CLOUD', cat: 2 },
  { logo: 'oracle', name: 'NetSuite', api: 'SUITETALK', cat: 2 },
  { logo: 'sap', name: 'SAP S/4HANA', api: 'ODATA', cat: 2 },
  { logo: 'dynamics365', name: 'Dynamics 365', api: 'DATAVERSE', cat: 2 },
  { logo: 'snowflake', name: 'Snowflake', api: 'DATA SHARE', cat: 3 },
  { logo: 'databricks', name: 'Databricks', api: 'DELTA SHARE', cat: 3 },
  { logo: 'googlebigquery', name: 'BigQuery', api: 'EXPORT', cat: 3 },
  { logo: 'googlesheets', name: 'Google Sheets', api: 'SHEETS API', cat: 3 },
  { logo: 'microsoftexcel', name: 'Microsoft Excel', api: 'GRAPH API', cat: 3 },
  { logo: 'slack', name: 'Slack', api: 'OAUTH 2.0', cat: 4, connected: true },
  { logo: 'gmail', name: 'Email alerts', api: 'SMTP', cat: 4, connected: true },
];
export const orbitInner = ['shopify', 'amazon', 'slack', 'snowflake', 'salesforce'];
export const orbitOuter = ['flipkart', 'woocommerce', 'ebay', 'walmart', 'sap', 'googlesheets', 'databricks', 'magento'];

export const security = [
  { code: 'SSO', title: 'SSO & SAML', desc: 'Okta, Azure AD, Google' },
  { code: 'ISO', title: 'ISO 27001', desc: 'Aligned controls' },
  { code: 'RBAC', title: 'Role-based access', desc: 'Granular permissions' },
  { code: 'API', title: 'REST API & webhooks', desc: 'Live data, your pipeline' },
];

export const results = [
  { label: 'SALES LIFT', value: '+12', unit: '%', accent: true, desc: 'Average revenue growth on repriced SKUs in the first 90 days.', kind: 'bars', bars: [38, 42, 40, 46, 58, 70, 84, 100] },
  { label: 'MARGIN GAIN', value: '+4.2', unit: 'pts', desc: 'Gross margin recovered by pricing above rivals where you can.', kind: 'compare', rows: [['BEFORE', 62, '21.4%'], ['AFTER', 74, '25.6%']], caption: 'AVG. GROSS MARGIN' },
  { label: 'TIME SAVED', value: '80', unit: '%', desc: 'Less time spent on manual competitor price checks.', kind: 'compare', rows: [['MANUAL', 100, '20 h'], ['AUTO', 20, '4 h']], caption: 'PRICE CHECKS PER WEEK' },
];
