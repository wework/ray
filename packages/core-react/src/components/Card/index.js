import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function Card({ heading, body, img, row }) {
  return (
    <div className={clsx('ray-card', { 'ray-card--row': row })}>
      <div className="ray-card__image ray-image ray-image--16by9">{img}</div>
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
  row: PropTypes.bool
};
