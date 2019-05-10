export const CSS_CLASSES = {
  TEXT_FIELD: {
    BASE: 'ray-text-field',
    ACTIVE: 'ray-text-field--active',
    REQUIRED: 'ray-text-field--required',
    EL__INPUT: 'ray-text-field__input',
    EL__LABEL: 'ray-text-field__label',
    HAS_VALUE: 'ray-text-field--has-value'
  },
  TEXT_AREA: {
    BASE: 'ray-text-area',
    ACTIVE: 'ray-text-area--active',
    REQUIRED: 'ray-text-area--required',
    EL__INPUT: 'ray-text-area__input',
    EL__LABEL: 'ray-text-area__label',
    HAS_VALUE: 'ray-text-area--has-value'
  }
};

export const STRINGS = {
  TEXT_FIELD: {
    INIT_SELECTOR: `.${CSS_CLASSES.TEXT_FIELD.BASE}`
  },
  TEXT_AREA: {
    INIT_SELECTOR: `.${CSS_CLASSES.TEXT_AREA.BASE}`
  }
};
