import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function Checkbox({ className, id, name, label }) {
  return (
    <div className={clsx('ray-checkbox', className)}>
      <input
        className="ray-checkbox__input"
        type="checkbox"
        id={id}
        name={name}
      />
      <label className="ray-checkbox__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.node
};
