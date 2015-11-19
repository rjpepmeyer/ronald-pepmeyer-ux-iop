'use strict';

describe('onboarding project', function() {

	var mocks;
	var url = 'http://localhost:1820/#/';
	var endpoint = 'http://localhost:24149/users';
	mocks = require('./e2eMocks');

	beforeEach(function() {
		browser.addMockModule('userMock', mocks.mockFunction);
	});

	afterEach(function() {
		browser.sleep(750);
	});

	it('loads the \'users list\' page by default', function() {
		//Load url without route and get redirected to usersList
		browser.get(url);
		expect(browser.getCurrentUrl()).toBe(url + 'usersList/');
	});

	it('displays the users', function () {
		//UserList displays users
		expect(element(by.id('uiview')).getText()).toContain('Bruce Wayne');
		expect(element(by.id('uiview')).getText()).toContain('Clark Kent');
	});

	it('navigates to the \'user profile\' screen', function() {
		//Click on a user and load their profile
		element(by.linkText('Bruce Wayne')).click();
		expect(browser.getCurrentUrl()).toBe(url + 'userProfile/1');
		expect(element(by.id('uiview')).getText()).toContain('Show less info');
		expect(element(by.id('uiview')).getText()).toContain('batman@example.com');
	});

	it('navigates to the \'edit user\' screen', function() {
		//Click on 'edit user' from profile and load edit user screen
		element(by.linkText('Edit User')).click();
		expect(element(by.id('uiview')).getText()).toContain('Phone number');
	});

	it('edits the user', function() {
		var oldPhone = '(111) 222-3333';
		var newPhone = '(123) 456-7890';

		//Pretest old phone value
		expect(element(by.model('userCopy.phone')).getAttribute('value'))
		.toContain(oldPhone);

		//Filling out form
		element(by.model('userCopy.phone')).clear();
		element(by.model('userCopy.phone')).sendKeys(newPhone);
		element(by.id('editButton')).click();

		//Return to user profile with new info
		expect(element(by.id('uiview')).getText()).toContain('Show less info');
		expect(element(by.id('uiview')).getText()).toContain(newPhone);
	});

	it('navigates to the \'delete user\' screen', function() {
		//Click on 'Delete User' and load 'Delete User' screen
		element(by.linkText('Delete User')).click();
		expect(element(by.id('uiview')).getText()).toContain('forever');
	});

	it('deletes the user', function() {
		//Click on 'Delete' button and return to usersList without that user
		element(by.id('deleteButton')).click();
		expect(element(by.id('uiview')).getText()).toContain('Clark Kent');
		expect(element(by.id('uiview')).getText()).not.toContain('Bruce Wayne');
	});

	it('navigates to the \'create user\' page', function () {
		//Click on 'Create New User' and load createNewUser
		element(by.linkText('Create New User')).click();
		expect(browser.getCurrentUrl()).toBe(url + 'createNewUser/');
	})

	it('creates a new user', function() {
		var user3 = {firstName: 'Harvey', lastName: 'Dent', phone: '(333) 444-5555',
	  email: 'twoface@example.com'};

		// Filling out form
		element(by.model('user.firstName')).sendKeys(user3.firstName);
		element(by.model('user.lastName')).sendKeys(user3.lastName);
		element(by.model('user.phone')).sendKeys(user3.phone);
		element(by.model('user.email')).sendKeys(user3.email);
		element(by.id('submitButton')).click();

		// Returns to that user's profile
		expect(element(by.id('uiview')).getText()).toContain('Show less info');
		expect(element(by.id('uiview')).getText()).toContain('Harvey');
	});

	it('reflects creation and deletion events in usersList', function() {
		element(by.linkText('Select User')).click();
		expect(element(by.id('uiview')).getText()).not.toContain('Bruce Wayne');
		expect(element(by.id('uiview')).getText()).toContain('Clark Kent');
		expect(element(by.id('uiview')).getText()).toContain('Harvey Dent');
	});

});
