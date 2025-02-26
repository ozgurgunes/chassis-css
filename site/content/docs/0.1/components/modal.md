---
layout: docs
title: Modal
description: Use Chassis - CSS's JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.
group: components
toc: true
---

## How it works

Before getting started with Chassis - CSS's modal component, be sure to read the following as our menu options have recently changed.

- Modals are built with HTML, CSS, and JavaScript. They're positioned over everything else in the document and remove scroll from the `<body>` so that modal content scrolls instead.
- Clicking on the modal "backdrop" will automatically close the modal.
- Chassis - CSS only supports one modal window at a time. Nested modals aren't supported as we believe them to be poor user experiences.
- Modals use `position: fixed`, which can sometimes be a bit particular about its rendering. Whenever possible, place your modal HTML in a top-level position to avoid potential interference from other elements. You'll likely run into issues when nesting a `.modal` within another fixed element.
- Once again, due to `position: fixed`, there are some caveats with using modals on mobile devices. [See our browser support docs]({{< docsref "/getting-started/browsers-devices#modals-and-dropdowns-on-mobile" >}}) for details.
- Due to how HTML5 defines its contexts, [the `autofocus` HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus) has no effect in Chassis - CSS modals. To achieve the same effect, use some custom JavaScript:

```js
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.vl.modal', () => {
  myInput.focus()
})
```

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

Keep reading for demos and usage guidelines.

## Examples

### Modal components

Below is a _static_ modal example (meaning its `position` and `display` have been overridden). Included are the modal header, modal body (required for `padding`), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.

<div class="cxd-example bg-evident">
  <div class="modal position-static d-block" tabindex="-1">
    <div class="modal-container">
      <div class="modal-window">
        <div class="modal-header">
          <h4 class="modal-title">Modal title</h4>
          <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-content">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
          <button type="button" class="button primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="modal" tabindex="-1">
  <div class="modal-container">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
        <button type="button" class="button primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

{{< callout info >}}
In the above static example, we use `<h5>`, to avoid issues with the heading hierarchy in the documentation page. Structurally, however, a modal dialog represents its own separate document/context, so the `.modal-title` should ideally be an `<h1>`. If necessary, you can use the [font size utilities]({{< docsref "/utilities/text#font-size" >}}) to control the heading's appearance. All the following live examples use this approach.
{{< /callout >}}

### Live demo

Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.

<div class="modal fade" id="exampleModalLive" tabindex="-1" aria-labelledby="exampleModalLiveLabel" aria-hidden="true">
  <div class="modal-container centered">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLiveLabel">Modal title</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        <p>Woo-hoo, you're reading this text in a modal!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
        <button type="button" class="button primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="cxd-example">
  <button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModalLive">
    Launch demo modal
  </button>
</div>

```html
<!-- Button trigger modal -->
<button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-container centered">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Modal title</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
        <button type="button" class="button primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

### Static backdrop

When backdrop is set to static, the modal will not close when clicking outside of it. Click the button below to try it.

<div class="modal fade" id="staticBackdropLive" data-cx-backdrop="static" data-cx-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
  <div class="modal-container">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="staticBackdropLiveLabel">Modal title</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        <p>I will not close if you click outside of me. Don't even try to press escape key.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
        <button type="button" class="button primary">Understood</button>
      </div>
    </div>
  </div>
</div>

<div class="cxd-example">
  <button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#staticBackdropLive">
    Launch static backdrop modal
  </button>
</div>

```html
<!-- Button trigger modal -->
<button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-cx-backdrop="static" data-cx-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-container">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="staticBackdropLabel">Modal title</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="contenr">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="button secondary" data-cx-dismiss="modal">Close</button>
        <button type="button" class="button primary">Understood</button>
      </div>
    </div>
  </div>
</div>
```

### Scrolling long content

When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.

<div class="modal fade" id="exampleModalLong" tabindex="-1" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-container">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLongTitle">Modal title</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content" style="min-height: 1500px">
        <p>This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
        <button type="button" class="button primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="cxd-example">
  <button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModalLong">
    Launch demo modal
  </button>
</div>

You can also create a scrollable modal that allows scrolling the modal body by adding `.modal-dialog-scrollable` to `.modal-dialog`.

<div class="modal fade" id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div class="modal-container scrollable">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalScrollableTitle">Modal title</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <p>This content should appear at the bottom after you scroll.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
        <button type="button" class="button primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="cxd-example">
  <button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModalScrollable">
    Launch demo modal
  </button>
</div>

```html
<!-- Scrollable modal -->
<div class="modal-dialog scrollable">
  ...
</div>
```

### Vertically centered

Add `.modal-dialog-centered` to `.modal-dialog` to vertically center the modal.

<div class="modal fade" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-container centered">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalCenterTitle">Modal title</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        <p>This is a vertically centered modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
        <button type="button" class="button primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollableTitle" aria-hidden="true">
  <div class="modal-container centered scrollable">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalCenteredScrollableTitle">Modal title</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        <p>This is some placeholder content to show a vertically centered modal. We've added some extra copy here to show how vertically centering the modal works when combined with scrollable modals. We also use some repeated line breaks to quickly extend the height of the content, thereby triggering the scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <p>Just like that.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
        <button type="button" class="button primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="cxd-example">
  <button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModalCenter">
    Vertically centered modal
  </button>
  <button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModalCenteredScrollable">
    Vertically centered scrollable modal
  </button>
</div>

```html
<!-- Vertically centered modal -->
<div class="modal-container centered">
  ...
</div>

<!-- Vertically centered scrollable modal -->
<div class="modal-container centered scrollable">
  ...
</div>
```

### Tooltips and popovers

[Tooltips]({{< docsref "/components/tooltips" >}}) and [popovers]({{< docsref "/components/popovers" >}}) can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.

<div class="modal fade" id="exampleModalPopovers" tabindex="-1" aria-labelledby="exampleModalPopoversLabel" aria-hidden="true">
  <div class="modal-container">
    <div class="modal-window">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalPopoversLabel">Modal title</h3>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        <h4>Popover in a modal</h4>
        <p>This <button class="button default" data-cx-toggle="popover" title="Popover title" data-cx-content="Popover body content is set in this attribute." data-cx-container="#exampleModalPopovers">button</button> triggers a popover on click.</p>
        <hr>
        <h4 class="fs-5">Tooltips in a modal</h4>
        <p><a href="#" data-cx-toggle="tooltip" title="Tooltip" data-cx-container="#exampleModalPopovers">This link</a> and <a href="#" data-cx-toggle="tooltip" title="Tooltip" data-cx-container="#exampleModalPopovers">that link</a> have tooltips on hover.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
        <button type="button" class="button primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="cxd-example">
  <button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModalPopovers">
    Launch demo modal
  </button>
</div>

```html
<div class="modal-content">
  <h3>Popover in a modal</h2>
  <p>This <button class="button default" data-cx-toggle="popover" title="Popover title" data-cx-content="Popover body content is set in this attribute.">button</button> triggers a popover on click.</p>
  <hr>
  <h4>Tooltips in a modal</h2>
  <p><a href="#" data-cx-toggle="tooltip" title="Tooltip">This link</a> and <a href="#" data-cx-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
</div>
```

### Using the grid

Utilize the Chassis - CSS grid system within a modal by nesting `.container-fluid` within the `.modal-body`. Then, use the normal grid system classes as you would anywhere else.

<div class="modal fade" id="gridSystemModal" tabindex="-1" aria-labelledby="gridModalLabel" aria-hidden="true">
  <div class="modal-container">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="gridModalLabel">Grids in modals</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        <div class="container-fluid cxd-example-row">
          <div class="row">
            <div class="col-medium-4">.col-medium-4</div>
            <div class="col-medium-4 ms-auto">.col-medium-4 .ms-auto</div>
          </div>
          <div class="row">
            <div class="col-medium-3 ms-auto">.col-medium-3 .ms-auto</div>
            <div class="col-medium-2 ms-auto">.col-medium-2 .ms-auto</div>
          </div>
          <div class="row">
            <div class="col-medium-6 ms-auto">.col-medium-6 .ms-auto</div>
          </div>
          <div class="row">
            <div class="col-small-9">
              Level 1: .col-small-9
              <div class="row">
                <div class="col-8 col-small-6">
                  Level 2: .col-8 .col-small-6
                </div>
                <div class="col-4 col-small-6">
                  Level 2: .col-4 .col-small-6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
        <button type="button" class="button primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="cxd-example">
<button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#gridSystemModal">
  Launch demo modal
</button>
</div>

```html
<div class="modal-content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-medium-4">.col-medium-4</div>
      <div class="col-medium-4 ms-auto">.col-medium-4 .ms-auto</div>
    </div>
    <div class="row">
      <div class="col-medium-3 ms-auto">.col-medium-3 .ms-auto</div>
      <div class="col-medium-2 ms-auto">.col-medium-2 .ms-auto</div>
    </div>
    <div class="row">
      <div class="col-medium-6 ms-auto">.col-medium-6 .ms-auto</div>
    </div>
    <div class="row">
      <div class="col-small-9">
        Level 1: .col-small-9
        <div class="row">
          <div class="col-8 col-small-6">
            Level 2: .col-8 .col-small-6
          </div>
          <div class="col-4 col-small-6">
            Level 2: .col-4 .col-small-6
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Varying modal content

Have a bunch of buttons that all trigger the same modal with slightly different contents? Use `event.relatedTarget` and [HTML `data-cx-*` attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) to vary the contents of the modal depending on which button was clicked.

Below is a live demo followed by example HTML and JavaScript. For more information, [read the modal events docs](#events) for details on `relatedTarget`.

{{< example stackblitz_add_js="true" >}}
<button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModal" data-cx-whatever="@mdo">Open modal for @mdo</button>
<button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModal" data-cx-whatever="@fat">Open modal for @fat</button>
<button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModal" data-cx-whatever="@chassis">Open modal for @chassis</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-container">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">New message</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
        <button type="button" class="button primary">Send message</button>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

{{< js-docs name="varying-modal-content" file="site/assets/js/partials/snippets.js" >}}

### Toggle between modals

Toggle between multiple modals with some clever placement of the `data-cx-target` and `data-cx-toggle` attributes. For example, you could toggle a password reset modal from within an already open sign in modal. **Please note multiple modals cannot be open at the same time**—this method simply toggles between two separate modals.

{{< example >}}
<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-container centered">
    <div class="modal-window">
      <div class="modal-header">
        <h1 class="modal-title" id="exampleModalToggleLabel">Modal 1</h1>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer">
        <button class="button primary" data-cx-target="#exampleModalToggle2" data-cx-toggle="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-container centered">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="button primary" data-cx-target="#exampleModalToggle" data-cx-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<button class="button primary" data-cx-target="#exampleModalToggle" data-cx-toggle="modal">Open first modal</button>
{{< /example >}}

### Modal Over Modal

We believe modal over modal is really bad for UX but it is unavoidable sometimes. So...

{{< example >}}
<div class="modal fade" id="exampleUnderModal" aria-hidden="true" aria-labelledby="exampleUnderModalLabel" tabindex="-1">
  <div class="modal-container centered">
    <div class="modal-window">
      <div class="modal-header">
      <div>
        <h1 class="modal-title" id="exampleUnderModalLabel">Modal 1</h1>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        <p>Show a second modal and hide this one with the button below.</p>
        <p>Show a second modal and hide this one with the button below.</p>
        <p>Show a second modal and hide this one with the button below.</p>
        <p>Show a second modal and hide this one with the button below.</p>
      </div>
      <div class="modal-footer">
        <button class="button primary" onclick="openOverModal()">Open Over Modal</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleOverModal" aria-hidden="true" aria-labelledby="exampleOverModalLabel" tabindex="-1">
  <div class="modal-container centered">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleOverModalLabel">Modal 2</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="button primary" data-cx-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<button class="button primary" data-cx-target="#exampleUnderModal" data-cx-toggle="modal">Open first modal</button>
{{< /example >}}
<script>
function openOverModal() {
  const exampleOverModal = new chassis.Modal(document.getElementById('exampleOverModal'))
  exampleOverModal.show()
}
</script>

### Change animation

The `$modal-fade-transform` variable determines the transform state of `.modal-dialog` before the modal fade-in animation, the `$modal-show-transform` variable determines the transform of `.modal-dialog` at the end of the modal fade-in animation.

If you want for example a zoom-in animation, you can set `$modal-fade-transform: scale(.8)`.

### Remove animation

For modals that simply appear rather than fade in to view, remove the `.fade` class from your modal markup.

```html
<div class="modal" tabindex="-1" aria-labelledby="..." aria-hidden="true">
  ...
</div>
```

### Dynamic heights

If the height of a modal changes while it is open, you should call `myModal.handleUpdate()` to readjust the modal's position in case a scrollbar appears.

### Accessibility

Be sure to add `aria-labelledby="..."`, referencing the modal title, to `.modal`. Additionally, you may give a description of your modal dialog with `aria-describedby` on `.modal`. Note that you don't need to add `role="dialog"` since we already add it via JavaScript.

### Embedding YouTube videos

Embedding YouTube videos in modals requires additional JavaScript not in Chassis - CSS to automatically stop playback and more. [See this helpful Stack Overflow post](https://stackoverflow.com/questions/18622508/chassis-3-and-youtube-in-modal) for more information.

## Optional sizes

Modals have three optional sizes, available via modifier classes to be placed on a `.modal-dialog`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.

{{< cx-table "table" >}}
| Size | Class | Modal max-width
| --- | --- | --- |
| Small | `.modal-small` | `300px` |
| Default | <span class="text-body-secondary">None</span> | `500px` |
| Large | `.modal-large` | `800px` |
| Extra large | `.modal-xlarge` | `1140px` |
{{< /cx-table >}}

Our default modal without modifier class constitutes the "medium" size modal.

<div class="cxd-example">
  <button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModalXl">Extra large modal</button>
  <button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModalLg">Large modal</button>
  <button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModalSm">Small modal</button>
</div>

```html
<div class="modal-dialog modal-xlarge">...</div>
<div class="modal-dialog modal-large">...</div>
<div class="modal-dialog modal-small">...</div>
```

<div class="modal fade" id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" aria-hidden="true">
  <div class="modal-container modal-xlarge">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalXlLabel">Extra large modal</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        ...
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalLg" tabindex="-1" aria-labelledby="exampleModalLgLabel" aria-hidden="true">
  <div class="modal-container modal-large">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLgLabel">Large modal</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        ...
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalSm" tabindex="-1" aria-labelledby="exampleModalSmLabel" aria-hidden="true">
  <div class="modal-container modal-small">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalSmLabel">Small modal</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        ...
      </div>
    </div>
  </div>
</div>

## Fullscreen Modal

Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a `.modal-dialog`.

{{< cx-table >}}
| Class | Availability |
| --- | --- |
| `.fullscreen` | Always |
| `.fullscreen-small-down` | `576px` |
| `.fullscreen-medium-down` | `768px` |
| `.fullscreen-large-down` | `992px` |
| `.fullscreen-xlarge-down` | `1200px` |
| `.fullscreen-2xlarge-down` | `1400px` |
{{< /cx-table >}}

<div class="cxd-example">
  <button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModalFullscreen">Full screen</button>
  <button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModalFullscreenSm">Full screen below sm</button>
  <button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModalFullscreenMd">Full screen below md</button>
  <button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModalFullscreenLg">Full screen below lg</button>
  <button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModalFullscreenXl">Full screen below xl</button>
  <button type="button" class="button primary" data-cx-toggle="modal" data-cx-target="#exampleModalFullscreenXxl">Full screen below xxl</button>
</div>

```html
<!-- Full screen modal -->
<div class="modal-container fullscreen-small-down">
  ...
</div>
```

<div class="modal fade" id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
  <div class="modal-container fullscreen">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalFullscreenLabel">Full screen modal</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenSm" tabindex="-1" aria-labelledby="exampleModalFullscreenSmLabel" aria-hidden="true">
  <div class="modal-container fullscreen-small-down">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalFullscreenSmLabel">Full screen below sm</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenMd" tabindex="-1" aria-labelledby="exampleModalFullscreenMdLabel" aria-hidden="true">
  <div class="modal-container fullscreen-medium-down">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalFullscreenMdLabel">Full screen below md</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenLg" tabindex="-1" aria-labelledby="exampleModalFullscreenLgLabel" aria-hidden="true">
  <div class="modal-container fullscreen-large-down">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalFullscreenLgLabel">Full screen below lg</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenXl" tabindex="-1" aria-labelledby="exampleModalFullscreenXlLabel" aria-hidden="true">
  <div class="modal-container fullscreen-xlarge-down">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalFullscreenXlLabel">Full screen below xl</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenXxl" tabindex="-1" aria-labelledby="exampleModalFullscreenXxlLabel" aria-hidden="true">
  <div class="modal-container fullscreen-2xlarge-down">
    <div class="modal-window">
      <div class="modal-header">
        <h4 class="title fs-4" id="exampleModalFullscreenXxlLabel">Full screen below xxl</h4>
        <button type="button" class="close-button" data-cx-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-content">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="button default" data-cx-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

## CSS

{{< partial "generic/docs-css" >}}

### Variables

{{< partial "generic/css-variables" >}}

### Sass Variables

{{< partial "generic/sass-variables" >}}

{{< scss-docs name="modal-variables" file="scss/_variables.scss" >}}

### Sass loops

[Responsive fullscreen modals](#fullscreen-modal) are generated via the `$breakpoints` map and a loop in `scss/_modal.scss`.

{{< scss-docs name="modal-fullscreen-loop" file="scss/_modal.scss" >}}

## Usage

The modal plugin toggles your hidden content on demand, via data attributes or JavaScript. It also overrides default scrolling behavior and generates a `.modal-backdrop` to provide a click area for dismissing shown modals when clicking outside the modal.

### Via data attributes

#### Toggle

Activate a modal without writing JavaScript. Set `data-cx-toggle="modal"` on a controller element, like a button, along with a `data-cx-target="#foo"` or `href="#foo"` to target a specific modal to toggle.

```html
<button type="button" data-cx-toggle="modal" data-cx-target="#myModal">Launch modal</button>
```

#### Dismiss

{{% js-dismiss "modal" %}}

{{< callout warning >}}
While both ways to dismiss a modal are supported, keep in mind that dismissing from outside a modal does not match the [ARIA Authoring Practices Guide dialog (modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/). Do this at your own risk.
{{< /callout >}}

### Via JavaScript

Create a modal with a single line of JavaScript:

```js
const myModal = new chassis.Modal(document.getElementById('myModal'), options)
// or
const myModalAlternative = new chassis.Modal('#myModal', options)
```

### Options

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< cx-table "table" >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | boolean, `'static'` | `true` | Includes a modal-backdrop element. Alternatively, specify `static` for a backdrop which doesn't close the modal when clicked. |
| `focus` | boolean | `true` | Puts the focus on the modal when initialized. |
| `keyboard` | boolean | `true` | Closes the modal when escape key is pressed. |
{{< /cx-table >}}

### Methods

{{< callout danger >}}
{{< partial "callouts/danger-async-methods.md" >}}
{{< /callout >}}

#### Passing options

Activates your content as a modal. Accepts an optional options `object`.

```js
const myModal = new chassis.Modal('#myModal', {
  keyboard: false
})
```

{{< cx-table "table" >}}
| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's modal. (Removes stored data on the DOM element) |
| `getInstance` | _Static_ method which allows you to get the modal instance associated with a DOM element. |
| `getOrCreateInstance` | _Static_ method which allows you to get the modal instance associated with a DOM element, or create a new one in case it wasn't initialized. |
| `handleUpdate` | Manually readjust the modal's position if the height of a modal changes while it is open (i.e. in case a scrollbar appears). |
| `hide` | Manually hides a modal. **Returns to the caller before the modal has actually been hidden** (i.e. before the `hidden.vl.modal` event occurs). |
| `show` | Manually opens a modal. **Returns to the caller before the modal has actually been shown** (i.e. before the `shown.vl.modal` event occurs). Also, you can pass a DOM element as an argument that can be received in the modal events (as the `relatedTarget` property). (i.e. `const modalToggle = document.getElementById('toggleMyModal'); myModal.show(modalToggle)`. |
| `toggle` | Manually toggles a modal. **Returns to the caller before the modal has actually been shown or hidden** (i.e. before the `shown.vl.modal` or `hidden.vl.modal` event occurs). |
{{< /cx-table >}}

### Events

Chassis - CSS's modal class exposes a few events for hooking into modal functionality. All modal events are fired at the modal itself (i.e. at the `<div class="modal">`).

{{< cx-table >}}
| Event | Description |
| --- | --- |
| `hide.vl.modal` | This event is fired immediately when the `hide` instance method has been called. |
| `hidden.vl.modal` | This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete). |
| `hidePrevented.vl.modal` | This event is fired when the modal is shown, its backdrop is `static` and a click outside of the modal is performed. The event is also fired when the escape key is pressed and the `keyboard` option is set to `false`. |
| `show.vl.modal` | This event fires immediately when the `show` instance method is called. If caused by a click, the clicked element is available as the `relatedTarget` property of the event. |
| `shown.vl.modal` | This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete). If caused by a click, the clicked element is available as the `relatedTarget` property of the event. |
{{< /cx-table >}}

```js
const myModalEl = document.getElementById('myModal')
myModalEl.addEventListener('hidden.vl.modal', event => {
  // do something...
})
```
