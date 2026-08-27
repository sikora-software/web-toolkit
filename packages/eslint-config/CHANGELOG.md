# @sikora-software/eslint-config

## 0.2.1

### Patch Changes

- Updated `@typescript-eslint/restrict-template-expressions` rule to allow numbers directly in template literals.

## 0.2.0

### Minor Changes

- - **Scope Type-Aware Rules**: Restricted `strictTypeChecked` and TypeScript rule sets strictly to `**/*.{ts,tsx,mts,cts}` files to prevent parser crashes on non-TS files and templates (e.g., Angular/Astro).
  - **Rule Adjustments**:
    - Disabled `@typescript-eslint/no-invalid-void-type` to support `Observable<void>` and generic HTTP client calls (`.post<void>()`).
    - Allowed static methods in `@typescript-eslint/unbound-method`
    - Allowed arrow shorthand in `@typescript-eslint/no-confusing-void-expression` (e.g., `(err) => console.error(err)`).

## 0.1.1

### Patch Changes

- Fix TypeScript-specific ESLint rules being applied to JavaScript files.

## 0.1.0

### Minor Changes

- ff592ce: Initial public release of the Sikora Software web tooling packages.
