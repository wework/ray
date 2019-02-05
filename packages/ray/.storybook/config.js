import { configure, addDecorator, setAddon } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import JSXAddon from 'storybook-addon-jsx';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import '../lib/application.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);

addDecorator(
  withBackgrounds([
    { name: 'checkers', value: 'url(/bg.svg)', default: true },
    { name: 'white', value: '#fff', default: true }
  ])
);

setAddon(JSXAddon);

addDecorator(
  withOptions({
    name: 'Ray'
  })
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
