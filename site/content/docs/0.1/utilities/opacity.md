---
layout: docs
title: Opacity
description: Control the opacity of elements.
group: utilities
toc: true
added:
  version: "5.1"
---

[api]:      {{< docsref "/utilities/api" >}}

## Overview

The `opacity` property sets the opacity level for an element. The opacity level describes the transparency level, where `1` is not transparent at all, `.5` is 50% visible, and `0` is completely transparent.

Set the `opacity` of an element using `.opacity-{value}` utilities.


<div class="cxd-example d-flex flex-wrap">
{{< opacities.inline >}}
{{- range (index $.Site.Data "token-opacities") }}
<div class="bg-opacity-{{ .name }} bg-default fg-{{ if or (ge .name 50) (eq .name "solid") }}alternate{{ else }}default{{ end }} fg-opacity-80 bg-default p-small m-xsmall rounded">{{ .name }}</div>
{{- end -}}
{{< /opacities.inline >}}
</div>

{{< highlight "html" >}}
{{< opacities.inline >}}
{{- range (index $.Site.Data "token-opacities") }}
<div class="opacity-{{ .name }}">...</div>
{{- end -}}
{{< /opacities.inline >}}
{{< /highlight >}}

## Property Opacities

Using CSS variables for some utilities allows for real-time color changes without compilation and dynamic alpha transparency changes.

### How it works

Consider our default `.bg-primary` utility.

```css
.bg-primary {
  background-color: rgba(var(--cx-primary-rgb), var(--cx-bg-opacity, 1)) !important;
}
.bg-opacity-50 {
  --cx-bg-opacity: var(--cx-opacity-50);
}
```

We use an RGB version of our `--cx-primary` (with the value of `255, 91, 20`) CSS variable and attached a second CSS variable, `--cx-bg-opacity`, for the alpha transparency (with a default value `1`). That means anytime you use `.bg-primary` now, your computed `background-color` value is `rgba(255, 91, 20, 1)`. Then, the opacity class overrides default opacity value of color by adding `--cx-bg-opacity` variable to the element.

### Example

To change that opacity, override `--cx-bg-opacity` via custom styles or inline styles.

{{< example >}}
<div class="bg-primary p-xsmall primary-contrast-color">
  This is default primary background</div>
<div style="--cx-bg-opacity: .4;" class="bg-primary p-xsmall">
  This is 40% opacity primary background</div>
{{< /example >}}

## Context Opacities

Contextual opacities can be used in combination with utilities.

### Foreground

Text opacities are available with `fg-*` utilities.

{{< example >}}
<p class="fg-primary">Base opacity</p>
<p class="fg-primary fg-opacity-fg-subtle">Smooth opacity</p>
<p class="fg-primary fg-opacity-fg-slight">Slight opacity</p>
{{< /example >}}

Check out [color]({{< docsref "/utilities/colors#opacity" >}}) page for more details.

### Background

Scene opacities are available with `bg-*` utilities.

{{< example >}}
<div class="bg-primary bg-opacity-scene-dim p-xsmall">This is <code>scene-dim</code> opacity primary background</div>
<div class="bg-primary bg-opacity-scene-blur p-xsmall">This is <code>scene-blur</code> opacity primary background</div>
<div class="bg-primary bg-opacity-scene-shade p-xsmall">This is <code>scene-shade</code> opacity primary background</div>
<div class="bg-primary bg-opacity-scene-clear p-xsmall">This is <code>scene-clear</code> opacity primary background</div>
{{< /example >}}

Check out [background]({{< docsref "/utilities/background#opacity" >}}) page for more details.

### Border

Border opacities are available with `obj-*` utilities.

{{< example >}}
<p class="border border-primary p-xsmall">Base opacity</p>
<p class="border border-primary border-opacity-border-main p-xsmall">Border opacity</p>
<p class="border border-primary border-opacity-border-subtle p-xsmall">Separator opacity</p>
{{< /example >}}

Check out [borders]({{< docsref "/utilities/borders#opacity" >}}) page for more details.

## CSS

{{< partial "generic/docs-css" >}}

### Variables

{{< partial "generic/css-variables" >}}

### Sass Variables

{{< partial "generic/sass-variables" >}}

{{< scss-docs name="base-opacity-tokens" file="scss/tokens/_index.scss" >}}

### Sass Maps

Opacity utilities are generated from Sass maps using [utilities API]({{< docsref "/utilities/api" >}}).

{{< scss-docs name="opacities-map" file="scss/maps/_opacities.scss" >}}

### Utilities API

Opacity utilities are generated using [utilities API]({{< docsref "/utilities/api" >}}).

{{< scss-docs name="utils-opacity" file="scss/utilities/_index.scss" >}}
