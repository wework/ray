import clsx from 'clsx';
// import PropTypes from 'prop-types';
import React, { createRef, forwardRef, ReactHTMLElement } from 'react';

export type ButtonProps = {
  Tag?: 'button' | 'a';
  children?: React.ReactNode;
  type?: 'primary' | 'secondary' | 'tertiary';
  compact?: boolean;
  danger?: boolean;
  disabled?: boolean;
  className?: string;
};

// export type Ref = HTMLElement;
// type LegacyRef<T> = string | Ref<T>;

type Ref =
  | JSX.IntrinsicElements['a']['ref']
  | JSX.IntrinsicElements['button']['ref'];
// Which is a union of functions!
declare var ref: Ref;
// (Let’s ignore string refs)
// if (typeof ref === 'function') {
//   // So it wants `HTMLButtonElement & HTMLAnchorElement`
//   ref(new React.RefObject<HTMLInputElement>);
//   ref(new React.RefObject<HTMLInputElement>);
//}





export const Button = React.forwardRef((props: ButtonProps,) => {
  const {
    Tag = 'button',
    children,
    type,
    compact,
    danger,
    disabled,
    className,
    /// <reference path="" />

    ...rest
  } = props;

  //  const innerRef = ref;

  return (
    <Tag
      {...rest}
      className={clsx(
        'ray-button',
        `ray-button--${type}`,
        {
          'ray-button--compact': compact,
          'ray-button--danger': danger
        },
        className
      )}
      disabled={disabled}
      ref={ref}
    >
      {children}
    </Tag>
  );
});

Button.defaultProps = {
  Tag: 'button',
  type: 'primary',
  compact: false,
  danger: false
};

Button.displayName = 'Button';

export default Button;
