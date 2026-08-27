# @sikora-software/eslint-config-astro

[![npm version](https://img.shields.io/npm/v/@sikora-software/eslint-config-astro.svg?style=flat-square)](https://www.npmjs.com/package/@sikora-software/eslint-config-astro)
[![license](https://img.shields.io/npm/l/@sikora-software/eslint-config-astro.svg?style=flat-square)](https://github.com/sikora-software/@sikora-software/eslint-config-astro/blob/main/LICENSE)

Shared ESLint configuration for Astro projects using TypeScript and ESLint flat config.

This package extends
`@sikora-software/eslint-config` with Astro-specific linting rules,
Astro parsing, accessibility rules, and import conventions.

## Installation

```bash
npm install --save-dev @sikora-software/eslint-config-astro eslint
```

## Usage

Create `eslint.config.js` in your Astro project:

```javascript
import config from '@sikora-software/eslint-config-astro';

export default config;
```

## What's included

This configuration includes:

- ESLint recommended rules
- TypeScript ESLint rules
- Astro ESLint recommended rules
- Astro accessibility rules
- TypeScript support for `.astro` files
- Import ordering
- Import extension rules
- Shared JavaScript and TypeScript code-quality rules

## Rules

### TypeScript

- Consistent type definitions
- Explicit function return types
- Unused variable detection

### Imports

- Import ordering
- Alphabetical imports
- Extension enforcement

### Astro

- Astro recommended rules
- Astro accessibility rules
- TypeScript support in `.astro` files

## Requirements

- Node.js
- ESLint 10+
- Astro
- TypeScript

---

## Author

Created and maintained by [Mateusz Sikora](https://sikora.software).

## License

MIT
