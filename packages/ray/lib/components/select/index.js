const SELECT_MODIFIER_ACTIVE = 'ray-select--active';
const SELECT_EL_INPUT = 'ray-select__input';
const SELECT_MODIFIER_HAS_VALUE = 'ray-select--has-value';
const SELECT_MODIFIER_PLACEHOLDER_MODE = 'ray-select--placeholder-mode';

class Select {
  constructor(element, options) {
    this.element = element;
    this.inputElement = element.querySelector(`.${SELECT_EL_INPUT}`);
    this.bindEventListeners();

    const option = this.getCurrentValueOptionElement();

    if (option && option.innerHTML) {
      if (option.dataset.rayPlaceholder) {
        this.element.classList.add(SELECT_MODIFIER_PLACEHOLDER_MODE);
      } else {
        this.element.classList.add(SELECT_MODIFIER_HAS_VALUE);
      }
    }
  }

  bindEventListeners() {
    this.inputElement.addEventListener('focus', this.onFocus);
    this.inputElement.addEventListener('blur', this.onBlur);
    this.inputElement.addEventListener('change', this.onChange);
  }

  value() {
    return this.element.value;
  }

  onFocus = () => {
    this.element.classList.add(SELECT_MODIFIER_ACTIVE);
  };

  onBlur = () => {
    this.element.classList.remove(SELECT_MODIFIER_ACTIVE);
  };

  onChange = () => {
    const option = this.getCurrentValueOptionElement();

    if (option) {
      if (option.dataset.rayPlaceholder) {
        this.element.classList.add(SELECT_MODIFIER_PLACEHOLDER_MODE);
        this.element.classList.remove(SELECT_MODIFIER_HAS_VALUE);
      } else {
        this.element.classList.add(SELECT_MODIFIER_HAS_VALUE);
        this.element.classList.remove(SELECT_MODIFIER_PLACEHOLDER_MODE);
      }
    } else {
      this.element.classList.remove(
        SELECT_MODIFIER_PLACEHOLDER_MODE,
        SELECT_MODIFIER_HAS_VALUE
      );
    }
  };

  getCurrentValueOptionElement = () => {
    return this.inputElement.options[this.inputElement.selectedIndex];
  };

  teardownEventListeners() {}
}

export { Select };
