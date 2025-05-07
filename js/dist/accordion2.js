/*!
  * Chassis accordion2.js v0.1.0 (https://github.com/ozgurgunes/chassis-css/)
  * Copyright 2025 Ozgur Gunes, Chassis and Bootstrap contributors
  * Licensed under MIT (https://github.com/ozgurgunes/chassis-css/raw/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./base-component.js')) :
  typeof define === 'function' && define.amd ? define(['./base-component'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Accordion2 = factory(global.BaseComponent));
})(this, (function (BaseComponent) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Chassis - CSS accordion.js
   * Licensed under MIT (https://github.com/ozgurgunes/chassis-css/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  // import EventHandler from './dom/event-handler.js'
  // import SelectorEngine from './dom/selector-engine.js'

  const NAME = 'accordion';
  // const DATA_KEY = 'cx.accordion'
  // const EVENT_KEY = `.${DATA_KEY}`
  // const DATA_API_KEY = '.data-api'

  // const EVENT_OPEN = `open${EVENT_KEY}`
  // const EVENT_OPENED = `opened${EVENT_KEY}`
  // const EVENT_CLOSE = `close${EVENT_KEY}`
  // const EVENT_CLOSED = `closed${EVENT_KEY}`
  // const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

  // const CLASS_NAME_OPEN = 'open'
  // const CLASS_NAME_CLOSE = 'collapse'
  // const CLASS_NAME_CLOSING = 'collapsing'
  // const CLASS_NAME_CLOSED = 'collapsed'
  // const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_CLOSE} .${CLASS_NAME_CLOSING}`
  // const CLASS_NAME_HORIZONTAL = 'collapse-horizontal'

  // const SELECTOR_ACTIVES = '.open, .closing'

  class Accordion extends BaseComponent {
    static get NAME() {
      return NAME;
    }
    constructor(element, config) {
      super(element, config);
      // Store the <details> element
      this.complete = () => {
        this._isTransitioning = false;
        this._content.style.height = '';
      };
      this._summary = element.querySelector('summary');
      // Store the <div class="content"> element
      this._content = element.querySelector('.accordion-body');
      // Store if the element is transitioning
      this._isTransitioning = false;
      // Detect if the parent element is static
      this._isStatic = this._element.parentElement.classList.contains('static');

      // Replace the Proxy with a MutationObserver to watch for changes to the `open` attribute
      const observer = new MutationObserver(mutationsList => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'open') {
            if (this._element.open) {
              this.open();
            } else {
              this.close();
            }
          }
        }
      });
      observer.observe(this._element, {
        attributes: true
      });
    }
    open() {
      if (this._isTransitioning) {
        return;
      }
      this._isTransitioning = true;
      this._element.style.height = `${this._summary.offsetHeight}px`;
      this._element.style.height = `${this._summary.offsetHeight + this._content.offsetHeight}px`;
      this._queueCallback(this.complete(true), this._element, true);
    }
    close() {
      if (this._isTransitioning) {
        return;
      }
      this._isTransitioning = true;
      this._element.style.height = `${this._summary.offsetHeight + this._content.offsetHeight}px`;
      this._element.style.height = `${this._summary.offsetHeight}px`;
      this._queueCallback(this.complete(false), this._element, true);
    }
  }
  for (const element of document.querySelectorAll('.accordion > details')) {
    Accordion.getOrCreateInstance(element);
  }

  return Accordion;

}));
//# sourceMappingURL=accordion2.js.map
