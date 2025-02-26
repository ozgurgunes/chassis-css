---
layout: docs
title: Spinners
description: Indicate the loading state of a component or page with Chassis - CSS spinners, built entirely with HTML, CSS, and no JavaScript.
group: components
toc: true
---

[color]:    {{< docsref "/utilities/colors" >}}
[flex]:     {{< docsref "/utilities/flex" >}}
[float]:    {{< docsref "/utilities/float" >}}
[margin]:   {{< docsref "/utilities/spacing" >}}
[text]:     {{< docsref "/utilities/text" >}}

## About

Chassis - CSS "spinners" can be used to show the loading state in your projects. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, sizing and opacity can be easily customized with our amazing utility classes.

{{< callout warning >}}
For accessibility purposes, loaders should include `role="status"` and a nested `<span class="visually-hidden">Loading...</span>`. We didn't include them in some examples here to keep focus on utilities.
{{< /callout >}}

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

### Border spinner

Use the border spinners for a lightweight loading indicator.

{{< example >}}
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}

### Growing spinner

If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!

{{< example >}}
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}

### Default spinner

You can set default spinner in options and use `.spinner` class only.

{{< example >}}
<div class="spinner" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}

## Colors

Spinners use `--cx-spinner-color` variable for their color, which is set to `--cx-icon-color` by default and can be changed in options. Use `.spinner-*` classes to pain them any `context` color.

{{< example >}}
{{< spinner.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<span class="spinner spinner-{{ .name }}"></span>
{{- end -}}
{{< /spinner.inline >}}
{{< /example >}}

## Sizes

Spinners have a default `size` setting in options, still their size can be changed in different ways.

### Icon Sizes

Spinners use icon sizes for their sizing, use `.spinner-*` class to apply a size.

{{< example >}}
<span class="spinner spinner-2xsmall"></span>
<span class="spinner spinner-xsmall"></span>
<span class="spinner spinner-small"></span>
<span class="spinner spinner-medium"></span>
<span class="spinner spinner-large"></span>
<span class="spinner spinner-xlarge"></span>
<span class="spinner spinner-2xlarge"></span>
<span class="spinner spinner-3xlarge"></span>
<span class="spinner spinner-4xlarge"></span>
{{< /example >}}

### CSS Variables

You can use custom CSS or inline styles to change the dimensions as needed.

{{< example >}}
<span class="spinner-grow" style="--cx-spinner-size: 3rem;"></span>
<span class="spinner-grow" style="--cx-spinner-size: 3rem; --cx-spinner-border-radius: 0;"></span>
<span class="spinner-border" style="--cx-spinner-size: 3rem;"></span>
<span class="spinner-border" style="--cx-spinner-size: 3rem; --cx-spinner-border-width: .5rem;"></span>
{{< /example >}}

### Adaptive

{{< example >}}
<h1>
  <span class="spinner spinner-adaptive"></span>
  Heading 1
</h1>
<h2>
  <span class="spinner spinner-adaptive"></span>
  Heading 1
</h2>
<h3>
  <span class="spinner spinner-adaptive"></span>
  Heading 1
</h3>
{{< /example >}}

## Opacity

Using CSS variables for `spinner` utilities allows for real-time color changes without compilation and dynamic alpha transparency changes.

### How it works

Consider our default `.spinner-*` classes.

```css
.spinner {
  /* This is just an example, actual spinner classes are a bit more complex than this. */
  --cx-spinner-color: var(--cx-icon-color-rgb);
  color: rgba(var(--cx-spinner-color), var(--cx-spinner-opacity, 1));
}
.spinner-primary {
  --cx-spinner-color: var(--cx-primary-rgb);
}
.spinner-opacity-50 {
  --cx-spinner-opacity: var(--cx-opacity-50);
}
```

We use an RGB version of our `--cx-primary` (with the value of `255, 91, 20`) CSS variable and attached a second CSS variable, `--cx-spinner-opacity`, for the alpha transparency (with a default value `1` thanks to a local CSS variable). That means anytime you use `.spinner-primary` now, your computed `color` value is `rgba(255, 91, 20, 1)`. The local CSS variable inside each `.spinner-*` class avoids inheritance issues so nested instances of the utilities don't automatically have a modified alpha transparency.

### Example

To change that opacity, override `--cx-spinner-opacity` via custom styles or inline styles, or choose from any of the `.spinner-opacity-*` utilities:

{{< example >}}
{{< opacities.inline >}}
<span class="spinner-border spinner-secondary"></span>
<span style="--cx-spinner-opacity: .6;" class="spinner-border spinner-secondary"></span>
<span class="vr mx-medium"></span>
{{- range (index $.Site.Data "basic-opacities") }}
<span class="spinner-border spinner-secondary spinner-opacity-{{ .name }}"></span>
{{- end -}}
{{< /opacities.inline >}}
{{< /example >}}

### Context Opacity

You can directly apply a **context opacity** utility to match `icon` contexts:

{{< example >}}
<span class="spinner-border spinner-secondary"></span>
<span class="spinner-border spinner-secondary spinner-opacity-subtle"></span>
<span class="spinner-border spinner-secondary spinner-opacity-slight"></span>
<span class="vr mx-medium"></span>
<span class="spinner-grow spinner-secondary"></span>
<span class="spinner-grow spinner-secondary spinner-opacity-subtle"></span>
<span class="spinner-grow spinner-secondary spinner-opacity-slight"></span>
{{< /example >}}

## Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

Spinners match to icon size and color automatically when placed inside a `.button`.

<div class="button-examples">
{{< example >}}
<button class="button default" type="button">
  <span class="spinner-border spinner-border"></span>
</button>
<button class="button default" type="button" disabled>
  <span class="spinner-border spinner-border"></span>
  Loading...
</button>
<button class="button primary large" type="button">
  <span class="spinner-border spinner-border"></span>
</button>
<button class="button primary large" type="button" disabled>
  <span class="spinner-border spinner-border"></span>
  Loading...
</button>
{{< /example >}}
</div>

## Positioning

Spinners in Chassis - CSS are built with `rem`s and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

### Margin

Use [margin utilities][margin] like `.m-xlarge` for easy spacing.

{{< example >}}
<spam class="spinner-border m-xlarge"></span>
{{< /example >}}

### Flex

Use [flexbox utilities][flex], [float utilities][float], or [text alignment][text] utilities to place spinners exactly where you need them in any situation.

{{< example >}}
<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="d-flex align-items-center">
  <strong role="status">Loading...</strong>
  <div class="spinner-border ms-auto" aria-hidden="true"></div>
</div>
{{< /example >}}

### Floats

{{< example >}}
<div class="clearfix">
  <div class="spinner-border float-end" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
{{< /example >}}

### Text align

{{< example >}}
<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
{{< /example >}}

## CSS

{{< partial "generic/docs-css" >}}

### Variables

{{< partial "generic/css-variables" >}}

### Sass Variables

{{< partial "generic/sass-variables" >}}

{{< scss-docs name="spinner-variables" file="scss/_variables.scss" >}}

### Keyframes

Used for creating the CSS animations for our spinners. Included in `scss/_spinners.scss`.

{{< scss-docs name="spinner-border-keyframes" file="scss/_spinners.scss" >}}

{{< scss-docs name="spinner-grow-keyframes" file="scss/_spinners.scss" >}}

### Sass Maps

See [icon sass maps]({{< docsref "components/icon#sass-maps" >}}) for more information.

{{< scss-docs name="spinner-sizes-map" file="scss/maps/_index.scss" >}}
{{< scss-docs name="spinner-opacities-map" file="scss/maps/_index.scss" >}}

### Utilities API

Spinner utilities are generated using [utilities API]({{< docsref "/utilities/api" >}}).

{{< scss-docs name="utils-spinners" file="scss/_spinners.scss" >}}
