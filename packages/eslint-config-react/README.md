# @sikora-software/eslint-config-react

Shared ESLint configuration for React projects using TypeScript, JSX, and
ESLint flat config.

This package extends `@sikora-software/eslint-config` with React-specific
linting rules.

## Installation

```bash
npm install --save-dev eslint @sikora-software/eslint-config-react
```

## Usage

Create `eslint.config.js`:

```javascript
import config from '@sikora-software/eslint-config-react';

export default config;
```

## What's included

- Shared JavaScript and TypeScript ESLint rules
- React recommended rules
- React JSX runtime rules
- React Hooks rules
- React Refresh rules
- JSX accessibility rules
- TypeScript-aware import rules
- Import ordering
- Import extension rules
- Project code-quality rules

---

## Author

Created and maintained by [Mateusz Sikora](https://sikora.software).

## License

MIT
