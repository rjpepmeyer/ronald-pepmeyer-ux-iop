describe('userProfileController', function() {
	beforeEach(module('onboarding'));

	var scope, controller, stateParams;
	var url = 'http://localhost:24149/users';
	var testUser = {firstName: 'Bruce', lastName: 'Wayne', email:
	'bwayne@example.com', phone: '(111) 222-3333', _id: 1};
	var testUsers = [testUser];
	stateParams = {id: 1};

	beforeEach(inject(function($injector, $rootScope, $controller) {
		scope = $rootScope.$new();
		httpBackend = $injector.get ('$httpBackend');
		controller = $controller('userProfileController', {$scope: scope,
			$stateParams: stateParams});
		httpBackend.expectGET(url).respond(200, testUsers);
	}));

	it('queries the user list from the server', function() {
		httpBackend.expectGET(url).respond(200, testUsers);
    httpBackend.flush();
		expect(scope.user.firstName).toEqual(testUser.firstName);
	});

	it('edits the users information', function() {
		httpBackend.expectGET(url).respond(200, testUsers);
		httpBackend.expectPUT(url + '/1').respond(200);
		scope.userCopy = {};
		scope.userCopy.phone = '(333) 222-1111';
		scope.editUser();
		httpBackend.flush();
		expect(scope.user.phone).toEqual(scope.userCopy.phone);
	});

	it('deletes the user', function() {
		httpBackend.expectGET(url).respond(200, testUsers);
		httpBackend.expectDELETE(url + '/1').respond();
		scope.deleteUser(testUser);
		httpBackend.flush();
		/*************************************
		* Is this enough for this unit test? *
		*************************************/
	})

});
