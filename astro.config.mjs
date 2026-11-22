import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://priceleap.ai',
  prefetch: { prefetchAll: true },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
