import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

function ratioToPercentageString(ratio) {
  return `${100 / ratio}%`;
}

const ASPECT_RATIOS_MAP = {
  '16by9': ratioToPercentageString(16 / 9),
  '1by1': ratioToPercentageString(1),
  '3by4': ratioToPercentageString(3 / 4),
  '4by3': ratioToPercentageString(4 / 3),
  cinema: ratioToPercentageString(2.4)
};

const ASPECT_RATIOS = Object.keys(ASPECT_RATIOS_MAP);

export default function Image({ className, src, aspect, bg, ...rest }) {
  if (bg) {
    return (
      <div
        className={clsx(
          'ray-bg',
          {
            [`ray-bg--${aspect}`]: aspect
          },
          className
        )}
        {...rest}
        style={{
          ...rest.style,
          backgroundImage: `url(${src})`
        }}
      />
    );
  }

  return (
    <div
      className={clsx('ray-image', {
        [`ray-image--${aspect}`]: aspect
      })}
    >
      <img className={className} src={src} {...rest} />
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  aspect: PropTypes.oneOf(ASPECT_RATIOS),
  bg: PropTypes.bool
};
