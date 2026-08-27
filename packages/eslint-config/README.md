# @sikora-software/eslint-config

[![npm version](https://img.shields.io/npm/v/@sikora-software/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@sikora-software/eslint-config)
[![license](https://img.shields.io/npm/l/@sikora-software/eslint-config.svg?style=flat-square)](https://github.com/sikora-software/@sikora-software/eslint-config/blob/main/LICENSE)

Shared ESLint configuration for JavaScript and TypeScript projects.

This package provides the base ESLint configuration.

## Installation

```bash
npm install --save-dev @sikora-software/eslint-config eslint
```

## Usage

```javascript
import config from '@sikora-software/eslint-config';

export default config;
```

## What's included

- ESLint recommended rules
- TypeScript ESLint recommended rules
- Browser and Node.js globals
- TypeScript code-quality rules
- Consistent TypeScript type definitions
- Unused variable detection

## Framework configurations

For framework-specific projects, use one of the following:

- `@sikora-software/eslint-config-astro`
- `@sikora-software/eslint-config-react`
- `@sikora-software/eslint-config-angular`

---

## Author

Created and maintained by [Mateusz Sikora](https://sikora.software).

## License

MIT
