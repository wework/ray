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
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: ['@babel/plugin-proposal-class-properties']
};
