import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function Type({ Tag, style, className, ...rest }) {
  const classes = clsx(className, `ray-text--${style}`);

  return <Tag className={classes} {...rest} />;
}

Type.propTypes = {
  Tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  style: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'body',
    'body-large',
    'body-small',
    'body-x-small',
    'display-1',
    'display-2'
  ]),
  className: PropTypes.string
};

Type.defaultProps = {
  Tag: 'div',
  style: 'body'
};
