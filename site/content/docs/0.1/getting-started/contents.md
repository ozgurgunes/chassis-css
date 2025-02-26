---
layout: docs
title: Contents
description: Discover what's included in Chassis - CSS, including our compiled and source code flavors.
group: getting-started
toc: true
---

## Compiled Chassis - CSS

Once downloaded, unzip the compressed folder and you'll see something like this:

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the `dist` folder. -->

```text
chassis/
├── css/
│   ├── chassis-grid.css
│   ├── chassis-grid.css.map
│   ├── chassis-grid.min.css
│   ├── chassis-grid.min.css.map
│   ├── chassis-grid.rtl.css
│   ├── chassis-grid.rtl.css.map
│   ├── chassis-grid.rtl.min.css
│   ├── chassis-grid.rtl.min.css.map
│   ├── chassis-reboot.css
│   ├── chassis-reboot.css.map
│   ├── chassis-reboot.min.css
│   ├── chassis-reboot.min.css.map
│   ├── chassis-reboot.rtl.css
│   ├── chassis-reboot.rtl.css.map
│   ├── chassis-reboot.rtl.min.css
│   ├── chassis-reboot.rtl.min.css.map
│   ├── chassis-utilities.css
│   ├── chassis-utilities.css.map
│   ├── chassis-utilities.min.css
│   ├── chassis-utilities.min.css.map
│   ├── chassis-utilities.rtl.css
│   ├── chassis-utilities.rtl.css.map
│   ├── chassis-utilities.rtl.min.css
│   ├── chassis-utilities.rtl.min.css.map
│   ├── chassis.css
│   ├── chassis.css.map
│   ├── chassis.min.css
│   ├── chassis.min.css.map
│   ├── chassis.rtl.css
│   ├── chassis.rtl.css.map
│   ├── chassis.rtl.min.css
│   └── chassis.rtl.min.css.map
└── js/
    ├── chassis.bundle.js
    ├── chassis.bundle.js.map
    ├── chassis.bundle.min.js
    ├── chassis.bundle.min.js.map
    ├── chassis.esm.js
    ├── chassis.esm.js.map
    ├── chassis.esm.min.js
    ├── chassis.esm.min.js.map
    ├── chassis.js
    ├── chassis.js.map
    ├── chassis.min.js
    └── chassis.min.js.map
```

This is the most basic form of Chassis - CSS: compiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`chassis.*`), as well as compiled and minified CSS and JS (`chassis.min.*`). [Source maps](https://web.dev/articles/source-maps) (`chassis.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`chassis.bundle.js` and minified `chassis.bundle.min.js`) include [Popper](https://popper.js.org/docs/v2/).

### CSS files

Chassis - CSS includes a handful of options for including some or all of our compiled CSS.

{{< cx-table "table" >}}
| CSS files | Layout | Content | Components | Utilities |
| --- | --- | --- | --- | --- |
| `chassis.css`<br> `chassis.min.css`<br> `chassis.rtl.css`<br> `chassis.rtl.min.css` | Included | Included | Included | Included |
| `chassis-grid.css`<br> `chassis-grid.rtl.css`<br> `chassis-grid.min.css`<br> `chassis-grid.rtl.min.css` | [Only grid system]({{< docsref "/layout/grid" >}}) | — | — | [Only flex utilities]({{< docsref "/utilities/flex" >}}) |
| `chassis-utilities.css`<br> `chassis-utilities.rtl.css`<br> `chassis-utilities.min.css`<br> `chassis-utilities.rtl.min.css` | — | — | — | Included |
| `chassis-reboot.css`<br> `chassis-reboot.rtl.css`<br> `chassis-reboot.min.css`<br> `chassis-reboot.rtl.min.css` | — | [Only Reboot]({{< docsref "/content/reboot" >}}) | — | — |
{{< /cx-table >}}

### JS files

Similarly, we have options for including some or all of our compiled JavaScript.

{{< cx-table "table" >}}
| JS Files | Popper |
| --- | --- |
| `chassis.bundle.js`<br> `chassis.bundle.min.js`<br> | Included |
| `chassis.js`<br> `chassis.min.js`<br> | – |
{{< /cx-table >}}

## Chassis - CSS source code

Chassis source code download includes the compiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

```text
chassis/
├── dist/
│   ├── css/
│   └── js/
├── site/
│   └──content/
│      └── docs/
│          └── {{< param docs_version >}}/
│              └── examples/
├── js/
└── scss/
```

The `scss/` and `js/` are the source code for our CSS and JavaScript. The `dist/` folder includes everything listed in the compiled download section above. The `site/content/docs/` folder includes the source code for our hosted documentation, including our live examples of Chassis - CSS usage.

Beyond that, any other included file provides support for packages, license information, and development.
