module.exports = {
  testPathIgnorePatterns: ['node_modules/*', '.cache/*'],
  projects: [
    {
      displayName: '@wework/ray-core',
      testMatch: ['<rootDir>/packages/core/**/*.test.js']
    },
    {
      displayName: '@wework/ray-core-react',
      testMatch: ['<rootDir>/packages/core-react/**/*.test.js']
    }
  ]
};
