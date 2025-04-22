---
layout: docs
title: Link Helpers
description: Use links with hover, active and visited states in every context color.
group: helpers
toc: true
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

## Underlines

Links underlines can also be modified by our [link utilities]({{< docsref "/utilities/link/" >}}).

{{< example >}}
{{< colored-links.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<p><a href="#" class="link-{{ .name }} underline-offset-2 underline-opacity-25 underline-opacity-100-hover">{{ .name | title }} link</a></p>
{{- end -}}
{{< /colored-links.inline >}}
<p><a href="#" class="link-body underline-offset-2 underline-opacity-25 underline-opacity-75-hover">Body link</a></p>
{{< /example >}}


## Stretched Links

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

## Icon Link

<p class="context primary font-large rounded p-small">Quickly create stylized hyperlinks with Chassis - CSS Icons or other icons.<p>

The icon link helper component modifies our default link styles to enhance their appearance and quickly align any pairing of icon and text. Alignment is set via inline flexbox styling and a default `gap` value. We stylize the underline with a custom offset and color. Icons are automatically sized to `1em` to best match their associated text's `font-size`.

Icon links assume [Chassis - CSS Icons](https://icons.getchassis.com) are being used, but you can use any icon or image you like.

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
