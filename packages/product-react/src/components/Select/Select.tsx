import clsx from 'clsx';
import React from 'react';
import IconWrapper from '../Common/IconWrapper';
import RTLWrapper from '../Common/RTLWrapper';
import FormItemWrapper from '../Common/FormItemWrapper';
import FieldWrapper from '../Common/FieldWrapper';

import './Select.scss';

export enum IconPosition {
  Prepend = 'PREPEND',
  End = 'END',
  Start = 'START'
}

export interface ISelectProps extends React.HTMLProps<HTMLSelectElement> {
  active?: boolean;
  compact?: boolean;
  error?: boolean;
  disabled?: boolean;
  rtl?: boolean;
  formItem?: boolean;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  options: Option[];
}

interface Option {
  value: number | string;
  label: string;
  disabled?: boolean;
}

export const Select: React.FC<ISelectProps> = ({
  id,
  active,
  label,
  compact,
  disabled,
  error,
  placeholder,
  options,
  rtl,
  formItem,
  icon,
  iconPosition,
  onChange,
  onFocus,
  onBlur,
  value,
  ...rest
}) => {
  let optionItems: React.ReactNode[] = [];
  const [activeClass, setActiveState] = React.useState(active);
  const [currValue, setValue] = React.useState(value);

  React.useEffect(() => {
    if (value) {
      setValue(value);
    }
  }, []);

  const handleFocus = (event: React.FocusEvent<HTMLSelectElement>) => {
    setActiveState(true);
    onFocus && onFocus(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    setActiveState(false);
    onBlur && onBlur(event);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    onChange && onChange(event);
  };

  const wrapperClass = clsx('ray-select', {
    'ray-select--compact': compact,
    'ray-select--disabled': disabled,
    'ray-select--error': error,
    'ray-select--has-value': placeholder || currValue,
    'ray-select--active': activeClass,
    'ray-select--with-icon-start': iconPosition === IconPosition.Start && icon,
    'ray-select--with-icon-end': iconPosition === IconPosition.End && icon,
    'ray-select--with-prepend': iconPosition === IconPosition.Prepend && icon
  });

  if (options.length > 0) {
    optionItems = options.map((element: Option, index: number) => {
      return (
        <option key={index} value={element.value} disabled={element.disabled}>
          {element.label}
        </option>
      );
    });
  }
  optionItems.unshift(
    <option key={''} value="" disabled data-ray-placeholder>
      {placeholder}
    </option>
  );
  return (
    <RTLWrapper renderWrapper={rtl}>
      <FormItemWrapper renderWrapper={formItem}>
        <div
          className={wrapperClass}
        >
          <IconWrapper
            renderWrapper={iconPosition === IconPosition.Prepend}
            iconClass="ray-select__prepend"
          >
            {icon}
          </IconWrapper>
          <FieldWrapper
            renderWrapper={iconPosition === IconPosition.Prepend}
            fieldClass="ray-select__wrapper"
          >
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
              {optionItems}
            </select>

            <label className="ray-select__label" htmlFor={id}>
              {label}
            </label>
          </FieldWrapper>
        </div>
      </FormItemWrapper>
    </RTLWrapper>
  );
};

Select.defaultProps = {
  active: false,
  compact: false,
  error: false,
  iconPosition: IconPosition.Start
};
