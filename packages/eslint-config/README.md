# @sikora-software/eslint-config

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

## License

MIT
