// @ts-check

import baseConfig from '@sikora-software/prettier-config';

/** @type {import("prettier").Config} */
const config = {
  ...baseConfig,

  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'angular',
      },
    },
  ],
};

export default config;
