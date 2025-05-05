/**
 * --------------------------------------------------------------------------
 * Chassis - CSS accordion.js
 * Licensed under MIT (https://github.com/ozgurgunes/chassis-css/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import BaseComponent from './base-component.js'
import { defineJQueryPlugin } from './util/index.js'

const NAME = 'accordion'

class Accordion extends BaseComponent {
  static get NAME() {
    return NAME
  }

  constructor(element, config) {
    super(element, config)

    this._summary = element.querySelector('summary')
    this._content = element.querySelector('.accordion-body')
    this._static = this._element.parentElement.classList.contains('static')

    this._isClosing = false
    this._isOpening = false

    this._animation = null
    this._animationDuration = getComputedStyle(this._element)['transition-duration']
    this._animationTiming = getComputedStyle(this._element)['transition-timing-function']

    this._summary.addEventListener('click', e => this.onClick(e))
  }

  onClick(e) {
    // Stop default behaviour from the browser
    e.preventDefault()
    // Add an overflow on the <details> to avoid content overflowing
    this._element.style.overflow = 'hidden'
    // Check if the element is being closed or is already closed
    if (this._isClosing || !this._element.open) {
      // Collapse other elements
      // console.log(this._element.classList)
      this._openItems = this._element.parentElement.querySelectorAll('details[open]')
      if (!this._static && this._openItems) {
        for (const e of this._openItems) {
          const item = new Accordion(e)
          if (item._element !== this._element) {
            item._element.style.overflow = 'hidden'
            item.close()
          }
        }
      }

      this.open()
    // Check if the element is being opened or is already open
    } else if (this._isOpening || this._element.open) {
      this.close()
    }
  }

  close() {
    // Set the element as "being closed"
    this._isClosing = true

    // Store the current height of the element
    const startHeight = `${this._element.offsetHeight}px`
    // Get the height of the summary
    const endHeight = `${this._summary.offsetHeight}px`

    // If there is already an animation running
    if (this._animation) {
      // Cancel the current animation
      this._animation.cancel()
    }

    // Start a WAAPI animation
    this._element.classList.add('notransition')
    this._animation = this._element.animate(
      {
        // Set the keyframes from the startHeight to endHeight
        height: [startHeight, endHeight]
      },
      {
        duration: Number.parseFloat(this._animationDuration) * 1000,
        easing: this._animationTiming
      }
    )

    // When the animation is complete, call onAnimationFinish()
    this._animation.onfinish = () => this.onAnimationFinish(false)
    // If the animation is cancelled, isClosing variable is set to false
    this._animation.addEventListener('cancel', () => {
      this._isClosing = false
    })
  }

  open() {
    // Apply a fixed height on the element
    this._element.style.height = `${this._element.offsetHeight}px`
    // Force the [open] attribute on the details element
    this._element.open = true
    // Wait for the next frame to call the expand function
    window.requestAnimationFrame(() => this.expand())
  }

  expand() {
    // Set the element as "being expanding"
    this._isOpening = true
    // Get the current fixed height of the element
    const startHeight = `${this._element.offsetHeight}px`
    // Calculate the open height of the element (summary height + content height)
    const endHeight = `${this._summary.offsetHeight + this._content.offsetHeight
    }px`

    // If there is already an animation running
    if (this._animation) {
      // Cancel the current animation
      this._animation.cancel()
    }

    // Start a WAAPI animation
    this._element.classList.add('notransition')
    this._animation = this._element.animate(
      {
        // Set the keyframes from the startHeight to endHeight
        height: [startHeight, endHeight]
      },
      {
        duration: Number.parseFloat(this._animationDuration) * 1000,
        easing: this._animationTiming
      }
    )
    // When the animation is complete, call onAnimationFinish()
    this._animation.onfinish = () => this.onAnimationFinish(true)
    // If the animation is cancelled, isExpanding variable is set to false
    this._animation.addEventListener('cancel', () => {
      this._isOpening = false
    })
  }

  onAnimationFinish(open) {
    // Set the open attribute based on the parameter
    this._element.open = open
    // Clear the stored animation
    this._animation = null
    // Reset isClosing & isExpanding
    this._isClosing = false
    this._isOpening = false
    // Remove the overflow hidden and the fixed height
    this._element.style.height = ''
    this._element.style.overflow = ''
    this._element.classList.remove('notransition')
  }
}

for (const element of document.querySelectorAll('.accordion > details')) {
  // eslint-disable-next-line no-new
  new Accordion(element)
}

defineJQueryPlugin(Accordion)

export default Accordion
