import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Container = ({ children, className, debug, ...props }) => {
  const classes = clsx({
    'ray-page-container': true,
    'ray-page-container--debug': !!debug,
    [`${className}`]: !!className
  });

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  debug: false
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  debug: PropTypes.bool
};

export default Container;
