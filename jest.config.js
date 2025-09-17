module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/**/*.test.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env'],
        ['@babel/preset-react', { runtime: 'automatic' }]
      ]
    }]
  },
  testPathIgnorePatterns: ['<rootDir>/tests/playwright/']
}