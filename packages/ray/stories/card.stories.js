import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

storiesOf('Card', module).addWithJSX('All', () =>
  withPadding(
    <div
      style={{
        maxWidth: '400px'
      }}
    >
      <div className="card">
        <div className="ImgContainer--16by9">
          <img src="https://source.unsplash.com/random/800x450" />
        </div>

        <div className="card__content">
          <h2 className="h5">Spacetravel guidelines</h2>
          <p className="copy5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            atque minima itaque sint! Doloremque odio quia saepe.
          </p>
        </div>
      </div>
    </div>
  )
);
