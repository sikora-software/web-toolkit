# @sikora-software/prettier-config-angular

[![npm version](https://img.shields.io/npm/v/@sikora-software/prettier-config-angular.svg?style=flat-square)](https://www.npmjs.com/package/@sikora-software/prettier-config-angular)
[![license](https://img.shields.io/npm/l/@sikora-software/prettier-config-angular.svg?style=flat-square)](https://github.com/sikora-software/@sikora-software/prettier-config-angular/blob/main/LICENSE)

Shared Prettier configuration for Angular projects.

This package extends
`@sikora-software/prettier-config` with formatting preferences for Angular projects.

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

---

## Author

Created and maintained by [Mateusz Sikora](https://sikora.software).

## License

MIT
