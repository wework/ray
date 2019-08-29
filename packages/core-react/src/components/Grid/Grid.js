import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Cell from './Cell';

export default function Grid({ className, Tag, ...props }) {
  const classes = clsx('ray-grid', className);

  return <Tag className={classes} {...props} />;
}

Grid.defaultProps = {
  Tag: 'div'
};

Grid.propTypes = {
  className: PropTypes.string,
  Tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Grid.Cell = Cell;
