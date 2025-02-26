---
layout: docs
title: Borders
description: Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
group: utilities
toc: true
---

## Border

Use border utilities to add or remove an element's borders. Choose from all borders or one at a time.

### Additive

Add borders to custom elements:

{{< example class="cxd-example-border-utils" >}}
<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>
{{< /example >}}

### Subtractive

Or remove borders:

{{< example class="cxd-example-border-utils" >}}
<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-end-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-start-0"></span>
{{< /example >}}

## Color

{{< callout info >}}
Border utilities like `.border-*` that generated from our original `$system-colors` Sass map don't yet respond to color modes, however, any `.border-*-subtle` utility will. This will be resolved in v6.
{{< /callout >}}

Change the border color using utilities built on our theme colors.

{{< example class="cxd-example-border-utils" >}}
{{< border.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<span class="border {{ .name }}-border-main"></span>
<span class="border {{ .name }}-border-subtle"></span>
{{- end -}}
{{< /border.inline >}}
{{< /example >}}

Or modify the default `border-color` of a component:

{{< example >}}
<div class="mb-large">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control border-success" id="exampleFormControlInput1" placeholder="name@example.com">
</div>

<div class="fg-danger border-bottom border-danger h4 pb-xsmall mb-large ">
  Dangerous heading
</div>

<div class="info-bg-even border border-info border-start-0 rounded-end p-medium">
  Changing border color and width
</div>
{{< /example >}}

## Opacity

Chassis - CSS `border-{color}` utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.

### How it works

Consider our default `.border-success` utility.

```css
.border-success {
  border-color: rgba(var(--cx-success-rgb), var(--cx-border-opacity, 1)) !important;
}
.border-opacity-50 {
  --cx-border-opacity: var(--cx-opacity-50);
}
```

We use an RGB version of our `--cx-primary` (with the value of `255, 91, 20`) CSS variable and attached a second CSS variable, `--cx-border-opacity`, for the alpha transparency (with a default value `1`). That means anytime you use `.border-primary` now, your computed `border-color` value is `rgba(255, 91, 20, 1)`. Then, the opacity class overrides default opacity value of color by adding `--cx-border-opacity` variable to the element.

### Example

To change that opacity, override `--cx-border-opacity` via custom styles or inline styles.

{{< example >}}
<div class="border border-primary p-xsmall mb-small">This is default primary border</div>
<div class="border border-primary p-xsmall" style="--cx-border-opacity: .5;">This is 50% opacity primary border</div>
{{< /example >}}

Or, choose from any of the `.border-opacity` utilities:

{{< example >}}
{{< opacities.inline >}}
{{- range (index $.Site.Data "basic-opacities") }}
<p class="border border-primary border-opacity-{{ .name }} p-xsmall">This is -opacity-{{ .name }}- primary border</p>
{{- end -}}
{{< /opacities.inline >}}
{{< /example >}}

### Context Border

You can directly apply a **context opacity** utility to match `obj-*` colors:

{{< example >}}
<div class="border border-primary p-xsmall mb-small">This is <code>base-color</code> primary border</div>
<div class="border border-primary border-opacity-main p-xsmall mb-small">This is <code>cx-border-main</code> opacity primary border</div>
<div class="border border-primary border-opacity-subtle p-xsmall mb-small">This is <code>cx-border-subtle</code> opacity primary border</div>
{{< /example >}}

## Width

{{< example class="cxd-example-border-utils" >}}
<span class="border border-small"></span>
<span class="border border-medium"></span>
<span class="border border-large"></span>
<span class="border border-xlarge"></span>
<span class="border border-2xlarge"></span>
{{< /example >}}

## Radius

Add classes to an element to easily round its corners.

{{< example class="cxd-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded" title="Example rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-top" title="Example top rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-end" title="Example right rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-bottom" title="Example bottom rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-start" title="Example left rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-circle" title="Completely round image" >}}
{{< placeholder width="150" height="75" class="rounded-pill" title="Rounded pill image" >}}
{{< /example >}}

### Sizes

Use the scaling classes for larger or smaller rounded corners. Sizes range from `0` to `5`, and can be configured by modifying the utilities API.

{{< example class="cxd-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded-xsmall" title="Example non-rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-small" title="Example small rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-medium" title="Example default rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-large" title="Example large rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-xlarge" title="Example larger rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-2xlarge" title="Example extra large rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-3xlarge" title="Example extra large rounded image" >}}
{{< /example >}}

{{< example class="cxd-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded-bottom-1" title="Example small rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-start-2" title="Example default left rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-end-circle" title="Example right completely round image" >}}
{{< placeholder width="75" height="75" class="rounded-start-pill" title="Example left rounded pill image" >}}
{{< placeholder width="75" height="75" class="rounded-5 rounded-top-0" title="Example extra large bottom rounded image" >}}
{{< /example >}}

## CSS

### Variables

{{< scss-docs name="root-border-var" file="scss/_root.scss" >}}

### Sass variables

{{< scss-docs name="border-variables" file="scss/_variables.scss" >}}
{{< scss-docs name="border-width-tokens" file="scss/tokens/_index.scss" >}}
{{< scss-docs name="border-radius-tokens" file="scss/tokens/_index.scss" >}}

### Sass maps

{{< scss-docs name="border-widths-map" file="scss/maps/_index.scss" >}}
{{< scss-docs name="border-radiuses-map" file="scss/maps/_index.scss" >}}

Color mode adaptive border colors are also available as a Sass map:

### Sass mixins

{{< scss-docs name="border-radius-mixins" file="scss/mixins/_border-radius.scss" >}}

### Sass utilities API

Border utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-borders" file="scss/utilities/_border.scss" >}}

{{< scss-docs name="utils-border-radius" file="scss/utilities/_border.scss" >}}
