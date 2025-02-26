---
layout: docs
title: Z-index
description: While not a part of Chassis - CSS's grid system, z-indexes play an important part in how our components overlay and interact with one another.
group: layout
---

Several Chassis - CSS components utilize `z-index`, the CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in Chassis - CSS that's been designed to properly layer navigation, tooltips and popovers, modals, and more.

These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts. We need a standard set of these across our layered components—tooltips, popovers, navbars, dropdowns, modals—so we can be reasonably consistent in the behaviors. There's no reason we couldn't have used `100`+ or `500`+.

We don't encourage customization of these individual values; should you change one, you likely need to change them all.

{{< scss-docs name="zindex-stack" file="scss/_variables.scss" >}}

To handle overlapping borders within components (e.g., buttons and inputs in input groups), we use low single digit `z-index` values of `1`, `2`, and `3` for default, hover, and active states. On hover/focus/active, we bring a particular element to the forefront with a higher `z-index` value to show their border over the sibling elements.

## Z-index scales

There are two `z-index` scales in Chassis - CSS—elements within a component and overlay components.

### Component elements

- Some components in Chassis - CSS are built with overlapping elements to prevent double borders without modifying the `border` property. For example, button groups, input groups, and pagination.
- These components share a standard `z-index` scale of `0` through `3`.
- `0` is default (initial), `1` is `:hover`, `2` is `:active`/`.active`, and `3` is `:focus`.
- This approach matches our expectations of highest user priority. If an element is focused, it's in view and at the user's attention. Active elements are second highest because they indicate state. Hover is third highest because it indicates user intent, but nearly _anything_ can be hovered.

### Overlay components

Chassis - CSS includes several components that function as an overlay of some kind. This includes, in order of highest `z-index`, dropdowns, fixed and sticky navbars, modals, tooltips, and popovers. These components have their own `z-index` scale that begins at `1000`. This starting number was chosen arbitrarily and serves as a small buffer between our styles and your project's custom styles.

Each overlay component increases its `z-index` value slightly in such a way that common UI principles allow user focused or hovered elements to remain in view at all times. For example, a modal is document blocking (e.g., you cannot take any other action save for the modal's action), so we put that above our navbars.

Learn more about this in our [`z-index` utilities page]({{< docsref "/utilities/z-index" >}}).

