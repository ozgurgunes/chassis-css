// NOTICE!!! Initially embedded in our docs this JavaScript
// file contains elements that can help you create reproducible
// use cases in StackBlitz for instance.
// In a real project please adapt this content to your needs.
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Chassis - CSS's docs (https://ozgurgunes.github.io/chassis-css//)
 * Copyright 2025 Chassis
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

import sdk from '@stackblitz/sdk'
// https://gohugo.io/hugo-pipes/js/#options
import {
  cssCdn, docsVersion, jsBundleCdn, jsSnippetFile
} from '@params' // eslint-disable-line import/no-unresolved

// Open in StackBlitz logic
document.querySelectorAll('.button-edit').forEach(button => {
  button.addEventListener('click', event => {
    const codeSnippet = event.target.closest('.cxd-code-snippet')
    const exampleEl = codeSnippet.querySelector('.cxd-example')

    const htmlSnippet = exampleEl.innerHTML
    const jsSnippet = codeSnippet.querySelector('.button-edit').getAttribute('data-sb-js-snippet')
    // Get extra classes for this example
    const classes = Array.from(exampleEl.classList).join(' ')

    openBootstrapSnippet(htmlSnippet, jsSnippet, classes)
  })
})

const openBootstrapSnippet = (htmlSnippet, jsSnippet, classes) => {
  const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="${cssCdn}" rel="stylesheet">
    <link href="https://ozgurgunes.github.io/chassis-css//docs/${docsVersion}/assets/css/docs.css" rel="stylesheet">
    <title>Chassis - CSS Example</title>
    <${'script'} defer src="${jsBundleCdn}"></${'script'}>
  </head>
  <body class="p-medium m-0 border-0 ${classes}">
    <!-- Example Code Start-->
${htmlSnippet.trimStart().replace(/^/gm, '    ').replace(/^ {4}$/gm, '').trimEnd()}
    <!-- Example Code End -->
  </body>
</html>
`

  const project = {
    files: {
      'index.html': indexHtml,
      ...(jsSnippet && { 'index.js': jsSnippetFile })
    },
    title: 'Chassis - CSS Example',
    description: `Official example from ${window.location.href}`,
    template: jsSnippet ? 'javascript' : 'html',
    tags: ['chassis']
  }

  sdk.openProject(project, { openFile: 'index.html' })
}
