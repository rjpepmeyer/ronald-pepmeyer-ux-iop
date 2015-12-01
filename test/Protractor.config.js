exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: { 'browserName': 'chrome' },
  specs: ['client/e2e/e2eSpec.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 10000
  }
}
