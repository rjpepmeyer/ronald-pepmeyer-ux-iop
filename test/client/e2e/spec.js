'use strict';

describe('onboarding project', function() {

	var ngMockE2E = require('ng-mock-e2e');
	var mocks;
	var $httpBackend = ngMockE2E.$httpBackend;
	var url = 'http://localhost:1820/#/usersList/';
	var endpoint = 'http://localhost:24149/users';

	beforeEach(function() {
		mocks = require('./mocks.js');

	  /* Times out
		browser.addMockModule('userMock', mocks.mockFunction);
		*/

		/* mockFunction not defined
		browser.addMockModule('userMock', mockFunction);
		*/

		/* Times out
		browser.addMockModule('userMock', function() {
  		angular.module('userMock', ['onboarding', 'ng-mock-e2e'])
			.run(function($httpBackend) {
				$httpBackend.whenGET(endpoint).respond([{firstName: 'Bruce'}]);
			});
		});
		*/

		/* Times out
		browser.addMockModule('userMock', function() {
			angular.module('userMock', ['onboarding', 'ng-mock-e2e', 'mocks'])
			.run(function($httpBackend) {
				mockFunction();
			});
		});
		*/

		/* Times out
		browser.addMockModule('userMock', function() {
			angular.module('userMock');
		});
		*/

	});

	it('loads the users list page', function() {
		browser.get(url);
		expect(browser.getCurrentUrl()).toBe(browser.baseUrl + url);
		expect(browser.getTitle()).toEqual('Onboarding (Ronald Pepmeyer)');
		expect(element(by.binding('user.firstName')).getText()).toContain('Bruce');
	});

});
