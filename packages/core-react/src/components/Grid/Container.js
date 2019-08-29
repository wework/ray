import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function Container({ className, Tag, ...props }) {
  const classes = clsx('ray-page-container', className);

  return <Tag className={classes} {...props} />;
}

Container.defaultProps = {
  Tag: 'div'
};

Container.propTypes = {
  className: PropTypes.string,
  Tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};
