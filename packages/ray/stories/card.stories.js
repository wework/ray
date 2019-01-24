import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Card', module).addWithJSX('All', () => (
  <div
    style={{
      padding: '1rem',
      maxWidth: '400px'
    }}
  >
    <div className="card">
      <img
        className="responsive-image"
        src="https://source.unsplash.com/random/800x450"
      />

      <div className="card__content">
        <h2 className="h5">Spacetravel guidelines</h2>
        <p className="copy5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          atque minima itaque sint! Doloremque odio quia saepe.
        </p>
      </div>
    </div>
  </div>
));
