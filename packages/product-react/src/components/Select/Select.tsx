import React from 'react';
import clsx from 'clsx';
import Icon from '../Common/Icon';
import './Select.scss';

type IconPositions = 'iconstart' | 'iconend';

interface ISelectProps extends React.HTMLProps<HTMLSelectElement> {
  active?: boolean;
  compact?: boolean;
  error?: boolean;
  disabled?: boolean;
  id?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  iconPosition?: IconPositions;
  prepend?: boolean;
  children: React.ReactNode;
  onChange?(event: React.ChangeEvent<HTMLSelectElement>): void;
  onFocus?(event: React.FocusEvent<HTMLSelectElement>): void;
  onBlur?(event: React.FocusEvent<HTMLSelectElement>): void;
}

export const Select: React.FC<ISelectProps> = ({
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
  onFocus,
  onBlur,
  ...rest
}) => {
  const [activeClass, setActiveState] = React.useState(active);
  const [currValue, setValue] = React.useState(value);

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
};

Select.defaultProps = {
  active: false,
  compact: false,
  error: false,
  prepend: false
};