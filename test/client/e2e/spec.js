'use strict';

describe('onboarding project', function() {

	var ngMockE2E = require('ng-mock-e2e');
	var $httpBackend = ngMockE2E.$httpBackend;
	var url = 'http://localhost:1820/#/usersList/';
	var endpoint = 'http://localhost:24149/users';

	beforeEach(function () {
	  ngMockE2E.addMockModule();
	  ngMockE2E.addAsDependencyForModule('onboarding');
	  ngMockE2E.embedScript('../node_modules/angular-mocks/angular-mocks.js');
		var user1 = {firstName: 'Bruce', lastName: 'Wayne', Phone: '(111) 222-3333',
		email: 'batman@example.com', _id: 1};
		$httpBackend.when('GET', endpoint).respond(200, [user1]);
	});

	it('load the users list page', function() {
		browser.get(url);
		expect(browser.getCurrentUrl()).toBe(browser.baseUrl + url);
		expect(browser.getTitle()).toEqual('Onboarding (Ronald Pepmeyer)');
		browser.sleep(1000); //just for debugging
		expect(element(by.binding('user.firstName')).getText()).toEqual('Bruce');
	});

});
