// @ts-check

import angular from 'angular-eslint';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import-x';

import baseConfig from '@sikora-software/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
const config = defineConfig([
  ...baseConfig,

  // Angular TypeScript files.
  {
    files: ['**/*.ts'],
    extends: [...angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,
    rules: {
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
      '@typescript-eslint/no-extraneous-class': [
        'error',
        {
          allowWithDecorator: true,
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
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    settings: {
      'import-x/parsers': { '@typescript-eslint/parser': ['.ts'] },
      'import-x/resolver': {
        node: { extensions: ['.js', '.ts'] },
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
          ts: 'never',
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

export default config;
