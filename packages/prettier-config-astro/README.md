# @sikora-software/prettier-config-astro

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

## License

MIT
