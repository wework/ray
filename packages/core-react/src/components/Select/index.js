import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Icon from '../Common/Icon';

export default function Select({
  className,
  id,
  name,
  compact,
  disabled,
  placeholder,
  label,
  active = false,
  error = false,
  prepend = false,
  iconPosition,
  icon,
  value = '',
  children,
  onChange,
  ...rest
}) {
  const [activeClass, setActiveState] = React.useState(active);
  const [currValue, setValue] = React.useState(value);

  const handleFocus = () => {
    setActiveState(true);
  };

  const handleBlur = () => {
    setActiveState(false);
  };

  const handleChange = event => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  React.useEffect(() => {
    if (value) {
      setValue(value);
    }
  }, []);
  let iconStart;
  let iconEnd;

  if (iconPosition) {
    iconStart = iconPosition === 'iconstart';
    iconEnd = iconPosition === 'iconend';
  } else {
    iconStart = false;
    iconEnd = false;
  }

  return (
    <div dir={iconEnd ? 'rtl' : ''}>
      <div
        className={clsx(
          'ray-select',
          {
            'ray-select--active': activeClass,
            'ray-select--has-value': placeholder || currValue,
            'ray-select--compact': compact,
            'ray-select--disabled': disabled,
            'ray-select--error': error,
            'ray-select--with-prepend': prepend,
            'ray-select--with-icon-start': iconStart || iconEnd
          },
          className
        )}
      >
        <Icon icon={icon} prepend={prepend} />
        <div className="ray-select__wrapper">
          <select
            className="ray-select__input"
            name={name}
            disabled={disabled}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={currValue || ''}
            {...rest}
          >
            <option value="" disabled data-ray-placeholder>
              {placeholder}
            </option>
            {children}
          </select>

          <label className="ray-select__label" htmlFor={id}>
            {label}
          </label>
        </div>
      </div>
    </div>
  );
}

Select.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.node,
  compact: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.node,
  value: PropTypes.number,
  error: PropTypes.bool,
  prepend: PropTypes.bool,
  iconPosition: PropTypes.oneOf(['iconstart', 'iconend']),
  icon: PropTypes.node,
  onChange: PropTypes.func
};
