import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pakalolo.garden',
  vite: {
    server: {
      fs: {
        allow: ['..']
      }
    }
  }
});
