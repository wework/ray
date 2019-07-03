import React from 'react';
import { storiesOf } from '@storybook/react';

/* eslint-disable react/prop-types */
function Box(props) {
  return (
    <div
      style={{
        width: '10rem',
        height: '10rem',
        marginBottom: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      {...props}
    >
      {props.className}
    </div>
  );
}

storiesOf('Elevation', module).add('default', () => (
  <>
    <Box className="ray-elevation-1" />
    <Box className="ray-elevation-2" />
    <Box className="ray-elevation-3" />
    <Box className="ray-elevation-4" />
    <Box className="ray-elevation-5" />
  </>
));
