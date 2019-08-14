import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function Image({ className, src, ...rest }) {
  return (
    <div className={clsx('ray-image', 'ray-image--3by4')}>
      <img className={className} src={src} {...rest} />
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string
};
