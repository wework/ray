import clsx from 'clsx';
import React from 'react';
import FieldWrapper from '../Common/FieldWrapper';
import FormItemWrapper from '../Common/FormItemWrapper';
import IconWrapper from '../Common/IconWrapper';
import RTLWrapper from '../Common/RTLWrapper';

export enum IconPosition {
  Prepend = 'PREPEND',
  End = 'END',
  Start = 'START'
}

type InputProps = React.HTMLProps<HTMLInputElement> & {
  active?: boolean;
  compact?: boolean;
  error?: boolean;
  success?: boolean;
  hint?: string;
  rtl?: boolean;
  formItem?: boolean;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
};

export const Input: React.FC<InputProps> = ({
  id,
  active,
  compact,
  disabled,
  required,
  error,
  hint,
  icon,
  iconPosition,
  label,
  success,
  value,
  onFocus,
  onBlur,
  rtl,
  formItem,
  ...rest
}) => {
  const [focus, setFocus] = React.useState(false);
  const wrapperClass = clsx('ray-text-field', {
    'ray-text-field--compact': compact,
    'ray-text-field--disabled': disabled,
    'ray-text-field--required': required,
    'ray-text-field--success': success,
    'ray-text-field--error': error,
    'ray-text-field--has-value': value,
    'ray-text-field--active': active || focus,
    'ray-text-field--with-icon-start':
      iconPosition === IconPosition.Start && icon,
    'ray-text-field--with-icon-end': iconPosition === IconPosition.End && icon,
    'ray-text-field--with-prepend':
      iconPosition === IconPosition.Prepend && icon
  });
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true);
    onFocus && onFocus(e);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    onBlur && onBlur(e);
  };

  return (
    <RTLWrapper renderWrapper={rtl}>
      <FormItemWrapper renderWrapper={formItem}>
        <div className={wrapperClass}>
          <IconWrapper
            renderWrapper={iconPosition === IconPosition.Prepend}
            iconClass="ray-text-field__prepend"
          >
            {icon}
          </IconWrapper>
          <FieldWrapper
            renderWrapper={iconPosition === IconPosition.Prepend}
            fieldClass="ray-text-field__wrapper"
          >
            <input
              id={id}
              className="ray-text-field__input"
              onFocus={handleFocus}
              disabled={disabled}
              onBlur={handleBlur}
              value={value}
              {...rest}
            />
            {label && (
              <label htmlFor={id} className="ray-text-field__label">
                {label}
              </label>
            )}
          </FieldWrapper>
        </div>
        {(formItem || hint) && (
          <div
            className={clsx('ray-form-item__hint', {
              'ray-form-item__hint--error': error,
              'ray-form-item__hint--success': success
            })}
          >
            {hint}
          </div>
        )}
      </FormItemWrapper>
    </RTLWrapper>
  );
};
