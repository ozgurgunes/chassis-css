# Chassis - CSS

A CSS framework that synchronizes with Figma components using design tokens.

Chassis - CSS includes Figma components, design tokens, and their transformers for multiple products and brands.

## Quick Start

Documentation is built with [Hugo](https://gohugo.io) and hosted at https://ozgurgunes.github.io/chassis-css//. It can also be run locally.

### Run Documentation Locally

Clone the repo and install dependencies:

```shell
git clone --recurse-submodules git@github.com:ozgurgunes/chassis-css.git
cd chassis-design-system
npm install
```

> **Optional:** Checkout the appropriate branch of `motif-tokens` if needed:

```shell
cd motif-tokens
git checkout [branch-name]
cd ..
```

Run the documentation site:

```shell
npm run docs-serve
```

Visit https://localhost:9001

> The server is bound to `hostname` and should be accessible from the local network.

### Development

Run the documentation site and watch for changes:

```shell
npm run start
```

Use the [vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) extension. Add this to your settings:

```json
{
  "stylelint.validate": ["css", "scss"]
}
```

### Release

Update the version:

```shell
npm run release-version old_version new_version
```

Create everything, including zip files:

```shell
npm run release
```

Inspect package scripts for more commands.

### CSS

The project imports `chassis-tokens/dist/tokens/web/chassis_docs_light.scss` as default variables and builds CSS on top of it.

This file contains the default design tokens used throughout the project. If you need to change the source of these design tokens, you must update the import path in all the files that currently import `chassis_docs_light.scss`. This ensures that the entire project uses the updated design tokens consistently.

The file is imported in several locations. If the source changes, update the import paths in the following files:

- `scss/chassis.scss`
- `scss/tests/mixins/_auto-import-of-variables-dark.test.scss`
- `scss/tests/mixins/_color-modes.test.scss`
- `scss/tests/utilities/_api.test.scss`
- `site/assets/scss/_imports.scss`
- `site/assets/scss/docs.scss`
- `site/assets/scss/search.scss`
- `site/content/tokens.md`

### Icons

The project reads files from the `chassis-tokens/dist/icons` directory as the source and generates documentation for these icons.

### Versions & Docs

Patch releases can be done easily without any changes to the documentation.

For minor or major version increments, follow these steps to update the documentation:

1. Clone and rename the current version folder under `site/assets/content/docs` to the new version.
2. Find and replace all instances of `current_version` with `new_version` in the `site/content/docs/[new_version]` directory.
3. Clone and rename the current version folder under `site/static/docs` to the new version.
4. Duplicate and update the path in `.eslintignore`.
5. Update the versions in `hugo.yml` (`param.docs_version`, `module.mounts`).
6. Update the `version_short` in `package.json`.

After completing these steps, the project should build and start with the new version of the documentation.
