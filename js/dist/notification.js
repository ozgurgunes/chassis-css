/*!
  * Chassis notification.js v0.1.0 (https://github.com/ozgurgunes/chassis-css/)
  * Copyright 2025 Ozgur Gunes, Chassis and Bootstrap contributors
  * Licensed under MIT (https://github.com/ozgurgunes/chassis-css/raw/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./base-component.js'), require('./dom/event-handler.js'), require('./util/component-functions.js'), require('./util/index.js')) :
  typeof define === 'function' && define.amd ? define(['./base-component', './dom/event-handler', './util/component-functions', './util/index'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Notification = factory(global.BaseComponent, global.EventHandler, global.ComponentFunctions, global.Index));
})(this, (function (BaseComponent, EventHandler, componentFunctions_js, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Chassis notification.js
   * Licensed under MIT (https://github.com/ozgurgunes/chassis-css/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'notification';
  const DATA_KEY = 'cx.notification';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_CLOSE = `close${EVENT_KEY}`;
  const EVENT_CLOSED = `closed${EVENT_KEY}`;
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';

  /**
   * Class definition
   */

  class Notification extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME;
    }

    // Public
    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
      if (closeEvent.defaultPrevented) {
        return;
      }
      this._element.classList.remove(CLASS_NAME_SHOW);
      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE);
      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    }

    // Private
    _destroyElement() {
      this._element.remove();
      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Notification.getOrCreateInstance(this);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  }

  /**
   * Data API implementation
   */

  componentFunctions_js.enableDismissTrigger(Notification, 'close');

  /**
   * jQuery
   */

  index_js.defineJQueryPlugin(Notification);

  return Notification;

}));
//# sourceMappingURL=notification.js.map
