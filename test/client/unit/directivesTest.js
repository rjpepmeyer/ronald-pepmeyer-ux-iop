describe ('directivesTest', function() {
	beforeEach(module('onboarding'));

	var compile, httpBackend, rootScope;

	beforeEach(inject(function($compile, $rootScope, $injector) {
		compile = $compile;
		httpBackend = $injector.get ('$httpBackend');
		scope = $rootScope.$new();
	}));

	it('tests the users list directive', function() {
		var element = compile('<users-list></users-list>')(scope);
		scope.$digest();
		expect(element.html()).toContain("Select a user from this list");
	});

	// DOESN'T WORK, RELATED TO UI-BOOTSTRAP
	it('tests the user profile directive', function() {
		httpBackend.expectGET('template/tabs/tab.html').respond(200);
	 	httpBackend.expectGET('template/tabs/tabset.html').respond(200);
		var element = compile('<user-profile></user-profile>')(scope);
		scope.$digest();
		expect(element.html()).toContain("Show less info");
	});

	it('tests the create user directive', function () {
		var element = compile('<create-new-user></create-new-user>')(scope);
		scope.$digest();
		expect(element.html()).toContain("Create New User Form");
	});
});
