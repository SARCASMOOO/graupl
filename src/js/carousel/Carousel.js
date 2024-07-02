/**
 * @file
 * The carousel class.
 */

import { addClass, removeClass } from "../domHelpers.js";
import { isQuerySelector, isValidClassList, isValidInstance, isValidType } from "../validate.js";

class Carousel {
  /**
   * The HTML elements for the carousel in the DOM.
   *
   * @protected
   *
   * @type {Object<HTMLElement>}
   */
  _dom = {
    carousel: null,
    carouseItems: [],
    autoplayButton: null,
    nextButton: null,
    previousButton: null,
  };

  /**
   * The query selectors used by the carousel to populate the dom.
   *
   * @protected
   *
   * @property {string} carouselItems - The query selector string for carousel items.
   */
  _selectors = {
    carouselItems: ".carousel-item",
  }

  /**
   * The class(es) to apply when a carousel item is active.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _activeClass = "active";

  /**
   * The index of the currently active carousel item.
   *
   * @protected
   *
   * @type {number}
   */
  _currentItem = 0;

  /**
   * A flag to indicate if the carousel is currently playing.
   *
   * @protected
   *
   * @type {boolean}
   */
  _autoplay = true;

  /**
   * An array of error messages generated by the carousel.
   *
   * @protected
   *
   * @type {string[]}
   */
  _errors = [];

  /**
   * Contructs a new `Carousel`.
   *
   * @param {object}       options                                         - The options for the generated carousel.
   * @param {HTMLElement}  options.carouselElement                         - The carousel element in the DOM.
   * @param {string}       [options.carouselItemSelector = .carousel-item] - The query selector string for carousel items.
   * @param {string}       [options.activeClass = active]                 - The class(es) to apply when a carousel item is active.
   * @param {?HTMLElement} [options.autoplayButton = null]                 - The autoplay button for the carousel in the DOM.
   * @param {?HTMLElement} [options.nextButton = null]                     - The next button for the carousel in the DOM.
   * @param {?HTMLElement} [options.previousButton = null]                 - The previous button for the carousel in the DOM.
   * @param {boolean}      [options.autoplay = true]                       - A flag to indicate if the carousel should autoplay.
   * @param {boolean}      [options.initialize = false]                    - A flag to initialize the carousel immediately upon creation.
   */
  constructor({
    carouselElement,
    carouselItemSelector = ".carousel-item",
    activeClass = "active",
    autoplayButton = null,
    nextButton = null,
    previousButton = null,
    autoplay = true,
    initialize = false,
  }) {
    this._dom.carousel = carouselElement;
    this._dom.autoplayButton = autoplayButton;
    this._dom.nextButton = nextButton;
    this._dom.previousButton = previousButton;
    this._activeClass = activeClass;
    this._selectors.carouselItems = carouselItemSelector;
    this._autoplay = autoplay;

    if (initialize) {
      this.initialize();
    }
  }

  /**
   * Initializes the carousel.
   */
  initialize() {
    try {
      if (!this._validate()) {
        throw new Error(
          `Graupl Carousel: cannot initialize carousel. The following errors have been found:\n - ${this.errors.join(
            "\n - "
          )}`
        );
      }

      this.dom.carouselItems = this.dom.carousel.querySelectorAll(this.selectors.carouselItems);

      this._handleClick();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * The HTML elements for the carousel in the DOM.
   *
   * @readonly
   *
   * @type {Object<HTMLElement>}
   *
   * @see _dom
   */
  get dom() {
    return this._dom;
  }

  /**
   * The query selectors used by the carousel to populate the dom.
   *
   * @readonly
   *
   * @type {Object<string>}
   *
   * @see _selectors
   */
  get selectors() {
    return this._selectors;
  }

  /**
   * The class(es) to apply when a carousel item is active.
   *
   * @type {string|string[]}
   *
   * @see _activeClass
   */
  get activeClass() {
    return this._activeClass;
  }
  /**
   * The index of the currently active carousel item.
   *
   * @type {number}
   *
   * @see _currentItem
   */
  get currentItem() {
    return this._currentItem;
  }

  /**
   * The currently active carousel item.
   *
   * @readonly
   *
   * @type {HTMLElement}
   */
  get currentCarouselItem() {
    return this.dom.carouselItems[this.currentItem];
  }

  /**
   * A flag to indicate if the carousel is currently playing.
   *
   * @type {boolean}
   *
   * @see _autoplay
   */
  get autoplay() {
    return this._autoplay;
  }

  set activeClass(value) {
    isValidClassList({ activeClass: value });

    if (this._activeClass !== value) {
      this._activeClass = value;
    }
  }

  set currentItem(value) {
    isValidType("number", { value });

    if (value === this.currentItem) {
      return;
    }

    if (value < 0) {
      this._currentItem = 0;
    } else if (value >= this.dom.carouselItems.length) {
      this._currentItem = this.dom.carouselItems.length - 1;
    } else {
      this._currentItem = value;
    }
  }

  set autoplay(value) {
    isValidType("boolean", { value });

    if (this._autoplay !== value) {
      this._autoplay = value;
    }
  }

  /**
   * Validates all aspects of the carousel to ensure proper functionality.
   *
   * @protected
   *
   * @return {boolean} - The results of the validation.
   */
  _validate() {
    let check = true;

    // HTML element checks.
    let htmlElementChecks = isValidInstance(HTMLElement, { carouselElement: this.dom.carousel });

    if (!htmlElementChecks) {
      this._errors.push(htmlElementChecks.message);
      check = false;
    }

    if (this._dom.autoplayButton !== null) {
      htmlElementChecks = isValidInstance(HTMLElement, { autoplayButton: this.dom.autoplayButton });

      if (!htmlElementChecks) {
        this._errors.push(htmlElementChecks.message);
        check = false;
      }
    }

    if (this._dom.nextButton !== null || this._dom.previousButton !== null) {
      htmlElementChecks = isValidInstance(HTMLElement, { nextButton: this.dom.nextButton, previousButton: this.dom.previousButton });

      if (!htmlElementChecks) {
        this._errors.push(htmlElementChecks.message);
        check = false;
      }
    }

    // Query selector checks.
    const querySelectorChecks = isQuerySelector({ carouselItemsSelector: this.selectors.carouselItems });

    if (!querySelectorChecks) {
      this._errors.push(querySelectorChecks.message);
      check = false;
    }

    // Class list checks.
    if (this._activeClass !== "") {
      const classListChecks = isValidClassList({ activeClass: this.activeClass });

      if (!classListChecks) {
        this._errors.push(classListChecks.message);
        check = false;
      }
    }

    // Autoplay checks.
    const autoplayChecks = isValidType("boolean", { autoplay: this.autoplay });

    if (!autoplayChecks) {
      this._errors.push(autoplayChecks.message);
      check = false;
    }

    return check;
  }

  /**
   * Handles the click events throughout the carousel.
   */
  _handleClick() {
    this.dom.nextButton.addEventListener("pointerup", () => {
      this.activateNextItem();
    });

    this.dom.previousButton.addEventListener("pointerup", () => {
      this.activatePreviousItem();
    });
  }

  /**
   * Activates the current carousel item.
   *
   * @public
   */
  activateCurrentItem() {
    addClass(this.activeClass, this.currentCarouselItem);
  }

  /**
   * Deactivates the current carousel item.
   *
   * @public
   */
  deactivateCurrentItem() {
    removeClass(this.activeClass, this.currentCarouselItem);
  }

  /**
   * Activates the carousel item at a given index.
   *
   * @public
   *
   * @param {number} index - The index of the carousel item to activate.
   */
  activateItem(index) {
    this.deactivateCurrentItem();
    this.currentItem = index;
    this.activateCurrentItem();
  }

  /**
   * Activates the first carousel item.
   *
   * @public
   */
  activateFirstItem() {
    this.activateItem(0);
  }

  /**
   * Activates the last carousel item.
   *
   * @public
   */
  activateLastItem() {
    this.activateItem(this.dom.carouselItems.length - 1);
  }

  /**
   * Activates the next carousel item.
   *
   * @public
   */
  activateNextItem() {
    if (this.currentItem + 1 >= this.dom.carouselItems.length) {
      this.activateFirstItem();
    } else {
      this.activateItem(this.currentItem + 1);
    }
  }

  /**
   * Activates the previous carousel item.
   *
   * @public
   */
  activatePreviousItem() {
    if (this.currentItem - 1 < 0) {
      this.activateLastItem();
    } else {
      this.activateItem(this.currentItem - 1);
    }
  }
}

export default Carousel;
