import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function TextArea({
  id,
  type,
  placeholder,
  disabled,
  required,
  value,
  error,
  compact,
  label,
  className,
  ...rest
}) {
  const wrapperClass = clsx(
    'ray-text-area',
    {
      'ray-text-area--has-value': value,
      'ray-text-area--error': error,
      'ray-text-area--disabled': disabled,
      'ray-text-area--required': required,
      'ray-text-area--compact': compact
    },
    className
  );

  return (
    <div className={wrapperClass}>
      <textarea
        className="ray-text-area__input"
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {label && (
        <label className="ray-text-area__label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  compact: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string
};

TextArea.defaultProps = {
  type: 'text'
};
