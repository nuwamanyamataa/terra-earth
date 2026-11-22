import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.terra-earth.co.ug',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({ filter: (page) => !page.includes('/thank-you') }),
  ],
  image: { service: passthroughImageService() },
});
