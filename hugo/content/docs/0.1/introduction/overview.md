---
layout: docs
title: A Complete Design Ecosystem
description: Chassis - CSS consists of a complete set including Figma components, design tokens and their transformers for multiple products on multiple platforms under the name of multiple brands.
group: introduction
aliases:
  - "/docs/0.1/introduction/"
  - "/docs/introduction/"
  - "/introduction/"
---

{{< callout info >}}
**Heads up!** This copy is a work in progress.
{{< /callout >}}

Because of rapid process of product design, it is very easy to get lost in color and component variants, especially in large scale environments.

Beside the hand-off process and production problems, it gets hard to keep consistency even in Figma design files for multi-product environments.

With Chassis - CSS, centralize all design decisions by using design tokens and push to Figma prototypes and code repositories both for multiple products.

With fully tokenized Figma component library, designers are able to create rapid prototypes under different brands and push new design decisions directly to code repositories.

All settings from sizing and spacing values to icon colors, border radiuses, font sizes, detailed typography settings even including letter-spacing values, are under control of designers by design tokens and can be quickly applied to Figma prototypes or next release of products.

<img class="d-block image-fluid col-8 mx-auto rounded" src="/docs/{{< param docs_version >}}/assets/img/ecosystem.svg" alt="Figma text layer properties">

## Let's Start

{{< callout info >}}
**Heads up!** This copy is a work in progress.
{{< /callout >}}

### Figma to code

Let apply these Figma font specs with our text utilities.

<a href="#imageModal" data-cx-toggle="modal"
  data-image-src="/assets/docs-figma-font-specs.png"
  data-image-srcset="/assets/docs-figma-font-specs.png.png, /assets/docs-figma-font-specs@2x.png 2x"
  data-image-alt="Figma text layer properties">
  <img class="d-block mb-medium image-fluid rounded" srcset="/assets/docs-figma-font-specs.png.png, /assets/docs-figma-font-specs@2x.png 2x" src="/assets/docs-figma-font-specs.png" alt="Figma text layer properties"></a>

These Figma properties can be easily applied as...

{{< example >}}
<p>font/text/medium/normal</p>
<p class="font-large font-mass">font/text/large/mass</p>
<p class="font-display font-strong">font/display/medium/strong</p>
{{< /example >}}

Similar for other elements.

<a href="#imageModal" data-cx-toggle="modal"
  data-image-src="/assets/docs-figma-frame-specs.png"
  data-image-srcset="/assets/docs-figma-frame-specs.png.png, /assets/docs-figma-frame-specs@2x.png 2x"
  data-image-alt="Figma frame layer properties">
  <img id="image" class="d-block mb-medium image-fluid rounded" srcset="/assets/docs-figma-frame-specs.png.png, /assets/docs-figma-frame-specs@2x.png 2x" src="/assets/docs-figma-frame-specs.png" alt="Figma frame layer properties"></a>

Lets apply these from left to right order...

{{< example >}}
<div style="width: 128px; height: 128px;"
  class="rounded-xlarge border border-2xlarge
    py-small px-medium gap-xsmall
    default-bg-main primary-border-subtle
    shadow-40 shadow-primary">
  I'm look like in Figma!
</div>
{{< /example >}}


It's that easy. Now all these values are under designers control and can be changed by them without any developer touch for every individual brand, product or even a CSS theme.

## Learn more.

Chassis - CSS brings a brand new approach to UI colors. See more about our [**Color System**]({{< docsref "/introduction/color-system" >}})

### Connect Figma with Chassis - CSS

Chassis - CSS's fully tokenized Figma component library allows designer to see design decision changes for multiple apps and brands on Figma and inject into developers code directly as transformed class files for each platform.

[More on design tokens](/tokens)

### Easy Icons with Chassis - CSS

Chassis - CSS Icons are available as SVG sprite and icon font. Easy to use for developer and in direct control of designer by components design tokens.

[See icons](/icons)


<!--// imageModal -->

<div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
  <div class="modal-container lightbox">
  <button type="button" data-cx-dismiss="modal" aria-label="Close"
   class="close-button xlarge position-absolute top-0 end-0">
  <svg class="icon icon-white"><use href="#times-alt"></svg></button>
  <div class="modal-content">
  <figure>
    <img class="modal-image pointer-event-auto d-block my-auto mx-auto image-fluid rounded">
  </figure>
    </div>
  </div>
</div>

<script>
const imageModal = document.getElementById('imageModal')
if (imageModal) {
  imageModal.addEventListener('show.cx.modal', event => {
    const imageButton = event.relatedTarget
    const modalImage = imageModal.querySelector('.modal-image')
    modalImage.src = imageButton.getAttribute('data-image-src')
    modalImage.srcset = imageButton.getAttribute('data-image-srcset')
    modalImage.alt = imageButton.getAttribute('data-image-alt')
  })
}
</script>
