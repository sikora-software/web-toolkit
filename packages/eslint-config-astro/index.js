// @ts-check

import * as astroParser from "astro-eslint-parser";
import eslintPluginAstro from "eslint-plugin-astro";
import importPluginX from "eslint-plugin-import-x";
import jsxA11yX from "eslint-plugin-jsx-a11y-x";
import typescriptParser from "@typescript-eslint/parser";

import baseConfig from "@sikora-software/eslint-config";

export default [
  ...baseConfig,

  // Astro recommended configuration.
  ...eslintPluginAstro.configs["flat/recommended"],

  // Astro accessibility rules.
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],

  // Astro-specific globals.
  {
    languageOptions: {
      globals: {
        astroHTML: "readonly",
      },
    },
  },

  // TypeScript files.
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],

      "@typescript-eslint/explicit-function-return-type": "error",

      "no-unused-vars": "off",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/no-non-null-assertion": "off",

      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // Astro files.
  {
    files: ["**/*.astro"],

    plugins: {
      "jsx-a11y-x": jsxA11yX,
    },

    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: typescriptParser,
        extraFileExtensions: [".astro"],
      },
    },

    rules: {
      "jsx-a11y-x/alt-text": "error",

      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },

  // Embedded scripts inside Astro files.
  {
    files: ["**/*.astro/*.ts", "**/*.astro/*.js"],

    languageOptions: {
      parser: typescriptParser,
    },
  },

  // Import rules.
  {
    ...importPluginX.flatConfigs.recommended,
    ...importPluginX.flatConfigs.typescript,

    settings: {
      "import-x/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },

      "import-x/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },

        typescript: {
          alwaysTryTypes: true,
          project: ["**/tsconfig.json"],
        },
      },
    },

    rules: {
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
          "": "never",
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],

      "import-x/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
          ],

          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
            },
          ],

          pathGroupsExcludedImportTypes: ["builtin"],

          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },

          "newlines-between": "always",
        },
      ],

      "sort-imports": [
        "error",
        {
          ignoreDeclarationSort: true,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        },
      ],
    },
  },

  // Ignore generated/build files.
  {
    ignores: [
      "dist",
      "node_modules",
      ".astro",
      "types.generated.d.ts",
      ".github",
      "worker-configuration.d.ts",
    ],
  },
];
