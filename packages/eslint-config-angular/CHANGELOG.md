# @sikora-software/eslint-config-angular

## 0.1.4

### Patch Changes

- Updated dependencies
  - @sikora-software/eslint-config@0.2.1

## 0.1.3

### Patch Changes

- - **Angular Class Compatibility**: Configured `@typescript-eslint/no-extraneous-class` to allow empty classes when decorated (e.g., `@Component`, `@Directive`, `@Injectable`).
  - **Config Cleanup**: Removed unnecessary `.tsx` and `.jsx` extensions from `import-x` parser settings and path resolution rules.
  - **Rule Deduplication**: Removed redundant `@typescript-eslint/consistent-type-definitions` and `@typescript-eslint/explicit-function-return-type` rules that are already provided by `@sikora-software/eslint-config`.
  - **Flat Config Structure**: Flattened `importPlugin.flatConfigs` objects into discrete configuration elements.

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
