'use strict';

browser.get('http://localhost:1820/'); /*
onboardingDev = angular.module('myAppDev', ['onboarding', 'ngMockE2E']);
onboardingDev.run(function($httpBackend) { */

	describe('onboarding project', function() {

		var $httpBackend = ngMockE2E.$httpBackend;
		var url = 'http://localhost:1820/#/usersList/';
		var endpoint = 'http://localhost:24149/users';

		beforeEach(function () {
		  ngMockE2E.addMockModule();
		  ngMockE2E.addAsDependencyForModule('onboarding');
		  ngMockE2E.embedScript('../node_modules/angular-mocks/angular-mocks.js');
		});

		it('load the users list page', function() {
			$httpBackend.whenGET(endpoint).respond('[{firstName: Bruce}]');
			browser.get(url);
			expect(browser.getCurrentUrl()).toBe(browser.baseUrl + url);
			expect(browser.getTitle()).toEqual('Onboarding (Ronald Pepmeyer)');
		});

	});

//});
