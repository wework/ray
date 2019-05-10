const path = require('path');

module.exports = ({ config, mode }) => {
  // config.target = 'node';
  // config.node = { fs: 'empty' };

  // Add SCSS support, since Ray Design System needs it
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader']
  });

  // Make root imports from `src/` work in storybooks
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    src: path.resolve(__dirname, '../src')
  };

  return config;
};
