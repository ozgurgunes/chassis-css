// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Chassis - CSS's docs (https://ozgurgunes.github.io/chassis-css//)
 * Copyright 2025 Chassis
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

import docsearch from '@docsearch/js'
// https://gohugo.io/hugo-pipes/js/#options
// eslint-disable-next-line import/no-unresolved
import { appId, apiKey, indexName } from '@params';

(() => {
  const searchElement = document.getElementById('docsearch')

  if (!searchElement) {
    return
  }

  const siteDocsVersion = '0.2' // searchElement.getAttribute('data-cxd-docs-version')

  docsearch({
    apiKey,
    indexName,
    appId,
    container: searchElement,
    searchParameters: {
      facetFilters: ['version:5.3']
    },
    transformItems(items) {
      return items.map(item => {
        const liveUrl = 'https://getbootstrap.com/'

        item.url = window.location.origin.startsWith(liveUrl) ?
          // On production, return the result as is
          item.url :
          // On development or Netlify, replace `item.url` with a trailing slash,
          // so that the result link is relative to the server root
          item.url.replace(liveUrl, '/').replace('5.3', siteDocsVersion)

        // Prevent jumping to first header
        if (item.anchor === 'content') {
          item.url = item.url.replace(/#content$/, '')
          item.anchor = null
        }

        return item
      })
    }
  })
})()
