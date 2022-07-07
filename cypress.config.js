const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
//report
  reporter: 'cypress-mochawesome-reporter',
  autoOpen: true,
  code: true,
  video: false,
  charts: true,
  reportPageTitle: 'Automation test assingment',
  embeddedScreenshots: true,
  inlineAssets: true,
  saveAllAttempts: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);//report plugin of mocha
      // implement node event listeners here
    },
    baseUrl: 'https://cloudinary.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // using format: spec data js
    excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*'] // hide from the runner to execute those folders
  },
})
