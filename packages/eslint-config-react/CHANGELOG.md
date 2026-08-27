# @sikora-software/eslint-config-react

## 0.1.4

### Patch Changes

- - **Import Rule Adjustments**: Changed `import-x/extensions` to require explicit file extensions for `jsx` and `tsx` imports (`always`), while keeping `js` and `ts` extensionless (`never`).
  - **Import Ordering & Validation**: Updated `import-x/order` severity to `error` and reorganized import groups. Disabled `import-x/namespace` to reduce noise.
  - **Flat Config Cleanup**: Flattened `importPlugin.flatConfigs` directly into the array instead of spreading them into a custom block.

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
