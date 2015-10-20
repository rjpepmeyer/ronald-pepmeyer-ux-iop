describe('createUserController', function() {
	beforeEach(module('onboarding'));

	var scope, controller;
	var url = 'http://localhost:24149/users';
	var testUser = {firstName: 'Bruce', lastName: 'Wayne', email:
	'bwayne@example.com', phone: '(111) 222-3333'};

	beforeEach(inject(function($injector, $rootScope, $controller) {
		scope = $rootScope.$new();
		httpBackend = $injector.get ('$httpBackend');
		controller = $controller('createUserController', {$scope: scope});
	}));

	it('sends a user object with the inputted values', function() {
		httpBackend.expectGET(url).respond(200, []);
		httpBackend.expectPOST(url, testUser).respond(200, '');
		scope.createUser(testUser);
		httpBackend.flush();
		expect(scope.valid).toEqual(true);
	});

});
