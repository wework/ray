import {
  CLASSNAMES,
  SELECTORS,
  markupTemplates,
  separatorTpl,
  placeholderTpl,
  optionTpl
} from './constants';
import { validateNodeType } from '../../global/js/util';

function tryAndPass(cond, str) {
  if (!cond) {
    throw new Error(str);
  }
  return cond;
}

function wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}

function insertMarkup(_node, pos, string) {
  _node.insertAdjacentHTML(pos, string);
}

function emitEvent(target, event) {
  const instance = document.createEvent('HTMLEvents');
  instance.initEvent(event, true, true);
  target.dispatchEvent(instance);
}

function switchClassName(target, classname, condition = true) {
  const method = condition ? 'add' : 'remove';
  target.classList[method](CLASSNAMES[classname] || classname);
}

class Dropdown {
  static instances = new WeakMap();

  static get cssClasses() {
    return CLASSNAMES;
  }

  static get strings() {
    return SELECTORS;
  }

  static create(element) {
    return this.instances.get(element) || new this(element);
  }

  static createAll(target = document, { initSelector, ...options } = {}) {
    validateNodeType(target);
    const selects = Array.from(
      target.querySelectorAll(initSelector || SELECTORS.root)
    );
    selects.forEach(select => Dropdown.create(select, options));
  }

  get _options() {
    return Array.from(this._inputElement.options);
  }

  get _selectedIndex() {
    return this._inputElement.selectedIndex;
  }

  get _selectedOption() {
    return this._options[this._selectedIndex];
  }

  get _value() {
    return this._inputElement.value;
  }

  set _value(value) {
    this._inputElement.value = value;
    this._setValueRelatedClasses(value);
    emitEvent(this._inputElement, 'change');
  }

  constructor(root) {
    this._root = root;

    const el = tryAndPass(
      this._root.querySelector(SELECTORS.inputElement),
      `Select must have an input element with a class of ${
        SELECTORS.inputElement
      }`
    );

    const id = tryAndPass(
      el.getAttribute('id'),
      'Input should have unique and valid ID'
    );

    const wrapperClassName = CLASSNAMES.wrapper;

    if (!el.parentElement.classList.contains(wrapperClassName)) {
      wrap(el, `<div class="${wrapperClassName}"></div>`);
    }

    this._id = id;
    this._inputElement = el;

    markupTemplates.forEach(template => {
      const { tpl, elements, position } = template({
        value: this._selectedOption.innerHTML,
        id: this._id
      });
      insertMarkup(this._inputElement, position, tpl);
      this._cacheEl(elements);
    });
    this._processLabel();
    this._setAriaProps();
    this._fillOptionsList();

    if (!this._inputElement.disabled) {
      this._bindEventListeners();
    }

    this._setValueRelatedClasses(this._value);

    this.constructor.instances.set(this._root, this);
  }

  _getEl(key, all) {
    if (all) {
      return Array.from(this._root.querySelectorAll(SELECTORS[key]));
    }
    return this._root.querySelector(SELECTORS[key]);
  }

  _cacheEl(elements) {
    elements.forEach(el => {
      this[`_${el}`] = this._getEl(el);
    });
  }

  _setAriaProps() {
    const listId = this._list.getAttribute('id');

    switchClassName(this._root, 'REQUIRED', !!this._inputElement.required);

    if (this._label) {
      const labelId = this._label.getAttribute('id');
      this._list.setAttribute('aria-labelledby', labelId);
      this._root.setAttribute('aria-labelledby', labelId);
      this._inputElement.setAttribute('aria-labelledby', labelId);
    }

    this._root.setAttribute('role', 'combobox');
    this._root.setAttribute('aria-expanded', 'false');
    this._root.setAttribute('aria-haspopup', listId);

    this._inputElement.setAttribute('aria-controls', listId);
    this._inputElement.setAttribute(
      'aria-activedescendant',
      `${this._id}-option-${this._selectedIndex}`
    );
  }

  _processLabel() {
    this._label = this._getEl('label');
    if (this._label) {
      const labelId = `${this._id}-label`;
      this._label.setAttribute('for', this._id);
      this._label.setAttribute('id', labelId);
    }
  }

  _fillOptionsList() {
    let placeholder = '';
    const optionsList = this._options.map((option, idx) => {
      if (option.dataset.raySeparator) {
        return separatorTpl;
      }
      if (option.dataset.rayPlaceholder) {
        placeholder = placeholderTpl;
        return '';
      }
      return optionTpl({
        label: option.innerHTML,
        id: this._id,
        idx,
        selected: this.selectedIndex === idx,
        disabled: option.getAttribute('disabled')
      });
    });
    optionsList.unshift(placeholder);
    this._list.innerHTML = optionsList.join('');
  }

  _bindEventListeners() {
    window.addEventListener('click', this.onClick);
    this._body.addEventListener('focus', this.onFocus);
    this._body.addEventListener('blur', this.onFocus);
    this._inputElement.addEventListener('change', this.onChange);
    this._getEl('option', true).forEach(el => {
      el.addEventListener('click', this.onOptionClick);
    });
    if (this._clear) {
      this._clear.addEventListener('click', this.clear);
    }
  }

  _removeEventListeners() {
    window.removeEventListener('click', this.onClick);
    this._body.removeEventListener('focus', this.onFocus);
    this._body.removeEventListener('blur', this.onFocus);
    this._inputElement.removeEventListener('change', this.onChange);
  }

  _setValueRelatedClasses(value) {
    switchClassName(this._root, 'DISABLED', this._inputElement.disabled);
    switchClassName(this._root, 'HAS_VALUE', value !== '');
    switchClassName(this._root, 'PLACEHOLDER_MODE', value === '');
  }

  isRequired() {
    return this._inputElement.required;
  }

  value() {
    return this._value;
  }

  set(value) {
    this._value = value;
  }

  disable() {
    this._inputElement.setAttribute('disabled', 'true');
    emitEvent(this._inputElement, 'change');
    this._removeEventListeners();
  }

  enable() {
    this._inputElement.removeAttribute('disabled');
    this._bindEventListeners();
    emitEvent(this._inputElement, 'change');
  }

  clear = () => {
    this.set('');
  };

  onFocus = el => {
    switchClassName(this._root, 'ACTIVE', el.type === 'focus');
  };

  onChange = () => {
    this._selectedValue.innerHTML = this._selectedOption.innerHTML;
    Array.from(this._list.children).forEach((el, idx) => {
      switchClassName(el, 'optionSelected', idx === this.selectedIndex);
    });
    switchClassName(this._root, 'OPEN', false);
    emitEvent(this._root, 'focus');
  };

  onClick = el => {
    const isClickInside = this._root.contains(el.target);
    switchClassName(
      this._root,
      'OPEN',
      isClickInside &&
        !el.target.dataset.rayIdx &&
        !el.target.dataset.rayClearBtn
    );
    if (!isClickInside) {
      emitEvent(this._root, 'blur');
    }
  };

  onOptionClick = e => {
    this.set(this._options[e.target.dataset.rayIdx].value);
  };

  destroy() {
    this._removeEventListeners();

    this._body.remove();
    this._container.remove();
    this.constructor.instances.delete(this._root);
  }
}

export default Dropdown;
