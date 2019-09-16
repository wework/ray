const typescript = require('rollup-plugin-typescript2');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace');
const postcss = require('rollup-plugin-postcss');
const babelConfig = require('../babel.config');

const pkg = require('../package.json');

module.exports = {
  input: 'src/index.ts',
  output: {
    name: 'Ray.ProductReact',
    file: 'dist/index.bundle.js',
    format: 'umd',
    sourcemap: true,
    globals: {
      react: 'React',
      clsx: 'clsx'
    }
  },
  plugins: [
    typescript(),
    resolve(),
    postcss(),
    commonjs({
      include: '/node_modules/'
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
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies)
  ]
};
