const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace');
const babelConfig = require('../babel.config');

module.exports = {
  input: 'src/index.js',
  output: {
    name: 'Ray.Core',
    file: 'scripts/ray-core.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**',
      sourceMap: false
    }),
    babel({
      babelrc: false,
      plugins: babelConfig.plugins,
      presets: [['@babel/env', { modules: false }]]
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
