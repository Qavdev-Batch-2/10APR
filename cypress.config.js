const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 20000,
    watchForFileChanges: false,
    viewportWidth: 1280,
    viewportHeight: 720,

    setupNodeEvents(on, config) {
    },
  },
});
