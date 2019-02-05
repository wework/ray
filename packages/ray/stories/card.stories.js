import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

storiesOf('Card', module).addWithJSX('default', () =>
  withPadding(
    <div
      style={{
        maxWidth: '400px'
      }}
    >
      <div className="ray-card">
        <div className="ray-image ray-image--16by9">
          <img src="https://source.unsplash.com/random/800x450" />
        </div>

        <div className="ray-card__content">
          <h2 className="ray-h5">Spacetravel guidelines</h2>
          <p className="ray-copy5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            atque minima itaque sint! Doloremque odio quia saepe.
          </p>
        </div>
      </div>
    </div>
  )
);
