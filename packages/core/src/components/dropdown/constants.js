const ROOT = 'ray-dropdown';

export const CLASSNAMES = {
  root: `${ROOT}`,
  inputElement: `${ROOT}__input`,
  wrapper: `${ROOT}__wrapper`,
  label: `${ROOT}__label`,
  body: `${ROOT}__body`,
  selected: `${ROOT}__selected`,
  selectedValue: `${ROOT}__selected-value`,
  clear: `${ROOT}__selected-clear`,
  container: `${ROOT}__option-container`,
  list: `${ROOT}__option-list`,
  option: `${ROOT}__option`,
  separator: `${ROOT}__option--separator`,
  placeholder: `${ROOT}__option--placeholder`,
  optionSelected: `${ROOT}__option--selected`,
  OPEN: `${ROOT}--open`,
  ACTIVE: `${ROOT}--active`,
  REQUIRED: `${ROOT}--required`,
  DISABLED: `${ROOT}--disabled`,
  PLACEHOLDER_MODE: `${ROOT}--placeholder-mode`,
  HAS_VALUE: `${ROOT}--has-value`
};

export const SELECTORS = {
  root: `.${CLASSNAMES.root}`,
  inputElement: `.${CLASSNAMES.inputElement}`,
  wrapper: `.${CLASSNAMES.wrapper}`,
  label: `.${CLASSNAMES.label}`,
  body: `.${CLASSNAMES.body}`,
  selected: `.${CLASSNAMES.selected}`,
  selectedValue: `.${CLASSNAMES.selectedValue}`,
  clear: `.${CLASSNAMES.clear}`,
  container: `.${CLASSNAMES.container}`,
  list: `.${CLASSNAMES.list}`,
  option: `.${ROOT}__option`,
  separator: `.${ROOT}__option--separator`,
  placeholder: `.${ROOT}__option--placeholder`
};

export const bodyTpl = ({ value, clear }) => {
  return {
    position: 'beforebegin',
    tpl: `
      <div class="${CLASSNAMES.body}" tabindex="0">
        <div class="${CLASSNAMES.selected}">
          <span class="${CLASSNAMES.selectedValue}">${value}</span>
          ${clear ? `<span class="${CLASSNAMES.clear}">×</span>` : ''}
        </div>
      </div>
    `,
    elements: ['body', 'selectedValue', 'clear']
  };
};

export const listTpl = ({ id }) => {
  return {
    position: 'afterend',
    tpl: `
      <div class="${CLASSNAMES.container}" aria-expanded="false">
        <ul
          role="listbox"
          class="${CLASSNAMES.list}"
          id="${id}-list"
        >
        </ul>
      </div>
    `,
    elements: ['container', 'list']
  };
};

export const separatorTpl = `<li disabled class="${CLASSNAMES.option} ${
  CLASSNAMES.separator
}" />`;

export const placeholderTpl = `<li data-ray-idx="0" class="${
  CLASSNAMES.option
} ${CLASSNAMES.placeholder}" />`;

export const optionId = ({ id, idx }) => `${id}-option-${idx}`;

export const optionTpl = ({ label, id, idx, selected, disabled }) => {
  return `
    <li
      role="option"
      data-ray-idx="${idx}"
      id="${optionId({ id, idx })}"
      ${disabled ? 'disabled' : ''}
      class="${CLASSNAMES.option}${selected ? CLASSNAMES.optionSelected : ''}"
    >
    ${label}
  </li>
`;
};

export const markupTemplates = [bodyTpl, listTpl];
