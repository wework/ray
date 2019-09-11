import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const InputIcon = ({ prepend, icon }) => {
  if (prepend) {
    return <div className="ray-select__prepend">{icon}</div>;
  }
  return <div>{icon}</div>;
};

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
  iconPosition = 'iconstart',
  icon,
  value = '',
  children,
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
  };

  React.useEffect(() => {
    if (value) {
      setValue(value);
    }
  }, []);

  const iconStart = iconPosition === 'iconstart';
  const iconEnd = iconPosition === 'iconend';

  return (
    <div dir={iconStart ? '' : 'rtl'}>
      <div className="ray-form-item">
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
              'ray-select--with-icon-start': iconStart,
              'ray-select--with-icon-end': iconEnd
            },
            className
          )}
        >
          <InputIcon icon={icon} prepend={prepend} />
          <div className="ray-select__wrapper">
            <select
              className="ray-select__input"
              name={name}
              disabled={disabled}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              value={currValue}
              {...rest}
            >
              <option disabled>{placeholder}</option>
              {children}
            </select>

            <label className="ray-select__label" htmlFor={id}>
              {label}
            </label>
          </div>
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
  icon: PropTypes.node
};

InputIcon.propTypes = {
  prepend: PropTypes.bool,
  icon: PropTypes.node
};
