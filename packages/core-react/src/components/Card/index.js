import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import rayExports from '@wework/ray-core/scss/ray-exports.scss';

const aspectRatios = (rayExports['ray-image-aspect-ratios'] || '').split(' ');

export default function Card({
  heading,
  body,
  img,
  row,
  aspectRatio,
  className,
  ...props
}) {
  return (
    <div
      {...props}
      className={clsx('ray-card', { 'ray-card--row': row }, className)}
    >
      <div
        className={clsx('ray-card__image', 'ray-image', {
          [`ray-image--${aspectRatio}`]: aspectRatio
        })}
      >
        {img}
      </div>
      <div className="ray-card__content">
        <div className="ray-card__heading">{heading}</div>
        <div>{body}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  heading: PropTypes.node,
  body: PropTypes.node,
  img: PropTypes.node,
  row: PropTypes.bool,
  aspectRatio: PropTypes.oneOf(aspectRatios),
  className: PropTypes.string
};

Card.defaultProps = {
  row: false,
  aspectRatio: '16by9'
};
