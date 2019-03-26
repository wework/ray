import { CSS_CLASSES, STRINGS } from './constants';
import { validateNodeType } from '../../global/js/util';

class _InputComponent {
  static create(element, options) {
    return this.instances.get(element) || new this(element, options);
  }

  static createAll(target = document, _options = {}) {
    // Finds all instances of init selector on the document or within a given element and instantiates them.
    const options = {
      initSelector: this.strings.INIT_SELECTOR,
      ..._options
    };

    validateNodeType(target);

    const textFields = [...target.querySelectorAll(options.initSelector)];
    textFields.forEach(textField => this.create(textField, options));
  }

  constructor(root) {
    this._root = root;
    this._inputElement = this._root.querySelector(
      `.${this.constructor.cssClasses.EL__INPUT}`
    );
    this._labelElement = this._root.querySelector(
      `.${this.constructor.cssClasses.EL__LABEL}`
    );
    if (!this._inputElement) {
      throw new Error(
        `TextField must have an input element with a class of .${
          this.constructor.cssClasses.EL__INPUT
        }`
      );
    }

    this._bindEventListeners();

    this.constructor.instances.set(this._root, this);
  }

  _bindEventListeners() {
    this._inputElement.addEventListener('focus', this.onFocus);
    this._inputElement.addEventListener('blur', this.onBlur);
    this._labelElement.addEventListener('mousedown', this.onMousedown);
  }

  onMousedown = event => {
    event.preventDefault();
    this._inputElement.focus();
  };

  value() {
    // Current value of the TextField
    return this._inputElement.value;
  }

  set(value) {
    this._inputElement.value = value;
  }

  onFocus = () => {
    this._root.classList.add(this.constructor.cssClasses.ACTIVE);
  };

  onBlur = () => {
    this._root.classList.remove(this.constructor.cssClasses.ACTIVE);

    if (this.value()) {
      this._root.classList.add(this.constructor.cssClasses.HAS_VALUE);
    } else {
      this._root.classList.remove(this.constructor.cssClasses.HAS_VALUE);
    }
  };

  destroy() {
    // Implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this._inputElement.removeEventListener('focus', this.onFocus);
    this._inputElement.removeEventListener('blur', this.onBlur);
    this._labelElement.removeEventListener('mousedown', this.onMousedown);

    this.constructor.instances.delete(this._root);
  }
}

class TextField extends _InputComponent {
  static instances = new WeakMap();

  static get cssClasses() {
    return CSS_CLASSES.TEXT_FIELD;
  }

  static get strings() {
    return STRINGS.TEXT_FIELD;
  }
}

class TextArea extends _InputComponent {
  static instances = new WeakMap();

  static get cssClasses() {
    return CSS_CLASSES.TEXT_AREA;
  }

  static get strings() {
    return STRINGS.TEXT_AREA;
  }
}

export { TextField, TextArea };
