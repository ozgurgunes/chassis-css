---
layout: docs
title: Notifications
description: Provide contextual feedback messages for typical user actions with the handful of available and flexible notification messages.
group: components
toc: true
---

## Examples

Notifications are available for any length of text, as well as an optional close button. For proper styling, use one of the eight **required** contextual classes (e.g., `.notification-success`). For inline dismissal, use the [notifications JavaScript plugin](#dismissing).

{{< callout info >}}
**Heads up!** As of v0.1.0, the `notification-variant()` Sass mixin is deprecated. Notification variants now have their CSS variables overridden in [a Sass loop](#sass-loops).
{{< /callout >}}

{{< example >}}
{{< notifications.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<div class="notification {{ .name }}" role="alert">
  A simple {{ .name }} notification — check it out!
</div>{{- end -}}
{{< /notifications.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

### Live example

Click the button below to show an notification (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button.

{{< example stackblitz_add_js="true" >}}
<div id="liveNotificationPlaceholder"></div>
<button type="button" class="button primary" id="liveNotificationButton">Show live notification</button>
{{< /example >}}

The following JavaScript used to trigger the live notification demo:

{{< js-docs name="live-notification" file="site/assets/js/partials/snippets.js" >}}

### Links

Links in notifications automatically adapt its context color and gets increased `font-weight`.

{{< example >}}
{{< notifications.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<div class="notification {{ .name }}" role="alert">
  A simple {{ .name }} notification with <a href="#" class="notification-link">an example link</a>. Give it a click if you like.
</div>{{ end -}}
{{< /notifications.inline >}}
{{< /example >}}

### Icon Use

Use [flexbox utilities]({{< docsref "/utilities/flex" >}}) and [Chassis Icons]({{< param icons >}}) to create notifications with icons. Depending on your icons and content, you may want to add more utilities or custom styles.

{{< example >}}
<div class="notification success d-flex align-items-center" role="alert">
  <svg class="icon notification-icon"><use xlink:href="#exclamation-triangle-solid"/></svg>
  <p>An example notification with an icon and <a href="#">a link</a>!</p>
</div>
<div class="notification success d-flex align-items-center" role="alert">
  <svg class="icon notification-icon" area-hidden="true"><use xlink:href="#check-circle-solid"/></svg>
  <div>An example notification with an icon and a <a href="#" class="font-normal default-link-main">default link</a>!</div>
  <svg class="icon"><use xlink:href="#check-circle-solid"></svg>
</div>
{{< /example >}}

### Solid Style

Use the `.solid` class to give notifications some emphassis.

{{< example >}}
{{< notifications.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<div class="notification {{ .name }} solid d-flex align-items-center fade show" role="alert">
  <svg class="icon notification-icon"><use xlink:href="#exclamation-triangle-solid"/></svg>
  <div>A simple {{ .name }} solid notification with <a href="#">an example link</a>.</div>
  <button type="button" class="close-button" data-cx-dismiss="notification" aria-label="Close"></button>
</div>{{ end -}}
{{< /notifications.inline >}}
{{< /example >}}

### Additional content

Notifications can also contain additional HTML elements like headings, paragraphs and dividers.

{{< example >}}
<div class="notification success d-flex fade show" role="alert">
  <svg class="icon notification-icon" fill="currentColor">
    <use xlink:href="#check-solid"/>
  </svg>
  <div>
    <h4 class="title">A success notification!</h4>
    <p>This example text is going to run a bit longer so that you can see how spacing within an notification works with this kind of content.</p>
    <hr>
    <p>Component <code>p:last-item</code> margins are set to <code>0</code> by default.</p>
  </div>
  <button type="button" class="close-button" data-cx-dismiss="notification" aria-label="Close"></button>
</div>

<div class="notification success solid d-flex pe-medium fade show" role="alert">
  <button type="button" class="close-button" data-cx-dismiss="notification" aria-label="Close"></button>
<svg class="icon notification-icon" fill="currentColor">
    <use xlink:href="#check-solid"/>
  </svg>
  <div>
    <h4 class="title">A success notification with flag class!</h4>
    <p>This example text is going to run a bit longer so that you can see how spacing within an notification works with this kind of content.</p>
    <hr class="mb-xsmall">
    <p>You can use margin utilities to keep things nice and tidy.</p>
  </div>
</div>
{{< /example >}}

Need more than one icon for your notifications? Consider using more Chassis - CSS Icons and making a local SVG sprite like so to easily reference the same icons repeatedly.

{{< example >}}
<div class="notification primary d-flex" role="alert">
  <svg class="icon notification-icon" role="img" fill="currentColor" aria-label="Info:"><use xlink:href="#info-circle-solid"/></svg>
  <div>
    An example notification with an icon
  </div>

</div>
<div class="notification success d-flex align-middle" role="alert">
  <svg class="icon notification-icon" role="img" fill="currentColor" aria-label="Success:"><use xlink:href="#check-circle-solid"/></svg>
  <div>
    An example success notification with an icon
  </div>
</div>
<div class="notification warning flag d-flex" role="alert">
  <svg class="icon notification-icon" role="img" fill="currentColor" aria-label="Warning:"><use xlink:href="#exclamation-circle-solid"/></svg>
  <div>
    An example warning notification with an icon
  </div>
</div>
<div class="notification danger flag d-flex" role="alert">
  <svg class="icon notification-icon" role="img" fill="currentColor" aria-label="Danger:"><use xlink:href="#exclamation-triangle-solid"/></svg>
  <div>
  <h5 class="title">
    An example danger notification with an icon
  </h5>
  <p class="fg-subtle">
    An example danger notification with an icon
  </p></div>
</div>
{{< /example >}}

### Dismissing

Using the notification JavaScript plugin, it's possible to dismiss any notification inline. Here's how:

- Be sure you've loaded the notification plugin, or the compiled Chassis - CSS JavaScript.
- Add a [close button]({{< docsref "/components/close-button" >}}) and the `.notification-dismissible` class, which adds extra padding to the right of the notification and positions the close button.
- On the close button, add the `data-cx-dismiss="notification"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it for proper behavior across all devices.
- To animate notifications when dismissing them, be sure to add the `.fade` and `.show` classes.

You can see this in action with a live demo:

{{< example >}}
<div class="notification warning dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close-button" data-cx-dismiss="notification" aria-label="Close"></button>
</div>
{{< /example >}}

{{< callout warning >}}
When an notification is dismissed, the element is completely removed from the page structure. If a keyboard user dismisses the notification using the close button, their focus will suddenly be lost and, depending on the browser, reset to the start of the page/document. For this reason, we recommend including additional JavaScript that listens for the `closed.cx.notification` event and programmatically sets `focus()` to the most appropriate location in the page. If you're planning to move focus to a non-interactive element that normally does not receive focus, make sure to add `tabindex="-1"` to the element.
{{< /callout >}}

## CSS

{{< partial "generic/docs-css" >}}

### Variables

{{< partial "generic/css-variables" >}}

### Sass Variables

{{< partial "generic/sass-variables" >}}

{{< scss-docs name="notification-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="component-placeholder-selector" file="/scss/placeholders/_component.scss" >}}

## JavaScript behavior

### Initialize

Initialize elements as notifications

```js
const notificationList = document.querySelectorAll('.notification')
const notifications = [...notificationList].map(element => new chassis.Notification(element))
```

{{< callout info >}}
For the sole purpose of dismissing an notification, it isn't necessary to initialize the component manually via the JS API. By making use of `data-cx-dismiss="notification"`, the component will be initialized automatically and properly dismissed.

See the [triggers](#triggers) section for more details.
{{< /callout >}}

### Triggers

{{% js-dismiss "notification" %}}

**Note that closing an notification will remove it from the DOM.**

### Methods

You can create an notification instance with the notification constructor, for example:

```js
const cxNotification = new chassis.Notification('#myNotification')
```

This makes an notification listen for click events on descendant elements which have the `data-cx-dismiss="notification"` attribute. (Not necessary when using the data-api’s auto-initialization.)

{{< cx-table >}}
| Method | Description |
| --- | --- |
| `close` | Closes an notification by removing it from the DOM. If the `.fade` and `.show` classes are present on the element, the notification will fade out before it is removed. |
| `dispose` | Destroys an element's notification. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the notification instance associated to a DOM element. For example: `chassis.Notification.getInstance(notification)`. |
| `getOrCreateInstance` | Static method which returns an notification instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `chassis.Notification.getOrCreateInstance(element)`. |
{{< /cx-table >}}

Basic usage:

```js
const notification = chassis.Notification.getOrCreateInstance('#myNotification')
notification.close()
```

### Events

Chassis - CSS's notification plugin exposes a few events for hooking into notification functionality.

{{< cx-table >}}
| Event | Description |
| --- | --- |
| `close.cx.notification` | Fires immediately when the `close` instance method is called. |
| `closed.cx.notification` | Fired when the notification has been closed and CSS transitions have completed. |
{{< /cx-table >}}

```js
const myNotification = document.getElementById('myNotification')
myNotification.addEventListener('closed.cx.notification', event => {
  // do something, for instance, explicitly move focus to the most appropriate element,
  // so it doesn't get lost/reset to the start of the page
  // document.getElementById('...').focus()
})
```
