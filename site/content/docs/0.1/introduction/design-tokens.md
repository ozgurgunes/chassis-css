---
layout: docs
title: Design Tokens
description: Learn about the token system used for Chassis products, providing headless Figma prototypes and ability to push design decisions directly from Figma to code.
group: introduction
---

{{< callout info >}}
**Heads up!** This copy is a work in progress.
{{< /callout >}}

## Tokens Studio

We use [Tokens Studio](https://tokens.studio) Figma Plugin to manage our design tokens and synchronize with Figma. Bu using plugins theming features, we're creating 4 variable collections and their modes in our main library.

- **Brand**
  Modes contain brand colors and typography.
- **Theme**
  Classic light / dark modes and high-contrast / low-saturation variants.
- **System**
  Platform specific metrics and component properties including font, color, spacing, borders etc.
- **App**
  Application specific metrics and component properties including font, color, spacing, borders etc.

<table class="table">
  <thead>
    <tr>
      <th scope="col">Collection</th>
      <th scope="col">Mode 1</th>
      <th scope="col">Mode 2</th>
      <th scope="col">Mode 3</th>
      <th scope="col">Mode 4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Brand</th>
      <td>default</td>
      <td>chassis</td>
      <td>a11y</td>
      <td>other</td>
    </tr>
    <tr>
      <th scope="row">Theme</th>
      <td>light</td>
      <td>dark</td>
      <td>contrast</td>
      <td>saturation</td>
    </tr>
    <tr>
      <th scope="row">System</th>
      <td>default</td>
      <td>web</td>
      <td>ios</td>
      <td>android</td>
    </tr>
    <tr>
      <th scope="row">App</th>
      <td>default</td>
      <td>panel</td>
      <td>passenger</td>
      <td>driver</td>
    </tr>
  </tbody>
</table>

## Style Dictionary

We made custom [Style Dictionary](https://amzn.github.io/style-dictionary) tools for our tokens which are also migrating references as platform variables during token transformation.

Keeping design tokens and asset sources together allows running a style dictionary command builds and distributes all needs in appropriate format for each platform.

Token repository structure excluding package and build files.

{{< highlight "text" >}}
chassis-design-tokens/
├── assets/
│   └── driver-app/
│   └── hr-panel/
│   └── mission-control/
│   └── passenger-app/
├── icons/
│   └── css-template
│   └── font-template
│   └── svgs/
├── fonts/
│   └── driver-app/
│   └── hr-panel/
│   └── mission-control/
│   └── passenger-app/
├── dist/
│   ├── driver-app-android/
│   │   └── assets/
│   │   └── fonts/
│   │   └── icons/
│   │   └── tokens/
│   │       └── default-dark/
│   │       └── default-light/
│   │       └── chassis-dark/
│   │       └── chassis-light/
│   │       └── ...
│   ├── driver-app-ios/
│   │   └── ...
│   └── hr-panel/
│   └── ...
├── figma-tokens/
│   └── brand/
│   │   └── default/
│   │   └── chassis/
│   │   └── ...
│   └── theme/
│   │   └── light/
│   │   └── dark/
│   │   └── contrast/
│   │   └── saturation/
│   └── system/
│   │   └── default/
│   │   └── web/
│   │   └── ios/
│   │   └── android/
│   └── app/
│   │   └── default/
│   │   └── panel/
│   │   └── passenger/
│   │   └── driver/
├── ...
{{< /highlight >}}

## Tokens

Check out [**Tokens**](/tokens) page to see all design tokens and their values.
