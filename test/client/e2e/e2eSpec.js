'use strict';

describe('onboarding project', function() {

	var mocks;
	var url = 'http://localhost:1820/#/';
	var endpoint = 'http://localhost:24149/users';

	beforeEach(function() {
		mocks = require('./e2eMocks');
		browser.addMockModule('userMock', mocks.mockFunction);
	});

	it('loads the users list page', function() {
		browser.get(url.concat('usersList/'));
		expect(browser.getCurrentUrl()).toBe(url + 'usersList/');
		expect(element(by.id('uiview')).getText()).toContain('Bruce Wayne');
	});

	it('loads the \'user profile\' screen', function() {
		browser.get(url.concat('userProfile/1'));
		expect(browser.getCurrentUrl()).toBe(url + 'userProfile/1');
		expect(element(by.id('uiview')).getText()).toContain('Show less info');
	});

	it('loads the correct user profile', function() {
		expect(element(by.id('uiview')).getText()).toContain('batman@example.com');
	});

	it('loads \'edit user\' screen', function() {
		element(by.linkText('Edit User')).click();
		expect(element(by.id('uiview')).getText()).toContain('phone number');
	});

	it('loads the correct user to edit', function() {});

	it('edits the user correctly', function() {});

	it('loads \'delete user\' screen', function() {
		element(by.linkText('Delete User')).click();
		expect(element(by.id('uiview')).getText()).toContain('forever');
	});

	it('loads the correct user to delete', function() {});

	it('deletes the user correctly', function() {});

	it('creates a new user', function() {
		var user3 = {firstName: 'Harvey', lastName: 'Dent', phone: '(333) 444-5555',
	  email: 'twoface@example.com'};

		browser.get(url.concat('createNewUser/'));
		expect(browser.getCurrentUrl()).toBe(url + 'createNewUser/');
		element(by.model('user.firstName')).sendKeys(user3.firstName);
		element(by.model('user.lastName')).sendKeys(user3.lastName);
		element(by.model('user.phone')).sendKeys(user3.phone);
		element(by.model('user.email')).sendKeys(user3.email);
		element(by.id('submitButton')).click();
	});

});
