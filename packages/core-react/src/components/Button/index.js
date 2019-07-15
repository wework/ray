import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function Button({
  Tag,
  children,
  type,
  compact,
  danger,
  disabled,
  ...props
}) {
  return (
    <Tag
      {...props}
      className={clsx('ray-button', `ray-button--${type}`, {
        'ray-button--compact': compact,
        'ray-button--danger': danger
      })}
      disabled={disabled}
    >
      {children}
    </Tag>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  compact: PropTypes.bool,
  danger: PropTypes.bool,
  children: PropTypes.node,
  Tag: PropTypes.oneOf(['button', 'a']),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  Tag: 'button',
  type: 'primary',
  compact: false,
  danger: false
};
