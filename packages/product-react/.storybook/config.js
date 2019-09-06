import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import '@wework/ray-core/src/ray-core.scss';

const req = require.context('../stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <div
    style={{
      padding: '1rem'
    }}
  >
    {story()}
  </div>
));

addDecorator(withA11y);

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
