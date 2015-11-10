exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: { 'browserName': 'chrome' },
  specs: ['client/e2e/e2eSpec.js'],
  rootElement: 'body',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 10000
  },
  onPrepare: function() {
    browser.get("http://localhost:1820/#/usersList/");
  }
};
