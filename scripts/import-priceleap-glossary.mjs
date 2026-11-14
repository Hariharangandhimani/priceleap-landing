import { mkdir, writeFile } from 'node:fs/promises';

const INDEX_URL = 'https://priceleap.ai/glossary/';
const OUTPUT = new URL('../src/data/glossary.json', import.meta.url);
const USER_AGENT = 'PriceLeap glossary migration importer/1.0';
const decode = (value = '') => value
  .replace(/&#39;|&#x27;/g, "'").replace(/&quot;|&#x22;/g, '"').replace(/&amp;/g, '&')
  .replace(/&nbsp;/g, ' ').replace(/&mdash;/g, '—').replace(/&ndash;/g, '–')
  .replace(/&rsquo;/g, '’').replace(/&ldquo;/g, '“').replace(/&rdquo;/g, '”')
  .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
  .replace(/&#([0-9]+);/g, (_, code) => String.fromCodePoint(Number(code)));
const stripTags = (value = '') => decode(value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());
const first = (value, pattern) => decode(value.match(pattern)?.[1] ?? '');
const localLink = (href) => {
  try {
    const url = new URL(href, INDEX_URL);
    if (url.hostname === 'priceleap.ai' || url.hostname === 'www.priceleap.ai') return url.pathname + url.search + url.hash;
  } catch {}
  return href;
};
const linksFrom = (html) => [...html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)]
  .map((match) => localLink(decode(match[1])))
  .filter((href, index, links) => href && links.indexOf(href) === index);
const cardValue = (card, className) => stripTags(first(card, new RegExp("<[^>]*class=[\"'][^\"']*\\b" + className + "\\b[^\"']*[\"'][^>]*>([\\s\\S]*?)</", 'i')));
async function fetchHtml(url) {
  const response = await fetch(url, { headers: { 'user-agent': USER_AGENT }, signal: AbortSignal.timeout(60000) });
  if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
  return response.text();
}

const indexHtml = await fetchHtml(INDEX_URL);
const cards = [...indexHtml.matchAll(/<a\b[^>]*class=["']glos-card["'][^>]*>[\s\S]*?<\/a>/gi)].map((match) => match[0]);
if (!cards.length) throw new Error('No glossary cards found on the source index.');
const entries = cards.map((card) => {
  const href = first(card, /\bhref=["']([^"']+)["']/i);
  const url = new URL(href, INDEX_URL);
  return { url: url.toString(), slug: url.pathname.replace(/^\/glossary\//, '').replace(/\/$/, ''), term: cardValue(card, 'glos-card-term'), shortDefinition: cardValue(card, 'glos-card-short'), category: cardValue(card, 'glos-card-cat') };
});

const terms = [];
for (const [index, entry] of entries.entries()) {
  const html = await fetchHtml(entry.url);
  const contentHtml = first(html, /<article\b[^>]*class=["']glos-pg-def["'][^>]*>([\s\S]*?)<\/article>/i).trim();
  if (!contentHtml) throw new Error('Missing definition content for ' + entry.url);
  const relatedHtml = first(html, /<div\b[^>]*class=["']glos-rel-grid["'][^>]*>([\s\S]*?)<\/div>\s*<\/div>/i);
  const relatedTerms = [...relatedHtml.matchAll(/<a\b[^>]*class=["']glos-rel-card["'][^>]*>[\s\S]*?<\/a>/gi)].map((match) => {
    const card = match[0];
    const href = first(card, /\bhref=["']([^"']+)["']/i);
    return { url: localLink(href), slug: new URL(href, INDEX_URL).pathname.replace(/^\/glossary\//, '').replace(/\/$/, ''), term: cardValue(card, 'glos-rel-card-term'), category: cardValue(card, 'glos-rel-card-cat') };
  });
  const title = stripTags(first(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/i)) || entry.term;
  terms.push({ ...entry, term: title, phonetic: stripTags(first(html, /class=["']glos-pg-phonetic["'][^>]*>([\s\S]*?)<\//i)), contentHtml, internalLinks: linksFrom(contentHtml).filter((href) => href.startsWith('/')), relatedTerms, metaDescription: stripTags(first(html, /<meta\b[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)) });
  console.log('[' + (index + 1) + '/' + entries.length + '] ' + entry.slug);
}

await mkdir(new URL('../src/data/', import.meta.url), { recursive: true });
await writeFile(OUTPUT, JSON.stringify({ source: INDEX_URL, fetchedAt: new Date().toISOString(), count: terms.length, terms }, null, 2) + '\n');
console.log('Wrote ' + terms.length + ' glossary terms to ' + OUTPUT.pathname);
