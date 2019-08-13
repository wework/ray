import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function Container({ className, ...props }) {
  const classes = clsx('ray-page-container', className);

  return <div className={classes} {...props} />;
}

Container.propTypes = {
  className: PropTypes.string
};
