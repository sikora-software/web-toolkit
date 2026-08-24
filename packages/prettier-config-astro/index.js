// @ts-check

import baseConfig from '@sikora-software/prettier-config';

/** @type {import('prettier').Config} */
const config = {
  ...baseConfig,

  plugins: ['prettier-plugin-astro'],

  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        singleQuote: true,
      },
    },
  ],
};

export default config;
