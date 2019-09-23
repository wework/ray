import React from 'react';

interface InputIconProps {
  prepend?: boolean;
  icon?: React.ReactNode;
}

const Icon: React.FC<InputIconProps> = ({ prepend, icon }) => {
  if (prepend) {
    return <div className="ray-select__prepend">{icon}</div>;
  }
  return <div>{icon}</div>;
};

export default Icon;
