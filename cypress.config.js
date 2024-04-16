const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: "https://www.konga.com/",
    defaultCommandTimeout: 8000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
