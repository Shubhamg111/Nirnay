import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // Change this to your real domain before deploying — required for sitemap + SEO tags
  site: 'https://nirnay.vercel.app',
  integrations: [react(), tailwind(), sitemap(), mdx()],
});
