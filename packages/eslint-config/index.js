// @ts-check

import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  eslint.configs.recommended,

  ...tseslint.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Rules for all JS/TS files
  {
    rules: {
      'no-unused-vars': 'off',
    },
  },

  // TypeScript rules
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-non-null-assertion': 'off',

      '@typescript-eslint/no-explicit-any': 'warn',

      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      '@typescript-eslint/explicit-function-return-type': 'error',
    },
  },
];

export default config;
