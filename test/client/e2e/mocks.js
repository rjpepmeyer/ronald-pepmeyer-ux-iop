/* browser.driver.get('http://localhost:1820');

onboardingDev = angular.module('onboardingDev', ['onboarding', 'ngMockE2E']);
onboardingDev.run(function($httpBackend) {

	testUser1 = {firstName: 'Bruce', lastName: 'Wayne', phone: '(111) 222-3333',
	email: 'batman@example.com', _id: 1};
	testUser2 = {firstName: 'Clark', lastName: 'Kent', phone: '(222) 333-4444',
	email: 'superman@example.com', _id: 2};
	testUsers [testUser1, testUser2];

	url = 'http://localhost:24149/users';

	$httpBackend.whenGET(url).respond(200, testUsers);

}); */
