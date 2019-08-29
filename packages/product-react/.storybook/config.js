import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';

import '@wework/ray-core/src/ray-core.scss';

// automatically import all files matching the given regex
const req = require.context('../src', true, /.story.tsx?$/);

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
      brandTitle: 'ray-product-react',
      brandImage: null
    },
    panelPosition: 'right',
    sortStoriesByKind: true
  }
});

configure(loadStories, module);
