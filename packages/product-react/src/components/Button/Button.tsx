import clsx from 'clsx';
import React, { createRef, forwardRef, ReactHTMLElement } from 'react';

export type ButtonProps = {
  children?: React.ReactNode;
  buttonStyle?: 'primary' | 'secondary' | 'tertiary';
  type?: 'button' | 'reset' | 'submit';
  compact?: boolean;
  danger?: boolean;
  disabled?: boolean;
  className?: string;
  tabIndex?: number;
  name?: string;
  value?: string | string[] | number;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
};

export const Button = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const {
      name,
      value,
      children,
      type,
      compact,
      danger,
      disabled,
      className,
      buttonStyle,
      ...rest
    } = props;

    return (
      <button
        name={name}
        value={value}
        type={type}
        {...rest}
        className={clsx(
          'ray-button',
          `ray-button--${buttonStyle}`,
          {
            'ray-button--compact': compact,
            'ray-button--danger': danger
          },
          className
        )}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.defaultProps = {
  buttonStyle: 'primary',
  compact: false,
  danger: false,
  disabled: false
};

Button.displayName = 'Button';

export default Button;
