---
layout: docs
title: Buttons
description: Use Chassis - CSS's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
group: components
toc: true
---
<div class="button-examples">

## Base Class

Chassis - CSS has a base `.button` class that sets up the basic layout, typography and interactions of the buttons. By default, `.button` controls have body border and color definitions interactive abilities like focus and hover.

{{< example >}}
<button type="button" class="button">Base class</button>
<button type="button" class="button default">Default Button</button>
<button type="button" class="button primary">Primary Button</button>
<button type="button" class="button link">Link</button>
{{< /example >}}

The `.button` class is intended to be used in conjunction with a context class, or to serve as a basis for your own custom styles.

## Context Variants

Chassis - CSS includes context color variants of buttons, each serving its own contextual purpose.

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<button type="button" class="button {{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

### Outline Buttons

In need of a button, but not the hefty background colors they bring? Add `.outline` class to remove background of any button.

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<button type="button" class="button {{ .name }} outline">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}
{{< /example >}}

{{< callout info >}}
Some of the button styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.
{{< /callout >}}

### Smooth Buttons

Add `.smooth` class to fade their backgrounds in need of less attraction.

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<button type="button" class="button {{ .name }} smooth">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}
{{< /example >}}

## Button Tags

The `.button` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are <a class="button" href="https://example.com">used</a> to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.

{{< example >}}
<button class="button primary" type="submit">Button</button>
<input class="button primary" type="button" value="Input">
<input class="button primary" type="submit" value="Submit">
<input class="button primary" type="reset" value="Reset">
<a class="button primary" href="http://example.com" role="button">Link</a>
{{< /example >}}

## Icons

{{< example >}}
<button type="button" class="button">
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Base
</button>
<button type="button" class="button default">
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Default
</button>
<button type="button" class="button primary">
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Primary
</button>
{{< /example >}}

## Sizes

Fancy larger or smaller buttons? Add `.large` or `.small` for additional sizes.

{{< example >}}
<button type="button" class="button default large">
  Default
</button>
<button type="button" class="button default large">
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Default
</button>
<button type="button" class="button primary large">
  Primary
</button>
<button type="button" class="button primary large">
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Primary
</button>
{{< /example >}}

{{< example >}}
<button type="button" class="button default small">
  Default
</button>
<button type="button" class="button default small">
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Default
</button>
<button type="button" class="button primary small">
  Primary
</button>
<button type="button" class="button primary small">
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Primary
</button>
{{< /example >}}

## Disabled State

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element. Disabled buttons have `pointer-events: none` applied to, preventing hover and active states from triggering.

{{< example >}}
<button type="button" class="button default" disabled>
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Default Button
</button>
<button type="button" class="button default outline" disabled>
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Default button
</button>
<button type="button" class="button default smooth" disabled>
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Default button
</button>
<button type="button" class="button primary" disabled>
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Primary Button
</button>
<button type="button" class="button primary outline" disabled>
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Primary Button
</button>
<button type="button" class="button primary smooth" disabled>
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Primary Button
</button>
{{< /example >}}

Disabled buttons using the `<a>` element behave a bit different:

- `<a>`s don't support the `disabled` attribute, so you must add the `.disabled` class to make it visually appear disabled.
- Some future-friendly styles are included to disable all `pointer-events` on anchor buttons.
- Disabled buttons using `<a>` should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.
- Disabled buttons using `<a>` *should not* include the `href` attribute.

{{< example >}}
<a class="button default disabled" role="button" aria-disabled="true">Default Link</a>
<a class="button primary disabled" role="button" aria-disabled="true">Primary Link</a>
<a class="button secondary disabled" role="button" aria-disabled="true">Secondary Link</a>
{{< /example >}}

### Link Functionality Caveat

To cover cases where you have to keep the `href` attribute on a disabled link, the `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s. Note that this CSS property is not yet standardized for HTML, but all modern browsers support it. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, in addition to `aria-disabled="true"`, also include a `tabindex="-1"` attribute on these links to prevent them from receiving keyboard focus, and use custom JavaScript to disable their functionality altogether.

{{< example >}}
<a href="#" class="button default disabled" tabindex="-1" role="button" aria-disabled="true">Default Link</a>
<a href="#" class="button primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary Link</a>
<a href="#" class="button secondary disabled" tabindex="-1" role="button" aria-disabled="true">Secondary Link</a>
{{< /example >}}

## Block Buttons

Create responsive stacks of full-width, "block buttons" like those in Chassis - CSS 4 with a mix of our display and gap utilities. By using utilities instead of button-specific classes, we have much greater control over spacing, alignment, and responsive behaviors.

{{< example >}}
<div class="d-grid gap-small">
  <button class="button default" type="button">Default</button>
  <button class="button primary" type="button">Primary</button>
</div>
{{< /example >}}

Here we create a responsive variation, starting with vertically stacked buttons until the `md` breakpoint, where `.d-medium-block` replaces the `.d-grid` class, thus nullifying the `gap-small` utility. Resize your browser to see them change.

{{< example >}}
<div class="d-grid gap-small d-medium-block">
  <button class="button default" type="button">Default</button>
  <button class="button primary" type="button">Primary</button>
</div>
{{< /example >}}

You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use `.col-6`. Center it horizontally with `.mx-auto`, too.

{{< example >}}
<div class="d-grid gap-small col-6 mx-auto">
  <button class="button default" type="button">Default</button>
  <button class="button primary" type="button">Primary</button>
</div>
{{< /example >}}

Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right-align the buttons when they're no longer stacked.

{{< example >}}
<div class="d-grid gap-small d-medium-flex justify-content-medium-end">
  <button class="button default" type="button">Default</button>
  <button class="button primary" type="button">Primary</button>
</div>
{{< /example >}}

## Button Plugin

The button plugin allows you to create simple on/off toggle buttons.

{{< callout info >}}
Visually, these toggle buttons are identical to the [checkbox toggle buttons]({{< docsref "/forms/checks-radios#checkbox-toggle-buttons" >}}). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas these toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.
{{< /callout >}}

### Toggle States

Add `data-cx-toggle="button"` to toggle a button's `active` state. If you're pre-toggling a button, you must add the `.active` class **and** `aria-pressed="true"` to ensure that it is conveyed appropriately to assistive technologies.

It is also suggested to use  `aria-pressed="false"` for non active buttons to make them detectable as toggle button by assistive technologies.

{{< example >}}
<p class="d-inline-flex gap-small">
  <button type="button" class="button default" data-cx-toggle="button" aria-pressed="false">Toggle button</button>
  <button type="button" class="button default active" data-cx-toggle="button" aria-pressed="true">Active toggle</button>
  <button type="button" class="button default" disabled data-cx-toggle="button" aria-pressed="false">Disabled toggle</button>
  <button type="button" class="button default active" disabled data-cx-toggle="button" aria-pressed="true">Disabled active</button>
</p>
<p class="d-inline-flex gap-small">
  <button type="button" class="button primary" data-cx-toggle="button" aria-pressed="false">Toggle button</button>
  <button type="button" class="button primary active" data-cx-toggle="button" aria-pressed="true">Active toggle</button>
  <button type="button" class="button primary" disabled data-cx-toggle="button" aria-pressed="false">Disabled toggle</button>
  <button type="button" class="button primary active" disabled data-cx-toggle="button" aria-pressed="true">Disabled active</button>
</p>
{{< /example >}}

{{< example >}}
<p class="d-inline-flex gap-small">
  <a href="#" class="button default" role="button" data-cx-toggle="button" aria-pressed="false">Toggle link</a>
  <a href="#" class="button default active" role="button" data-cx-toggle="button" aria-pressed="true">Active toggle</a>
  <a href="#" class="button default disabled" aria-disabled="true" role="button" data-cx-toggle="button" aria-pressed="false">Disabled toggle</a>
  <a href="#" class="button default active disabled" aria-disabled="true" role="button" data-cx-toggle="button" aria-pressed="true">Disabled active</a>
</p>
<p class="d-inline-flex gap-small">
  <a href="#" class="button primary" role="button" data-cx-toggle="button" aria-pressed="false">Toggle link</a>
  <a href="#" class="button primary active" role="button" data-cx-toggle="button" aria-pressed="true">Active toggle</a>
  <a href="#" class="button primary disabled" aria-disabled="true" role="button" data-cx-toggle="button" aria-pressed="false">Disabled toggle</a>
  <a href="#" class="button primary active disabled" aria-disabled="true" role="button" data-cx-toggle="button" aria-pressed="true">Disabled active</a>
</p>
{{< /example >}}

### Methods

You can create a button instance with the button constructor, for example:

```js
const cxButton = new chassis.Button('#myButton')
```

{{< cx-table "table" >}}
| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's button. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the button instance associated with a DOM element, you can use it like this: `chassis.Button.getInstance(element)`. |
| `getOrCreateInstance` | Static method which returns a button instance associated with a DOM element or creates a new one in case it wasn't initialized. You can use it like this: `chassis.Button.getOrCreateInstance(element)`. |
| `toggle` | Toggles push state. Gives the button the appearance that it has been activated. |
{{< /cx-table >}}

For example, to toggle all buttons

```js
document.querySelectorAll('.button').forEach(buttonElement => {
  const button = chassis.Button.getOrCreateInstance(buttonElement)
  button.toggle()
})
```

## CSS

{{< partial "generic/docs-css" >}}

### Variables

{{< partial "generic/css-variables" >}}

### Sass Variables

{{< partial "generic/sass-variables" >}}

{{< scss-docs name="button-variables" file="scss/_variables.scss" >}}

### Sass maps

{{< scss-docs name="button-colors-map" file="scss/maps/_buttons.scss" >}}

### Sass mixins

#### Solid Button Mixin

{{< scss-docs name="solid-button-mixin" file="scss/mixins/_button.scss" >}}

#### Outline Button Mixin

{{< scss-docs name="outline-button-mixin" file="scss/mixins/_button.scss" >}}

#### Smooth Button Mixin

{{< scss-docs name="smooth-button-mixin" file="scss/mixins/_button.scss" >}}

#### Placeholder Selectors

{{< scss-docs name="button-placeholder-selectors" file="scss/placeholders/_button.scss" >}}

### Custom Buttons

Below code is the actual code of buttons we are using in documentation site.

{{< scss-docs name="cxd-button" file="site/assets/scss/_buttons.scss" >}}

This will create this button set:

{{< example >}}
<button type="button" class="cxd-button">Base</button>
<button type="button" class="cxd-button default">Default</button>
<button type="button" class="cxd-button primary">Primary</button>
<button type="button" class="cxd-button large">Large</button>
<button type="button" class="cxd-button default large">Default</button>
<button type="button" class="cxd-button primary large">Primary</button>
{{< /example >}}

</div>
