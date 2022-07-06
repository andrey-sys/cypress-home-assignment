const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  reporter: 'cypress-mochawesome-reporter',//report
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);//report
      // implement node event listeners here
    },
    baseUrl: 'https://cloudinary.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // using another format: spec data js
    excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*'] // hide from the runner to execute those folders
  },
})
