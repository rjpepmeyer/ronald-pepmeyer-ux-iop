exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: { 'browserName': 'chrome' },
  specs: ['client/e2e/mocks.js', 'client/e2e/spec.js']
};
