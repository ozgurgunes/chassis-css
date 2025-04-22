---
layout: docs
title: Color
description: Chassis - CSS uses design tokens for its color definitions. Check out the [design tokens]({{< docsref "introduction/design-tokens" >}}) page to see how to edit design tokens.
group: customize
toc: true
---

All Chassis - CSS colors are available as Sass variables `scss/tokens/_colots.scss` and a Sass map in `scss/maps/_colors.scss` file. To avoid increased file sizes, we don't create text or background color classes for each of these variables.

## Base Colors

We have 7 base colors in addition to black and white.

<div class="row g-xsmall mb-medium">
  {{< context-colors.inline >}}
  {{- range (index $.Site.Data "context-colors") }}
  {{ if not ( or (eq .name "default") (eq .name "alternate")) }}
    <div class="col-medium-4">
      <div class="p-medium m-0 bg-{{ .name }} fg-contrast solid rounded-small">{{ .name | title }}</div>
    </div>
  {{ end }}
  {{ end -}}
  {{< /context-colors.inline >}}
</div>

We create a palette of 11 tones for all of these colors except black & white.

### Color Palettes

Be sure to monitor contrast ratios as you customize colors. As shown below, we've added three contrast ratios to each of the main colors—one for the swatch's current colors, one for against white, and one for against black.

<div class="row g-2xsmall mb-2xsmall">
<div class="col-6">
    <div class="p-medium bg-black fg-contrast">
      <strong class="d-block rounded-small">$black</strong>
      #000
    </div>
  </div>
  <div class="col-6">
    <div class="p-medium bg-white fg-contrast">
      <strong class="d-block rounded-small">$white</strong>
      #000
    </div>
  </div>
</div>
<div class="overflow-scroll text-nowrap">
<div class="grid font-code" style="--cx-grid-columns: 11; --cx-grid-gap: var(--cx-space-2xsmall);">
  {{< context-colors.inline >}}
  {{- range $color := $.Site.Data.colors }}
    {{- if (and (not (eq $color.name "white")) (not (eq $color.name "gray")) (not (eq $color.name "gray-dark"))) }}
    <div class="grid" style="width: 12rem; --cx-grid-columns: 1; grid-template-rows: auto;">
      <div class="p-medium rounded-small mb-xsmall position-relative swatch-{{ $color.name }}">
        <strong class="d-block">${{ $color.name }}</strong>
        {{ $color.hex }}
      </div>
      <div class="p-medium rounded-small cxd-{{ $color.name }}-05">${{ $color.name }}-05</div>
      {{ range (seq 10 10 90) }}
      <div class="p-medium rounded-small cxd-{{ $color.name }}-{{ . }}">${{ $color.name }}-{{ . }}</div>
      {{ end }}
      <div class="p-medium rounded-small cxd-{{ $color.name }}-95">${{ $color.name }}-95</div>
    </div>
    {{ end -}}
  {{ end -}}
  {{< /context-colors.inline >}}
</div>
</div>

## Context Colors

For contextual and theming uses, 2 variable colors added to `base colors`, which behave different in light and dark modes. The `default` color is defined for body use, based on **dark text on light background** on `light` mode, `alternate` color is defined for emphasized use like **light text on colored backgrounds** like sections of a page, sidebars, banners etc.

<div class="row g-xsmall mb-medium font-code">
  {{< context-colors.inline >}}
  {{- range (index $.Site.Data "context-colors") }}
    <div class="col-medium-4">
      <div class="p-medium m-0 bg-{{ .name }} fg-contrast rounded-small">--cx-{{ .name }}</div>
    </div>
  {{ end -}}
  {{< /context-colors.inline >}}
</div>

While `default` usually inverted on **dark** mode, `alternate` may stay same depends on design.

### Context Palettes

Then we defined and categorized the common color needs of a UI design and created context palettes by the area of use of the colors for each our context colors.

{{< partial "context-palette.html" >}}

## Body Colors

From the context colors, we copy `default` palette as our `body` palette, which can be set in options. Newly copied colors don't context prefixes and becomes like `--cx-fg-main`, which is a copy of `--cx-default-fg-main`.

Finally, from the body palette created above, we declare body variables, which are getting assigned to related properties of body and its children.

{{< partial "body-palette.html" >}}


{{< example >}}
<p class="p-medium primary-bg-main secondary-fg-main border primary-border-main rounded">
  Example element with utilities
</p>
<p class="p-medium bg-even fg-slight border cx-border-subtle rounded">
  Example element with utilities
</p>
{{< /example >}}

### Notes on Sass

Sass cannot programmatically generate variables, so we manually created variables for every tint and shade ourselves. We specify the midpoint value (e.g., `$blue-500`) and use custom color functions to tint (lighten) or shade (darken) our colors via Sass's `mix()` color function.

Using `mix()` is not the same as `lighten()` and `darken()`—the former blends the specified color with white or black, while the latter only adjusts the lightness value of each color. The result is a much more complete suite of colors, as [shown in this CodePen demo](https://codepen.io/emdeoh/pen/zYOQOPB).

Our `tint-color()` and `shade-color()` functions use `mix()` alongside our `$base-color-interval` variable, which specifies a stepped percentage value for each mixed color we produce. See the `scss/_functions.scss` and `scss/_variables.scss` files for the full source code.

## Color Sass maps

Chassis - CSS's source Sass files include three maps to help you quickly and easily loop over a list of colors and their hex values.

- `$context-colors` lists all our available base (`500`) colors
- `$system-colors` lists all contextually named theme colors (shown below)
- `$grays` lists all tints and shades of gray

Within `scss/_variables.scss`, you'll find Chassis - CSS's color variables and Sass map. Here's an example of the `$context-colors` Sass map:

{{< scss-docs name="context-colors-map" file="scss/maps/_colors.scss" >}}

Add, remove, or modify values within the map to update how they're used in many other components. Unfortunately at this time, not _every_ component utilizes this Sass map. Future updates will strive to improve upon this. Until then, plan on making use of the `${color}` variables and this Sass map.

### Example

Here's how you can use these in your Sass:

```scss
.alpha { color: $purple; }
.beta {
  color: $yellow-300;
  background-color: $indigo-900;
}
```

[Color]({{< docsref "/utilities/colors" >}}) and [background]({{< docsref "/utilities/background" >}}) utility classes are also available for setting `color` and `background-color` using the `500` color values.

## Generating utilities

{{< added-in "5.1.0" >}}

Chassis - CSS doesn't include `color` and `background-color` utilities for every color variable, but you can generate these yourself with our [utility API]({{< docsref "/utilities/api" >}}) and our extended Sass maps added in v5.1.0.

1. To start, make sure you've imported our functions, variables, mixins, and utilities.
2. Use our `map-merge-multiple()` function to quickly merge multiple Sass maps together in a new map.
3. Merge this new combined map to extend any utility with a `{color}-{level}` class name.

Here's an example that generates text color utilities (e.g., `.text-purple-500`) using the above steps.

```scss
@import "chassis/scss/functions";
@import "chassis/scss/variables";
@import "chassis/scss/variables-dark";
@import "chassis/scss/maps";
@import "chassis/scss/mixins";
@import "chassis/scss/utilities";

$all-colors: map-merge-multiple($blues, $indigos, $purples, $pinks, $reds, $oranges, $yellows, $greens, $teals, $cyans);

$utilities: map-merge(
  $utilities,
  (
    "color": map-merge(
      map-get($utilities, "color"),
      (
        values: map-merge(
          map-get(map-get($utilities, "color"), "values"),
          (
            $all-colors
          ),
        ),
      ),
    ),
  )
);

@import "chassis/scss/utilities/api";
```

This will generate new `.text-{color}-{level}` utilities for every color and level. You can do the same for any other utility and property as well.

## Color Tokens

### Context Colors

{{< scss-docs name="context-color-variables" file="scss/tokens/_colors.scss" >}}

### Primitive Palette

{{< scss-docs name="primitive-palette-variables" file="scss/tokens/_colors.scss" >}}

### Context Pallette
{{< scss-docs name="context-palette-variables" file="scss/tokens/_colors.scss" >}}
