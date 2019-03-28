import React from 'react';

/* eslint-disable react/prop-types */
function SpaceExample(props) {
  const rem = Number(props.rem);
  return (
    <div className="space-example">
      <div
        className="space-example__box"
        style={{
          width: `${rem}rem`,
          height: `${rem}rem`
        }}
      />
      <div className="space-example__label">
        {rem}rem
        <br />
        {rem * 16}px
      </div>
    </div>
  );
}

export default SpaceExample;
