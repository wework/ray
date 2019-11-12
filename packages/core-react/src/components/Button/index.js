import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = React.forwardRef((props, ref) => {
  const {
    Tag,
    children,
    variant,
    compact,
    danger,
    disabled,
    className,
    ...rest
  } = props;
  return (
    <Tag
      {...rest}
      className={clsx(
        'ray-button',
        `ray-button--${variant}`,
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

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  compact: PropTypes.bool,
  danger: PropTypes.bool,
  children: PropTypes.node,
  Tag: PropTypes.oneOf(['button', 'a']),
  disabled: PropTypes.bool,
  className: PropTypes.string
};

Button.defaultProps = {
  Tag: 'button',
  variant: 'primary',
  compact: false,
  danger: false
};

Button.displayName = 'Button';

export default Button;
