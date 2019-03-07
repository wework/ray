import { configure, addParameters } from '@storybook/react';
import '../stories/styles/index.scss';

const req = require.context('../stories', true, /.stories.js$/);

addParameters({
  options: {
    name: 'Ray',
    showPanel: false,
    sortStoriesByKind: true
  }
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
