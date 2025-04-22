---
layout: docs
title: Display property
description: Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.
group: utilities
toc: true
---

## How it works

Change the value of the [`display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) with our responsive display utility classes. We purposely support only a subset of all possible values for `display`. Classes can be combined for various effects as you need.

## Notation

Display utility classes that apply to all [breakpoints]({{< docsref "/layout/breakpoints" >}}), from `xsmall` to `xxl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0;` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

As such, the classes are named using the format:

- `.d-{value}` for `xsmall`
- `.d-{breakpoint}-{value}` for `sm`, `md`, `lg`, `xl`, and `xxl`.

Where *value* is one of:

- `none`
- `inline`
- `inline-block`
- `block`
- `grid`
- `inline-grid`
- `table`
- `table-cell`
- `table-row`
- `flex`
- `inline-flex`

The display values can be altered by changing the `display` values defined in `$utilities` and recompiling the SCSS.

The media queries affect screen widths with the given breakpoint *or larger*. For example, `.d-large-none` sets `display: none;` on `lg`, `xl`, and `xxl` screens.

## Examples

{{< example >}}
<div class="d-inline p-small text-bg-primary">d-inline</div>
<div class="d-inline p-small text-bg-dark">d-inline</div>
{{< /example >}}

{{< example >}}
<span class="d-block p-small text-bg-primary">d-block</span>
<span class="d-block p-small text-bg-dark">d-block</span>
{{< /example >}}

## Hiding elements

For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide elements responsively for each screen size.

To hide elements simply use the `.d-none` class or one of the `.d-{sm,medium,lg,xl,xxl}-none` classes for any responsive screen variation.

To show an element only on a given interval of screen sizes you can combine one `.d-*-none` class with a `.d-*-*` class, for example `.d-none .d-medium-block .d-xlarge-none .d-2xlarge-none` will hide the element for all screen sizes except on medium and large devices.

{{< cx-table >}}
| Screen size | Class |
| --- | --- |
| Hidden on all | `.d-none` |
| Hidden only on xsmall | `.d-none .d-small-block` |
| Hidden only on sm | `.d-small-none .d-medium-block` |
| Hidden only on medium | `.d-medium-none .d-large-block` |
| Hidden only on lg | `.d-large-none .d-xlarge-block` |
| Hidden only on xl | `.d-xlarge-none .d-2xlarge-block` |
| Hidden only on xxl | `.d-2xlarge-none` |
| Visible on all | `.d-block` |
| Visible only on xsmall | `.d-block .d-small-none` |
| Visible only on sm | `.d-none .d-small-block .d-medium-none` |
| Visible only on medium | `.d-none .d-medium-block .d-large-none` |
| Visible only on lg | `.d-none .d-large-block .d-xlarge-none` |
| Visible only on xl | `.d-none .d-xlarge-block .d-2xlarge-none` |
| Visible only on xxl | `.d-none .d-2xlarge-block` |
{{< /cx-table >}}

{{< example >}}
<div class="d-large-none">hide on lg and wider screens</div>
<div class="d-none d-large-block">hide on screens smaller than lg</div>
{{< /example >}}

## Display in print

Change the `display` value of elements when printing with our print display utility classes. Includes support for the same `display` values as our responsive `.d-*` utilities.

- `.d-print-none`
- `.d-print-inline`
- `.d-print-inline-block`
- `.d-print-block`
- `.d-print-grid`
- `.d-print-inline-grid`
- `.d-print-table`
- `.d-print-table-row`
- `.d-print-table-cell`
- `.d-print-flex`
- `.d-print-inline-flex`

The print and display classes can be combined.

{{< example >}}
<div class="d-print-none">Screen Only (Hide on print only)</div>
<div class="d-none d-print-block">Print Only (Hide on screen only)</div>
<div class="d-none d-large-block d-print-block">Hide up to large on screen, but always show on print</div>
{{< /example >}}

## CSS

### Sass utilities API

Display utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-display" file="scss/utilities/_positioning.scss" >}}
