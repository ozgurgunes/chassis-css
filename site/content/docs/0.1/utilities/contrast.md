---
layout: docs
title: Contrast
description: Set color or background to contrast color or an accessible color by using SaSS function.
group: utilities
toc: true
added:
  version: "0.1"
---

## Context Colors

Use `.fg-*` and `.bg-*` classes in combination with `.fg-contrast` and `.bg-contrast` classes to set opposite property to contrast color defined by design tokens.

### Contrast Text

Use `fg-contrast` with `bg-*` classes.

{{< example >}}
{{< text-bg.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<p class="bg-{{ .name }} fg-contrast p-small">{{ .name | title }} background with contrast color text.</p>
{{- end -}}
{{< /text-bg.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

### Contrast Background

Use `bg-contrast` with `fg-*` classes.

{{< example >}}
{{< text-bg.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<p class="fg-{{ .name }} bg-contrast p-small">{{ .name | title }} text with contrast color background.</p>
{{- end -}}
{{< /text-bg.inline >}}
{{< /example >}}

## Accessible Colors

With `.fg-a11y` and `.bg-a11y` classes to automatically determine the accessible `fg-color` or `bg-color` for particular context color using Bootstrap's Sass `color-contrast()` function.

{{< callout warning >}}
**Heads up!** There's currently no support for a CSS-native `color-contrast` function, so we use Bootstrap's via Sass. This means that customizing context colors via CSS variables may cause color contrast issues with these utilities.
{{< /callout >}}

### Accessible Text

Use `fg-a11y` to set accessible `fg-color` for `bg-*` background colors.

{{< example >}}
{{< text-bg.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<p class="bg-{{ .name }} fg-a11y p-small">{{ .name | title }} background with accessible color text</p>
{{- end -}}
{{< /text-bg.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

### Accessible Background

Use `bg-a11y` to set accessible `bg-color` for `fg-*` colors.

{{< example >}}
{{< text-bg.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<p class="fg-{{ .name }} bg-a11y p-medium">{{ .name | title }} text with accessible color background.</p>
{{- end -}}
{{< /text-bg.inline >}}
{{< /example >}}

## With components

Use them in place of combined `.text-*` and `.bg-*` classes, like on [badges]({{< docsref "/components/badge#background-colors" >}}):

{{< example >}}
<span class="badge primary">Primary</span>
<span class="badge fg-contrast bg-primary">Primary</span>
<span class="badge success">Info</span>
<span class="badge fg-contrast bg-success">Info</span>
{{< /example >}}

Or on [cards]({{< docsref "/components/card#background-and-color" >}}):

{{< example >}}
<div class="card fg-contrast bg-primary mb-medium" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-content">
    <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card fg-contrast bg-info" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-content">
    <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
{{< /example >}}
