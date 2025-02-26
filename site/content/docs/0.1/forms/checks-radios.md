---
layout: docs
title: Checks and radios
description: Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component.
group: forms
aliases: "/docs/0.1/forms/checks/"
toc: true
---

## Approach

Browser default checkboxes and radios are replaced with the help of `.form-option`, a series of classes for both input types that improves the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

Structurally, our `<input>`s and `<label>`s are sibling elements as opposed to an `<input>` within a `<label>`. This is slightly more verbose as you must specify `id` and `for` attributes to relate the `<input>` and `<label>`. We use the sibling selector (`~`) for all our `<input>` states, like `:checked` or `:disabled`. When combined with the `.option-label` class, we can easily style the text for each item based on the `<input>`'s state.

Our checks use custom Chassis - CSS icons to indicate checked or indeterminate states.

## Checks

{{< example >}}
<div class="form-option">
  <input class="option-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="option-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-option">
  <input class="option-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="option-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
{{< /example >}}

### Indeterminate

Checkboxes can utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).

{{< example class="cxd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="form-option">
  <input class="option-input" type="checkbox" value="" id="flexCheckIndeterminate">
  <label class="option-label" for="flexCheckIndeterminate">
    Indeterminate checkbox
  </label>
</div>
{{< /example >}}

### Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.

{{< example class="cxd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="form-option">
  <input class="option-input" type="checkbox" value="" id="flexCheckIndeterminateDisabled" disabled>
  <label class="option-label" for="flexCheckIndeterminateDisabled">
    Disabled indeterminate checkbox
  </label>
</div>
<div class="form-option">
  <input class="option-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
  <label class="option-label" for="flexCheckDisabled">
    Disabled checkbox
  </label>
</div>
<div class="form-option">
  <input class="option-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
  <label class="option-label" for="flexCheckCheckedDisabled">
    Disabled checked checkbox
  </label>
</div>
{{< /example >}}

### Sizes

Add `.small` or `.large` classes to change the size of form option.

{{< example stackblitz_add_js="true" >}}
<div class="form-option large">
  <input class="option-input" type="checkbox">
  <label class="option-label" for="flexCheckDisabled">
    Disabled checkbox
  </label>
</div>
<div class="form-option">
  <input class="option-input" type="checkbox">
  <label class="option-label" for="flexCheckIndeterminateDisabled">
    Disabled indeterminate checkbox
  </label>
</div>
<div class="form-option small">
  <input class="option-input" type="checkbox">
  <label class="option-label" for="flexCheckCheckedDisabled">
    Disabled checked checkbox
  </label>
</div>
{{< /example >}}

Or add `.small` or `.large` classes to input itself.

{{< example stackblitz_add_js="true" >}}
  <input class="option-input large" type="checkbox">
  <input class="option-input" type="checkbox">
  <input class="option-input small" type="checkbox">
{{< /example >}}

## Radios

{{< example >}}
<div class="form-option">
  <input class="option-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="option-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-option">
  <input class="option-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="option-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>
{{< /example >}}

### Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.

{{< example >}}
<div class="form-option">
  <input class="option-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
  <label class="option-label" for="flexRadioDisabled">
    Disabled radio
  </label>
</div>
<div class="form-option">
  <input class="option-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
  <label class="option-label" for="flexRadioCheckedDisabled">
    Disabled checked radio
  </label>
</div>
{{< /example >}}

## Switches

A switch has the markup of a custom checkbox but uses the `.form-switch` class to render a toggle switch. Consider using `role="switch"` to more accurately convey the nature of the control to assistive technologies that support this role. In older assistive technologies, it will simply be announced as a regular checkbox as a fallback. Switches also support the `disabled` attribute.

{{< example >}}
<div class="form-option form-switch">
  <input class="option-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label class="option-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-option form-switch">
  <input class="option-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
  <label class="option-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
<div class="form-option form-switch">
  <input class="option-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled>
  <label class="option-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
</div>
<div class="form-option form-switch">
  <input class="option-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled>
  <label class="option-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div>
{{< /example >}}

## Default (stacked)

By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with `.form-option`.

{{< example >}}
<div class="form-option">
  <input class="option-input" type="checkbox" value="" id="defaultCheck1">
  <label class="option-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
<div class="form-option">
  <input class="option-input" type="checkbox" value="" id="defaultCheck2" disabled>
  <label class="option-label" for="defaultCheck2">
    Disabled checkbox
  </label>
</div>
{{< /example >}}

{{< example >}}
<div class="form-option">
  <input class="option-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="option-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-option">
  <input class="option-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="option-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-option">
  <input class="option-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
  <label class="option-label" for="exampleRadios3">
    Disabled radio
  </label>
</div>
{{< /example >}}

## Inline

Group checkboxes or radios on the same horizontal row by adding `.form-option-inline` to any `.form-option`.

{{< example >}}
<div class="form-option form-option-inline">
  <input class="option-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="option-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-option form-option-inline">
  <input class="option-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="option-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-option form-option-inline">
  <input class="option-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
  <label class="option-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
{{< /example >}}

{{< example >}}
<div class="form-option form-option-inline">
  <input class="option-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="option-label" for="inlineRadio1">1</label>
</div>
<div class="form-option form-option-inline">
  <input class="option-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="option-label" for="inlineRadio2">2</label>
</div>
<div class="form-option form-option-inline">
  <input class="option-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
  <label class="option-label" for="inlineRadio3">3 (disabled)</label>
</div>
{{< /example >}}

## Reverse

Put your checkboxes, radios, and switches on the opposite side with the `.form-option-reverse` modifier class.

{{< example >}}
<div class="form-option reverse">
  <input class="option-input" type="checkbox" value="" id="reverseCheck1">
  <label class="option-label" for="reverseCheck1">
    Reverse checkbox
  </label>
</div>
<div class="form-option reverse">
  <input class="option-input" type="checkbox" value="" id="reverseCheck2" disabled>
  <label class="option-label" for="reverseCheck2">
    Disabled reverse checkbox
  </label>
</div>

<div class="form-option form-switch reverse">
  <input class="option-input" type="checkbox" id="flexSwitchCheckReverse">
  <label class="option-label" for="flexSwitchCheckReverse">Reverse switch checkbox input</label>
</div>
{{< /example >}}

## Without labels

Omit the wrapping `.form-option` for checkboxes and radios that have no label text. Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-label`). See the [forms overview accessibility]({{< docsref "/forms/overview#accessibility" >}}) section for details.

{{< example >}}
<div>
  <input class="option-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
</div>

<div>
  <input class="option-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
</div>
{{< /example >}}

## Toggle buttons

Create button-like checkboxes and radio buttons by using `.button` styles rather than `.option-label` on the `<label>` elements. These toggle buttons can further be grouped in a [button group]({{< docsref "/components/button-group" >}}) if needed.

### Checkbox toggle buttons

{{< example >}}
<input type="checkbox" class="button-check" id="button-check" autocomplete="off">
<label class="button primary" for="button-check">Single toggle</label>

<input type="checkbox" class="button-check" id="button-check-2" checked autocomplete="off">
<label class="button primary" for="button-check-2">Checked</label>

<input type="checkbox" class="button-check" id="button-check-3" autocomplete="off" disabled>
<label class="button primary" for="button-check-3">Disabled</label>
{{< /example >}}

{{< example >}}
<input type="checkbox" class="button-check" id="button-check-4" autocomplete="off">
<label class="button" for="button-check-4">Single toggle</label>

<input type="checkbox" class="button-check" id="button-check-5" checked autocomplete="off">
<label class="button" for="button-check-5">Checked</label>

<input type="checkbox" class="button-check" id="button-check-6" autocomplete="off" disabled>
<label class="button" for="button-check-6">Disabled</label>
{{< /example >}}

{{< callout info >}}
Visually, these checkbox toggle buttons are identical to the [button plugin toggle buttons]({{< docsref "/components/buttons#button-plugin" >}}). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas the button plugin toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.
{{< /callout >}}

### Radio toggle buttons

{{< example >}}
<input type="radio" class="button-check" name="options" id="option1" autocomplete="off" checked>
<label class="button secondary" for="option1">Checked</label>

<input type="radio" class="button-check" name="options" id="option2" autocomplete="off">
<label class="button secondary" for="option2">Radio</label>

<input type="radio" class="button-check" name="options" id="option3" autocomplete="off" disabled>
<label class="button secondary disabled" for="option3">Disabled</label>

<input type="radio" class="button-check" name="options" id="option4" autocomplete="off">
<label class="button secondary" for="option4">Radio</label>
{{< /example >}}

{{< example >}}
<input type="radio" class="button-check" name="options-base" id="option5" autocomplete="off" checked>
<label class="button" for="option5">Checked</label>

<input type="radio" class="button-check" name="options-base" id="option6" autocomplete="off">
<label class="button" for="option6">Radio</label>

<input type="radio" class="button-check" name="options-base" id="option7" autocomplete="off" disabled>
<label class="button" for="option7">Disabled</label>

<input type="radio" class="button-check" name="options-base" id="option8" autocomplete="off">
<label class="button" for="option8">Radio</label>
{{< /example >}}

### Outlined styles

Different variants of `.button`, such as the various outlined styles, are supported.

{{< example >}}
<input type="checkbox" class="button-check" id="button-check-outlined" autocomplete="off">
<label class="button outline primary" for="button-check-outlined">Single toggle</label><br>

<input type="checkbox" class="button-check" id="button-check-2-outlined" checked autocomplete="off">
<label class="button outline secondary" for="button-check-2-outlined">Checked</label><br>

<input type="radio" class="button-check" name="options-outlined" id="success-outlined" autocomplete="off" checked>
<label class="button outline success" for="success-outlined">Checked success radio</label>

<input type="radio" class="button-check" name="options-outlined" id="danger-outlined" autocomplete="off">
<label class="button outline danger" for="danger-outlined">Danger radio</label>
{{< /example >}}

## CSS

### Sass variables

Variables for checks:

{{< scss-docs name="form-option-variables" file="scss/_variables.scss" >}}

Variables for switches:

{{< scss-docs name="form-switch-variables" file="scss/_variables.scss" >}}
