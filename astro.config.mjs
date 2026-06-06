import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pakalolo.garden',

  vite: {
    server: {
      fs: {
        allow: ['..']
      }
    }
  },

  integrations: [sitemap()]
});