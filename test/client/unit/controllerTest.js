describe('createUserController', function() {
	beforeEach(module('onboarding'));

	var scope, controller;
	var url = 'http://localhost:24149/users';
	var testUser = {firstName: 'Bruce', lastName: 'Wayne', email:
	'bwayne@example.com', phone: '(111) 222-3333'};

	// CREATE USER CONTROLLER TEST

	beforeEach (inject (function ($rootScope, $controller) {
		scope = $rootScope.$new();
		controller = $controller ('createUserController', {$scope: scope});
	}));

	it ('sends a user object with the inputted values', function() {
		scope.user = {};
		scope.user.firstName = 'Bruce';
		scope.user.lastName = 'Wayne';
		scope.user.email = 'bwayne@example.com';
		scope.user.phone = '(111) 222-3333';
		expect (scope.user).toEqual (testUser);
	});

	// USER LIST TEST

	describe('$scope.usersListController', function () {

		beforeEach (inject (function ($injector, $rootScope, $controller) {
			scope = $rootScope.$new();
			$httpBackend = $injector.get('$httpBackend');
			$http = $injector.get('$http');
			controller = $controller ('usersListController', {$scope: scope});
		}));

		it ('queries the user list from the server', function () {
			var exampleArray = [testUser];
			$httpBackend.expectGET(url).respond (200, exampleArray);
      $httpBackend.flush();
		});
	});

	// USER PROFILE TEST

	describe('$scope.userProfileController', function () {

		beforeEach (inject (function ($injector) {
			$httpBackend = $injector.get ('$httpBackend');
		}));

		it ('gets a user to display', function () {
			$httpBackend.expectGET (url).respond (200, [testUser]);
			$httpBackend.flush();
		});

	}); 

});
