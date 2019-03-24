import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Typography', module)
  .add('all', () =>
    [
      'ray-text--display-1',
      'ray-text--display-2',
      'ray-text--h1',
      'ray-text--h2',
      'ray-text--h3',
      'ray-text--h4',
      'ray-text--h5',
      'ray-text--h6',
      'ray-text--body-large',
      'ray-text--body',
      'ray-text--body-small',
      'ray-text--body-x-small'
    ].map(type => {
      return (
        <div key={type}>
          <span className={type}>{type}</span>
        </div>
      );
    })
  )
  .add('h1 + body-large', () => (
    <React.Fragment>
      <h1 className="ray-text--h1">Keeping It Fresh</h1>
      <p className="ray-text--body-large">
        This is a living system that needs to be maintained, so we’re focusing
        on ease of use and keeping things up-to-date. Feel free to leave us
        feedback too!
      </p>
    </React.Fragment>
  ))
  .add('h2 + body-large', () => (
    <React.Fragment>
      <h1 className="ray-text--h2">Keeping It Fresh</h1>
      <p className="ray-text--body-large">
        This is a living system that needs to be maintained, so we’re focusing
        on ease of use and keeping things up-to-date. Feel free to leave us
        feedback too!
      </p>
    </React.Fragment>
  ))
  .add('h3 + body', () => (
    <React.Fragment>
      <h1 className="ray-text--h3">Keeping It Fresh</h1>
      <p className="ray-text--body">
        This is a living system that needs to be maintained, so we’re focusing
        on ease of use and keeping things up-to-date. Feel free to leave us
        feedback too!
      </p>
    </React.Fragment>
  ))
  .add('anchor', () => (
    // eslint-disable-next-line no-script-url
    <a href="javascript:;" rel="noopener noreferrer">
      Valar morghulis
    </a>
  ));
