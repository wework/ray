import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function Grid({ className, ...props }) {
  const classes = clsx('ray-grid', className);

  return <div className={classes} {...props} />;
}

Grid.propTypes = {
  className: PropTypes.string
};
