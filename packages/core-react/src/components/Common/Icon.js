import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ prepend, icon }) => {
  if (prepend) {
    return <div className="ray-select__prepend">{icon}</div>;
  }
  return <div>{icon}</div>;
};

export default Icon;

Icon.propTypes = {
  prepend: PropTypes.bool,
  icon: PropTypes.node
};
