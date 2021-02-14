module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/tests/e2e/',
  ],
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/*.test.js',
    '!**/test.js',
    '!**/*.stories.js',
    '!**/stories.js',
  ],
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: 'jest-coverage',
  // The test environment that will be used for testing
  testEnvironment: 'node',
}
