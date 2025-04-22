---
layout: docs
title: Close Button
description: A generic close button for dismissing content like modals and alerts.
group: components
toc: true
---

## Example

We suggest to use with an icon inside it to dismiss or close a component with `.close-button`. **Be sure to include text for screen readers**, as we've done with `aria-label`.

{{< example >}}
<button type="button" class="close-button" aria-label="Close">
  <svg><use xlink:href="#times-alt"/></svg>
</button>
{{< /example >}}

If there is not any svg in close button, system displays `content: $close-button-svg;` automatically.

{{< example >}}
<button type="button" class="close-button" aria-label="Close"></button>
{{< /example >}}

## Disabled state

Disabled close buttons change their `opacity`. We've also applied `pointer-events: none` and `user-select: none` to preventing hover and active states from triggering.

{{< example >}}
<button type="button" class="close-button" disabled aria-label="Close"></button>
{{< /example >}}

## Sizes

{{< example >}}
<button type="button" class="close-button small" aria-label="Close"></button>
<button type="button" class="close-button" aria-label="Close"></button>
<button type="button" class="close-button large" aria-label="Close"></button>
<button type="button" class="close-button xlarge" aria-label="Close"></button>
{{< /example >}}


## Positioning

Most components will automatically position close-button themselves. Use position utilities for exceptions.

{{< example >}}
<div class="notification primary">
  <button type="button" class="close-button" data-cx-dismiss="notification" aria-label="Close"></button>
  <p class="message">This is a notification!</p>
</div>
<div class="context primary border rounded p-medium position-relative">
  <button type="button" class="close-button position-absolute end-0 top-50 translate-middle-y" data-cx-dismiss="context" aria-label="Close"></button>
  This is a contextual div.
</div>
{{< /example >}}

## CSS

{{< partial "generic/docs-css" >}}

### Variables

{{< partial "generic/css-variables" >}}

### Sass Variables

{{< partial "generic/sass-variables" >}}

{{< scss-docs name="close-button-variables" file="scss/_variables.scss" >}}
