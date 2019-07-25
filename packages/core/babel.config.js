module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          browsers: ['> 5%', 'Last 3 versions and not ie < 11']
        },
        ...(process.env.NODE_ENV === 'test'
          ? { modules: 'auto' }
          : { modules: false })
      }
    ]
  ],
  plugins: ['@babel/plugin-proposal-class-properties']
};
