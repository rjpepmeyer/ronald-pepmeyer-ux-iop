onboarding.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/usersList');

	$stateProvider
		.state('userProfile', {
			url: '/userProfile',
			controller: 'userProfileController',
			templateUrl: 'partials/user_profile.html'
		})
		.state('usersList', {
			url: '/usersList',
			controller: 'usersListController',
			templateUrl: 'partials/users_list.html'
		})
		.state('editUser', {
			url: '/editUser',
			controller: 'editUserController',
			templateUrl: 'partials/edit_user.html'
		})
		.state('createNewUser', {
			url: '/createNewUser',
			controller: 'createUserController',
			templateUrl: 'partials/create_new_user.html'
		});

}]);
