// @ts-check

import angular from 'angular-eslint';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import-x';

import baseConfig from '@sikora-software/eslint-config';

export default defineConfig([
  ...baseConfig,

  // Angular TypeScript files.
  {
    files: ['**/*.ts'],

    extends: [...angular.configs.tsRecommended],

    processor: angular.processInlineTemplates,

    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      '@typescript-eslint/explicit-function-return-type': 'error',

      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],

      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },

  // Angular templates.
  {
    files: ['**/*.html'],

    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
  },

  // Import rules.
  {
    ...importPlugin.flatConfigs.recommended,
    ...importPlugin.flatConfigs.typescript,

    settings: {
      'import-x/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },

      'import-x/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },

        typescript: {
          alwaysTryTypes: true,
          project: ['**/tsconfig.json'],
        },
      },
    },

    rules: {
      'import-x/extensions': [
        'error',
        'ignorePackages',
        {
          '': 'never',
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],

      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],

          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],

          pathGroupsExcludedImportTypes: ['builtin'],

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },

          'newlines-between': 'always',
        },
      ],

      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: false,
        },
      ],
    },
  },

  // Build output.
  {
    ignores: ['dist', 'node_modules', '.angular'],
  },
]);
