---
layout: docs
title: Icons
description: Guidance and suggestions for using external icon libraries with Chassis - CSS.
group: content
---

While Chassis - CSS doesn't include an icon set by default, we do have our own comprehensive icon library called Chassis Icons.

See [icon utility]({{< docsref "components/icon" >}}) documentation pages to learn more about using `.icon` utility.

## Chassis Icons

Chassis Icons is a growing collection of open source or originally crafted SVG icons being used in our applications.

Learn more about [Chassis Icons](/icons), how to install and recommended usage

## Alternatives

We've tested and used these icon sets ourselves as preferred alternatives to Chassis - CSS Icons.

{{< markdown >}}
{{< icons.inline >}}
{{- $type := .Get "type" | default "preferred" -}}

{{- range (index .Site.Data.icons $type) }}
- [{{ .name }}]({{ .website }})
{{- end }}
{{< /icons.inline >}}
{{< /markdown >}}

## More options

While we haven't tried these out ourselves, they do look promising and provide multiple formats, including SVG.

{{< markdown >}}
{{< icons.inline type="more" />}}
{{< /markdown >}}
