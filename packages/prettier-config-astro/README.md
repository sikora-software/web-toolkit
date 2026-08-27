# @sikora-software/prettier-config-astro

[![npm version](https://img.shields.io/npm/v/@sikora-software/prettier-config-astro.svg?style=flat-square)](https://www.npmjs.com/package/@sikora-software/prettier-config-astro)
[![license](https://img.shields.io/npm/l/@sikora-software/prettier-config-astro.svg?style=flat-square)](https://github.com/sikora-software/@sikora-software/prettier-config-astro/blob/main/LICENSE)

Shared Prettier configuration for Astro projects.

This package extends
`@sikora-software/prettier-config` with Astro file formatting support.

## Installation

```bash
npm install --save-dev prettier prettier-plugin-astro @sikora-software/prettier-config-astro
```

## Usage

Create `prettier.config.js`:

```javascript
import config from '@sikora-software/prettier-config-astro';

export default config;
```

The configuration supports formatting:

- JavaScript
- TypeScript
- JSX/TSX
- Astro components
- Other files supported by Prettier

---

## Author

Created and maintained by [Mateusz Sikora](https://sikora.software).

## License

MIT
