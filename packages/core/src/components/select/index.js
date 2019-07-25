import { CSS_CLASSES, STRINGS } from './constants';
import { validateNodeType } from '../../global/js/util';

class Select {
  static instances = new WeakMap();

  static get cssClasses() {
    return CSS_CLASSES;
  }

  static get strings() {
    return STRINGS;
  }

  static create(element, options) {
    return this.instances.get(element) || new this(element, options);
  }

  static createAll(target = document, _options = {}) {
    // Finds all instances of select on the document or within a given element and instantiates them.
    const options = {
      initSelector: this.strings.INIT_SELECTOR,
      ..._options
    };

    validateNodeType(target);

    const selects = Array.from(target.querySelectorAll(options.initSelector));
    selects.forEach(select => this.create(select, options));
  }

  constructor(root) {
    this._root = root;
    this._inputElement = this._root.querySelector(
      `.${this.constructor.cssClasses.EL__INPUT}`
    );

    if (!this._inputElement) {
      throw new Error(
        `Select must have an input element with a class of .${
          this.constructor.cssClasses.EL__INPUT
        }`
      );
    }

    this._bindEventListeners();
    this.assignClasses();

    this.constructor.instances.set(this._root, this);
  }

  _bindEventListeners() {
    this._inputElement.addEventListener('focus', this.onFocus);
    this._inputElement.addEventListener('blur', this.onBlur);
    this._inputElement.addEventListener('change', this.onChange);
  }

  isRequired() {
    return this._inputElement.required;
  }

  value() {
    // Current value of the Select
    return this._inputElement.value;
  }

  set(value) {
    this._inputElement.value = value;

    // IE11 fix: can't use new Event()
    const event = document.createEvent('HTMLEvents');
    event.initEvent('change', true, true);
    this._inputElement.dispatchEvent(event);
  }

  onFocus = () => {
    this._root.classList.add(this.constructor.cssClasses.ACTIVE);
  };

  onBlur = () => {
    this._root.classList.remove(this.constructor.cssClasses.ACTIVE);
  };

  onChange = () => {
    this.assignClasses();
  };

  assignClasses() {
    const option = this._getCurrentValueOptionElement();

    if (option && option.innerHTML) {
      if (option.dataset.rayPlaceholder) {
        this._root.classList.add(this.constructor.cssClasses.PLACEHOLDER_MODE);
        this._root.classList.remove(this.constructor.cssClasses.HAS_VALUE);
      } else {
        this._root.classList.add(this.constructor.cssClasses.HAS_VALUE);
        this._root.classList.remove(
          this.constructor.cssClasses.PLACEHOLDER_MODE
        );
      }
    } else {
      this._root.classList.remove(
        this.constructor.cssClasses.PLACEHOLDER_MODE,
        this.constructor.cssClasses.HAS_VALUE
      );
    }

    if (this.isRequired()) {
      this._root.classList.add(this.constructor.cssClasses.REQUIRED);
    } else {
      this._root.classList.remove(this.constructor.cssClasses.REQUIRED);
    }
  }

  _getCurrentValueOptionElement = () => {
    return this._inputElement.options[this._inputElement.selectedIndex];
  };

  destroy() {
    // Implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this._inputElement.removeEventListener('focus', this.onFocus);
    this._inputElement.removeEventListener('blur', this.onBlur);
    this._inputElement.removeEventListener('change', this.onChange);

    this.constructor.instances.delete(this._root);
  }
}

export default Select;
