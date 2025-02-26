---
layout: docs
title: Accordion
description: Build accessible accordions using `details` element and add transitions with our JavaScript plugin.
group: components
aliases:
  - "/components/"
  - "/docs/0.1/components/"
toc: true
---

## How it works

The Chassis accordion uses `details` element and let browser do the expanding and collapsing of content. It uses javascript to add a smooth transion. Because of `details` elements native purpose, accordion doesn't require any aria or accessibility definitions.

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Example

Click the accordions below to expand/collapse the accordion content.

Just add the `open` attribute on the `details` element to render it is expanded by default.

{{< example >}}
<div class="accordion">
  <details open>
    <summary>
      <h4 class="accordion-title">Accordion Item #1</h4>
    </summary>
    <div class="accordion-content">
      <p>
        This is the <strong>first item's content</strong>. It is shown by default, until another detail element gets `[open]` by clicked on its summary.
      </p>
    </div>
  </details>
  <details>
    <summary>
      <h4 class="accordion-title">Accordion Item #2</h4>
    </summary>
    <div class="accordion-content">
      <p>
        This is the <strong>second item's content</strong>. It is hidden by default, until clicked on its summary element.
      </p>
    </div>
  </details>
  <details>
    <summary>
      <h4 class="accordion-title">Accordion Item #3</h4>
    </summary>
    <div class="accordion-content">
      <p>
        This is the <strong>third item's content</strong>. It is hidden by default, until clicked on its summary element.
      </p>
    </div>
  </details>
</div>
{{< /example >}}

### Static

Add `.static` to accordion container to make prevent other items collapse automatically.

<div class="cxd-example">

  <div class="accordion static">
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #1</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>first item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #2</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>second item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #3</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>third item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
  </div>

</div>

```html
  <div class="accordion static">
    <details>
      ...
    </details>
  </div>
```

### Flush

Add `.flush` to remove some borders and rounded corners to render accordions edge-to-edge with their parent container.

<div class="cxd-example">
  <div class="accordion flush static">
    <details open>
      <summary>
        <h4 class="accordion-title">Accordion Item #1</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>first item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #2</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>second item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #3</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>third item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
  </div>
</div>

```html
  <div class="accordion flush static">
    <details open>
      ...
    </details>
  </div>
```

## Sizes

Add `.large` or `.small` to make accordion fit your functional needs.

### Large

Larger font size and spacing, suitable for FAQ pages or use in heroes.

<div class="cxd-example">
  <div class="accordion large">
    <details open>
      <summary>
        <h4 class="accordion-title">Accordion Item #1</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>first item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #2</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>second item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #3</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>third item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
  </div>
</div>

```html
  <div class="accordion large">
    <details open>
      ...
    </details>
  </div>
```

### Small

Smaller font size and spacings, suitable for use in cards, sidebars etc.

<div class="cxd-example">
  <div class="accordion small">
    <details open>
      <summary>
        <h4 class="accordion-title">Accordion Item #1</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>first item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #2</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>second item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #3</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>third item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
  </div>
</div>

```html
<div class="accordion large">
  <details open>
    ...
  </details>
</div>
```

## Accordion Styles

Use `.context` class on accordions with a color or style, like `.primary` and `.solid`. See [context class]({{< docsref "introduction/context-class" >}}) for more information.

<div class="cxd-example">
  <div class="row row-cols-1 row-cols-medium-2 g-large">

<div class="col">
  <div class="col accordion context primary small">
    <details open>
      <summary>
        <h4 class="accordion-title">Accordion Item #1</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>first item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #2</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>second item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #3</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>third item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
  </div>
</div>

<div class="col">
  <div class="accordion context primary solid small col">
    <details open>
      <summary>
        <h4 class="accordion-title">Accordion Item #1</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>first item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #2</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>second item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #3</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>third item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
  </div>
</div>

<div class="col">
  <div class="accordion context primary smooth small">
    <details open>
      <summary>
        <h4 class="accordion-title">Accordion Item #1</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>first item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #2</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>second item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #3</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>third item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
  </div>
</div>

<div class="col">
  <div class="accordion context primary outline small">
    <details open>
      <summary>
        <h4 class="accordion-title">Accordion Item #1</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>first item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #2</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>second item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
    <details>
      <summary>
        <h4 class="accordion-title">Accordion Item #3</h4>
      </summary>
      <div class="accordion-content">
        <p>
          This is the <strong>third item's content</strong>. This will stay shown until it get clicked on its summary.
        </p>
      </div>
    </details>
  </div>
</div>

  </div>
</div>

{{< highlight html >}}
<div class="accordion context primary small">
  <details open>
    ...
  </details>
</div>

<div class="accordion context primary solid small">
  <details open>
    ...
  </details>
</div>

<div class="accordion context primary smooth small">
  <details open>
    ...
  </details>
</div>

<div class="accordion context primary outline small">
  <details open>
    ...
  </details>
</div>
{{< /highlight >}}

## Accessibility

No need to aria and role definitions. Sincse accordion component use HTML 5 details element, accessibility features would be set by browser automatically.

## CSS

{{< partial "generic/docs-css" >}}

### Variables

{{< partial "generic/css-variables" >}}

### Sass Variables

{{< partial "generic/sass-variables" >}}

{{< scss-docs name="accordion-variables" file="scss/_variables.scss" >}}
