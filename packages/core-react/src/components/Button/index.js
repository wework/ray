import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function Button({
  Tag = 'button',
  children,
  type,
  isCompact,
  isDanger,
  disabled,
  ...props
}) {
  return (
    <Tag
      {...props}
      className={clsx('ray-button', `ray-button--${type}`, {
        'ray-button--compact': isCompact,
        'ray-button--danger': isDanger
      })}
      disabled={disabled}
    >
      {children}
    </Tag>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  isCompact: PropTypes.bool,
  isDanger: PropTypes.bool,
  children: PropTypes.node,
  Tag: PropTypes.oneOf(['button', 'a']),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: 'primary',
  isCompact: false,
  isDanger: false
};
