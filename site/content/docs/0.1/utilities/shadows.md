---
layout: docs
title: Shadows
description: Add or remove shadows to elements with box-shadow utilities.
group: utilities
toc: true
---

## Examples

While shadows on components are disabled by default in Chassis - CSS and can be enabled via `$enable-component-shadows`, you can also quickly add or remove a shadow with our `box-shadow` utility classes. Includes support for `.shadow-none` and three default sizes (which have associated variables to match).

{{< example class="overflow-hidden" >}}
<div class="shadow-none rounded p-medium mb-xlarge">No shadow</div>
<div class="shadow-small rounded p-medium mb-xlarge">Small shadow</div>
<div class="shadow rounded p-medium mb-xlarge">Medium shadow</div>
<div class="shadow-large rounded p-medium mb-xlarge">Large shadow</div>
<div class="shadow-inset bg-evident rounded p-medium">Inset shadow</div>
{{< /example >}}

### Elevations

Elevations from design tokens can be used with their token names.

<div class="cxd-example">
{{< values.inline >}}
{{- range $index, $element := (index $.Site.Data "color-values") }}
<p class="shadow-{{ $element.name }} p-medium rounded" style="margin-bottom: calc(1rem + (.25rem * {{ $index }})) ">This is <code>$cx-shadow-elevation-default-{{ $element.name }}</code> shadow.</p>
{{- end -}}
{{< /values.inline >}}
</div>

{{< highlight "html" >}}
{{< values.inline >}}
{{- range $index, $element := (index $.Site.Data "color-values") }}
<p class="shadow-{{ $element.name }}">...</p>
{{- end -}}
{{< /values.inline >}}
{{< /highlight >}}

## Color Shadows

Using CSS variables for `shadow` utilities allows for real-time color changes without compilation and dynamic alpha transparency changes.

### How it works

Consider our `.shadow-50` utility.

```css
.shadow-50 {
  --cx-shadow-color: transparent;
  box-shadow: 0rem 0.5rem 2rem -0.5rem rgba(0, 0, 0, 0.1), 0rem 0.15rem 1rem -0.15rem var(--cx-shadow-color, transparent), 0rem 0.15rem 1rem -0.15rem rgba(0, 0, 0, 0.1) !important;
}
.shadow-primary {
  --cx-shadow-color: rgba(var(--cx-primary-rgb), 0.1);
}
```

During creation of our shadow utilities, a `--cx-shadow-color` variable with **transparent** value also defined in the class. Our `create-color-shadow` function creates another shadow value according to design token, with `var(--cx-shadow-color, transparent)` color. Then `shadow-primary` class sets the `--cx-shadow-color` variable with a special color created by `--cx-primary-rgb` and `$shadow-color-opacity` SaSS variable. Now the transparent shadow gets activated and adds a slight primary color to the shadow, similar in the design tokens.

{{< callout warning >}}
While this way is not yet in direct control of designer but helps to avoid increasing file size by creating every color shadows including their hover states.
{{< /callout >}}

### Examples

It is possible to apply context color to shadows by adding `shadow-*` classes.

<div class="cxd-example">
{{< values.inline >}}
{{- range $index, $element := (index $.Site.Data "color-values") }}
<p class="shadow-primary shadow-{{ $element.name }} primary-fg-main p-medium rounded" style="margin-bottom: calc(1rem + (.25rem * {{ $index }})) ">This is <code>$cx-shadow-elevation-primary-{{ $element.name }}</code> shadow.</p>
{{- end -}}
{{< /values.inline >}}
</div>

{{< highlight "html" >}}
{{< values.inline >}}
{{- range $index, $element := (index $.Site.Data "color-values") }}
<p class="shadow-{{ $element.name }} shadow-primary">...</p>
{{- end -}}
{{< /values.inline >}}
{{< /highlight >}}

## Hover shadows

Add `-hover` at the end of the class name.

{{< example >}}
<p class="shadow-30-hover p-medium rounded">This is a hover shadow.</p>
<p class="shadow-primary-hover shadow-50 p-medium rounded">This is a shadow with primary hover.</p>
{{< /example >}}


## CSS

Elevation shadows are created by design tokens using a special function. Instead of creating all color variants of shadow levels, function creates a transparent shadow on default shadow class and the shadow color utility changes that color, similar to [opacities]({{< docsref "/utilities/colors#opacity" >}}).

### Sass variables

{{< scss-docs name="base-shadow-variables" file="scss/_variables.scss" >}}
{{< scss-docs name="default-shadow-tokens" file="scss/tokens/_shadows.scss" >}}

### Sass maps

{{< scss-docs name="base-shadows-map" file="scss/maps/_shadows.scss" >}}
{{< scss-docs name="default-shadows-map" file="scss/maps/_shadows.scss" >}}

### Sass utilities API

Shadow utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-shadow" file="scss/utilities/_index.scss" >}}
{{< scss-docs name="utils-elevation-shadow" file="scss/utilities/_index.scss" >}}
