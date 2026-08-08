// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
