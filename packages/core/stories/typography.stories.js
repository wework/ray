import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

storiesOf('Typography', module)
  .add('all', () =>
    withPadding(
      [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p1',
        'p2',
        'p3',
        'p4',
        'p5',
        'p6'
      ].map(type => {
        const Tag = type[0] === 'h' ? type : 'p';
        return (
          <React.Fragment key={type}>
            <Tag className={`ray-${type}`}>ray-{type}</Tag>
          </React.Fragment>
        );
      })
    )
  )
  .add('h1 + p1', () =>
    withPadding(
      <React.Fragment>
        <h1 className="ray-h1">Keeping It Fresh</h1>
        <p className="ray-p1">
          This is a living system that needs to be maintained, so we’re focusing
          on ease of use and keeping things up-to-date. Feel free to leave us
          feedback too!
        </p>
      </React.Fragment>
    )
  )
  .add('h2 + p2', () =>
    withPadding(
      <React.Fragment>
        <h1 className="ray-h2">Keeping It Fresh</h1>
        <p className="ray-p2">
          This is a living system that needs to be maintained, so we’re focusing
          on ease of use and keeping things up-to-date. Feel free to leave us
          feedback too!
        </p>
      </React.Fragment>
    )
  )
  .add('h3 + p3', () =>
    withPadding(
      <React.Fragment>
        <h1 className="ray-h3">Keeping It Fresh</h1>
        <p className="ray-p3">
          This is a living system that needs to be maintained, so we’re focusing
          on ease of use and keeping things up-to-date. Feel free to leave us
          feedback too!
        </p>
      </React.Fragment>
    )
  );
