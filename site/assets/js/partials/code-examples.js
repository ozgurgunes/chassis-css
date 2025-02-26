// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*
 * JavaScript for Chassis - CSS's docs (https://getchassis.com/)
 * Copyright 2025 Chassis
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global chassis: false */

import ClipboardJS from 'clipboard'

export default () => {
  // Insert copy to clipboard button before .highlight
  const buttonTitle = 'Copy to clipboard'
  const buttonEdit = 'Edit on StackBlitz'

  const buttonHtml = [
    '<div class="cxd-code-snippet">',
    '  <div class="cxd-clipboard">',
    '    <button type="button" class="button-clipboard">',
    '      <svg class="bi" role="img" aria-label="Copy"><use xlink:href="#clipboard"/></svg>',
    '    </button>',
    '  </div>',
    '</div>'
  ].join('')

  // Wrap programmatically code blocks and add copy button.
  document.querySelectorAll('.highlight')
    .forEach(element => {
      // Ignore examples made by shortcode
      if (!element.closest('.cxd-example-snippet')) {
        element.insertAdjacentHTML('beforebegin', buttonHtml)
        element.previousElementSibling.append(element)
      }
    })

  /**
   *
   * @param {string} selector
   * @param {string} title
   */
  function snippetButtonTooltip(selector, title) {
    document.querySelectorAll(selector).forEach(button => {
      chassis.Tooltip.getOrCreateInstance(button, { title })
    })
  }

  snippetButtonTooltip('.button-clipboard', buttonTitle)
  snippetButtonTooltip('.button-edit', buttonEdit)

  const clipboard = new ClipboardJS('.button-clipboard', {
    target: trigger => trigger.closest('.cxd-code-snippet').querySelector('.highlight'),
    text: trigger => trigger.closest('.cxd-code-snippet').querySelector('.highlight').textContent.trimEnd()
  })

  clipboard.on('success', event => {
    const iconFirstChild = event.trigger.querySelector('.bi').firstElementChild
    const tooltipbutton = chassis.Tooltip.getInstance(event.trigger)
    const namespace = 'http://www.w3.org/1999/xlink'
    const originalXhref = iconFirstChild.getAttributeNS(namespace, 'href')
    const originalTitle = event.trigger.title

    tooltipbutton.setContent({ '.tooltip-inner': 'Copied!' })
    event.trigger.addEventListener('hidden.cx.tooltip', () => {
      tooltipbutton.setContent({ '.tooltip-inner': buttonTitle })
    }, { once: true })
    event.clearSelection()
    iconFirstChild.setAttributeNS(namespace, 'href', originalXhref.replace('clipboard', 'check2'))

    setTimeout(() => {
      iconFirstChild.setAttributeNS(namespace, 'href', originalXhref)
      event.trigger.title = originalTitle
    }, 2000)
  })

  clipboard.on('error', event => {
    const modifierKey = /mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
    const fallbackMsg = `Press ${modifierKey}C to copy`
    const tooltipbutton = chassis.Tooltip.getInstance(event.trigger)

    tooltipbutton.setContent({ '.tooltip-inner': fallbackMsg })
    event.trigger.addEventListener('hidden.cx.tooltip', () => {
      tooltipbutton.setContent({ '.tooltip-inner': buttonTitle })
    }, { once: true })
  })
}
