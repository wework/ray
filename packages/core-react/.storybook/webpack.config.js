const path = require('path');

const SRC_PATH = path.resolve(__dirname, '../src');

module.exports = function({ config }) {
  // Add SCSS support, since Ray Design System needs it
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader']
  });

  // Make root imports from `src/` work in storybooks
  config.resolve.alias = {
    ...config.resolve.alias,
    src: SRC_PATH
  };

  return config;
};
