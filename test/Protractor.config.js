exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: { 'browserName': 'chrome' },
  specs: ['client/e2e/e2eSpec.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 10000
  },
  files: [
    '../node_modules/angular/angular.js',
    '../node_modules/angular-resource/angular-resource.js',
    '../node_modules/angular-ui-bootstrap/ui-bootstrap-tpls.js',
    '../node_modules/angular-ui-router/build/angular-ui-router.js',
    '../node_modules/angular-mocks/angular-mocks.js',
    '../node_modules/angular-mocks/ngMockE2E.js',
    '../src/partials/*.html',
    '../dist/js/app.js',
    '../temp/template.js',
    'client/e2e/*.js'
  ]
};
