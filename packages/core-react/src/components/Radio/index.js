import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function Radio({ className, id, name, label }) {
  return (
    <div className={clsx('ray-radio', className)}>
      <input className="ray-radio__input" type="radio" id={id} name={name} />
      <label className="ray-radio__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

Radio.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.node
};
