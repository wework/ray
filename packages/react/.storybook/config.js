import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import 'storybook-chromatic';
//
import '@wework/ray-core/scss/ray-core.scss';
import '@wework/ray-core/scss/ray-debug.scss';

// Automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

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
      brandTitle: 'Ray ⚛️React',
      brandImage: null
    },
    // showPanel: false,
    panelPosition: 'right',
    sortStoriesByKind: true
  }
});

configure(loadStories, module);
