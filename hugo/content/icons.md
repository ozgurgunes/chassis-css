---
layout: icons-home
title: Icons
aliases:
  - /font/
---

<section id="install-section">

## Install

Chassis Icons are published to npm, but they can also be manually downloaded if needed.

<div class="row my-large">
  <div class="col-medium-4">

{{< md >}}
### Package manager
Install [Chassis Icons](https://www.npmjs.com/package/@chassis/icons) —including SVGs, icon sprite, and icon fonts— with npm or Composer. Then, choose how you'd like to include the icons with the [usage instructions](#usage).

{{< highlight sh >}}
npm i @chassis/icons
{{< /highlight >}}
{{< highlight sh >}}
composer require @chassis/icons
{{< /highlight >}}
{{< /md >}}

  </div>
  <div class="col-medium-4">

{{< md >}}
### Download
[Releases are published on GitHub](https://github.com/chassis/icons/releases/) and include icon SVGs, fonts, license, and readme. Our `package.json` is also included, though our npm scripts are primarily available for our development workflows.

<a class="button primary outline" href="https://github.com/chassis/icons/releases/latest/">Download latest ZIP</a>
{{< /md >}}

  </div>
  <div class="col-medium-4">

{{< md >}}
### CDN
Include the icon fonts stylesheet—in your website `<head>` or via `@import` in CSS—from jsDelivr and get started in seconds. [See icon font docs](#icon-font) for examples.

{{< highlight html >}}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chassis-icons@{{< param icons_version >}}/font/chassis-icons.min.css">
{{< /highlight >}}

{{< highlight css >}}
@import url("https://cdn.jsdelivr.net/npm/chassis-icons@{{< param icons_version >}}/font/chassis-icons.min.css");
{{< /highlight >}}
{{< /md >}}

  </div>
</div>
</section>

<section id="usage-section">

## Usage

Chassis Icons are SVGs, so you can include them into your HTML in a few ways depending on how your project is setup. We recommend using using sprite and customize its color by changing `--cx-icon-size` and `-cx-icon-color`. Those values are `--cx-icon-medium` and `--cx-default-icon-main` by default. Icon utilities are also available as `.icon-*` classes both for size and context base colors.

<div class="row my-large mt-4xlarge">
  <div class="col-medium-4">
{{< md >}}
### Embedded
Embed your icons within the HTML of your page (as opposed to an external image file). Here we've used a custom `width` and `height`.
{{< /md >}}
  </div>
  <div class="col-medium-8">

{{< example >}}
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.453 2 2 6.492 2 12a9.97 9.97 0 0 0 10 10c5.508 0 10-4.453 10-10 0-5.508-4.492-10-10-10m0 5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25m1.563 10h-3.126c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938h.624v-2.5h-.312c-.547 0-.937-.39-.937-.937 0-.508.39-.938.937-.938H12a.95.95 0 0 1 .938.938v3.437h.624a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937"/></svg>
{{< /example >}}

  </div>
</div>

<div class="row my-large">
  <div class="col-medium-4">

{{< md >}}
### Sprite
Use the SVG sprite to insert any icon through the `<use>` element. Use the icon's filename as the fragment identifier (e.g., `icon-name` is `#icon-name`). SVG sprites allow you to reference an external file similar to an `<img>` element, but with the power of `currentColor` for easy theming.

**Heads up!** There's an issue with Chrome where [`<use>` doesn't work across domains](https://bugs.chromium.org/p/chromium/issues/detail?id=470601).
{{< /md >}}

  </div>
  <div class="col-medium-8">

{{< example >}}
<svg class="icon">
  <use xlink:href="#info-circle-regular"/>
</svg>
<svg class="icon">
  <use xlink:href="#info-circle-solid"/>
</svg>
{{< /example >}}

  </div>
</div>

<div class="row my-large">
  <div class="col-medium-4">

{{< md >}}
### External image
Copy the Chassis Icons SVGs to your directory of choice and reference them like normal images with the `<img>` element. Icon color could not be changed in this way.
{{< /md >}}

  </div>
  <div class="col-medium-8">

{{< example >}}<img src="/assets/icons/svgs/info-circle-solid.svg" alt="Chassis" width="24" height="24">{{< /example >}}

  </div>
</div>

<div class="row my-large">
  <div class="col-medium-4">

{{< md >}}
### Icon font
Icon fonts with classes for every icon are also available in Chassis Icons. Include the icon web fonts in your page via CSS, then reference the class names as needed in your HTML.

Use `font-size` and `color` to change the icon appearance.
{{< /md >}}

  </div>
  <div class="col-medium-8">

{{< example >}}
<span class="icon icon-info-circle-regular"></span>
<span class="icon icon-info-circle-solid"></span>
{{< /example >}}

  </div>
</div>
</section>

<section id="styling-section" class="row my-large">

{{< md >}}
## Styling
Icons use `--cx-icon-size` and `--cx-icon-color` for their size and color. You can change those values in different ways.
{{< /md >}}

<div class="row my-large">
  <div class="col-medium-4">

{{< md >}}
### Utilities
You can use `icon-*` classes to change both their size and colors. Put any *context color* or *icon size* after.
{{< /md >}}

  </div>
  <div class="col-medium-8">

{{< example >}}
<svg class="icon">
  <use xlink:href="#info-circle-solid"/>
</svg>
<svg class="icon icon-info icon-xlarge">
  <use xlink:href="#info-circle-solid"/>
</svg>
{{< /example >}}

  </div>
</div>

<div class="row my-large">
  <div class="col-medium-4">

{{< md >}}
### Adaptive

Put `.icon-adaptive` to change their values to `--cx-font-size` and `--cx-fg-color`.
{{< /md >}}

  </div>
  <div class="col-medium-8">

{{< example >}}
<h2 class="fg-subtle">
  <svg class="icon icon-adaptive"><use xlink:href="#info-circle-solid"/></svg>
  Heading
</h2>
{{< /example >}}

  </div>
</div>
</section>

<div class="row my-large">
  <div class="col-medium-4">

{{< md >}}
### Context Colors
Icons color and sizes fit to context and components automatically. Context object color utilities are also available. Put `.*-icon-main` or `.*-icon-subtle` classes to change their `color` ad `fill-color` properties directly with an `!important` flag.

Note that, `.icon-primary` and `.primary-icon-main` are different colors. While `.primary-icon-main` using `--cx-primary-icon-main` color, `.icon-primary` uses `--cx-primary-base-color` for its property.
{{< /md >}}

  </div>
  <div class="col-medium-8">

{{< example >}}
<div class="notification secondary p-medium">
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  <svg class="icon icon-subtle icon-medium"><use xlink:href="#info-circle-solid"/></svg>

  <span class="icon fg-subtle icon-2xlarge icon-info-circle-solid"></span>
  <span class="icon primary-icon-main icon-info-circle-solid "></span>
  <span class="icon primary-fg-main icon-xsmall icon-info-circle-solid "></span>
</div>
{{< /example >}}

  </div>
</div>

<div class="row my-large">
  <div class="col-medium-4">
{{< md >}}
### CSS
You can also use the SVG within your CSS (**be sure to escape any characters**, such as `#` to `%23` when specifying hex color values). When no dimensions are specified via `width` and `height` on the `<svg>`, the icon will fill the available space.

The `viewBox` attribute is required if you wish to resize icons with `background-size`. Note that the `xmlns` attribute is required.

Note that, it is not possible to change color if SVG used as `background-image`. Because of this, we prefer to use `mask-image` if any CSS usage needed.
{{< /md >}}
  </div>
  <div class="col-medium-8">
{{< highlight css >}}
.icon-bg::before {
  display: inline-block;
  content: "";
  vertical-align: -.125em;
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 24 24' fill='%23ff5b14' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' clip-rule='evenodd'/></svg>");
  background-repeat: no-repeat;
  background-size: 1rem 1rem;
}
{{< /highlight >}}

{{< highlight css >}}
.icon-mask::before {
    position: absolute;
    width: 1rem
    height: 1rem
    margin-top: 0;
    margin-left: .5rem;
    content: "";
    background-color: #ff5b14;
    mask-image: url("data:image/svg+xml,<svg viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' clip-rule='evenodd'/></svg>");
    mask-position: center;
    mask-size: 1rem 1rem;
}
{{< /highlight >}}
  </div>
</div>

</section>

<section  id="accessibility-section">
<div class="row my-large">
  <div class="col-medium-4">
{{< md >}}
## Accessibility
For purely decorative icons, add `aria-hidden="true"`. Otherwise, provide an appropriate text alternative. Depending on which method you're using to add the icons, and where you're using them (e.g. as standalone images, or as the only content of a button or similar control), there are various possible approaches. Here are a few examples:
{{< /md >}}
  </div>
  <div class="col-medium-8">

  <div class="cxd-example">
    <img src="/assets/icons/svgs/info-circle-solid.svg" alt="Chassis" width="24" height="24">
  </div>
{{< highlight html >}}
<!-- alt="..." on <img> element -->
<img src="/assets/icons/chassis-icons.svg" alt="Information icon" ...>
{{< /highlight >}}

  <div class="cxd-example">
    <span class="icon icon-clock-solid" role="img" aria-label="GitHub"></span>
    <span class="icon icon-tools" role="img" style="font-size: 2em" aria-label="Tools"></span>
  </div>
{{< highlight html >}}
<svg class="bi" ... role="img" aria-label="Tools">
  <use xlink:href="chassis-icons.svg#tools"/>
</svg>
{{< /highlight >}}

  <div class="cxd-example">
    <button type="button" class="button default" aria-label="Help">
      <svg class="icon" aria-hidden="true"><use xlink:href="#question-circle-solid"/></svg>
    </button>
  </div>
{{< highlight html >}}
<!-- aria-label="..." on the control -->
<button ... aria-label="Help">
  <svg class="icon" aria-hidden="true" ...>
  ...
  </svg>
</button>
{{< /highlight >}}

  </div>
</div>
</section>

<div class="row my-large">
  <div class="col-md-4">
{{< md >}}
## Working with SVGs
SVGs are awesome to work with, but they do have some known quirks to work around. Given the numerous ways in which SVGs can be used, we haven't included these attributes and workarounds in our code.
{{< /md >}}
  </div>
  <div class="col-md-8">
{{< md >}}
Known issues include:

- **SVGs receive focus by default in Internet Explorer and Edge Legacy.** When embedding your SVGs, add `focusable="false"` to the `<svg>` element. [Learn more on Stack Overflow.](https://stackoverflow.com/questions/18646111/disable-onfocus-event-for-svg-element)

- **When using SVGs with `<img>` elements, screen readers may not announce them as images, or skip the image completely.** Include an additional `role="img"` on the `<img>` element to avoid any issues. [See this article for details.](https://web.archive.org/web/20201112013541/https://simplyaccessible.com/article/7-solutions-svgs/#acc-heading-2)

- **External SVG sprites may not function correctly in Internet Explorer.** Use the [svg4everybody](https://github.com/jonathantneal/svg4everybody) polyfill as needed.

Found another issue with SVGs we should note? Please open [an issue]({{< param repo >}}/issues) to share details.
{{< /md >}}
  </div>
</div>
