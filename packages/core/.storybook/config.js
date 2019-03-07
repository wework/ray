import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import '../stories/styles/index.scss';

const req = require.context('../stories', true, /.stories.js$/);

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

configure(loadStories, module);
