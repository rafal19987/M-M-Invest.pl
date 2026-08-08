import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import globals from 'globals';

export default [
  {
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },

  eslint.configs.recommended,

  ...tseslint.configs.recommended,

  ...astro.configs.recommended,

  {
    files: ['**/*.{js,ts,astro}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
