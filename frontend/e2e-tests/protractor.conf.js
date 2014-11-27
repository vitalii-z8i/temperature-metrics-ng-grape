exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'scenarios.js'
  ],

  chromeDriver: '../node_modules/protractor/selenium/chromedriver',
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.39.0.jar',

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:9292',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
