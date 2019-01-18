const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: isProduction ? 'cheap-source-map' : 'source-map',
  entry: {
    ray: resolve('./lib/application.scss')
  },
  output: {
    path: resolve('./dist')
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'resolve-url-loader' },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2|otf|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'lib'),
      node_modules: path.resolve(__dirname, 'node_modules')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css'
    })
  ]
};

function resolve(_path) {
  return path.join(__dirname, _path);
}
