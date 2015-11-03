'use strict';

describe('onboarding project', function() {

	var ngMockE2E = require('ng-mock-e2e');
	var mockModule;
	var $httpBackend = ngMockE2E.$httpBackend;
	var url = 'http://localhost:1820/#/usersList/';
	var endpoint = 'http://localhost:24149/users';

	beforeEach(function() {
		mockModule = require('./mocks.js');
	  browser.addMockModule('userMock', mockModule.mockFunction);
	});

	it('load the users list page', function() {
		browser.get(url);
		expect(browser.getCurrentUrl()).toBe(browser.baseUrl + url);
		expect(browser.getTitle()).toEqual('Onboarding (Ronald Pepmeyer)');
		expect(element(by.binding('user.firstName')).getText()).toContain('Bruce');
	});

});
