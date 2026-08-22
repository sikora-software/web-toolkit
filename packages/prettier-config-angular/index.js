import baseConfig from '@sikora-software/prettier-config';

export default {
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
