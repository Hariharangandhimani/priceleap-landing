import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://priceleap.ai',
  prefetch: { prefetchAll: true },
  vite: {
    plugins: [tailwindcss()],
  },
});
