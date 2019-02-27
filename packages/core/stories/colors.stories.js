import React from 'react';
import { storiesOf } from '@storybook/react';

const BLUES = [
  'ray-color-blue-10',
  'ray-color-blue-20',
  'ray-color-blue-50',
  'ray-color-blue-60',
  'ray-color-blue-70'
];

const REDS = [
  'ray-color-red-10',
  'ray-color-red-20',
  'ray-color-red-50',
  'ray-color-red-60',
  'ray-color-red-70'
];

const GREENS = [
  'ray-color-green-10',
  'ray-color-green-20',
  'ray-color-green-70',
  'ray-color-green-80',
  'ray-color-green-90'
];

const GRAYS = [
  'ray-color-gray-02',
  'ray-color-gray-10',
  'ray-color-gray-30',
  'ray-color-gray-50',
  'ray-color-gray-60'
];

const Color = function(props) {
  return (
    <div
      {...props}
      style={{
        width: '100%',
        height: `calc(${100 / 6}vh - 4px)`,
        marginRight: '0.5rem',
        fontSize: '1.25rem',
        fontWeight: 600,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        textShadow: '0 1px 4px rgba(0,0,0,.1)'
      }}
    />
  );
};

storiesOf('Colors', module).add('all', () => (
  <div className="ray-grid">
    <div className="ray-grid__inner">
      <div
        className="ray-grid__cell--span-2-phone ray-grid__cell--span-4-tablet ray-grid__cell--span-6-desktop"
        style={{
          marginBottom: '24px'
        }}
      >
        <Color className="ray-color-white" />
      </div>
      <div
        className="ray-grid__cell--span-2-phone ray-grid__cell--span-4-tablet ray-grid__cell--span-6-desktop"
        style={{
          marginBottom: '24px'
        }}
      >
        <Color className="ray-color-black" />
      </div>
      <div className="ray-grid__cell--span-1-phone ray-grid__cell--span-2-tablet ray-grid__cell--span-3-desktop">
        {GRAYS.map(color => (
          <Color className={color} />
        ))}
      </div>
      <div className="ray-grid__cell--span-1-phone ray-grid__cell--span-2-tablet ray-grid__cell--span-3-desktop">
        {BLUES.map(color => (
          <Color className={color} />
        ))}
      </div>
      <div className="ray-grid__cell--span-1-phone ray-grid__cell--span-2-tablet ray-grid__cell--span-3-desktop">
        {REDS.map(color => (
          <Color className={color} />
        ))}
      </div>
      <div className="ray-grid__cell--span-1-phone ray-grid__cell--span-2-tablet ray-grid__cell--span-3-desktop">
        {GREENS.map(color => (
          <Color className={color} />
        ))}
      </div>
    </div>
  </div>
));
