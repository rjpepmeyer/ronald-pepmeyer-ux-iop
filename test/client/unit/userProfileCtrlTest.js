describe('userProfileController', function() {
	beforeEach(module('onboarding'));

	var scope, controller, stateParams;
	var url = 'http://localhost:24149/users';
	var testUser = {firstName: 'Bruce', lastName: 'Wayne', email:
	'bwayne@example.com', phone: '(111) 222-3333', _id: 1};
	var testUsers = [testUser];

	// USER LIST TEST

	beforeEach(inject(function($injector, $rootScope, $controller) {
		scope = $rootScope.$new();
		httpBackend = $injector.get ('$httpBackend');
		controller = $controller('userProfileController', {$scope: scope,
			$stateParams: {id: 1}});
		httpBackend.expectGET(url).respond(200, [testUser]);
	}));

	it('queries the user list from the server', function() {
		httpBackend.expectGET(url).respond(200, [testUser]);
    httpBackend.flush();
		expect(scope.user.firstName).toEqual(testUser.firstName);
	});

	it('edits the users information', function() {
		httpBackend.expectGET(url).respond(200, [testUser]);
		httpBackend.expectPUT(url + '/1').respond(200);
		scope.userCopy = {};
		scope.userCopy.phone = '(333) 222-1111';
		scope.editUser();
		httpBackend.flush();
		expect(scope.user.phone).toEqual(scope.userCopy.phone);
	});

	it('deletes the user', function() {
		httpBackend.expectGET(url).respond(200, testUsers);
		httpBackend.expectDELETE(url + '/1').respond(200);
		scope.user = testUser;
		scope.deleteUser(scope.user);
		httpBackend.flush();
		expect(scope.user).toEqual(undefined);
	})

});
