---
layout: docs
title: Color System
description: The Chassis - CSS provides a comprehensive approach to managing colors in UI design. Colors are categorized and defined based on area of use, and contextual palettes are created to ensure consistency and clarity across the user interface.
group: introduction
toc: true
---

## Base Colors

Seven colors are chosen based on brand identity and UI context, with primitive color palettes created for each.

<div class="overflow-scroll text-nowrap mb-medium">
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

These colors are not utilized by classes for any property and are available as CSS variables to use in components if needed.

## Context Colors

For basic use, two variable colors —in addition to black and white— have been added, which behave differently in light and dark modes.

These **11** colors are named as `context colors`.

<div class="row g-xsmall mb-medium font-code">
  {{< context-colors.inline >}}
  {{- range (index $.Site.Data "context-colors") }}
    <div class="col-medium-4">
      <div class="p-medium m-0 bg-{{ .name }} fg-contrast rounded-small">--cx-{{ .name }}</div>
    </div>
  {{ end -}}
  {{< /context-colors.inline >}}
</div>

The `default` is the body color used for dark text on light background in light mode. The `alternate` is for emphasized content on the page, used for light text on colored backgrounds such as sections of a page, sidebars, banners, etc.

While `default` usually inverts in dark mode, `alternate` may stay the same depending on the design.

### Context Palettes

Common color needs of UI design have been defined, categorized, and named by their area of use. Palettes for each `context color` have been created by referencing primitive color palettes.

{{< partial "context-palette.html" >}}

These colors are created using `base color` and `opacity` references. This is done by design tokens, but here is an example Sass version to make it clear.

{{< highlight "scss" >}}
// Light theme
$default-fg-main:      $black;
$default-fg-subtle:    rgba($default-fg-main-rgb, $opacity-fg-subtle);
$default-fg-slight:    rgba($default-fg-main-rgb, $opacity-fg-slight);
$default-bg-main:      $white;
$default-bg-even:      $neutral-05;
$default-bg-evident:   $neutral-10;
{{< /highlight >}}

### Body Colors

From the context colors, the `default` palette is copied as the `body` palette, which can be set in options. Newly copied colors don't get a context prefix and become like `--cx-fg-main`, which is a copy of `--cx-default-fg-main`.

The body palette created above is used to declare body variables, which are then assigned to the related properties of the body and its children.

{{< partial "body-palette.html" >}}

Switching between these palettes in contextual components is done by changing CSS variables.

## Examples

The `context` class changes the palette first then re-assigns the body colors with the new context.

### Context Class

Switching between contexts is like moving horizontally on the context palettes.

{{< example >}}
{{< context-colors.inline >}}
<p class="d-flex align-middle p-small gap-small">
  <svg class="icon" aria-hidden="true"><use xlink:href="#info-circle-regular"></svg>
  <span>This is body context <a href="#">with link</a>, same as default.</span>
</p>
{{- range (index $.Site.Data "context-colors") }}
<p class="context {{ .name }} d-flex align-middle p-small gap-small">
  <svg class="icon" aria-hidden="true"><use xlink:href="#info-circle-regular"></svg>
  <span>This is {{ .name }} context <a href="#">with link</a>.</span>
</p>
{{- end }}
{{< /context-colors.inline >}}
{{< /example >}}

### Context Style

It is also possible to easily switch between component styles by changing body colors, like moving vertically on the `context` palette.

{{< example >}}
<p class="context primary d-flex align-middle p-small gap-small">
  <svg class="icon" aria-hidden="true"><use xlink:href="#info-circle-regular"></svg>
  <span>This is a basic context component <a href="#">with link</a>.</span>
</p>
<p class="context primary solid d-flex align-middle p-small gap-small">
  <svg class="icon" aria-hidden="true"><use xlink:href="#info-circle-regular"></svg>
  <span>This is a solid context component <a href="#">with link</a>.</span>
</p>
<p class="context primary smooth d-flex align-middle p-small gap-small">
  <svg class="icon" aria-hidden="true"><use xlink:href="#info-circle-regular"></svg>
  <span>This is a smooth context component <a href="#">with link</a>.</span>
</p>
<p class="context primary outline d-flex align-middle p-small gap-small">
  <svg class="icon" aria-hidden="true"><use xlink:href="#info-circle-regular"></svg>
  <span>This is an outline context component <a href="#">with link</a>.</span>
</p>
{{< /example >}}

## Summary

The Chassis - CSS's color system provides a structured approach to managing colors in a UI design. By defining base colors and context colors, and creating context palettes, it ensures consistency and flexibility. For more details, check out the [documentation]({{< docsref "/customize/color" >}}) pages for customizing colors or visit the [color]({{< docsref "/utilities/colors" >}}) and [background]({{< docsref "/utilities/background" >}}) utility pages for more examples. Additionally, see the [Context Class]({{< docsref "/introduction/context-class" >}}) page for more explanation, code examples, and tips for creating your components.


##Key Points:

### Base Colors:

- Seven colors are selected based on brand and UI contexts.
- Primitive color palettes are created for each base color.
- These colors are available as CSS variables for use in components.

### Context Colors:

- Two additional variable colors (`default` and `alternate`) are added for basic use, behaving differently - in light and dark modes.
- Eleven context colors are defined, named by their area of use.

### Context Palettes:

- Common UI color needs are categorized and named.
- Palettes for each context color are created by referencing primitive color palettes.
- Colors are created using base color and opacity references.

### Body Colors:

- The `default` palette is copied as the `body` palette, which can be set in options.
- Body variables are declared from the body palette and assigned to related properties of the body and its children.

### Switching Contexts:

- Switching between context palettes is done by changing CSS variables.
- The `context` class changes the palette and re-assigns body colors with the new context.
- Component styles can be switched by changing body colors.

### Examples:

- Examples are provided to demonstrate switching between contexts and component styles.
- The color system ensures a structured and flexible approach to managing colors, promoting consistency across the UI design. For more details, refer to the documentation pages for customizing colors and utility examples.
