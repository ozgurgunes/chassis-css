---
layout: docs
title: Background
description: Convey meaning through `background-color` and add decoration with gradients.
group: utilities
toc: true
---

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Background Color

Similar to the foreground classes, set the background of an element to any contextual class. Background utilities **do not set** `color` property, so in some cases you'll want to use in combination with `.fg-*` [color utilities]({{< docsref "/utilities/colors" >}}).

### Body Backgrounds

{{< example >}}
<p class="bg-main p-xsmall">.bg-main</p>
<p class="bg-even p-xsmall">.bg-even</p>
<p class="bg-evident p-xsmall">.bg-evident</p>
<p class="bg-inverse fg-inverse p-xsmall">.bg-inverse</p>
<p class="base-color contrast-color p-xsmall">.base-color</p>
<p class="bg-highlight p-xsmall">.bg-highlight</p>
{{< /example >}}

### Color Backgrounds

Base **context colors** can be used as background with `.bg-*` classes.

{{< example >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "context-colors") }}
{{ if not (or (eq .name "default") (eq .name "alternate")) }}<p class="bg-{{ .name }} {{ .name }}-contrast-color p-xsmall">.bg-{{ .name }}</p>{{ end }}
{{- end -}}
{{< /colors.inline >}}
{{< /example >}}

### Context Backgrounds

Body backgrounds are available for every **context color**.

{{< example >}}
<p class="primary-bg-main primary-fg-main p-xsmall">.primary-bg-main</p>
<p class="primary-bg-even primary-fg-main p-xsmall">.primary-bg-even</p>
<p class="primary-bg-evident primary-fg-main p-xsmall">.primary-bg-evident</p>
<p class="primary-bg-inverse primary-fg-inverse p-xsmall">.primary-bg-inverse</p>
<p class="primary-base-color primary-contrast-color p-xsmall">.primary-base-color</p>
<p class="primary-bg-highlight primary-fg-main p-xsmall">.primary-bg-highlight</p>
{{< /example >}}

### Context Scenes

{{< example >}}
<p class="scene-dim fg-inverse p-xsmall">.scene-dim</p>
<p class="scene-blur p-xsmall">.scene-blur</p>
<p class="scene-shade p-xsmall">.scene-shade</p>
<p class="scene-clear p-xsmall">.scene-clear</p>
{{< /example >}}

{{< example >}}
<p class="secondary-scene-dim p-xsmall">.secondary-scene-dim</p>
<p class="secondary-scene-blur p-xsmall">.secondary-scene-blur</p>
<p class="secondary-scene-shade p-xsmall">.secondary-scene-shade</p>
<p class="secondary-scene-clear p-xsmall">.secondary-scene-clear</p>
{{< /example >}}

## Background Gradient

By adding a `.bg-gradient` class, a linear gradient is added as background image to the backgrounds. This gradient starts with a semi-transparent white which fades out to the bottom.

Do you need a gradient in your custom CSS? Just add `background-image: var(--cx-gradient);`.

<div class="cxd-example">
{{< markdown >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<div class="bg-{{ .name }} bg-gradient p-medium mb-small fg-{{ .name }}-contrast">.bg-{{ .name }}.bg-gradient</div>
{{- end -}}
{{< /colors.inline >}}
{{< /markdown >}}
</div>

## Opacity

Using CSS variables for `background-color` utilities allows for real-time color changes without compilation and dynamic alpha transparency changes.

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

Or, choose from any of the `.bg-opacity-*` utilities:

{{< example >}}
{{< opacities.inline >}}
{{- range (index $.Site.Data "token-opacities") }}
<div class="bg-primary bg-opacity-{{ .name }} p-xsmall">This is -opacity-{{ .name }}- background</div>
{{- end -}}
{{< /opacities.inline >}}
{{< /example >}}

### Context Opacity

You can directly apply a **context opacity** utility to match `scene-*` colors:

{{< example >}}
<div class="bg-primary bg-opacity-dim p-xsmall">This is <code>scene-dim</code> opacity primary background</div>
<div class="bg-primary bg-opacity-blur p-xsmall">This is <code>scene-blur</code> opacity primary background</div>
<div class="bg-primary bg-opacity-shade p-xsmall">This is <code>scene-shade</code> opacity primary background</div>
<div class="bg-primary bg-opacity-clear p-xsmall">This is <code>scene-clear</code> opacity primary background</div>
{{< /example >}}

## CSS

In addition to the following Sass functionality, consider reading about our included [CSS custom properties]({{< docsref "/customize/css-variables" >}}) (aka CSS variables) for colors and more.

### Sass variables

Most `background-color` utilities are generated by our [context colors]({{< docsref "/customize/color" >}}), reassigned from our generic color palette variables.

{{< scss-docs name="context-color-variables" file="scss/tokens/_colors.scss" >}}
{{< scss-docs name="bg-opacity-tokens" file="scss/tokens/_index.scss" >}}
{{< scss-docs name="variable-gradient" file="scss/_variables.scss" >}}

Generated utilities.

{{< scss-docs name="utils-bg-color" file="scss/utilities/_index.scss" >}}


### Sass maps

Theme colors are then put into a Sass map so we can loop over them to generate our utilities, component modifiers, and more.

{{< scss-docs name="context-colors-map" file="scss/maps/_colors.scss" >}}
{{< scss-docs name="opacities-map" file="scss/maps/_opacities.scss" >}}

