---
layout: docs
title: Skeletons
description: Use loading skeletons for your components or pages to indicate something may still be loading.
group: components
toc: true
added:
  version: "5.1"
---

## About

skeletons can be used to enhance the experience of your application. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.

## Example

In the example below, we take a typical card component and recreate it with skeletons applied to create a "loading card". Size and proportions are the same between the two.

{{< example >}}
<div class="d-flex justify-content-evenly">
  <div class="card col-5">
    {{< placeholder width="100%" height="180" class="card-image-top" text="false" background="#20c997" >}}
    <div class="card-content">
      <h5 class="card-title">Card title</h5>
      <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="button primary">Go somewhere</a>
    </div>
  </div>

  <div class="card col-5" aria-hidden="true">
    {{< placeholder width="100%" height="180" class="card-image-top" text="false" >}}
    <div class="card-content">
      <div class="h5 card-title skeleton-glow">
        <span class="skeleton col-6"></span>
      </div>
      <p class="card-body skeleton-glow">
        <span class="skeleton col-7"></span>
        <span class="skeleton col-4"></span>
        <span class="skeleton col-4"></span>
        <span class="skeleton col-6"></span>
        <span class="skeleton col-8"></span>
      </p>
      <a class="button primary disabled skeleton col-6" aria-disabled="true"></a>
    </div>
  </div>
</div>
{{< /example >}}

## How it works

Create skeletons with the `.skeleton` class and a grid column class (e.g., `.col-6`) to set the `width`. They can replace the text inside an element or be added as a modifier class to an existing component.

We apply additional styling to `.button`s via `::before` to ensure the `height` is respected. You may extend this pattern for other situations as needed, or add a `&nbsp;` within the element to reflect the height when actual text is rendered in its place.

{{< example >}}
<p aria-hidden="true">
  <span class="skeleton col-6"></span>
</p>

<h3 aria-hidden="true">
  <span class="skeleton col-6"></span> sd asdf asda sdfasj dgfajhsdgf jasdgfjasg<span class="skeleton col-6"></span> fjhasdfjasdf gasdjhgfajhsdgfjsahd
</h3>

<a class="button primary disabled skeleton col-4" aria-disabled="true"></a>
{{< /example >}}

{{< callout info >}}
The use of `aria-hidden="true"` only indicates that the element should be hidden to screen readers. The *loading* behavior of the skeleton depends on how authors will actually use the skeleton styles, how they plan to update things, etc. Some JavaScript code may be needed to *swap* the state of the skeleton and inform AT users of the update.
{{< /callout >}}

### Width

You can change the `width` through grid column classes, width utilities, or inline styles.

{{< example >}}
<span class="skeleton col-6"></span>
<span class="skeleton w-75"></span>
<span class="skeleton" style="width: 25%;"></span>
{{< /example >}}

### Color

Spinners use `--cx-skeleton-color` variable for their color, which is set to `currentcolor` by default. Use `.skeleton-*` classes to paint them any `context` color.


By default, the `skeleton` uses `currentColor`. This can be overridden with a custom color or utility class.

{{< example >}}
{{< skeletons.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<span class="skeleton col-12 skeleton-{{ .name }}"></span>
{{- end -}}
{{< /skeletons.inline >}}
{{< /example >}}

Or use it on containers to paint them all.

<div class="cxd-example d-flex justify-content-evenly">
  <div class="card col-5" aria-hidden="true">
    <div class="card-content skeleton-secondary">
      <div class="h5 card-title skeleton-glow">
        <span class="skeleton col-6"></span>
      </div>
      <p class="card-body skeleton-glow">
        <span class="skeleton col-7"></span>
        <span class="skeleton col-4"></span>
        <span class="skeleton col-4"></span>
        <span class="skeleton col-6"></span>
        <span class="skeleton col-8"></span>
      </p>
      <a class="button primary disabled skeleton col-6" aria-disabled="true"></a>
    </div>
  </div>
  <div class="card bg-primary col-5" aria-hidden="true">
    <div class="card-content skeleton-white">
      <div class="h5 card-title skeleton-glow">
        <span class="skeleton col-6"></span>
      </div>
      <p class="card-body skeleton-glow">
        <span class="skeleton col-7"></span>
        <span class="skeleton col-4"></span>
        <span class="skeleton col-4"></span>
        <span class="skeleton col-6"></span>
        <span class="skeleton col-8"></span>
      </p>
      <a class="button primary disabled skeleton col-6" aria-disabled="true"></a>
    </div>
  </div>
</div>

{{< highlight "html" >}}
<div class="card">
  <div class="card-content skeleton-secondary">
    ...
  </div>
</div>

<div class="card bg-primary">
  <div class="card-content skeleton-white">
    ,,,
  </div>
</div>
{{< /highlight >}}

### Sizing

The size of `.skeleton`s are based on the typographic style of the parent element. Customize them with sizing modifiers: `.skeleton-large`, `.skeleton-small`, or `.skeleton-xsmall`.

{{< example >}}
<div class="font-smaller"><span class="skeleton col-6"></span> Aa</div>
<div><span class="skeleton col-6"></span> Aa</div>
<div class="font-larger"><span class="skeleton col-6"></span> Aa</div>
<div class="font-3xlarge"><span class="skeleton col-6"></span> Aa</div>
<div class="font-5xlarge"><span class="skeleton col-6"></span> Aa</div>
{{< /example >}}

### Animation

Animate skeletons with `.skeleton-glow` or `.skeleton-wave` to better convey the perception of something being *actively* loaded.

{{< example >}}
<p class="skeleton-glow">
  <span class="skeleton col-12"></span>
</p>

<p class="skeleton-wave">
  <span class="skeleton col-12"></span>
</p>
{{< /example >}}

## CSS

{{< partial "generic/docs-css" >}}

### Variables

{{< partial "generic/css-variables" >}}

### Sass Variables

{{< partial "generic/sass-variables" >}}

{{< scss-docs name="skeletons" file="scss/_variables.scss" >}}
