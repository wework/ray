import clsx from 'clsx';
import React from 'react';

type TextAreaProps = React.HTMLProps<HTMLTextAreaElement> & {
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  compact?: boolean;
  value?: string;
  error?: string;
  label?: React.ReactNode;
  className?: string;
};

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  placeholder,
  disabled,
  required,
  value,
  error,
  compact,
  label,
  className,
  ...rest
}) => {
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
};

export default TextArea;
