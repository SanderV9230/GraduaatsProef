const { defineConfig } = require("cypress");
require('dotenv').config({path: '../.env'})

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://training-frontend-angular.s3-website-eu-west-1.amazonaws.com',
    env: {
      APP_USERNAME: process.env.APP_USERNAME,
      APP_PASSWORD: process.env.APP_PASSWORD
    },
    setupNodeEvents(on, config) {},
  },
})
