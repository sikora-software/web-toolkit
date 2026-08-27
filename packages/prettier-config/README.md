# @sikora-software/prettier-config

Shared Prettier configuration for JavaScript, TypeScript, and web projects.

This package provides the base formatting conventions used by the
Sikora Software web tooling ecosystem.

## Installation

```bash
npm install --save-dev prettier @sikora-software/prettier-config
```

## Usage

```javascript
import config from '@sikora-software/prettier-config';

export default config;
```

## Configuration

The base configuration defines common formatting conventions including:

- 2-space indentation
- Single quotes
- Semicolons
- Trailing commas
- 120-character print width
- LF line endings

## Framework configurations

For framework-specific projects, use:

- `@sikora-software/prettier-config-astro`
- `@sikora-software/prettier-config-angular`

---

## Author

Created and maintained by [Mateusz Sikora](https://sikora.software).

## License

MIT
