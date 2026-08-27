// @ts-check

import reactX from 'eslint-plugin-react-x';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11yX from 'eslint-plugin-jsx-a11y-x';
import importPlugin from 'eslint-plugin-import-x';
import typescriptParser from '@typescript-eslint/parser';

import baseConfig from '@sikora-software/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...baseConfig,

  // React.
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    plugins: {
      'react-x': reactX,
    },

    rules: {
      ...reactX.configs.recommended.rules,
      'react-x/prop-types': 'off',
    },
  },

  // React Hooks.
  {
    files: ['**/*.{jsx,tsx}'],

    ...reactHooks.configs.flat.recommended,

    rules: {
      ...reactHooks.configs.flat.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // JSX accessibility.
  {
    files: ['**/*.{jsx,tsx}'],

    plugins: {
      'jsx-a11y-x': jsxA11yX,
    },

    rules: {
      ...jsxA11yX.configs.recommended.rules,
    },
  },

  // React Fast Refresh.
  {
    files: ['**/*.{jsx,tsx}'],

    plugins: {
      'react-refresh': reactRefresh,
    },

    rules: {
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
    },
  },

  // Imports.
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

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
          jsx: 'always',
          ts: 'never',
          tsx: 'always',
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
          allowSeparatedGroups: true,
        },
      ],

      'import-x/namespace': 'off',
      'import-x/default': 'off',
      'import-x/no-named-as-default': 'off',
      'import-x/no-named-as-default-member': 'off',
    },
  },

  // React-specific project rules.
  {
    files: ['**/*.{jsx,tsx}'],

    rules: {
      'no-console': 'warn',
      'max-lines': ['error', 300],
    },
  },

  // Build output.
  {
    ignores: ['dist', 'node_modules'],
  },
];

export default config;
