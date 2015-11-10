'use strict';

describe('onboarding project', function() {

	var mocks;
	var url = 'http://localhost:1820/#/usersList/';
	var endpoint = 'http://localhost:24149/users';

	beforeEach(function() {
		mocks = require('./e2eMocks');
		browser.addMockModule('backendMock', mocks.mockFunction);
		console.log("-LOG- backendMock loaded");
		//browser.waitForAngular();
		browser.get(url);
		console.log("-LOG- page loaded");
	});

	it('loads the users list page', function() {
		console.log("-LOG- first spec loaded");
		expect(browser.getCurrentUrl()).toBe(browser.baseUrl + url);
		console.log("-LOG- compared url to expectation");
		expect(browser.getTitle()).toEqual('Onboarding (Ronald Pepmeyer)');
		console.log("-LOG- compared title to expectation");
		expect(element(by.binding('user.firstName')).getText()).toContain('Bruce');
		console.log("-LOG- compared user name to expectation");
		console.log("-LOG- completed first spec");
	});

});
