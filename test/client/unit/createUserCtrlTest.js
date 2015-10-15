describe('createUserController', function() {
	beforeEach(module('onboarding'));

	var scope, controller;
	var url = 'http://localhost:24149/users';
	var testUser = {firstName: 'Bruce', lastName: 'Wayne', email:
	'bwayne@example.com', phone: '(111) 222-3333'};

	// CREATE USER CONTROLLER TEST

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		controller = $controller('createUserController', {$scope: scope});
	}));

	it('sends a user object with the inputted values', function() {
		scope.user = {};
		scope.user.firstName = 'Bruce';
		scope.user.lastName = 'Wayne';
		scope.user.email = 'bwayne@example.com';
		scope.user.phone = '(111) 222-3333';
		expect(scope.user).toEqual(testUser);
	});

});
