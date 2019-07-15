module.exports = {
  testPathIgnorePatterns: ['node_modules/*', '.cache/*'],
  projects: [
    '<rootDir>/packages/core/jest.config.js',
    '<rootDir>/packages/core-react/jest.config.js',
    {
      displayName: '@wework/rehype-react',
      testMatch: ['<rootDir>/packages/rehype-react/**/*.test.js']
    }
  ]
};
