import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

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
  className,
  ...rest
}) {
  const wrapperClass = clsx(
    'ray-text-field',
    {
      'ray-text-field--has-value': value,
      'ray-text-field--error': error,
      'ray-text-field--success': success,
      'ray-text-field--disabled': disabled,
      'ray-text-field--required': required,
      'ray-text-field--compact': compact
    },
    className
  );

  return (
    <div className={wrapperClass}>
      <input
        className="ray-text-field__input"
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {label && (
        <label className="ray-text-field__label" htmlFor={id}>
          {label}
        </label>
      )}
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
  className: PropTypes.string
};

TextField.defaultProps = {
  type: 'text'
};
