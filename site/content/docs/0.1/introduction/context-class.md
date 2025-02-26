---
layout: docs
title: Context Class
description: Chassis - CSS components [re-declare](https://www.w3.org/TR/css-variables-1/#example-c3e4e8d9) body variables for their properties to allow complete palette change in context variants with a smaller file size.
group: introduction
toc: true
---

## How it works?

Chassis design system does not write properties directly for every classes. Instead of that, it uses <a href="https://www.w3.org/TR/css-variables-1/#example-c3e4e8d9" target="_blank">repeating custom css properties</a> and extends placeholder classes to share same property definitions but values.

{{< callout info >}}
**Heads up!** This copy is a work in progress.
{{< /callout >}}

### Placeholder Selector

The `%context` placeholder selector uses [context mixin](#context-mixin) in a loop to create palette classes for each context color. These classes does not assign any property, only changes the context palette color variables

{{< scss-docs name="context-placeholder-selector" file="scss/placeholders/_context.scss" >}}

### Style Placeholders

These classes set [body colors]({{< docsref "introduction/color-system#body-colors" >}}) with by new [context palette]({{< docsref "introduction/color-system#context-palettes" >}}) according to desired style. They also may change palette colors and assign properties to match style needs. Below is the basic style, which is also body style,

{{< scss-docs name="basic-style-placeholder-selector" file="scss/placeholders/_context.scss" >}}

You can see all style placeholders under [Sass mixins](#sass-mixins).

### Component Class

The `.context` class extends above placeholder selectors to create classes for each context color & style combinations.

{{< scss-docs name="context-class" file="scss/_context.scss" >}}

And now we've have all context & style variants of our components.

{{< example >}}
<div class="context primary p-small m-small">This is a primary basic context block</div>
<div class="context primary solid p-small m-small">This is a primary solid context block</div>
<div class="context primary smooth p-small m-small">This is a primary smooth context block</div>
<div class="context primary outline border p-small m-small">This is a primary outline context block</div>
{{< /example >}}

The difference between contexts...

{{< example class="bg-even" >}}
<div class="context default border p-small m-small">This is a default basic context block</div>
<div class="context alternate border p-small m-small">This is a alternate basic context block</div>
<div class="context neutral border p-small m-small">This is a neutral basic context block</div>
<div class="context black border p-small m-small">This is a black basic context block</div>
<div class="context white border p-small m-small">This is a white basic context block</div>
{{< /example >}}


## Sass Mixins

Context placeholder selector.

{{< scss-docs name="context-mixin" file="scss/mixins/_context.scss" >}}

### Context mixin.

{{< scss-docs name="root-body-mixins" file="scss/_root.scss" >}}

Style placeholder selectors.

{{< scss-docs name="basic-style-placeholder-selector" file="scss/placeholders/_context.scss" >}}
{{< scss-docs name="solid-style-placeholder-selector" file="scss/placeholders/_context.scss" >}}
{{< scss-docs name="smooth-style-placeholder-selector" file="scss/placeholders/_context.scss" >}}
{{< scss-docs name="outline-style-placeholder-selector" file="scss/placeholders/_context.scss" >}}

