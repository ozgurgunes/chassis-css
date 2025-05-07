/**
 * --------------------------------------------------------------------------
 * Chassis - CSS accordion.js
 * Licensed under MIT (https://github.com/ozgurgunes/chassis-css/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import BaseComponent from './base-component.js'
import SelectorEngine from './dom/selector-engine.js'
import EventHandler from './dom/event-handler.js'
import { defineJQueryPlugin } from './util/index.js'

const NAME = 'accordion'

const DATA_KEY = 'cx.accordion'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const EVENT_OPEN = `open${EVENT_KEY}`
const EVENT_OPENED = `opened${EVENT_KEY}`
const EVENT_CLOSE = `close${EVENT_KEY}`
const EVENT_CLOSED = `closed${EVENT_KEY}`

const SELECTOR_DETAILS = '.accordion > details'
const SELECTOR_SUMMARY = 'summary'
const SELECTOR_CONTENT = '.accordion-body'
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

class Accordion extends BaseComponent {
  static get NAME() {
    return NAME
  }

  constructor(element, config) {
    super(element, config)

    this._summary = SelectorEngine.findOne(SELECTOR_SUMMARY, element)
    this._content = SelectorEngine.findOne(SELECTOR_CONTENT, element)

    this._isTransitioning = false

    const observer = new MutationObserver(mutationsList => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'open') {
          if (this._element.open) {
            this.open()
          } else {
            this.close()
          }
        }
      }
    })

    observer.observe(this._element, { attributes: true })
  }

  open() {
    if (this._isTransitioning) {
      return
    }

    const startEvent = EventHandler.trigger(this._element, EVENT_OPEN)
    if (startEvent.defaultPrevented) {
      return
    }

    this._isTransitioning = true
    this._summary.style['box-shadow'] = 'none'
    this._element.style.overflow = 'hidden'
    this._element.style.height = `${this._summary.offsetHeight}px`
    this._element.style.height = `${this._summary.offsetHeight + this._content.offsetHeight}px`

    const complete = () => {
      this._isTransitioning = false
      this._summary.style['box-shadow'] = ''
      this._element.style.overflow = ''
      this._element.style.height = ''
      EventHandler.trigger(this._element, EVENT_OPENED)
    }

    this._queueCallback(complete, this._element, true)
  }

  close() {
    if (this._isTransitioning) {
      return
    }

    const startEvent = EventHandler.trigger(this._element, EVENT_CLOSE)
    if (startEvent.defaultPrevented) {
      return
    }

    this._isTransitioning = true
    this._element.style.height = `${this._summary.offsetHeight + this._content.offsetHeight}px`
    this._element.style.height = `${this._summary.offsetHeight}px`

    const complete = () => {
      this._isTransitioning = false
      this._element.style.height = ''
      EventHandler.trigger(this._element, EVENT_CLOSED)
    }

    this._queueCallback(complete, this._element, true)
  }
}

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DETAILS, () => {
  for (const element of SelectorEngine.find(SELECTOR_DETAILS)) {
    Accordion.getOrCreateInstance(element)
  }
})

defineJQueryPlugin(Accordion)

export default Accordion
