import classNames from 'classnames/bind';
import React from 'react';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  compact?: boolean;
  danger?: boolean;
  tabIndex?: number;
  type?: 'primary' | 'secondary' | 'tertiary';
}

const styles = {
  primary: 'ray-button--primary',
  secondary: 'ray-button--secondary',
  tertiary: 'ray-button--tertiary',
  compact: 'ray-button--compact',
  danger: 'ray-button--danger',
};

const cx = classNames.bind(styles);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      compact,
      danger,
      disabled,
      tabIndex,
      type,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        className={cx('ray-button', type, { compact, danger }, className)}
        disabled={disabled}
        tabIndex={tabIndex}
        {...rest}
      />
    );
  },
);

Button.defaultProps = {
  compact: false,
  danger: false,
  disabled: false,
  type: 'primary',
};

export default Button;
