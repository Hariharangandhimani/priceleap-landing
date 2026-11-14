import { writeFile } from 'node:fs/promises';

const SOURCE = 'https://priceleap.ai/faq/';
const OUTPUT = new URL('../src/data/faq.json', import.meta.url);

const response = await fetch(SOURCE, { headers: { 'user-agent': 'PriceLeap content migration importer/1.0' }, signal: AbortSignal.timeout(60000) });
if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
const html = await response.text();
const match = html.match(/const categories = (\[[\s\S]*?\]);/);
if (!match) throw new Error('FAQ categories were not found in the source page.');

const categories = JSON.parse(match[1]);
const topicsMatch = html.match(/const topics = (\[[\s\S]*?\]);/);
const topics = topicsMatch ? JSON.parse(topicsMatch[1]) : ['All'];
const articles = categories.flatMap((category) => category.items);

await writeFile(OUTPUT, `${JSON.stringify({
  source: SOURCE,
  fetchedAt: new Date().toISOString(),
  count: articles.length,
  topics,
  categories,
}, null, 2)}\n`);

console.log(`Wrote ${articles.length} FAQ answers across ${categories.length} categories to ${OUTPUT.pathname}`);
