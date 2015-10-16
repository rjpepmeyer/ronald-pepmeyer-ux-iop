describe('usersListController', function() {
	beforeEach(module('onboarding'));

	var scope, controller;
	var url = 'http://localhost:24149/users';
	var testUser = {firstName: 'Bruce', lastName: 'Wayne', email:
	'bwayne@example.com', phone: '(111) 222-3333'};

	beforeEach(inject(function($injector, $rootScope, $controller) {
		scope = $rootScope.$new();
		httpBackend = $injector.get ('$httpBackend');
		controller = $controller('usersListController', {$scope: scope});
		httpBackend.expectGET(url).respond(200, [testUser]);
	}));

	it('queries the user list from the server', function () {
		httpBackend.expectGET(url).respond(200, [testUser]);
    httpBackend.flush();
		expect(scope.users[0].firstName).toEqual(testUser.firstName);
	});

});
