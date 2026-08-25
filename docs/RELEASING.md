# Releasing Packages

This repository uses [Changesets](https://github.com/changesets/changesets) to manage package versions, changelogs, and npm releases.

## 1. Make Changes

Develop and test your changes normally.

Before creating a release, run:

```bash
pnpm run format:check
```

## 2. Create a Changeset

Create a changeset for every user-facing change:

```bash
pnpm changeset
```

Select the affected package or packages and choose the appropriate version bump:

- `patch` — bug fixes and backwards-compatible fixes
- `minor` — new backwards-compatible features or rules
- `major` — breaking configuration changes

### Example

```md
---
'@sikora-software/eslint-config-astro': patch
---

Fix Astro ESLint configuration.
```

A single changeset can affect multiple packages:

```md
---
'@sikora-software/eslint-config': minor
'@sikora-software/eslint-config-astro': patch
'@sikora-software/eslint-config-react': patch
---

Improve shared TypeScript rules.
```

Commit the changeset together with your changes:

```bash
git add .
git commit -m "feat: improve Astro ESLint configuration"
```

## 3. Merge Changes

Push your branch and merge the changes into `main`.

Multiple changesets can accumulate before a release.

## 4. Check Release Status

When you are ready to create a release, check which packages will be released:

```bash
pnpm changeset status
```

## 5. Update Package Versions

Generate new package versions and changelogs:

```bash
pnpm changeset version
```

This command:

- Updates affected package versions
- Updates internal package dependencies
- Generates or updates `CHANGELOG.md` files
- Consumes pending changesets

Review the generated changes:

```bash
git diff
```

## 6. Test the Release

Install dependencies and run all checks:

```bash
pnpm install
pnpm run lint
pnpm run format:check
```

Check the repository status:

```bash
git status
```

## 7. Commit and Push Release Versions

Commit the generated version and changelog changes:

```bash
git add .
git commit -m "chore: release packages"
```

Push the release commit:

```bash
git push origin main
```

## 8. Publish Packages

Publish all packages with new versions:

```bash
pnpm changeset publish
```

The packages will be published to the npm registry.

Changesets also creates Git tags for the published package versions.

## 9. Push Git Tags

Push the generated tags to GitHub:

```bash
git push origin --tags
```

Alternatively:

```bash
git push origin main --follow-tags
```

## 10. Verify the Release

Verify the published packages on npm.

Check local Git tags:

```bash
git tag --list
```

Check tags on the remote repository:

```bash
git ls-remote --tags origin
```

Check that the working tree is clean:

```bash
git status
```

## Versioning Guidelines

### Patch

Use `patch` for:

- Bug fixes
- Rule corrections
- Non-breaking configuration fixes

### Minor

Use `minor` for:

- New rules
- New backwards-compatible functionality
- New configuration options

### Major

Use `major` for:

- Breaking configuration changes
- Removed rules that may affect consumers
- Changes requiring consumers to update their configuration

## Typical Release Flow

```text
Make changes
    ↓
Create changeset
    ↓
Commit and merge changes
    ↓
pnpm changeset status
    ↓
pnpm changeset version
    ↓
Review generated changes
    ↓
pnpm install
pnpm run lint
pnpm run format:check
    ↓
Commit release versions
    ↓
Push main
    ↓
pnpm changeset publish
    ↓
Push Git tags
    ↓
Verify npm packages
```
