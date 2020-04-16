import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { initDsm } from '@invisionapp/dsm-storybook';

import '../stories/styles/index.scss';
import '../src/';

const req = require.context('../stories', true, /.stories.js$/);

//Init Dsm
initDsm({
  addDecorator,
  addParameters,
  callback: () => configure(loadStories, module)
});

// wrap every view in 4x padding
addDecorator(story => (
  <div
    style={{
      padding: '1rem'
    }}
  >
    {story()}
  </div>
));

addParameters({
  options: {
    theme: {
      brandTitle: 'Ray',
      brandImage: './logo.svg'
    },
    showPanel: false,
    panelPosition: 'right',
    sortStoriesByKind: true
  }
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}
