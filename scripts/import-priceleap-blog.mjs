import { mkdir, writeFile } from 'node:fs/promises';

const INDEX_URL = 'https://priceleap.ai/blog/';
const OUTPUT = new URL('../src/data/blog.json', import.meta.url);
const ASSET_DIR = new URL('../public/assets/blog/', import.meta.url);
const USER_AGENT = 'PriceLeap content migration importer/1.0';
const imageCache = new Map();

const decode = (value = '') => value
  .replace(/&#39;|&#x27;/g, "'")
  .replace(/&quot;|&#x22;/g, '"')
  .replace(/&amp;/g, '&')
  .replace(/&nbsp;/g, ' ')
  .replace(/&mdash;/g, '—')
  .replace(/&ndash;/g, '–')
  .replace(/&rsquo;/g, '’')
  .replace(/&ldquo;/g, '“')
  .replace(/&rdquo;/g, '”')
  .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
  .replace(/&#([0-9]+);/g, (_, code) => String.fromCodePoint(Number(code)));

const stripTags = (value = '') => decode(value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());
const first = (value, pattern) => decode(value.match(pattern)?.[1] ?? '');
const toLocalLink = (href) => {
  try {
    const url = new URL(href, INDEX_URL);
    if (url.hostname === 'priceleap.ai' || url.hostname === 'www.priceleap.ai') return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    // Keep malformed or non-URL values unchanged for later review.
  }
  return href;
};

function extractElement(html, className) {
  const start = html.search(new RegExp(`<div\\b[^>]*class=["'][^"']*\\b${className}\\b[^"']*["'][^>]*>`, 'i'));
  if (start < 0) return '';
  const opening = html.slice(start).match(/^<div\b[^>]*>/i)?.[0];
  if (!opening) return '';
  let depth = 0;
  const tags = /<\/?div\b[^>]*>/gi;
  tags.lastIndex = start;
  let match;
  while ((match = tags.exec(html))) {
    if (/^<div\b/i.test(match[0])) depth += 1;
    else depth -= 1;
    if (depth === 0) return html.slice(start + opening.length, match.index);
  }
  return '';
}

function extractCardValue(card, className) {
  return stripTags(first(card, new RegExp(`<[^>]*class=["'][^"']*\\b${className}\\b[^"']*["'][^>]*>([\\s\\S]*?)</`, 'i')));
}

function extractArticleLinks(html) {
  return [...html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)]
    .map((match) => toLocalLink(decode(match[1])))
    .filter((href, index, links) => href && href.startsWith('/') && !href.startsWith('#') && links.indexOf(href) === index);
}

function extractRelatedArticles(html) {
  return [...html.matchAll(/<a\b[^>]*class=["'][^"']*\bblog-rel-card\b[^"']*["'][^>]*>[\s\S]*?<\/a>/gi)].map((match) => {
    const card = match[0];
    const absoluteUrl = new URL(first(card, /\bhref=["']([^"']+)["']/i), INDEX_URL);
    return {
      url: toLocalLink(absoluteUrl.toString()),
      slug: absoluteUrl.pathname.replace(/^\/blog\//, '').replace(/\/$/, ''),
      title: extractCardValue(card, 'blog-rel-card-title'),
      category: extractCardValue(card, 'blog-rel-card-cat'),
    };
  });
}

function extractHeadings(html) {
  return [...html.matchAll(/<h([23])\b([^>]*)>([\s\S]*?)<\/h\1>/gi)].map((match) => ({
    level: Number(match[1]),
    id: first(match[2], /\bid=["']([^"']+)["']/i),
    title: stripTags(match[3]),
  }));
}

async function fetchHtml(url) {
  const response = await fetch(url, { headers: { 'user-agent': USER_AGENT }, signal: AbortSignal.timeout(60000) });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.text();
}

function extensionFor(contentType, url) {
  const type = contentType.split(';')[0].toLowerCase();
  const extension = { 'image/avif': 'avif', 'image/jpeg': 'jpg', 'image/png': 'png', 'image/svg+xml': 'svg', 'image/webp': 'webp' }[type];
  if (extension) return extension;
  return new URL(url).pathname.match(/\.(avif|jpe?g|png|svg|webp)$/i)?.[1].toLowerCase() ?? 'webp';
}

async function localizeImage(url, slug) {
  if (!url || !/^https?:\/\//i.test(url)) return url;
  if (imageCache.has(url)) return imageCache.get(url);
  const response = await fetch(url, { headers: { 'user-agent': USER_AGENT }, signal: AbortSignal.timeout(60000) });
  if (!response.ok) throw new Error(`Image ${response.status} ${response.statusText}: ${url}`);
  const extension = extensionFor(response.headers.get('content-type') ?? '', url);
  const file = `${slug}.${extension}`;
  await writeFile(new URL(file, ASSET_DIR), Buffer.from(await response.arrayBuffer()));
  const localPath = `/assets/blog/${file}`;
  imageCache.set(url, localPath);
  return localPath;
}

function imageAlt(title, category) {
  return `${title} — ${category}`;
}

const indexHtml = await fetchHtml(INDEX_URL);
const cards = [...indexHtml.matchAll(/<a\b[^>]*class=["'][^"']*\bblog-card\b[^"']*["'][^>]*>[\s\S]*?<\/a>/gi)].map((match) => match[0]);
const entries = cards.map((card) => {
  const href = first(card, /\bhref=["']([^"']+)["']/i);
  const url = new URL(href, INDEX_URL).toString();
  return {
    url,
    slug: new URL(url).pathname.replace(/^\/blog\//, '').replace(/\/$/, ''),
    category: extractCardValue(card, 'blog-card-cat'),
    title: extractCardValue(card, 'blog-card-title'),
    excerpt: extractCardValue(card, 'blog-card-excerpt'),
    author: extractCardValue(card, 'blog-card-author'),
    publishedAt: extractCardValue(card, 'blog-card-date'),
    readTime: extractCardValue(card, 'blog-card-rt'),
  };
});

if (entries.length === 0) throw new Error('No blog cards found on the source index.');

await mkdir(ASSET_DIR, { recursive: true });
const articles = [];
for (const [index, entry] of entries.entries()) {
  try {
    const html = await fetchHtml(entry.url);
    const article = extractElement(html, 'blog-pg-art');
    if (!article) throw new Error('Missing #blog-pg-art content container');
    const heroImage = html.match(/<img\b[^>]*class=["'][^"']*\bblog-pg-img\b[^"']*["'][^>]*>/i)?.[0] ?? '';
    const authorCard = extractElement(html, 'author-card');
    const tags = [...html.matchAll(/class=["']blog-pg-tag-item["'][^>]*>([\s\S]*?)<\/span>/gi)].map((match) => stripTags(match[1]));
    const title = stripTags(first(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/i)).trim() || entry.title;
    const category = stripTags(first(html, /class=["']blog-pg-cat["'][^>]*>([\s\S]*?)<\//i)).trim() || entry.category;
    const remoteHeroSrc = first(heroImage, /\bsrc=["']([^"']+)["']/i);
    const localHeroSrc = remoteHeroSrc ? await localizeImage(remoteHeroSrc, entry.slug) : '';
    let contentHtml = article.trim();
    for (const imageTag of contentHtml.matchAll(/<img\b[^>]*>/gi)) {
      const remoteSrc = first(imageTag[0], /\bsrc=["']([^"']+)["']/i);
      if (!remoteSrc) continue;
      const localSrc = await localizeImage(remoteSrc, `${entry.slug}-inline`);
      contentHtml = contentHtml.replaceAll(remoteSrc, localSrc);
      contentHtml = contentHtml.replace(imageTag[0], (tag) => {
        if (/\balt=["'][^"']*["']/i.test(tag)) return tag.replace(/\balt=["'][^"']*["']/i, `alt="${imageAlt(title, category)}"`);
        return tag.replace(/<img\b/i, `<img alt="${imageAlt(title, category)}"`);
      });
    }
    contentHtml = contentHtml.replace(/https:\/\/(?:www\.)?priceleap\.ai(?=\/|["'#?])/gi, '');
    articles.push({
      ...entry,
      title,
      category,
      author: stripTags(first(html, /class=["']blog-pg-author["'][^>]*>([\s\S]*?)<\//i)).trim() || entry.author,
      publishedAt: stripTags(first(html, /class=["']blog-pg-date["'][^>]*>([\s\S]*?)<\//i)).replace(/^Published\s+/i, '').trim() || entry.publishedAt,
      readTime: stripTags(first(html, /class=["']blog-pg-rt["'][^>]*>([\s\S]*?)<\//i)).replace(/\s+read\s+read$/i, ' read').trim() || entry.readTime,
      heroImage: heroImage ? {
        src: localHeroSrc,
        alt: imageAlt(title, category),
      } : null,
      headings: extractHeadings(article),
      contentHtml,
      internalLinks: extractArticleLinks(article),
      relatedArticles: extractRelatedArticles(html),
      tags,
      authorHtml: authorCard.trim(),
    });
    console.log(`[${index + 1}/${entries.length}] ${entry.slug}`);
  } catch (error) {
    console.error(`Failed ${entry.url}: ${error.message}`);
    throw error;
  }
}

await mkdir(new URL('../src/data/', import.meta.url), { recursive: true });
await writeFile(OUTPUT, `${JSON.stringify({
  source: INDEX_URL,
  fetchedAt: new Date().toISOString(),
  count: articles.length,
  articles,
}, null, 2)}\n`);
console.log(`Wrote ${articles.length} articles to ${OUTPUT.pathname}`);
