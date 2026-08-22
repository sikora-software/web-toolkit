import baseConfig from '@sikora-software/prettier-config';

export default {
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
