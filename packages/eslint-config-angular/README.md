# @sikora-software/eslint-config-angular

Shared ESLint configuration for Angular projects using TypeScript and
ESLint flat config.

This package extends `@sikora-software/eslint-config` with Angular-specific
linting, template, accessibility, and import rules.

## Installation

```bash
npm install --save-dev eslint @sikora-software/eslint-config-angular
```

## Usage

Create `eslint.config.js`:

```javascript
import config from '@sikora-software/eslint-config-angular';

export default config;
```

## What's included

- Shared JavaScript and TypeScript ESLint rules
- Angular TypeScript recommended rules
- Angular template recommended rules
- Angular template accessibility rules
- Inline Angular template processing
- Component selector validation
- Directive selector validation
- TypeScript-aware import rules
- Import ordering
- Import extension rules

## Default selectors

Components use:

`app-*`

Directives use:

`app*`

---

## Author

Created and maintained by [Mateusz Sikora](https://sikora.software).

## License

MIT
