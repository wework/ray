import { configure, addDecorator, setAddon } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { configureViewport } from '@storybook/addon-viewport';
import JSXAddon from 'storybook-addon-jsx';
import '../lib/application.scss';

setAddon(JSXAddon);
addDecorator(checkA11y);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

// addDecorator(
//   withBackgrounds([
//     { name: 'twitter', value: '#00aced', default: true },
//     { name: 'facebook', value: '#3b5998' },
//   ])
// );

// configureViewport({
//   defaultViewport: 'iphonex'
// });
