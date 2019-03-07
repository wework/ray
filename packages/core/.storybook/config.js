import { configure, addParameters } from '@storybook/react';

import '../stories/styles/index.scss';

const req = require.context('../stories', true, /.stories.js$/);

addParameters({
  options: {
    brandTitle: 'WeWork Ray',
    brandUrl: 'https://wework.com',
    showPanel: false,
    panelPosition: 'right',
    sortStoriesByKind: true
  }
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
