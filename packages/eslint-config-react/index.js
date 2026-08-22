// @ts-check

import reactX from 'eslint-plugin-react-x';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11yX from 'eslint-plugin-jsx-a11y-x';
import importPlugin from 'eslint-plugin-import-x';
import typescriptParser from '@typescript-eslint/parser';

import baseConfig from '@sikora-software/eslint-config';

export default [
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
      reactX,
    },

    rules: {
      ...reactX.configs.recommended.rules,

      'react-x/prop-types': 'off',

      'react-x/no-unescaped-entities': 'warn',
    },
  },

  // React Hooks.
  {
    files: ['**/*.{jsx,tsx}'],

    plugins: {
      'react-hooks': reactHooks,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,

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
  {
    ...importPlugin.flatConfigs.recommended,
    ...importPlugin.flatConfigs.typescript,

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
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],

      'import-x/order': [
        'warn',
        {
          groups: ['external', 'builtin', 'internal'],

          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },

          'newlines-between': 'always',
        },
      ],

      'sort-imports': [
        'warn',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true,
        },
      ],

      'import-x/no-named-as-default-member': 'off',
      'import-x/no-named-as-default': 'off',
      'import-x/default': 'off',
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
