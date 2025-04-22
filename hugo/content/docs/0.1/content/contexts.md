---
layout: docs
title: Contexts
description: Documentation and examples for Chassis - CSS context modularity, including theming content by using context palettes.
group: content
toc: true
---

## Context concept

Chassis - CSS gives developers some content theming structure using [context color palettes]({{< docsref "/customize/color" >}}).

- Use a [context color]({{< docsref "/customize/color" >}}) that themes the entire content.
- Switch between context themes in components.

{{< example >}}
<p>This is body default.</p>
<p class="fg-main">Body default is set to this.</p>
<p class="fg-subtle">This a subtle text in body.</p>
<p class="fg-primary">This text is in primary <q>palette</q> color.</p>
<p class="primary-fg-main">This text is in primary-fg-main <q>context</q> color.</p>
<p class="primary-fg-main primary-bg-main">This is same above with primary-bg-main background.</p>
<p class="primary context bg-even">This paragraph is in primary context palette.</p>
<p class="primary context fg-subtle secondary-bg-even">I'm confused!.</p>
{{< /example >}}
