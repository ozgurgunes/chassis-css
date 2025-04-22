---
layout: docs
title: Icon
description: Icon utilities are used to stylize both svg and font icons to adjust their color and size.
group: components
toc: true
added:
  version: "0.1"
---

[api]:      {{< docsref "/utilities/api" >}}

## Icons

Icons can be used in both `SVG` or `font` format with same `.icon` class. It loads the icon font by class name if it is an empty `span` element.

{{< example >}}
<svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
<span class="icon icon-info-circle-solid"></span>
{{< /example >}}

## Icon Colors

Use `.icon-*` classes to adjust icon color

{{< example >}}
{{< context-colors.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<svg class="icon icon-{{ .name }}"><use xlink:href="#info-circle-solid"/></svg>
{{- end -}}
{{< /context-colors.inline >}}
{{< /example >}}

{{< example >}}
{{< context-colors.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<span class="icon icon-{{ .name }} icon-info-circle-solid"></span>
{{- end -}}
{{< /context-colors.inline >}}
{{< /example >}}

### Context Colors

Use context colors by their name.

{{< example >}}
<svg class="icon icon-main"><use xlink:href="#info-circle-solid"/></svg>
<svg class="icon icon-subtle"><use xlink:href="#info-circle-solid"/></svg>
<svg class="icon icon-slight"><use xlink:href="#info-circle-solid"/></svg>
<svg class="icon secondary-icon-main"><use xlink:href="#info-circle-solid"/></svg>
<svg class="icon secondary-icon-subtle"><use xlink:href="#info-circle-solid"/></svg>
<svg class="icon secondary-icon-slight"><use xlink:href="#info-circle-solid"/></svg>
<span class="vr mx-medium"></span>
<span class="icon icon-main icon-info-circle-solid"></span>
<span class="icon icon-subtle icon-info-circle-solid"></span>
<span class="icon icon-slight icon-info-circle-solid"></span>
<span class="icon secondary-icon-main icon-info-circle-solid"></span>
<span class="icon secondary-icon-subtle icon-info-circle-solid"></span>
<span class="icon secondary-icon-slight icon-info-circle-solid"></span>
{{< /example >}}

### Reset Color

Icons use `--cx-icon-main` color by default, add `.reset` class to paint it `--cx-fg-color`.

{{< example >}}
<div class="info-fg-subtle">
<svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
<svg class="icon reset"><use xlink:href="#info-circle-solid"/></svg>
</div>
{{< /example >}}


## Icon Sizes

Use `.icon-*` classes to adjust icon size

{{< example >}}
<svg class="icon icon-2xsmall"><use xlink:href="#info-circle-solid"/></svg>
<svg class="icon icon-xsmall"><use xlink:href="#info-circle-solid"/></svg>
<svg class="icon icon-small"><use xlink:href="#info-circle-solid"/></svg>
<svg class="icon icon-medium"><use xlink:href="#info-circle-solid"/></svg>
<svg class="icon icon-large"><use xlink:href="#info-circle-solid"/></svg>
<svg class="icon icon-xlarge"><use xlink:href="#info-circle-solid"/></svg>
<svg class="icon icon-2xlarge"><use xlink:href="#info-circle-solid"/></svg>
<svg class="icon icon-3xlarge"><use xlink:href="#info-circle-solid"/></svg>
<svg class="icon icon-4xlarge"><use xlink:href="#info-circle-solid"/></svg>
{{< /example >}}

{{< example >}}
<span class="icon icon-2xsmall icon-info-circle-solid"></span>
<span class="icon icon-xsmall icon-info-circle-solid"></span>
<span class="icon icon-small icon-info-circle-solid"></span>
<span class="icon icon-medium icon-info-circle-solid"></span>
<span class="icon icon-large icon-info-circle-solid"></span>
<span class="icon icon-xlarge icon-info-circle-solid"></span>
<span class="icon icon-2xlarge icon-info-circle-solid"></span>
<span class="icon icon-3xlarge icon-info-circle-solid"></span>
<span class="icon icon-4xlarge icon-info-circle-solid"></span>
{{< /example >}}

## With Text

Same icon & text sizes align properly.

{{< example >}}
<div>
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Text with a leading SVG icon.
</div>
<p>
  <span class="icon icon-info-circle-solid"></span>
  Text with a leading font icon.
<p>
<div class="font-2xlarge">
  <svg class="icon icon-2xlarge"><use xlink:href="#info-circle-solid"/></svg>
  Text with a leading SVG icon.
</div>
<p class="font-2xlarge">
  <span class="icon icon-2xlarge icon-info-circle-solid"></span>
  Text with a leading font icon.
<p>
{{< /example >}}

You can use `.adaptive` class to match `font-size`.

{{< example >}}
<div class="font-2xlarge">
  <svg class="icon icon-adaptive"><use xlink:href="#info-circle-outline"/></svg>
  Text with an adaptive leading SVG icon.
</div>
<p class="font-2xlarge">
  <span class="icon icon-adaptive icon-info-circle-outline"></span>
  Text with an adaptive leading font icon.
<p>
<div class="font-2xlarge fg-subtle">
  <svg class="icon icon-adaptive icon-reset"><use xlink:href="#info-circle-outline"/></svg>
  Text with an adaptive leading SVG icon.
</div>
<p class="font-2xlarge fg-subtle">
  <span class="icon icon-adaptive icon-reset icon-info-circle-outline"></span>
  Text with an adaptive leading font icon.
<p>
{{< /example >}}

## Opacity
Using CSS variables for `icon` utilities allows for real-time color changes without compilation and dynamic alpha transparency changes.

### How it works

Consider our default `.icon-primary` utility.

```css
.icon {
  /* This is just an example, actual icon class is a bit more complex than this. */
  --cx-icon-color: var(--cx-default-icon-main-rgb);
  color: rgba(var(--cx-icon-color), var(--cx-icon-opacity, 1));
}
.icon-primary {
  --cx-icon-color: var(--cx-primary-rgb);
}
.icon-opacity-50 {
  --cx-icon-opacity: var(--cx-opacity-50);
}
```

We use an RGB version of our `--cx-primary` (with the value of `255, 91, 20`) CSS variable and attached a second CSS variable, `--cx-icon-opacity`, for the alpha transparency (with a default value `1` thanks to a local CSS variable). That means anytime you use `.icon-primary` now, your computed `color` value is `rgba(255, 91, 20, 1)`. The local CSS variable inside each `.icon-*` class avoids inheritance issues so nested instances of the utilities don't automatically have a modified alpha transparency.

### Example

To change that opacity, override `--cx-icon-opacity` via custom styles or inline styles, or choose from any of the `.icon-opacity-*` utilities:

{{< example >}}
{{< opacities.inline >}}
<svg class="icon icon-secondary"><use xlink:href="#info-circle-solid"/></svg>
<svg style="--cx-icon-opacity: .6;" class="icon icon-secondary"><use xlink:href="#info-circle-solid"/></svg>
<span class="vr mx-medium"></span>
{{- range (index $.Site.Data "basic-opacities") }}
<svg class="icon icon-secondary icon-opacity-{{ .name }}"><use xlink:href="#info-circle-solid"/></svg>
{{- end -}}
{{< /opacities.inline >}}
{{< /example >}}

{{< example >}}
{{< opacities.inline >}}
<span class="icon icon-secondary icon-info-circle-solid"></span>
<span style="--cx-icon-opacity: .6;" class="icon icon-secondary icon-info-circle-solid"></span>
<span class="vr mx-medium"></span>
{{- range (index $.Site.Data "basic-opacities") }}
<span class="icon icon-secondary icon-opacity-{{ .name }} icon-info-circle-solid"></span>
{{- end -}}
{{< /opacities.inline >}}
{{< /example >}}

### Context Opacity

You can directly apply a **context opacity** utility to match `fg-*` colors:

{{< example >}}
<svg class="icon icon-secondary"><use xlink:href="#info-circle-solid"/></svg>
<svg class="icon icon-secondary icon-opacity-subtle"><use xlink:href="#info-circle-solid"/></svg>
<svg class="icon icon-secondary icon-opacity-slight"><use xlink:href="#info-circle-solid"/></svg>
<span class="vr mx-medium"></span>
<span class="icon icon-secondary icon-info-circle-solid"></span>
<span class="icon icon-secondary icon-opacity-subtle icon-info-circle-solid"></span>
<span class="icon icon-secondary icon-opacity-slight icon-info-circle-solid"></span>
{{< /example >}}

## CSS

{{< partial "generic/docs-css" >}}

### Variables

{{< partial "generic/css-variables" >}}

### Sass Variables

{{< partial "generic/sass-variables" >}}

{{< scss-docs name="icon-size-tokens" file="scss/tokens/_index.scss" >}}

### Sass Maps

Icon utilities are generated from Sass maps using [utilities API]({{< docsref "/utilities/api" >}}).

{{< scss-docs name="icon-sizes-map" file="scss/maps/_index.scss" >}}
{{< scss-docs name="icon-opacities-map" file="scss/maps/_opacities.scss" >}}

See [opacity]({{< docsref "utilities/opacity#sass-maps" >}}) utility page to learn more about opacities.

### Utilities API

Icon utilities are generated using [utilities API]({{< docsref "/utilities/api" >}}).

{{< scss-docs name="utils-icons" file="scss/_icon.scss" >}}
