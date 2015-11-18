'use strict';

describe('onboarding project', function() {

	var mocks;
	var url = 'http://localhost:1820/#/';
	var endpoint = 'http://localhost:24149/users';
	mocks = require('./e2eMocks');

	/** Slows down testing **********************************/
	var origFn = browser.driver.controlFlow().execute;
	browser.driver.controlFlow().execute = function() {
	  var args = arguments;
	  origFn.call(browser.driver.controlFlow(), function() {
	    return protractor.promise.delayed(25);
	  });
	  return origFn.apply(browser.driver.controlFlow(), args);
	};/******************************************************/

	beforeEach(function() {
		browser.addMockModule('userMock', mocks.mockFunction);
	});

	it('loads the users list page', function() {
		browser.get(url.concat('usersList/'));
		expect(browser.getCurrentUrl()).toBe(url + 'usersList/');
		expect(element(by.id('uiview')).getText()).toContain('Bruce Wayne');
	});

	it('loads the \'user profile\' screen', function() {
		element(by.linkText('Bruce Wayne')).click();
		expect(browser.getCurrentUrl()).toBe(url + 'userProfile/1');
		expect(element(by.id('uiview')).getText()).toContain('Show less info');
	});

	it('loads the correct user', function() {
		expect(element(by.id('uiview')).getText()).toContain('batman@example.com');
	});

	it('loads \'edit user\' screen', function() {
		element(by.linkText('Edit User')).click();
		expect(element(by.id('uiview')).getText()).toContain('Phone number');
	});

	it('edits the user', function() {
		element(by.model('userCopy.phone')).clear();
		element(by.model('userCopy.phone')).sendKeys('(123) 456-7890');
		element(by.id('editButton')).click();
		expect(element(by.id('uiview')).getText()).toContain('Show less info');
		// "Show less info" means it went to the profile, which indicates success
	});

	it('loads \'delete user\' screen', function() {
		element(by.linkText('Delete User')).click();
		expect(element(by.id('uiview')).getText()).toContain('forever');
	});

	it('deletes the user', function() {
		element(by.id('deleteButton')).click();
		expect(element(by.id('uiview')).getText()).toContain('Clark Kent');
		//"Clark Kent" means it went back to the user list, which indicates success
	});

	it('creates a new user', function() {
		var user3 = {firstName: 'Harvey', lastName: 'Dent', phone: '(333) 444-5555',
	  email: 'twoface@example.com'};
		element(by.linkText('Create New User')).click();
		expect(browser.getCurrentUrl()).toBe(url + 'createNewUser/');
		element(by.model('user.firstName')).sendKeys(user3.firstName);
		element(by.model('user.lastName')).sendKeys(user3.lastName);
		element(by.model('user.phone')).sendKeys(user3.phone);
		element(by.model('user.email')).sendKeys(user3.email);
		element(by.id('submitButton')).click();
		expect(element(by.id('uiview')).getText()).toContain('Show less info');
		// "Show less info" means it went to the profile, which indicates success
	});

});
