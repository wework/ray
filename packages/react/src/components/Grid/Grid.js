import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Grid = ({ children, className, ...props }) => {
  const classes = clsx({
    'ray-grid': true,
    [`${className}`]: !!className
  });

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Grid;
