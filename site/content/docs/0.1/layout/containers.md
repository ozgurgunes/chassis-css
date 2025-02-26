---
layout: docs
title: Containers
description: Containers are a fundamental building block of Chassis - CSS that contain, pad, and align your content within a given device or viewport.
group: layout
toc: true
---

## How they work

Containers are the most basic layout element in Chassis - CSS and are **required when using our default grid system**. Containers are used to contain, pad, and (sometimes) center the content within them. While containers *can* be nested, most layouts do not require a nested container.

Chassis - CSS comes with three different containers:

- `.container`, which sets a `max-width` at each responsive breakpoint
- `.container-{breakpoint}`, which is `width: 100%` until the specified breakpoint
- `.container-fluid`, which is `width: 100%` at all breakpoints

The table below illustrates how each container's `max-width` compares to the original `.container` and `.container-fluid` across each breakpoint.

See them in action and compare them in our [Grid example]({{< docsref "/examples/grid#containers" >}}).

{{< cx-table "table" >}}
|  | Extra small<div class="fw-normal">&lt;576px</div> | Small<div class="fw-normal">&ge;576px</div> | Medium<div class="fw-normal">&ge;768px</div> | Large<div class="fw-normal">&ge;992px</div> | X-Large<div class="fw-normal">&ge;1200px</div> | 2X-Large<div class="fw-normal">&ge;1400px</div> |
| --- | --- | --- | --- | --- | --- | --- |
| `.container` | <span class="text-body-secondary">100%</span> | 540px | 720px | 960px | 1140px | 1320px |
| `.container-small` | <span class="text-body-secondary">100%</span> | 540px | 720px | 960px | 1140px | 1320px |
| `.container-medium` | <span class="text-body-secondary">100%</span> | <span class="text-body-secondary">100%</span> | 720px | 960px | 1140px | 1320px |
| `.container-large` | <span class="text-body-secondary">100%</span> | <span class="text-body-secondary">100%</span> | <span class="text-body-secondary">100%</span> | 960px | 1140px | 1320px |
| `.container-xlarge` | <span class="text-body-secondary">100%</span> | <span class="text-body-secondary">100%</span> | <span class="text-body-secondary">100%</span> | <span class="text-body-secondary">100%</span> | 1140px | 1320px |
| `.container-2xlarge` | <span class="text-body-secondary">100%</span> | <span class="text-body-secondary">100%</span> | <span class="text-body-secondary">100%</span> | <span class="text-body-secondary">100%</span> | <span class="text-body-secondary">100%</span> | 1320px |
| `.container-fluid` | <span class="text-body-secondary">100%</span> | <span class="text-body-secondary">100%</span> | <span class="text-body-secondary">100%</span> | <span class="text-body-secondary">100%</span> | <span class="text-body-secondary">100%</span> | <span class="text-body-secondary">100%</span> |
{{< /cx-table >}}

## Default container

Our default `.container` class is a responsive, fixed-width container, meaning its `max-width` changes at each breakpoint.

```html
<div class="container">
  <!-- Content here -->
</div>
```

## Responsive containers

Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply `max-width`s for each of the higher breakpoints. For example, `.container-small` is 100% wide to start until the `sm` breakpoint is reached, where it will scale up with `medium`, `large`, `xlarge`, and `2xlarge`.

```html
<div class="container-small">100% wide until small breakpoint</div>
<div class="container-medium">100% wide until medium breakpoint</div>
<div class="container-large">100% wide until large breakpoint</div>
<div class="container-xlarge">100% wide until extra large breakpoint</div>
<div class="container-2xlarge">100% wide until extra extra large breakpoint</div>
```

## Fluid containers

Use `.container-fluid` for a full width container, spanning the entire width of the viewport.

```html
<div class="container-fluid">
  ...
</div>
```

## CSS

### Sass variables

As shown above, Chassis - CSS generates a series of predefined container classes to help you build the layouts you desire. You may customize these predefined container classes by modifying the Sass map (found in `_variables.scss`) that powers them:

{{< scss-docs name="container-max-widths" file="scss/_variables.scss" >}}

For more information and examples on how to modify our Sass maps and variables, please refer to [the Sass section of the Grid documentation]({{< docsref "/layout/grid#css" >}}).

### Sass mixins

In addition to customizing the Sass, you can also create your own containers with our Sass mixin.

```scss
// Source mixin
@mixin make-container($padding-x: $container-padding-x) {
  width: 100%;
  padding-right: $padding-x;
  padding-left: $padding-x;
  margin-right: auto;
  margin-left: auto;
}

// Usage
.custom-container {
  @include make-container();
}
```
