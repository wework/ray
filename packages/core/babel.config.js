module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        },
        ...(process.env.NODE_ENV === 'test'
          ? { modules: 'auto' }
          : { modules: false })
      }
    ]
  ],
  plugins: ['@babel/plugin-proposal-class-properties']
};
