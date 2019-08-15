import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function Select({
  className,
  id,
  name,
  compact,
  disabled,
  placeholder,
  label,
  children,
  value: controlledValue,
  onFocus,
  onBlur,
  onChange,
  ...rest
}) {
  const [isFocused, setFocus] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState();
  const isControlled = typeof controlledValue !== 'undefined';

  const value = isControlled ? controlledValue : uncontrolledValue;

  return (
    <div
      className={clsx(
        'ray-select',
        {
          'ray-select--compact': compact,
          'ray-select--disabled': disabled,
          'ray-select--has-value': value,
          'ray-select--placeholder-mode': Boolean(
            isFocused && placeholder && !value
          )
        },
        className
      )}
    >
      <select
        className="ray-select__input"
        id={id}
        name={name}
        disabled={disabled}
        value={value}
        onFocus={(...args) => {
          setFocus(true);

          if (onFocus) {
            onFocus(...args);
          }
        }}
        onBlur={(...args) => {
          setFocus(false);

          if (onBlur) {
            onBlur(...args);
          }
        }}
        onChange={(event, ...args) => {
          if (!isControlled) {
            setUncontrolledValue(event.target.value);
          }

          if (onChange) {
            onChange(event, ...args);
          }
        }}
        defaultValue=""
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
  value: PropTypes.string,
  children: PropTypes.node,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func
};
