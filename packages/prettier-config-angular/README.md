# @sikora-software/prettier-config-angular

Shared Prettier configuration for Angular projects.

This package extends
`@sikora-software/prettier-config` with Angular file formatting support.

## Installation

```bash
npm install --save-dev prettier @sikora-software/prettier-config-angular
```

## Usage

Create `prettier.config.js`:

```javascript
import config from '@sikora-software/prettier-config-angular';

export default config;
```

The configuration supports formatting:

- JavaScript
- TypeScript
- Angular components
- Other files supported by Prettier

## License

MIT
