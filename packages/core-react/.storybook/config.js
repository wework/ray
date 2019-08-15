import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';

import '@wework/ray-core/css/ray-core.css';

const req = require.context('../stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// wrap every view in some spacing padding
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
      brandTitle: 'ray-core-react',
      brandImage: null
    },
    panelPosition: 'right',
    sortStoriesByKind: true
  }
});

configure(loadStories, module);
