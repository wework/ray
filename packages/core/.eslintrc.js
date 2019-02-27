module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true
      }
    ]
  }
};
