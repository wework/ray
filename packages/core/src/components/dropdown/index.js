import {
  CLASSNAMES,
  SELECTORS,
  markupTemplates,
  separatorTpl,
  placeholderTpl,
  groupLabelTpl,
  optionTpl
} from './constants';
import { validateNodeType } from '../../global/js/util';

const defaults = {
  renderOption: null,
  renderSelected: null
};

function isFunc(func) {
  return typeof func === 'function';
}

function tryAndPass(cond, str) {
  if (!cond) {
    throw new Error(str);
  }
  return cond;
}

function htmlToElement(html) {
  const template = document.createElement('div');
  template.innerHTML = html.trim();
  return template.firstChild;
}

function wrap(el, wrapper) {
  const parsedWrapper = htmlToElement(wrapper);
  el.parentNode.insertBefore(parsedWrapper, el);
  parsedWrapper.appendChild(el);
}

function insertMarkup(_node, pos, string) {
  _node.insertAdjacentHTML(pos, string);
}

function emitEvent(target, event) {
  const instance = document.createEvent('HTMLEvents');
  instance.initEvent(event, true, true);
  target.dispatchEvent(instance);
}

function getClassName(cn) {
  return CLASSNAMES[cn] || cn;
}

function switchClassName(target, classname, condition = true) {
  const method = condition ? 'add' : 'remove';
  const args = Array.isArray(classname)
    ? classname.map(getClassName)
    : [getClassName(classname)];
  target.classList[method](...args);
}

class Dropdown {
  static instances = new WeakMap();

  static get cssClasses() {
    return CLASSNAMES;
  }

  static get strings() {
    return SELECTORS;
  }

  static create(element, options) {
    return this.instances.get(element) || new this(element, options);
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
    const isNotEmpty = value && value !== '';
    this._inputElement.value = value;
    this._setSelectedLabel();
    switchClassName(this._root, 'HAS_VALUE', isNotEmpty);
    switchClassName(this._root, 'PLACEHOLDER_MODE', !isNotEmpty);
    emitEvent(this._inputElement, 'change');
  }

  constructor(root, options) {
    this.settings = {
      ...defaults,
      ...options
    };

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

    this._renderMarkup();
    this._processLabel();
    this._setAriaProps();
    this._fillOptionsList();
    this._bindEventListeners();

    this._value = this._inputElement.value;

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

  _renderMarkup() {
    markupTemplates.forEach(template => {
      const { tpl, elements, position } = template({
        value: this._selectedOption.innerHTML,
        id: this._id
      });
      insertMarkup(this._inputElement, position, tpl);
      this._cacheEl(elements);
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

  _setSelectedLabel() {
    const { renderSelected } = this.settings;
    if (!this._selectedOption) {
      this._selectedValue.innerHTML = '';
    } else {
      this._selectedValue.innerHTML = isFunc(renderSelected)
        ? renderSelected(this._selectedOption)
        : this._selectedOption.innerHTML;
    }
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
    let idx = 0;
    const { renderOption } = this.settings;
    const { _id, selectedIndex } = this;
    const optionsRenderer = isFunc(renderOption) && renderOption;

    function traverseOptions(options, disabled) {
      return options.map(option => {
        let result;
        if (option.tagName === 'OPTGROUP') {
          result = traverseOptions(
            Array.from(option.children),
            option.disabled
          );
          result.unshift(
            groupLabelTpl({
              label: option.getAttribute('label'),
              disabled: option.disabled
            })
          );
          result = result.join('');
        } else {
          if (option.dataset.raySeparator !== undefined) {
            result = separatorTpl;
          } else if (option.dataset.rayPlaceholder !== undefined) {
            placeholder = placeholderTpl;
            result = '';
          } else {
            result = optionTpl({
              label: optionsRenderer
                ? optionsRenderer(option)
                : option.innerHTML,
              id: _id,
              idx,
              selected: selectedIndex === idx,
              disabled: disabled || option.disabled
            });
          }

          idx += 1;
        }
        return result;
      });
    }

    const optionsList = traverseOptions(
      Array.from(this._inputElement.children)
    );

    optionsList.unshift(placeholder);
    this._list.innerHTML = optionsList.join('');
  }

  _bindEventListeners() {
    if (this._inputElement.disabled) return;
    window.addEventListener('click', this.onClick);
    this._body.addEventListener('focus', this.onFocus);
    this._body.addEventListener('blur', this.onFocus);
    this._inputElement.addEventListener('change', this.onChange);
    this._getEl('option', true).forEach(el => {
      el.addEventListener('click', this.onOptionClick(this));
    });
  }

  _removeEventListeners() {
    window.removeEventListener('click', this.onClick);
    this._body.removeEventListener('focus', this.onFocus);
    this._body.removeEventListener('blur', this.onFocus);
    this._inputElement.removeEventListener('change', this.onChange);
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
    switchClassName(this._root, 'DISABLED', true);
    this._removeEventListeners();
  }

  enable() {
    this._inputElement.removeAttribute('disabled');
    switchClassName(this._root, 'DISABLED', false);
    this._bindEventListeners();
  }

  open = () => {
    switchClassName(this._root, ['ACTIVE', 'OPEN'], true);
  };

  update = options => {
    if (options) {
      this.settings = {
        ...defaults,
        ...options
      };
    }
    this._removeEventListeners();
    this._fillOptionsList();
    this._bindEventListeners();
    this._value = '';
  };

  clear = () => {
    this._value = '';
  };

  onFocus = e => {
    switchClassName(this._root, 'ACTIVE', e.type === 'focus');
  };

  onChange = () => {
    Array.from(this._list.children).forEach((el, idx) => {
      switchClassName(el, 'optionSelected', idx === this._selectedIndex);
    });
    switchClassName(this._root, 'OPEN', false);
    emitEvent(this._root, 'focus');
  };

  onClick = e => {
    const isClickInside =
      this._root === e.target || this._root.contains(e.target);
    const isOptionClick = this._list.contains(e.target);
    switchClassName(this._root, 'OPEN', isClickInside && !isOptionClick);
    if (!isClickInside) {
      switchClassName(this._root, 'ACTIVE', false);
      emitEvent(this._root, 'blur');
    }
  };

  onOptionClick(plugin) {
    return function onClickListener() {
      if (this.hasAttribute('disabled') || !this.dataset.rayIdx) return;
      plugin._value = plugin._options[this.dataset.rayIdx].value; //eslint-disable-line
    };
  }

  destroy() {
    this._removeEventListeners();

    this._body.remove();
    this._container.remove();
    this.constructor.instances.delete(this._root);
  }
}

export default Dropdown;
