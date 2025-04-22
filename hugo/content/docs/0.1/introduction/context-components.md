---
layout: docs
title: Context Class
description: Chassis - CSS components [re-declare](https://www.w3.org/TR/css-variables-1/#example-c3e4e8d9) body variables for their properties to allow complete palette change in context variants with a smaller file size.
group: introduction
toc: true
---

## Component Placeholder Selector

As you noticed, badge & notifications components are also extending the `%component` placeholder selector and that selector also includes some mixins which assigns components spacing and typography css variables to appropriate properties.

{{< scss-docs name="component-placeholder-selector" file="scss/placeholders/_component.scss" >}}

## Custom Components

### Example 1

Lets say an `.example` component use a custom highlight color and falls back to context colors in failures.

{{< scss-docs name="example-1" file="site/assets/scss/_context.scss" >}}

By doing this, the color can be changed easily if we want to give more emphasis somewhere and also it fallbacks to `--cx-fg-highlight` and adapts to context in any failure.

{{< example class="font-code" >}}
<div>
  <p class="example p-small">--example-fg</p>
</div>
<div style="--example-fg: var(--cx-fg-main);">
  <p class="example p-small">--cx-fg-main</p>
</div>
<div style="--example-fg: var(--no-color);">
  <p class="example p-small">--cx-fg-highlight</p>
</div>
<div class="context primary">
  <p class="example p-small">--example-fg</p>
</div>
<div class="context primary" style="--example-fg: var(--no-color);">
  <p class="example p-small">--cx-fg-highlight</p>
</div>
<div class="context primary">
  <p class="p-small">--cx-fg-main</p>
</div>
{{< /example >}}

### Example 2

Lets make `.example-2` a context component using --cx-fg-subtle for its `color` property.

While doing this we're also reserving for `--example-fg-color` if we plan to manipulate it later.

{{< scss-docs name="example-2" file="site/assets/scss/_context.scss" >}}

The `%solid-context` selector overrides the `--cx-fg-color` variable with **new** `--cx-fg-main`, we're intercepting it to set `--cx-fg-subtle` as `--cx-fg-color`.

{{< example class="font-code" >}}
<p class="example-2 p-small">--cx-fg-subtle</p>
<p class="example-2 primary p-small">--cx-fg-subtle</p>
<p class="example-2 primary solid p-small">--cx-fg-subtle</p>
{{< /example >}}

The `%solid-context` selector overrides the component colors.

### Example 3

{{< scss-docs name="example-3" file="site/assets/scss/_context.scss" >}}

{{< example class="font-code" >}}
<p class="example-3 p-small">--cx-fg-main</p>
<p class="example-3 primary p-small">--cx-fg-main</p>
<p class="example-3 primary solid p-small">--cx-fg-main</p>
{{< /example >}}
