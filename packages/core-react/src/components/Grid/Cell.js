import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { settings } from '@wework/ray-core';

const breakpoints = Object.keys(settings.breakpointsInPixels);

export default function Cell({ className, push, span, ...props }) {
  const breakpointClasses = breakpoints.reduce((memo, breakpointName) => {
    const spanKey = `span-${breakpointName}`;
    if (props[spanKey]) {
      memo.push(`ray-grid__cell--span-${props[spanKey]}-${breakpointName}`);
    }

    const pushKey = `push-${breakpointName}`;
    if (props[pushKey]) {
      memo.push(`ray-grid__cell--push-${props[pushKey]}-${breakpointName}`);
    }

    return memo;
  }, []);

  const classes = clsx(
    'ray-grid__cell',
    {
      [`ray-grid__cell--span-${span}`]: span,
      [`ray-grid__cell--push-${push}`]: push
    },
    breakpointClasses,
    className
  );

  return <div className={classes} {...props} />;
}

Cell.propTypes = {
  className: PropTypes.string,
  span: PropTypes.number,
  push: PropTypes.number
};
