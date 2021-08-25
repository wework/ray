import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Icon from '../Common/Icon';

export default function TextField({
  id,
  type,
  placeholder,
  disabled,
  required,
  value,
  error,
  success,
  compact,
  label,
  active,
  onFocus,
  onBlur,
  onKeyUp,
  onChange,
  hint,
  hintSuccess,
  hintError,
  className,
  iconPosition,
  icon,
  prepend,
  ...rest
}) {
  const [inputValue, setInputValue] = React.useState(value);
  const [activeClass, setActiveState] = React.useState(active);

  let iconStart;
  let iconEnd;

  if (iconPosition) {
    iconStart = iconPosition === 'iconstart';
    iconEnd = iconPosition === 'iconend';
  } else {
    iconStart = false;
    iconEnd = false;
  }

  const wrapperClass = clsx(
    'ray-text-field',
    {
      'ray-text-field--has-value': placeholder || inputValue,
      'ray-text-field--error': error,
      'ray-text-field--success': success,
      'ray-text-field--disabled': disabled,
      'ray-text-field--required': required,
      'ray-text-field--compact': compact,
      'ray-text-field--with-icon-start': iconStart || iconEnd,
      'ray-text-field--with-prepend': prepend
    },
    className
  );

  const onKeyUpAction = () => event => {
    if (onKeyUp) {
      onKeyUp();
    }
    setInputValue(event.target.value);
  };
  const onFocusAction = () => textvalue => {
    if (onFocus) {
      onFocus();
    }
    setActiveState(textvalue);
  };
  const onBlurAction = () => textvalue => {
    if (onBlur) {
      onBlur();
    }
    setActiveState(textvalue);
  };

  const handleChange = event => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div>
      <div dir={iconEnd ? 'rtl' : ''}>
        <div className="ray-form-item">
          <div className={wrapperClass}>
            <Icon icon={icon} prepend={prepend} />
            <div className="ray-text-field__wrapper">
              <input
                className="ray-text-field__input"
                id={id}
                type={type}
                value={inputValue || ''}
                placeholder={placeholder}
                disabled={disabled}
                onFocus={onFocusAction(!activeClass)}
                onBlur={onBlurAction(!activeClass)}
                onKeyUp={onKeyUpAction()}
                onChange={handleChange}
                {...rest}
              />
              {label && (
                <label className="ray-text-field__label" htmlFor={id}>
                  {label}
                </label>
              )}
            </div>
          </div>
          <div
            className={clsx(
              'ray-form-item__hint',
              { 'ray-form-item__hint': hint },
              { 'ray-form-item__hint--success': hintSuccess },
              { 'ray-form-item__hint--error': hintError }
            )}
          >
            {hint || (hintSuccess || hintError)}
          </div>
        </div>
      </div>
    </div>
  );
}

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  compact: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  active: PropTypes.bool,
  onFocus: PropTypes.func,
  onKeyUp: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  hint: PropTypes.string,
  hintSuccess: PropTypes.string,
  hintError: PropTypes.string,
  prepend: PropTypes.bool,
  iconPosition: PropTypes.oneOf(['iconstart', 'iconend']),
  icon: PropTypes.node
};

TextField.defaultProps = {
  active: false,
  type: 'text',
  compact: false,
  disabled: false,
  error: false,
  hint: '',
  hintError: '',
  hintSuccess: '',
  prepend: false,
  success: false
};
