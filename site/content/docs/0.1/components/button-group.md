---
layout: docs
title: Button group
description: Group a series of buttons together on a single line or stack them in a vertical column.
group: components
toc: true
---

## Basic example

Wrap a series of buttons with `.button` in `.button-group`.

{{< example >}}
<div class="button-group" role="group" aria-label="Basic example">
  <button type="button" class="button default">Left</button>
  <button type="button" class="button default">Middle</button>
  <button type="button" class="button default">Right</button>
</div>
<div class="button-group" role="group" aria-label="Basic example">
  <button type="button" class="button primary">Left</button>
  <button type="button" class="button primary">Middle</button>
  <button type="button" class="button primary">Right</button>
</div>
{{< /example >}}

{{< callout info >}}
Button groups require an appropriate `role` attribute and explicit label to ensure assistive technologies like screen readers identify buttons as grouped and announce them. Use `role="group"` for button groups or `role="toolbar"` for button toolbars. Then use `aria-label` or `aria-labelledby` to label them.
{{< /callout >}}

These classes can also be added to groups of links, as an alternative to the [`.nav` navigation components]({{< docsref "/components/navs-tabs" >}}).

{{< example >}}
<div class="button-group">
  <a href="#" class="button primary active" aria-current="page">Active link</a>
  <a href="#" class="button primary">Link</a>
  <a href="#" class="button primary">Link</a>
</div>
{{< /example >}}

## Mixed styles

{{< example >}}
<div class="button-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="button danger">Left</button>
  <button type="button" class="button warning">Middle</button>
  <button type="button" class="button success">Right</button>
</div>
{{< /example >}}

## Outlined styles

{{< example >}}
<div class="button-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="button outline primary">Left</button>
  <button type="button" class="button outline primary">Middle</button>
  <button type="button" class="button outline primary">Right</button>
</div>
{{< /example >}}

## Checkbox and radio button groups

Combine button-like checkbox and radio [toggle buttons]({{< docsref "/forms/checks-radios" >}}) into a seamless looking button group.

{{< example >}}
<div class="button-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" class="button-check" id="buttoncheck1" autocomplete="off">
  <label class="button outline primary" for="buttoncheck1">Checkbox 1</label>

  <input type="checkbox" class="button-check" id="buttoncheck2" autocomplete="off">
  <label class="button outline primary" for="buttoncheck2">Checkbox 2</label>

  <input type="checkbox" class="button-check" id="buttoncheck3" autocomplete="off">
  <label class="button outline primary" for="buttoncheck3">Checkbox 3</label>
</div>
{{< /example >}}

{{< example >}}
<div class="button-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="button-check" name="buttonradio" id="buttonradio1" autocomplete="off" checked>
  <label class="button outline primary" for="buttonradio1">Radio 1</label>

  <input type="radio" class="button-check" name="buttonradio" id="buttonradio2" autocomplete="off">
  <label class="button outline primary" for="buttonradio2">Radio 2</label>

  <input type="radio" class="button-check" name="buttonradio" id="buttonradio3" autocomplete="off">
  <label class="button outline primary" for="buttonradio3">Radio 3</label>
</div>
{{< /example >}}

## Button toolbar

Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.

{{< example >}}
<div class="button-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="button-group me-small" role="group" aria-label="First group">
    <button type="button" class="button primary">1</button>
    <button type="button" class="button primary">2</button>
    <button type="button" class="button primary">3</button>
    <button type="button" class="button primary">4</button>
  </div>
  <div class="button-group me-small" role="group" aria-label="Second group">
    <button type="button" class="button secondary">5</button>
    <button type="button" class="button secondary">6</button>
    <button type="button" class="button secondary">7</button>
  </div>
  <div class="button-group" role="group" aria-label="Third group">
    <button type="button" class="button info">8</button>
  </div>
</div>
{{< /example >}}

Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you'll likely need some utilities though to space things properly.

{{< example >}}
<div class="button-toolbar mb-medium" role="toolbar" aria-label="Toolbar with button groups">
  <div class="button-group me-small" role="group" aria-label="First group">
    <button type="button" class="button outline secondary">1</button>
    <button type="button" class="button outline secondary">2</button>
    <button type="button" class="button outline secondary">3</button>
    <button type="button" class="button outline secondary">4</button>
  </div>
  <div class="input-group">
    <div class="input-addon" id="buttonGroupAddon">@</div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="buttonGroupAddon">
  </div>
</div>

<div class="button-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
  <div class="button-group" role="group" aria-label="First group">
    <button type="button" class="button outline secondary">1</button>
    <button type="button" class="button outline secondary">2</button>
    <button type="button" class="button outline secondary">3</button>
    <button type="button" class="button outline secondary">4</button>
  </div>
  <div class="input-group">
    <div class="input-addon" id="buttonGroupAddon2">@</div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="buttonGroupAddon2">
  </div>
</div>
{{< /example >}}

## Sizing

Instead of applying button sizing classes to every button in a group, just add `.button-group-*` to each `.button-group`, including each one when nesting multiple groups.

{{< example >}}
<div class="button-group button-group-large" role="group" aria-label="Large button group">
  <button type="button" class="button outline primary">Left</button>
  <button type="button" class="button outline primary">Middle</button>
  <button type="button" class="button outline primary">Right</button>
</div>
<br>
<div class="button-group" role="group" aria-label="Default button group">
  <button type="button" class="button outline primary">Left</button>
  <button type="button" class="button outline primary">Middle</button>
  <button type="button" class="button outline primary">Right</button>
</div>
<br>
<div class="button-group button-group-small" role="group" aria-label="Small button group">
  <button type="button" class="button outline primary">Left</button>
  <button type="button" class="button outline primary">Middle</button>
  <button type="button" class="button outline primary">Right</button>
</div>
{{< /example >}}

## Nesting

Place a `.button-group` within another `.button-group` when you want dropdown menus mixed with a series of buttons.

{{< example >}}
<div class="button-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" class="button primary">1</button>
  <button type="button" class="button primary">2</button>

  <div class="button-group" role="group">
    <button type="button" class="button primary dropdown-toggle" data-cx-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>
{{< /example >}}

## Vertical variation

Make a set of buttons appear vertically stacked rather than horizontally. **Split button dropdowns are not supported here.**

{{< example >}}
<div class="button-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" class="button primary">Button</button>
  <button type="button" class="button primary">Button</button>
  <button type="button" class="button primary">Button</button>
  <button type="button" class="button primary">Button</button>
</div>
{{< /example >}}

{{< example >}}
<div class="button-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" class="button primary">Button</button>
  <button type="button" class="button primary">Button</button>
  <div class="button-group" role="group">
    <button type="button" class="button primary dropdown-toggle" data-cx-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
  <div class="button-group dropstart" role="group">
    <button type="button" class="button primary dropdown-toggle" data-cx-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
  <div class="button-group dropend" role="group">
    <button type="button" class="button primary dropdown-toggle" data-cx-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
  <div class="button-group dropup" role="group">
    <button type="button" class="button primary dropdown-toggle" data-cx-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="button-group-vertical" role="group" aria-label="Vertical radio toggle button group">
  <input type="radio" class="button-check" name="vbutton-radio" id="vbutton-radio1" autocomplete="off" checked>
  <label class="button outline danger" for="vbutton-radio1">Radio 1</label>
  <input type="radio" class="button-check" name="vbutton-radio" id="vbutton-radio2" autocomplete="off">
  <label class="button outline danger" for="vbutton-radio2">Radio 2</label>
  <input type="radio" class="button-check" name="vbutton-radio" id="vbutton-radio3" autocomplete="off">
  <label class="button outline danger" for="vbutton-radio3">Radio 3</label>
</div>
{{< /example >}}
