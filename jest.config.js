// /** @type {import('jest').Config} */
// const config = {
//   testEnvironment: "jsdom",
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/$1",
//   },
// };

// export default config;

module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/**/*.test.js', '**/tests/**/*.spec.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  }
}