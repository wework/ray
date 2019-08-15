import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function Chip({
  children,
  className,
  tabIndex,
  onKeyPress,
  onChange,
  onClick,
  ...rest
}) {
  const [isActive, setActive] = useState(false);
  const ref = React.createRef();

  function toggle() {
    const newActiveState = !isActive;
    if (onChange) onChange(newActiveState);
    setActive(newActiveState);
  }

  return (
    <div
      ref={ref}
      tabIndex={tabIndex}
      className={clsx(
        'ray-chip',
        {
          'ray-chip--active': isActive
        },
        className
      )}
      onClick={(event, ...args) => {
        if (onClick) onClick(event, ...args);

        toggle();
      }}
      onKeyPress={(event, ...args) => {
        if (event.code === 'Space' || event.key === ' ') {
          event.preventDefault();
          toggle();
        }

        if (onKeyPress) onKeyPress(event, ...args);
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

Chip.propTypes = {
  tabIndex: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  onKeyPress: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func
};

Chip.defaultProps = {
  tabIndex: '1'
};
