# @sikora-software/eslint-config-astro

## 0.2.0

### Minor Changes

- - **Plugin Registration**: Added `@typescript-eslint` plugin to `.astro` file configuration block.
  - **Embedded Scripts Support**: Added `tseslint.configs.disableTypeChecked` and turned off `no-undef` for embedded `.astro` script tags to prevent type-checking crashes.
  - **Import Adjustments**: Ignored `astro:` and `~icons/` imports in `import-x/no-unresolved`, and disabled noisy rules (`namespace`, `default`, `no-named-as-default`, `no-named-as-default-member`).
  - **Config Cleanup**: Removed redundant standalone TS file block and flattened `importPluginX.flatConfigs` objects.

## 0.1.3

### Patch Changes

- Updated dependencies
  - @sikora-software/eslint-config@0.2.1

## 0.1.2

### Patch Changes

- Updated dependencies
  - @sikora-software/eslint-config@0.2.0

## 0.1.1

### Patch Changes

- Updated dependencies
  - @sikora-software/eslint-config@0.1.1

## 0.1.0

### Minor Changes

- ff592ce: Initial public release of the Sikora Software web tooling packages.

### Patch Changes

- Updated dependencies [ff592ce]
  - @sikora-software/eslint-config@0.1.0
