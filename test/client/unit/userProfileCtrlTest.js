describe('userProfileController', function() {
	beforeEach(module('onboarding'));

	var scope, controller, stateParams;
	var url = 'http://localhost:24149/users';
	var testUser = {firstName: 'Bruce', lastName: 'Wayne', email:
	'bwayne@example.com', phone: '(111) 222-3333', _id: 1};

	// USER LIST TEST

	beforeEach(inject(function($injector, $rootScope, $controller) {
		scope = $rootScope.$new();
		httpBackend = $injector.get ('$httpBackend');
		controller = $controller('userProfileController', {$scope: scope,
			$stateParams: {id: 1}});
		httpBackend.expectGET(url).respond(200, [testUser]);
	}));

	it('queries the user list from the server', function () {
		httpBackend.expectGET(url).respond(200, [testUser]);
    httpBackend.flush();
		expect(scope.user.firstName).toEqual(testUser.firstName);
	});

});
