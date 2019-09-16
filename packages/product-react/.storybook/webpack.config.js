const path = require('path');

const SRC_PATH = path.resolve(__dirname, '../src');

module.exports = function({ config }) {
  // Add SCSS support, since Ray Design System needs it
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader')
        }
      ]
    },
    {
      test: /\.(css|scss)$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../../')
    }
  );

  // Make root imports from `src/` work in storybooks
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
