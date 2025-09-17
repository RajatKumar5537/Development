// @ts-check
const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    baseURL: 'http://localhost:3000',
  },
})
