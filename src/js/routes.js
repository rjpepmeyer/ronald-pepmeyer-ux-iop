onboarding.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/usersList/:id');

	$stateProvider
		.state('userProfile', {
			url: '/userProfile/:id',
			controller: 'userProfileController',
			templateUrl: 'partials/user_profile.html'
		})
		.state('usersList', {
			url: '/usersList/:id',
			controller: 'usersListController',
			templateUrl: 'partials/users_list.html'
		})
		.state('editUser', {
			url: '/editUser/:id',
			controller: 'editUserController',
			templateUrl: 'partials/edit_user.html'
		})
		.state('createNewUser', {
			url: '/createNewUser/:id',
			controller: 'createUserController',
			templateUrl: 'partials/create_new_user.html'
		});

}]);
