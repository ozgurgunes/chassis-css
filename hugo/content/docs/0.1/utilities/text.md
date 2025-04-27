---
layout: docs
title: Text
description: Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.
group: utilities
toc: true
---

## Text alignment

Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.

{{< example >}}
<p class="text-start">Start aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-end">End aligned text on all viewport sizes.</p>

<p class="text-small-end">End aligned text on viewports sized SM (small) or wider.</p>
<p class="text-medium-end">End aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-large-end">End aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xlarge-end">End aligned text on viewports sized XL (extra large) or wider.</p>
<p class="text-2xlarge-end">End aligned text on viewports sized XXL (extra extra large) or wider.</p>
{{< /example >}}

{{< callout info >}}
Note that we don't provide utility classes for justified text. While, aesthetically, justified text might look more appealing, it does make word-spacing more random and therefore harder to read.
{{< /callout >}}

## Text wrapping and overflow

Wrap text with a `.text-wrap` class.

{{< example >}}
<div class="badge primary text-wrap" style="width: 6rem;">
  This text should wrap.
</div>
{{< /example >}}

Prevent text from wrapping with a `.text-nowrap` class.

{{< example >}}
<div class="text-nowrap border" style="width: 8rem;">
  This text should overflow the parent.
</div>
{{< /example >}}

### Word break

Prevent long strings of text from breaking your components' layout by using `.text-break` to set `word-wrap: break-word` and `word-break: break-word`. We use `word-wrap` instead of the more common `overflow-wrap` for wider browser support, and add the deprecated `word-break: break-word` to avoid issues with flex containers.

{{< example >}}
<p class="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
{{< /example >}}

{{< callout warning >}}
Note that [breaking words isn't possible in Arabic](https://rtlstyling.com/posts/rtl-styling#3.-line-break), which is the most used RTL language. Therefore `.text-break` is removed from our RTL compiled CSS.
{{< /callout >}}

## Text transform

Transform text in components with our text capitalization classes: `text-lowercase`, `text-uppercase` or `text-capitalize`.

{{< example >}}
<p class="text-lowercase">Lowercased Text</p>
<p class="text-uppercase">uppercased text</p>
<p class="text-capitalize">capitalized text</p>
<p class="text-uppercase" lang="tr">istanbul</p>
<p class="text-lowercase" lang="tr">İSTANBUL</p>
<p class="text-capitalize" lang="tr">istanbul</p>
{{< /example >}}

Unfortunately `.text-capitalize` not works for locales even with HTML lang attribute.

## Font size

Quickly change the `font-size` of text. These utilities apply both `font-size` and according `line-height` by token.

{{< example >}}
<p class="font-5xlarge">.font-5xlarge</p>
<p class="font-4xlarge">.font-4xlarge</p>
<p class="font-3xlarge">.font-3xlarge</p>
<p class="font-2xlarge">.font-2xlarge</p>
<p class="font-xlarge">.font-xlarge</p>
<p class="font-large">.font-large</p>
<p class="font-medium">.font-medium</p>
<p class="font-small">.font-small</p>
<p class="font-xsmall">.font-xsmall</p>
<p class="font-2xsmall">.font-2xsmall</p>
{{< /example >}}

The heading classes (e.g., `.h1`–`.h6`) match text to according also apply `font-weight` and matches HTML element.

{{< example >}}
<p class="h1">.h1</p>
<p class="h2">.h2</p>
<p class="h3">.h3</p>
<p class="h4">.h4</p>
<p class="h5">.h5</p>
<p class="h6">.h6</p>
{{< /example >}}

Customize your available `font-size`s by modifying the `$font-sizes` Sass map.

## Font weight and italics

Quickly change the `font-weight` between 4 values defined by tokens and use `<i>` or `<em>` for italics.

{{< example >}}
<p class="font-mass">Mass text.</p>
<p class="font-strong">Strong text.</p>
<p class="font-normal">Normal text.</p>
<p class="font-elegant">Elegant text.</p>
<p><i>Italic text</i> & <i>Emphasized text.</i></p>
{{< /example >}}

Beside token definitions, you can use standard font weights and styles by `.fst-*` and `.fw-*` utilities.

{{< example >}}
<p class="fw-bold">Bold text.</p>
<p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p class="fw-semibold">Semibold weight text.</p>
<p class="fw-medium">Medium weight text.</p>
<p class="fw-normal">Normal weight text.</p>
<p class="fw-light">Light weight text.</p>
<p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
<p class="fst-italic">Italic text.</p>
<p class="fst-normal">Text with normal font style</p>
{{< /example >}}

## Line height

Change the line height with `.lh-*` utilities.

{{< example >}}
<p class="lh-1">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-small">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-base">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-large">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
{{< /example >}}

## Monospace

Change a selection to our monospace font stack with `.font-monospace`.

{{< example >}}
<p class="font-code">This is in monospace</p>
{{< /example >}}

## Reset color

Reset a text or link's color with `.fg-reset`, so that it inherits the color from its parent.

{{< example >}}
<p class="fg-subtle">
  Secondary body text with a <a href="#" class="fg-reset">reset link</a>.
</p>
<p class="fg-subtle">
  Secondary body text with a <a href="#">normal link</a>.
</p>
{{< /example >}}

## Text decoration

Decorate text in components with text decoration classes.

{{< example >}}
<p class="text-decoration-underline">This text has a line underneath it.</p>
<p class="text-decoration-line-through">This text has a line going through it.</p>
<a href="#" class="text-decoration-none">This link has its text decoration removed</a>
{{< /example >}}

## Text Truncation

<p class='lead border-start border-xlarge cx-border-subtle ps-medium'>Truncate long strings of text with an ellipsis.</p>

For longer content, you can add a `.text-truncate` class to truncate the text with an ellipsis. **Requires `display: inline-block` or `display: block`.**

{{< example >}}
<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    This text is quite long, and will be truncated once displayed.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  This text is quite long, and will be truncated once displayed.
</span>
{{< /example >}}

## CSS

Chassis - CSS is based on design tokens, means most of css variables and properties are under direct control of design team. Check [design tokens documentation]({{< docsref "/core-concepts/design-tokens" >}}) for more information.

### Sass variables

Base font related Sass variables, keeping token references as CSS variables.

{{< scss-docs name="font-variables" file="scss/_variables.scss" >}}

### Sass maps

Most `font` utilities are generated from this maps, in combination Bootstrap's utilities API.

{{< scss-docs name="font-families-map" file="scss/maps/_fonts.scss" >}}
{{< scss-docs name="font-sizes-map" file="scss/maps/_fonts.scss" >}}
{{< scss-docs name="font-weights-map" file="scss/maps/_fonts.scss" >}}
{{< scss-docs name="line-heights-map" file="scss/maps/_fonts.scss" >}}

### Sass utilities API

Font and text utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-text" file="scss/utilities/_text.scss" >}}
