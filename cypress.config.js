const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    watchForFileChanges:false,
    responseTimeout:60000,
    defaultCommandTimeout:6000,
    baseUrl:"https://demoqa.com/automation-practice-form",
    


    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },

  },
});
