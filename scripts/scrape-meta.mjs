// Scrape per-page <title> + meta description (and og) from the live priceleap.ai
// blog/glossary pages and merge metaTitle/metaDescription into the local JSON.
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const decode = (s) => (s || '')
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'").replace(/&nbsp;/g, ' ').trim();

function fetchMeta(url) {
  let html = '';
  try { html = execSync(`curl -sL ${JSON.stringify(url)}`, { encoding: 'utf8', maxBuffer: 1024 * 1024 * 8 }); }
  catch { return null; }
  const pick = (re) => { const m = html.match(re); return m ? decode(m[1]) : ''; };
  const metaTitle = pick(/<title>([^<]*)<\/title>/i);
  const metaDescription =
    pick(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
    pick(/<meta[^>]+content=["']([^"']*)["'][^>]*name=["']description["']/i);
  const ogTitle = pick(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
  const ogDescription = pick(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']*)["']/i);
  return { metaTitle, metaDescription, ogTitle, ogDescription };
}

function run(file, key, idField) {
  const data = JSON.parse(readFileSync(file, 'utf8'));
  const items = data[key];
  let updated = 0, missed = 0;
  for (const it of items) {
    const url = it.url || `https://priceleap.ai/${key === 'articles' ? 'blog' : 'glossary'}/${it.slug}/`;
    const meta = fetchMeta(url);
    if (!meta || (!meta.metaTitle && !meta.metaDescription)) { missed++; console.log('  MISS', it[idField]); continue; }
    if (meta.metaTitle) it.metaTitle = meta.metaTitle;
    if (meta.metaDescription) it.metaDescription = meta.metaDescription;
    if (meta.ogTitle) it.ogTitle = meta.ogTitle;
    if (meta.ogDescription) it.ogDescription = meta.ogDescription;
    updated++;
    console.log('  ok  ', it[idField], '|', (meta.metaTitle || '').slice(0, 60));
  }
  writeFileSync(file, JSON.stringify(data, null, 2));
  console.log(`${file}: ${updated} updated, ${missed} missed\n`);
}

console.log('Blog:');
run('src/data/blog.json', 'articles', 'slug');
console.log('Glossary:');
run('src/data/glossary.json', 'terms', 'slug');
