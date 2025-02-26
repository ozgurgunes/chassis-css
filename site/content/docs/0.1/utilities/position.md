---
layout: docs
title: Position
description: Use these shorthand utilities for quickly configuring the position of an element.
group: utilities
toc: true
---

## Helpers

Use these helpers for quickly configuring the position of an element.

### Fixed top

Position an element at the top of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.

```html
<div class="fixed-top">...</div>
```

### Fixed bottom

Position an element at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.

```html
<div class="fixed-bottom">...</div>
```

### Sticky top

Position an element at the top of the viewport, from edge to edge, but only after you scroll past it.

```html
<div class="sticky-top">...</div>
```

### Responsive sticky top

Responsive variations also exist for `.sticky-top` utility.

```html
<div class="sticky-small-top">Stick to the top on viewports sized SM (small) or wider</div>
<div class="sticky-medium-top">Stick to the top on viewports sized MD (medium) or wider</div>
<div class="sticky-large-top">Stick to the top on viewports sized LG (large) or wider</div>
<div class="sticky-xlarge-top">Stick to the top on viewports sized XL (extra-large) or wider</div>
<div class="sticky-2xlarge-top">Stick to the top on viewports sized XXL (extra-extra-large) or wider</div>
```

### Sticky bottom

Position an element at the bottom of the viewport, from edge to edge, but only after you scroll past it.

```html
<div class="sticky-bottom">...</div>
```

### Responsive sticky bottom

Responsive variations also exist for `.sticky-bottom` utility.

```html
<div class="sticky-small-bottom">Stick to the bottom on viewports sized SM (small) or wider</div>
<div class="sticky-medium-bottom">Stick to the bottom on viewports sized MD (medium) or wider</div>
<div class="sticky-large-bottom">Stick to the bottom on viewports sized LG (large) or wider</div>
<div class="sticky-xlarge-bottom">Stick to the bottom on viewports sized XL (extra-large) or wider</div>
<div class="sticky-2xlarge-bottom">Stick to the bottom on viewports sized XXL (extra-extra-large) or wider</div>
```

## Position values

Quick positioning classes are available, though they are not responsive.

```html
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
```

## Arrange elements

Arrange elements easily with the edge positioning utilities. The format is `{property}-{position}`.

Where *property* is one of:

- `top` - for the vertical `top` position
- `start` - for the horizontal `left` position (in LTR)
- `bottom` - for the vertical `bottom` position
- `end` - for the horizontal `right` position (in LTR)

Where *position* is one of:

- `0` - for `0` edge position
- `50` - for `50%` edge position
- `100` - for `100%` edge position

(You can add more position values by adding entries to the `$position-values` Sass map variable.)

{{< example class="cxd-example-position-utils" >}}
<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-50"></div>
  <div class="position-absolute bottom-50 end-50"></div>
  <div class="position-absolute bottom-0 start-0"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div>
{{< /example >}}

## Center elements

In addition, you can also center the elements with the transform utility class `.translate-middle`.

This class applies the transformations `translateX(-50%)` and `translateY(-50%)` to the element which, in combination with the edge positioning utilities, allows you to absolute center an element.

{{< example class="cxd-example-position-utils" >}}
<div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle"></div>
  <div class="position-absolute top-0 start-50 translate-middle"></div>
  <div class="position-absolute top-0 start-100 translate-middle"></div>
  <div class="position-absolute top-50 start-0 translate-middle"></div>
  <div class="position-absolute top-50 start-50 translate-middle"></div>
  <div class="position-absolute top-50 start-100 translate-middle"></div>
  <div class="position-absolute top-xsmall00 start-0 translate-middle"></div>
  <div class="position-absolute top-xsmall00 start-50 translate-middle"></div>
  <div class="position-absolute top-xsmall00 start-100 translate-middle"></div>
</div>
{{< /example >}}

By adding `.translate-middle-x` or `.translate-middle-y` classes, elements can be positioned only in horizontal or vertical direction.

{{< example class="cxd-example-position-utils" >}}
<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 start-50 translate-middle-x"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-0 translate-middle-y"></div>
  <div class="position-absolute top-50 start-50 translate-middle"></div>
  <div class="position-absolute top-50 end-0 translate-middle-y"></div>
  <div class="position-absolute bottom-0 start-0"></div>
  <div class="position-absolute bottom-0 start-50 translate-middle-x"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div>
{{< /example >}}

## Examples

Here are some real life examples of these classes:

{{< example class="cxd-example-position-examples d-flex justify-content-around align-items-center" >}}
<button type="button" class="button primary position-relative">
  Mails <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">+99 <span class="visually-hidden">unread messages</span></span>
</button>

<div class="position-relative py-small px-large text-bg-secondary border border-secondary rounded-pill">
  Marker <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-xsmall00 start-50 translate-middle mt-xsmall" fill="var(--cx-secondary)" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
</div>

<button type="button" class="button primary position-relative">
  Alerts <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-small"><span class="visually-hidden">unread messages</span></span>
</button>
{{< /example >}}

You can use these classes with existing components to create new ones. Remember that you can extend its functionality by adding entries to the `$position-values` variable.

{{< example class="cxd-example-position-examples" >}}
<div class="position-relative m-large">
  <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 1px;">
    <div class="progress-bar" style="width: 50%"></div>
  </div>
  <button type="button" class="position-absolute top-0 start-0 translate-middle button small primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
  <button type="button" class="position-absolute top-0 start-50 translate-middle button small primary rounded-pill" style="width: 2rem; height:2rem;">2</button>
  <button type="button" class="position-absolute top-0 start-100 translate-middle button small secondary rounded-pill" style="width: 2rem; height:2rem;">3</button>
</div>
{{< /example >}}

## CSS

### Sass maps

Default position utility values are declared in a Sass map, then used to generate our utilities.

{{< scss-docs name="position-map" file="scss/_variables.scss" >}}

### Sass utilities API

Position utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-position" file="scss/utilities/_positioning.scss" >}}
