import React from 'react';
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
  children
}) {
  return (
    <div
      className={clsx(
        'ray-select',
        {
          'ray-select--compact': compact,
          'ray-select--disabled': disabled
        },
        className
      )}
    >
      <select
        className="ray-select__input"
        id={id}
        name={name}
        disabled={disabled}
      >
        <option value="" disabled selected data-ray-placeholder>
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
  children: PropTypes.node
};
