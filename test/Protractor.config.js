exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: { 'browserName': 'chrome' },
  specs: [/*'client/e2e/mocks.js', */'client/e2e/spec.js'],/*
	files: ['../node_modules/angular/angular.js'/
	'../node_modules/angular-mocks/angular-mocks.js'],*/
	onPrepare: function() {
		browser.driver.get('http://localhost:1820');
	}
};
