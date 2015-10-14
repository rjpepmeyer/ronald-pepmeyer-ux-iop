describe ('servicesTest', function() {

	var url = 'http://localhost:24149/users';
	var test = {firstName: 'Bruce', lastName: 'Wayne', email: 'batman@example.com',
	phone: "(111) 222-3333", _id: "1"};
	var $httpBackend;

	beforeEach(module('onboarding'));

	beforeEach(inject(function($injector, $rootScope, $controller) {
		scope = $rootScope.$new();
		controller = $controller('createUserController', {$scope: scope});
		var $httpBackend = $injector.get('$httpBackend');
	}));

	// TEST GETUSERS()
	
	it ('tests GetUsers()', function () {
		$httpBackend.expectGET(url);
		$httpBackend.flush();
	});

});
