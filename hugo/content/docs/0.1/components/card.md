---
layout: docs
title: Cards
description: Chassis - CSS's cards provide a flexible and extensible content container with multiple variants and options.
group: components
toc: true
---

## About

A **card** is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

## Example

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Chassis - CSS components. They have no `margin` by default, so use [spacing utilities]({{< docsref "/utilities/spacing" >}}) as needed.

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they'll naturally fill the full width of its parent element. This is easily customized with our various [sizing options](#sizing).

{{< example >}}
<div class="card col-5">
  {{< placeholder width="100%" height="180" class="card-image-top" text="Image cap" >}}
  <div class="card-content">
    <h5 class="card-title">Card Title</h5>
    <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="button primary">Go Somewhere</a>
  </div>
</div>
{{< /example >}}

## Content Types

Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what's supported.

### Base Content

The building block of a card is the `.card-content`. Use it whenever you need a padded section within a card.

{{< example >}}
<div class="card">
  <div class="card-content">
    This is some text within a card body.
  </div>
</div>
{{< /example >}}

### Titles, Text, and Links

Card titles are used by adding `.card-title` to a `heading` tag. In the same way, links are added and placed next to each other by adding `.card-link` to an `<a>` tag.

Subtitles are used by adding a `.card-subtitle` to a `heading` tag. If the `.card-title` and the `.card-subtitle` items are placed in a `.card-content` item, the card title and subtitle are aligned nicely.

{{< example >}}
<div class="card col-5">
  <div class="card-content">
    <h5 class="card-title">Card Title</h5>
    <h6 class="card-subtitle mb-small text-body-secondary">Card Subtitle</h6>
    <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
{{< /example >}}

### Images

`.card-image-top` and `.card-image-bottom` respectively set the top and bottom corners rounded to match the card's borders. With `.card-body`, text can be added to the card. Text within `.card-body` can also be styled with the standard HTML tags.

{{< example >}}
<div class="d-flex">
  <div class="card col-5">
    {{< placeholder width="100%" height="180" class="card-image-top" text="Image cap" >}}
    <div class="card-content">
      <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  <div class="card col-5 offset-1">
    <div class="card-content">
      <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    {{< placeholder width="100%" height="180" class="card-image-bottom" text="Image cap" >}}
  </div>
</div>
{{< /example >}}

### List groups

Create lists of content in a card with a flush list group.

{{< example >}}
<div class="card col-5">
  <ul class="list-group list-flush">
    <li class="list-item">An item</li>
    <li class="list-item">A second item</li>
    <li class="list-item">The third item</li>
    <li class="list-item">Fourth item</li>
  </ul>
</div>
{{< /example >}}

### Kitchen sink

Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.

{{< example >}}
<div class="card" style="width: 18rem;">
  {{< placeholder width="100%" height="180" class="card-image-top" text="Image cap" >}}
  <div class="card-content">
    <h5 class="card-title">Card title</h5>
    <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-flush">
    <li class="list-item">An item</li>
    <li class="list-item">A second item</li>
    <li class="list-item">A third item</li>
  </ul>
  <div class="card-content">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
{{< /example >}}

### Header and Footer

Add an optional header and/or footer within a card.

{{< example >}}
<div class="d-flex gap-medium">
  <div class="card col-5">
    <div class="card-header">
      Featured
    </div>
    <div class="card-content">
      <h5 class="card-title">Special Title Treatment</h5>
      <p class="card-body">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="button primary">Go somewhere</a>
    </div>
  </div>
  <div class="card col-5 offset-1">
    <div class="card-content">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-body">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="button primary">Go somewhere</a>
    </div>
    <div class="card-footer">
      Don't miss this.
    </div>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card">
  <div class="card-header">
    Quote
  </div>
  <div class="card-content">
    <blockquote class="blockquote mb-0">
      <p>A well-known quote, contained in a blockquote element.</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-content">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-body">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="button primary">Go somewhere</a>
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
</div>
{{< /example >}}

## Sizing

Cards assume no specific `width` to start, so they'll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.

### Using grid markup

Using the grid, wrap cards in columns and rows as needed.

{{< example >}}
<div class="row">
  <div class="col-small-6 mb-medium mb-small-0">
    <div class="card">
      <div class="card-content">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-body">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="button primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-small-6">
    <div class="card">
      <div class="card-content">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-body">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="button primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

### Using utilities

Use our handful of [available sizing utilities]({{< docsref "/utilities/sizing" >}}) to quickly set a card's width.

{{< example >}}
<div class="card w-75 mb-medium">
  <div class="card-content">
    <h5 class="card-title">Card title</h5>
    <p class="card-body">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="button primary">Button</a>
  </div>
</div>

<div class="card w-50">
  <div class="card-content">
    <h5 class="card-title">Card title</h5>
    <p class="card-body">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="button primary">Button</a>
  </div>
</div>
{{< /example >}}

### Using custom CSS

Use custom CSS in your stylesheets or as inline styles to set a width.

{{< example >}}
<div class="card" style="width: 18rem;">
  <div class="card-content">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-body">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="button primary">Go somewhere</a>
  </div>
</div>
{{< /example >}}

## Text alignment

You can quickly change the text alignment of any card—in its entirety or specific parts—with our [text align classes]({{< docsref "/utilities/text#text-alignment" >}}).

{{< example >}}
<div class="card mb-medium" style="width: 18rem;">
  <div class="card-content">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-body">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="button primary">Go somewhere</a>
  </div>
</div>

<div class="card text-center mb-medium" style="width: 18rem;">
  <div class="card-content">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-body">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="button primary">Go somewhere</a>
  </div>
</div>

<div class="card text-end" style="width: 18rem;">
  <div class="card-content">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-body">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="button primary">Go somewhere</a>
  </div>
</div>
{{< /example >}}

## Navigation

Add some navigation to a card's header (or block) with Chassis - CSS's [nav components]({{< docsref "/components/navs-tabs" >}}).

{{< example >}}
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-content">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-body">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="button primary">Go somewhere</a>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-content">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-body">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="button primary">Go somewhere</a>
  </div>
</div>
{{< /example >}}

## Images

Cards include a few options for working with images. Choose from appending "image caps" at either end of a card, overlaying images with card content, or simply embedding the image in a card.

### Image caps

Similar to headers and footers, cards can include top and bottom "image caps"—images at the top or bottom of a card.

{{< example >}}
<div class="card mb-medium">
  {{< placeholder width="100%" height="180" class="card-image-top" text="Image cap" >}}
  <div class="card-content">
    <h5 class="card-title">Card title</h5>
    <p class="card-body">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-body"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card">
  <div class="card-content">
    <h5 class="card-title">Card title</h5>
    <p class="card-body">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-body"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
  {{< placeholder width="100%" height="180" class="card-image-bottom" text="Image cap" >}}
</div>
{{< /example >}}

### Image overlays

Turn an image into a card background and overlay your card's text. Depending on the image, you may or may not need additional styles or utilities.

{{< example >}}
<div class="card text-bg-dark">
  {{< placeholder width="100%" height="270" class="cxd-placeholder-image-large card-image" text="Card image" >}}
  <div class="card-image-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-body">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-body"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
{{< /example >}}

{{< callout info >}}
Note that content should not be larger than the height of the image. If content is larger than the image the content will be displayed outside the image.
{{< /callout >}}

## Horizontal

Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with `.g-0` and use `.col-medium-*` classes to make the card horizontal at the `md` breakpoint. Further adjustments may be needed depending on your card content.

{{< example >}}
<div class="card mb-medium" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-medium-4">
      {{< placeholder width="100%" height="250" text="Image" class="img-fluid rounded-start" >}}
    </div>
    <div class="col-medium-8">
      <div class="card-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-body">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-body"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## Card styles

Cards include various options for customizing their backgrounds, borders, and color.

### Context Class

Use `.context` class on cards with a color or style, like `.primary` and `.solid`. See [context class]({{< docsref "introduction/context-class" >}}) for more information.

{{< example >}}
<div class="row row-cols-1 row-cols-medium-2 g-large">
<div class="col">
<div class="card context primary h-100">
  <div class="card-header">Header</div>
  <div class="card-content">
    <h5 class="card-title">Primary Basic Card</h5>
    <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div class="col">
<div class="card context primary solid h-100">
  <div class="card-header">Header</div>
  <div class="card-content">
    <h5 class="card-title">Primary Solid Card</h5>
    <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div class="col">
<div class="card context primary smooth h-100">
  <div class="card-header">Header</div>
  <div class="card-content">
    <h5 class="card-title">Primary Smooth Card</h5>
    <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div class="col">
<div class="card context primary outline h-100">
  <div class="card-header">Header</div>
  <div class="card-content">
    <h5 class="card-title">Primary Outline Card</h5>
    <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

### Use Utilities

You can also change style of card header, content and footer separately using utility classes.

{{< example >}}
<div class="row row-cols-1 row-cols-medium-2 g-large">
<div class="col">
<div class="card border-primary h-100">
  <div class="card-header primary-bg-evident">Header</div>
  <div class="card-content primary-bg-main">
    <h5 class="card-title">Primary Basic Card</h5>
    <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-footer primary-bg-even">Footer</div>
</div>
</div>
<div class="col">
<div class="card h-100">
  <div class="card-header fg-primary border-primary">Header</div>
  <div class="card-content fg-secondary">
    <h5 class="card-title">Primary Solid Card</h5>
    <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-footer fg-subtle primary-border-main">Footer</div>
</div>
</div>
</div>
{{< /example >}}

## Card layout

In addition to styling the content within cards, Chassis - CSS includes a few options for laying out series of cards. For the time being, **these layout options are not yet responsive**.

### Card groups

Use card groups to render cards as a single, attached element with equal width and height columns. Card groups start off stacked and use `display: flex;` to become attached with uniform dimensions starting at the `sm` breakpoint.

{{< example >}}
<div class="card-group">
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-image-top" text="Image cap" >}}
    <div class="card-content">
      <h5 class="card-title">Card title</h5>
      <p class="card-body">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-body"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-image-top" text="Image cap" >}}
    <div class="card-content">
      <h5 class="card-title">Card title</h5>
      <p class="card-body">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-body"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-image-top" text="Image cap" >}}
    <div class="card-content">
      <h5 class="card-title">Card title</h5>
      <p class="card-body">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-body"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
{{< /example >}}

When using card groups with footers, their content will automatically line up.

{{< example >}}
<div class="card-group">
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-image-top" text="Image cap" >}}
    <div class="card-content">
      <h5 class="card-title">Card title</h5>
      <p class="card-body">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-image-top" text="Image cap" >}}
    <div class="card-content">
      <h5 class="card-title">Card title</h5>
      <p class="card-body">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-image-top" text="Image cap" >}}
    <div class="card-content">
      <h5 class="card-title">Card title</h5>
      <p class="card-body">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
{{< /example >}}

### Grid cards

Use the Chassis - CSS grid system and its [`.row-cols` classes]({{< docsref "/layout/grid#row-columns" >}}) to control how many grid columns (wrapped around your cards) you show per row. For example, here's `.row-cols-1` laying out the cards on one column, and `.row-cols-medium-2` splitting four cards to equal width across multiple rows, from the medium breakpoint up.

{{< example >}}
<div class="row row-cols-1 row-cols-medium-2 g-large">
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-image-top" text="Image cap" >}}
      <div class="card-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-body">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-image-top" text="Image cap" >}}
      <div class="card-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-body">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-image-top" text="Image cap" >}}
      <div class="card-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-body">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-image-top" text="Image cap" >}}
      <div class="card-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-body">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

Change it to `.row-cols-3` and you'll see the fourth card wrap.

{{< example >}}
<div class="row row-cols-1 row-cols-medium-3 g-large">
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-image-top" text="Image cap" >}}
      <div class="card-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-body">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-image-top" text="Image cap" >}}
      <div class="card-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-body">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-image-top" text="Image cap" >}}
      <div class="card-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-body">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-image-top" text="Image cap" >}}
      <div class="card-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-body">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

When you need equal height, add `.h-100` to the cards. If you want equal heights by default, you can set `$card-height: 100%` in Sass.

{{< example >}}
<div class="row row-cols-1 row-cols-medium-3 g-large">
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="140" class="card-image-top" text="Image cap" >}}
      <div class="card-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-body">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="140" class="card-image-top" text="Image cap" >}}
      <div class="card-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-body">This is a short card.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="140" class="card-image-top" text="Image cap" >}}
      <div class="card-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-body">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="140" class="card-image-top" text="Image cap" >}}
      <div class="card-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-body">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

Just like with card groups, card footers will automatically line up.

{{< example >}}
<div class="row row-cols-1 row-cols-medium-3 g-large">
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="180" class="card-image-top" text="Image cap" >}}
      <div class="card-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-body">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="180" class="card-image-top" text="Image cap" >}}
      <div class="card-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-body">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="180" class="card-image-top" text="Image cap" >}}
      <div class="card-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-body">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

### Masonry

In `v4` we used a CSS-only technique to mimic the behavior of [Masonry](https://masonry.desandro.com/)-like columns, but this technique came with lots of unpleasant [side effects](https://github.com/ozgurgunes/chassis-css/pull/28922). If you want to have this type of layout in `v5`, you can just make use of Masonry plugin. **Masonry is not included in Chassis - CSS**, but we've made a [demo example]({{< docsref "/examples/masonry" >}}) to help you get started.

## CSS

{{< partial "generic/docs-css" >}}

### Variables

{{< partial "generic/css-variables" >}}

### Sass Variables

{{< partial "generic/sass-variables" >}}

{{< scss-docs name="card-variables" file="scss/_variables.scss" >}}
