---
layout: docs
title: Link
description: Link utilities are used to stylize the anchors to adjust their color, opacity, underline offset, underline color, and more.
group: utilities
toc: true
added:
  version: "0.1"
---

## Colors

Use the `.link-*` classes to colorize links. Unlike the [`.fg-*` classes]({{< docsref "/utilities/colors" >}}), these classes have a `:hover`, `:focus`, `:active` and `:visited` states. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.

{{< example >}}
{{< colored-links.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<p><a href="#" class="link-{{ .name }}">{{ .name | title }} link</a> — <a href="https://example.com" class="link-{{ .name }}">visited link</a></p>
{{- end -}}
{{< /colored-links.inline >}}
<p><a href="#" class="link-body">Body link</a> — <a href="https://example.com" class="link-body">visited link</a></p>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Link opacity

Change the alpha opacity of the link `rgba()` color value with utilities. Please be aware that changes to a color's opacity can lead to links with [*insufficient* contrast]({{< docsref "getting-started/accessibility#color-contrast" >}}).

{{< example >}}
{{< opacities.inline >}}
{{- range (index $.Site.Data "basic-opacities") }}
<p><a class="link-opacity-{{ .name }}" href="#">Link opacity {{ .name }}</a></p>
{{- end -}}
{{< /opacities.inline >}}
{{< /example >}}

You can even change the opacity level on hover.

{{< example >}}
{{< opacities.inline >}}
{{- range (index $.Site.Data "basic-opacities") }}
<p><a class="link-opacity-{{ .name }}-hover" href="#">Link hover opacity {{ .name }}</a></p>
{{- end -}}
{{< /opacities.inline >}}
{{< /example >}}

## Link underlines

Links underlines also be modified by their color and offset.

### Underline color

Change the underline's color independent of the link text color.

{{< example >}}
{{< text-underline-colors.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<p><a href="#" class="text-underline-{{ .name }}">{{ .name | title }} underline</a></p>
{{- end -}}
{{< /text-underline-colors.inline >}}
{{< /example >}}

### Underline offset

Change the underline's distance from your text. Offset is set in `em` units to automatically scale with the element's current `font-size`.

{{< example >}}
<p><a href="#">Default link</a></p>
<p><a class="underline-offset-1" href="#">Offset 1 link</a></p>
<p><a class="underline-offset-2" href="#">Offset 2 link</a></p>
<p><a class="underline-offset-3" href="#">Offset 3 link</a></p>
{{< /example >}}

### Underline opacity

Change the underline's opacity. Requires adding `.text-underline` to first set an `rgba()` color we use to then modify the alpha opacity.

{{< example >}}
{{< opacities.inline >}}
{{- range (index $.Site.Data "basic-opacities") }}
<p><a class="underline-offset-2 text-underline underline-opacity-{{ .name }}" href="#">Underline opacity {{ .name }}</a></p>
{{- end -}}
{{< /opacities.inline >}}
{{< /example >}}

### Hover variants

Just like the `.link-opacity-*-hover` utilities, `.underline-offset` and `.underline-opacity` utilities include `:hover` variants by default. Mix and match to create unique link styles.

{{< example >}}
<a class="underline-opacity-0 underline-opacity-50-hover text-underline underline-offset-3 underline-offset-3-hover" href="#">
  Underline opacity 0
</a>
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

## Icon Link

<p class="context primary font-large rounded p-small">Quickly create stylized hyperlinks with Chassis - CSS Icons or other icons.<p>

The icon link helper component modifies our default link styles to enhance their appearance and quickly align any pairing of icon and text. Alignment is set via inline flexbox styling and a default `gap` value. We stylize the underline with a custom offset and color. Icons are automatically sized to `1em` to best match their associated text's `font-size`.

Icon links assume [Chassis - CSS Icons](/icons) are being used, but you can use any icon or image you like.

{{< callout >}}
When icons are purely decorative, they should be hidden from assistive technologies using `aria-hidden="true"`, as we've done in our examples. For icons that convey meaning, provide an appropriate text alternative by adding `role="img"` and an appropriate `aria-label="..."` to the SVGs.
{{< /callout >}}

### Example

Take a regular `<a>` element, add `.icon-link`, and insert an icon on either the left or right of your link text. The icon is automatically sized, placed, and colored.

{{< example >}}
<a class="icon-link" href="#">
  <svg class="icon" aria-hidden="true"><use xlink:href="#info-circle-regular"></use></svg>
  Icon link
</a>
{{< /example >}}

{{< example >}}
<a class="icon-link" href="#">
  Icon link
  <svg class="icon" aria-hidden="true"><use xlink:href="#arrow-right-solid"></use></svg>
</a>
{{< /example >}}

### Style on hover

Add `.icon-link-hover` to move the icon to the right on hover.

{{< example >}}
<a class="icon-link icon-link-hover" href="#">
  Icon link
  <svg class="icon" aria-hidden="true"><use xlink:href="#arrow-right-solid"></use></svg>
</a>
{{< /example >}}

## Stretched Links

Make any HTML element or Chassis - CSS component clickable by "stretching" a nested link via CSS.

Add `.stretched-link` to a link to make its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) clickable via a `::after` pseudo element. In most cases, this means that an element with `position: relative;` that contains a link with the `.link-stretch` class is clickable. Please note given [how CSS `position` works](https://www.w3.org/TR/CSS21/visuren.html#propdef-position), `.link-stretch` cannot be mixed with most table elements.

Cards have `position: relative` by default in Chassis - CSS, so in this case you can safely add the `.link-stretch` class to a link in the card without any other HTML changes.

Multiple links and tap targets are not recommended with stretched links. However, some `position` and `z-index` styles can help should this be required.

{{< example >}}
<div class="card" style="width: 18rem;">
  {{< placeholder width="100%" height="180" class="card-image-top" text="false" title="Card image cap" >}}
  <div class="card-body">
    <div class="card-content">
    <h5 class="card-title">Card with stretched link</h5>
    <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="button primary link-stretch">Go somewhere</a>
    </div>
  </div>
</div>
{{< /example >}}

Most custom components do not have `position: relative` by default, so we need to add the `.position-relative` here to prevent the link from stretching outside the parent element.

{{< example >}}
<div class="d-flex position-relative">
  {{< placeholder width="144" height="144" class="flex-shrink-0 me-medium" text="false" title="Generic placeholder image" >}}
  <div>
    <h5 class="mt-0">Custom component with stretched link</h5>
    <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
    <a href="#" class="link-stretch">Go somewhere</a>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="row g-0 bg-body-secondary position-relative">
  <div class="col-medium-6 mb-medium-0 p-medium-4">
    {{< placeholder width="100%" height="200" class="w-100" text="false" title="Generic placeholder image" >}}
  </div>
  <div class="col-medium-6 p-large ps-medium-0">
    <h5 class="mt-0">Columns with stretched link</h5>
    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
    <a href="#" class="link-stretch">Go somewhere</a>
  </div>
</div>
{{< /example >}}

### Containing Block

If the stretched link doesn't seem to work, the [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block) will probably be the cause. The following CSS properties will make an element the containing block:

- A `position` value other than `static`
- A `transform` or `perspective` value other than `none`
- A `will-change` value of `transform` or `perspective`
- A `filter` value other than `none` or a `will-change` value of `filter` (only works on Firefox)

{{< example >}}
<div class="card" style="width: 18rem;">
  {{< placeholder width="100%" height="180" class="card-image-top" text="false" title="Card image cap" >}}
  <div class="card-content">
    <h5 class="card-title">Card with stretched links</h5>
    <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-body">
      <a href="#" class="link-stretch" style="position: relative;">Stretched link will not work here, because <code>position: relative</code> is added to the link</a>
    </p>
    <p class="card-body bg-even" style="transform: rotate(0);">
      This <a href="#" class="link-stretch">stretched link</a> will only be spread over the <code>p</code>-tag, because a transform is applied to it.
    </p>
  </div>
</div>
{{< /example >}}

## Customize

Modify the styling of an icon link with our link CSS variables, Sass variables, utilities, or custom styles.

### CSS variables

Modify the `--cx-link-*` and `--cx-icon-link-*` CSS variables as needed to change the default appearance.

Customize the hover `transform` by overriding the `--cx-icon-link-transform` CSS variable:

{{< example >}}
<a class="icon-link icon-link-hover" style="--cx-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
  <svg class="icon" aria-hidden="true"><use xlink:href="#info-circle-regular"></use></svg>
  Icon link
</a>
{{< /example >}}

Customize the color by overriding the `--cx-link-*` CSS variable:

{{< example >}}
<a class="icon-link icon-link-hover" style="--cx-hover-color: var(--cx-secondary);" href="#">
  Icon link
  <svg class="icon" aria-hidden="true"><use xlink:href="#arrow-right-solid"></use></svg>
</a>
{{< /example >}}

### Sass variables

Customize the icon link Sass variables to modify all icon link styles across your Chassis - CSS-powered project.

{{< scss-docs name="icon-link-variables" file="scss/_variables.scss" >}}

### Sass utilities API

Modify icon links with any of [our link utilities]({{< docsref "/utilities/link/" >}}) for modifying underline color and offset.

{{< example >}}
<a class="icon-link icon-link-hover link-success text-underline-success underline-opacity-25" href="#">
  Icon link
  <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
</a>
{{< /example >}}


## CSS

In addition to the following Sass functionality, consider reading about our included [CSS custom properties]({{< docsref "/customize/css-variables" >}}) (aka CSS variables) for colors and more.

### Sass utilities API

Link utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-links" file="/scss/utilities/_index.scss" >}}


