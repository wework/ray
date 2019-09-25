module.exports = {
  displayName: '@wework/ray-product-react',
  testMatch: ['<rootDir>/**/*.test.[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
};
