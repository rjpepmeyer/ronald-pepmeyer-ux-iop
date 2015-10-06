onboarding.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/usersList/:id');

	$stateProvider
		.state('userProfile', {
			url: '/userProfile/:id',
			controller: 'userProfileController',
			directive: 'userProfileDirective',
			template: '<user-profile></user-profile>'
		})
		.state('usersList', {
			url: '/usersList/:id',
			controller: 'usersListController',
			directive: 'userListDirective',
			template: '<users-list></users-list>'
		})
		.state('createNewUser', {
			url: '/createNewUser/:id',
			controller: 'createUserController',
			directive: 'createUserDirective',
			template: '<create-new-user></create-new-user>'
		});

}]);
