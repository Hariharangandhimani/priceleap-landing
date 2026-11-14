// Migrate priceleap.ai/learn/* into this project: content, meta, headings, images, internal links.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

const SRC = '/tmp/learn-src';
const SLUGS = ['avoiding-price-wars','catalog-scale-pricing','competitor-monitoring-setup','building-pricing-rules','dynamic-pricing-intro','intro-to-repricing','map-compliance','margin-floor-strategy','winning-the-buy-box','repricing-automation-rollout'];

const pick = (html, re) => { const m = html.match(re); return m ? m[1].trim() : ''; };
const decode = (s) => s.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&nbsp;/g,' ');
const stripTags = (s) => decode(s.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim());

mkdirSync('public/assets/learn', { recursive: true });
let imgCounter = 0;
const imgMap = new Map(); // remote url -> local path

function downloadImage(url, slug) {
  if (imgMap.has(url)) return imgMap.get(url);
  const dir = `public/assets/learn/${slug}`;
  mkdirSync(dir, { recursive: true });
  const name = `img-${++imgCounter}.jpg`;
  const local = `/assets/learn/${slug}/${name}`;
  const out = `public${local}`;
  if (!existsSync(out)) {
    try { execSync(`curl -s -L ${JSON.stringify(url)} -o ${JSON.stringify(out)}`, { stdio: 'ignore' }); }
    catch { /* keep remote if download fails */ return url; }
  }
  imgMap.set(url, local);
  return local;
}

const articles = SLUGS.map((slug) => {
  const html = readFileSync(`${SRC}/${slug}.html`, 'utf8');

  const metaTitle = decode(pick(html, /<title>([^<]*)<\/title>/));
  const metaDescription = decode(pick(html, /<meta name="description" content="([^"]*)"/));
  const ogImage = pick(html, /<meta property="og:image" content="([^"]*)"/);
  const title = stripTags(pick(html, /<h1 id="learn-pg-h1">([\s\S]*?)<\/h1>/));
  const category = stripTags(pick(html, /class="blog-pg-cat"[^>]*>([\s\S]*?)<\//)) || 'Learn';
  const difficulty = stripTags(pick(html, /class="blog-pg-cat-pill"[^>]*>([\s\S]*?)<\//)).toLowerCase();
  const readTime = stripTags(pick(html, /class="blog-pg-rt"[^>]*>([\s\S]*?)<\//)) || '';
  const author = stripTags(pick(html, /class="blog-pg-author"[^>]*>([\s\S]*?)<\//)) || 'PriceLeap Team';
  const publishedAt = stripTags(pick(html, /class="blog-pg-date"[^>]*>([\s\S]*?)<\//)) || '';

  // Article body: <div class="blog-pg-art"> ... </div> (ends before tags/author/cta)
  let body = pick(html, /<div class="blog-pg-art"[^>]*>([\s\S]*?)<div class="blog-pg-(?:tags|author)"/);
  if (!body) body = pick(html, /<div class="blog-pg-art"[^>]*>([\s\S]*?)(?:<div class="blog-pg-|id="learn-pg-cta")/);
  // hero image lives outside the body (in blog-pg-wrap)
  let heroSrc = pick(html, /<img class="blog-pg-img"[^>]*src="([^"]*)"/) || ogImage;
  // strip any in-page TOC block we re-render ourselves
  body = body.replace(/<nav class="blog-pg-toc"[\s\S]*?<\/nav>/g, '');
  body = body.replace(/<div class="learn-toc"[\s\S]*?<\/div>/g, '');

  const heroImage = heroSrc ? { src: downloadImage(heroSrc, slug), alt: title } : null;

  // Rewrite inline images -> local; collect
  body = body.replace(/<img([^>]*?)src="([^"]*)"([^>]*)>/g, (m, pre, src, post) => {
    if (!/^https?:/.test(src)) return m;
    const local = downloadImage(src, slug);
    return `<img${pre}src="${local}"${post} loading="lazy">`;
  });
  // Rewrite internal links /learn/x/ /blog/x/ /glossary/x/ -> local (drop trailing slash)
  body = body.replace(/href="https:\/\/priceleap\.ai\/(learn|blog|glossary)\/([^"/]+)\/?"/g, 'href="/$1/$2"');
  body = body.replace(/href="https:\/\/priceleap\.ai\/?"/g, 'href="/"');
  body = body.replace(/href="https:\/\/priceleap\.ai\/([^"]*)"/g, 'href="/$1"');

  // Headings for TOC: add ids, collect
  const headings = [];
  const used = new Set();
  const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,60) || 'section';
  body = body.replace(/<(h2|h3)([^>]*)>([\s\S]*?)<\/\1>/g, (m, tag, attrs, inner) => {
    const text = stripTags(inner);
    let id = slugify(text); let n = 2; const base = id;
    while (used.has(id)) id = `${base}-${n++}`;
    used.add(id);
    headings.push({ level: tag === 'h2' ? 2 : 3, id, title: text });
    const cleanAttrs = attrs.replace(/\s*id="[^"]*"/,'');
    return `<${tag} id="${id}"${cleanAttrs}>${inner}</${tag}>`;
  });

  const excerpt = metaDescription || stripTags(body).slice(0, 180);

  return {
    url: `https://priceleap.ai/learn/${slug}/`, slug, title, category, difficulty,
    excerpt, author, publishedAt, readTime, heroImage, headings,
    contentHtml: body.trim(), metaTitle, metaDescription,
  };
});

writeFileSync('src/data/learn.json', JSON.stringify({ source: 'https://priceleap.ai/learn/', count: articles.length, articles }, null, 2));
console.log('learn.json written:', articles.length, 'articles |', imgCounter, 'images downloaded');
articles.forEach(a => console.log(' -', a.slug, '|', a.difficulty || 'n/a', '|', a.headings.length, 'headings |', a.contentHtml.length, 'chars'));
