import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Card', module).addWithJSX('All', () => (
  <div
    style={{
      padding: '1rem',
      maxWidth: '600px'
    }}
  >
    <div className="card">
      <img
        className="responsive-image"
        src="https://source.unsplash.com/random/800x450"
      />

      <div className="card__content">
        <h2 className="h3" style={{ marginTop: 0 }}>
          Spacetravel guidelines
        </h2>
        <p className="copy2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          atque minima itaque sint! Doloremque odio quia saepe unde sunt neque
          quam quibusdam in, nihil beatae, consequatur cumque? Cupiditate, quia
          facilis.
        </p>
      </div>
    </div>
  </div>
));
