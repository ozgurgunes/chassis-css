---
layout: docs
title: Badges
description: Documentation and examples for badges, our small count and labeling component.
group: components
toc: true
---

## Examples

Badges scale to match the size of the immediate parent element by using relative font sizing and `em` units. As of v5, badges no longer have focus or hover styles for links.

{{< example >}}
<span class="badge">Base</span>
<span class="badge">24</span>
<span class="badge circle">24</span>
<span class="badge default">Default</span>
<span class="badge default">24</span>
<span class="badge default circle">24</span>
<span class="badge primary">Primary</span>
<span class="badge primary">24</span>
<span class="badge primary circle">24</span>
{{< /example >}}

### Icons

{{< example >}}
<span class="badge">
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg> Base
</span>
<span class="badge default">
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg> Default
</span>
<span class="badge primary">
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg> Primary
</span>
<span class="badge secondary">
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg> Secondary
</span>
{{< /example >}}

### Buttons

Badges can be used as part of links or buttons to provide a counter.

{{< example >}}
<button type="button" class="button primary">
  Notifications 
  <span class="badge secondary circle"
    role="status" aria-label="new notifications">2</span>
</button>
{{< /example >}}

Unless the context is clear (as with the “Notifications” example, where it is understood that the “2” is the number of notifications), consider including additional context with a visually hidden piece of additional text.

{{< callout info >}}
Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the situation, use apropriate aria definitions to avoid these badges may seem like random additional words or numbers at the end of a sentence, link, or button.
{{</ callout >}}

### Positioned

Use utilities to modify a `.badge` and position it in the corner of a link or button.

{{< example >}}
<button type="button" class="button primary position-relative">
  Inbox
  <span class="badge secondary position-absolute top-0 start-100 translate-middle">
    99+ <span class="visually-hidden">
    unread messages</span>
  </span>
</button>
{{< /example >}}

You can also replace the `.badge` class with a few more utilities without a count for a more generic indicator.

{{< example >}}
<button type="button" class="button primary position-relative">
  Profile
  <span class="badge secondary position-absolute top-0 start-100 translate-middle p-small border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
</button>
{{< /example >}}

## Context

Badge extends `%context` so all context colors are available to use.

{{< example >}}
<div class="d-flex flex-wrap gap-small">{{< badge.inline >}}
{{- range (index $.Site.Data "context-colors") }}
<span class="badge {{ .name }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

### Outline

{{< example >}}
<div class="d-flex flex-wrap gap-small">{{< badge.inline >}}
{{- range (index $.Site.Data "context-colors") }}
  <span class="badge {{ .name }} outline">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
</div>
{{< /example >}}

### Smooth


{{< example >}}
<div class="d-flex flex-wrap gap-small">{{< badge.inline >}}
{{- range (index $.Site.Data "context-colors") }}
  <span class="badge {{ .name }} smooth">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Sizes

Use `.large` & `.small` classes to adjust badge sizes.

{{< example >}}
<span class="badge small primary circle">2</span>
<span class="badge primary circle">2</span>
<span class="badge large primary circle">2</span>
<span class="vr"></span>
<span class="badge small primary">Small</span>
<span class="badge primary">Medium</span>
<span class="badge large primary">Large</span>
<span class="vr"></span>
<span class="badge small primary">
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Small
</span>
<span class="badge primary">
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Medium
</span>
<span class="badge large primary">
  <svg class="icon"><use xlink:href="#info-circle-solid"/></svg>
  Large
</span>
{{< /example >}}

### Adaptive

Use `.adaptive` class to make badge adjust it size according to parent automatically.

{{< example >}}
<h3>
  Example heading 
  <span class="badge primary badge-adaptive"><svg class="icon"><use xlink:href="#info-circle-solid"/></svg>Adaptive</span> 
  <span class="badge primary large">Large</span>
</h3> 
<hr>
<h6>
  Example heading 
  <span class="badge primary badge-adaptive">Adaptive</span> 
  <span class="badge primary small">Small</span>
</h6> 
{{< /example >}}

## Use Cases

### Headings

{{< example >}}
<div class="badge-adaptive">
<h1>Example heading <span class="badge primary">New</span></h1>
<h2>Example heading <span class="badge primary">New</span></h2>
<h3>Example heading <span class="badge primary">New</span></h3>
<h4>Example heading <span class="badge primary">New</span></h4>
<h5>Example heading <span class="badge primary">New</span></h5>
<h6>Example heading <span class="badge primary">New</span></h6>
</div>
<hr>
<h3>Example heading 
<span class="badge primary badge-adaptive">Adaptive</span> 
<span class="badge primary small">Small</span> 
<span class="badge primary">Medium</span> 
<span class="badge primary large">Large</span></h3>
{{< /example >}}


### Custom Corners

Use the utility classes to give them custom `border-radius`.

{{< example >}}
<span class="badge primary rounded-zero">Sharp</span>
<span class="badge primary rounded-small">Blunt</span>
<span class="badge primary rounded-medium">Soft</span>
<span class="badge primary rounded-circle">Pill</span>
{{< /example >}}

## CSS

{{< partial "generic/docs-css" >}}

### Variables

{{< partial "generic/css-variables" >}}

### Sass Variables

{{< partial "generic/sass-variables" >}}

{{< scss-docs name="badge-variables" file="scss/_variables.scss" >}}
