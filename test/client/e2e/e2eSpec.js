'use strict';

describe('onboarding project', function() {

	//var ngMockE2E = require('ng-mock-e2e');
	var mocks;
	//var $httpBackend = ngMockE2E.$httpBackend;
	var url = 'http://localhost:1820/#/usersList/';
	var endpoint = 'http://localhost:24149/users';

	beforeEach(function() {
		mocks = require('./e2eMocks');
		browser.addMockModule('userMock', mocks.mockFunction);
		browser.get(url);
	});

	it('loads the users list page', function() {
		browser.get(url);
		expect(browser.getCurrentUrl()).toBe(browser.baseUrl + url);
		expect(browser.getTitle()).toEqual('Onboarding (Ronald Pepmeyer)');
		expect(element(by.binding('user.firstName')).getText()).toContain('Bruce');
	});

});
