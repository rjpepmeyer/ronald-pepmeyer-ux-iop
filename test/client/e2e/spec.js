'use strict';

describe('onboarding project', function() {

	var ngMockE2E = require('ng-mock-e2e');
	var httpBackend = ngMockE2E.$httpBackend;
	var url = 'http://localhost:1820/#/usersList/';
	var endpoint = 'http://localhost:24149/users';
	var user1 = {firstName: 'Bruce', lastName: 'Wayne', Phone: '(111) 222-3333',
	email: 'batman@example.com', _id: 1};

	it('load the users list page', function() {

		//timeout: timed out after 30000 msec waiting for spec to complete
		//httpBackend.when('GET', endpoint).respond([user1]);

		//TypeError: httpBackend.whenGET is not a function
		//httpBackend.whenGET(endpoint).respond([user1]);

		//TypeError: ngMockE2E.$httpBackend.whenGET is not a function
		//ngMockE2E.$httpBackend.whenGET(endpoint).respond([user1]);

		//ReferenceError: $httpBackend is not defined
		//$httpBackend.whenGET(endpoint).respond([user1]);

		browser.get(url);
		expect(browser.getCurrentUrl()).toBe(browser.baseUrl + url);
		expect(browser.getTitle()).toEqual('Onboarding (Ronald Pepmeyer)');
		expect(element(by.binding('user.firstName')).getText()).toContain('Bruce');
	});

});
