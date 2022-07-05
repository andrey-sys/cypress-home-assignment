const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    baseUrl: 'https://cloudinary.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // using another format: spec data js
    excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*'] // hide from the runner to execute those folders
  }
})
