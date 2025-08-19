import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  outDir: '../dist',
  publicDir: '../public',
  build: {
    assets: 'assets'
  },
  server: {
    port: 4321
  }
});

