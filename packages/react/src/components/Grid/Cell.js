import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Cell = ({ children, className, span, push, ...props }) => {
  const keys = ['phone', 'tablet', 'desktop'];

  const spanObj = Array.isArray(span) ? span : [span, span, span];

  const {
    phone: spanPhone,
    tablet: spanTablet,
    desktop: spanDesktop
  } = spanObj.reduce((obj, val, i) => {
    const returnObj = obj;
    returnObj[keys[i]] = val;
    return returnObj;
  }, {});

  const pushObj = Array.isArray(push) ? push : [push, push, push];
  const {
    phone: pushPhone,
    tablet: pushTablet,
    desktop: pushDesktop
  } = pushObj.reduce((obj, val, i) => {
    const returnObj = obj;
    returnObj[keys[i]] = val;
    return returnObj;
  }, {});

  const classes = clsx({
    'ray-grid__cell': true,
    [`ray-grid__cell--span-${spanDesktop}-desktop`]: !!spanDesktop,
    [`ray-grid__cell--span-${spanTablet}-tablet`]: !!spanTablet,
    [`ray-grid__cell--span-${spanPhone}-phone`]: !!spanPhone,
    [`ray-grid__cell--push-${pushDesktop}-desktop`]: !!pushDesktop,
    [`ray-grid__cell--push-${pushTablet}-tablet`]: !!pushTablet,
    [`ray-grid__cell--push-${pushPhone}-phone`]: !!pushPhone,
    [`${className}`]: !!className
  });

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Cell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  span: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  push: PropTypes.oneOfType([PropTypes.array, PropTypes.number])
};

export default Cell;
