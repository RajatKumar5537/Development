module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/**/*.test.js'], // only run *.test.js with Jest
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env'],
        ['@babel/preset-react', { runtime: 'automatic' }]
      ]
    }]
  },
  testPathIgnorePatterns: [
    '<rootDir>/tests/**/*.spec.js', // ignore Playwright specs
    '<rootDir>/tests/e2e/',         // ignore any e2e/playwright folder
    '<rootDir>/tests/playwright/'
  ]
}