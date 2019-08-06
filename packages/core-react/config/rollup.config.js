const path = require('path');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace');
const scss = require('rollup-plugin-scss');
const babelConfig = require('../babel.config');

module.exports = {
  input: 'src/index.js',
  output: {
    name: 'Ray.CoreReact',
    file: 'dist/index.bundle.js',
    format: 'umd',
    sourcemap: true,
    globals: {
      react: 'React',
      clsx: 'clsx'
    }
  },
  plugins: [
    scss({
      includePaths: [path.resolve(__dirname, '..', 'node_modules')],
      output: false,
      failOnError: true
    }),
    resolve(),
    commonjs({
      include: /node_modules/
    }),
    babel({
      babelrc: false,
      plugins: babelConfig.plugins,
      presets: [['@babel/env', { modules: false }]]
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  // peer dependencies
  external: ['react', 'react-dom']
};
