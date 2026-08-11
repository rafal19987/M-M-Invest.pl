// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  devToolbar: {
    enabled: false,
  },
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
        interval: 100,
        ignored: ['!**/src/**/*.{astro,js,ts,jsx,tsx}'],
      },
    },
    optimizeDeps: {
      exclude: ['@tailwindcss/vite'],
      force: true,
    },
  },
});
