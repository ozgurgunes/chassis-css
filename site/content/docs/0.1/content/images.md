---
layout: docs
title: Images
description: Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.
group: content
toc: true
---

## Responsive images

Images in Chassis - CSS are made responsive with `.image-fluid`. This applies `max-width: 100%;` and `height: auto;` to the image so that it scales with the parent width.

{{< example >}}
{{< placeholder width="100%" height="250" class="cxd-placeholder-image-large image-fluid" text="Responsive image" >}}
{{< /example >}}

## Image thumbnails

In addition to our [border-radius utilities]({{< docsref "/utilities/borders" >}}), you can use `.image-thumbnail` to give an image a rounded 1px border appearance.

{{< example >}}
{{< placeholder width="200" height="200" class="img-thumbnail" title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" >}}
{{< /example >}}

## Aligning images

Align images with the [helper float classes]({{< docsref "/utilities/float" >}}) or [text alignment classes]({{< docsref "/utilities/text#text-alignment" >}}). `block`-level images can be centered using [the `.mx-auto` margin utility class]({{< docsref "/utilities/spacing#horizontal-centering" >}}).

{{< example >}}
{{< placeholder width="200" height="200" class="rounded float-start" >}}
{{< placeholder width="200" height="200" class="rounded float-end" >}}
{{< /example >}}


{{< example >}}
{{< placeholder width="200" height="200" class="rounded mx-auto d-block" >}}
{{< /example >}}

{{< example >}}
<div class="text-center">
  {{< placeholder width="200" height="200" class="rounded" >}}
</div>
{{< /example >}}


## Picture

If you are using the `<picture>` element to specify multiple `<source>` elements for a specific `<img>`, make sure to add the `.image-*` classes to the `<img>` and not to the `<picture>` tag.

```html
<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid image-thumbnail" alt="...">
</picture>
```

## CSS

### Sass variables

Variables are available for image thumbnails.

{{< scss-docs name="thumbnail-variables" file="scss/_variables.scss" >}}
