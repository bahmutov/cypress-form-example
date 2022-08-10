const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    viewportHeight: 200,
    viewportWidth: 300,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
