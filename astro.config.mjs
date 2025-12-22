import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://intrastatportal.sk',
  base: '/',
  trailingSlash: 'always',
  build: {
    assets: '_astro'
  },
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: 'sk',
    locales: ['sk', 'en', 'hu'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
