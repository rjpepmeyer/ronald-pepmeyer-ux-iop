onboarding.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/user-profile");

	$stateProvider
		.state('user-profile', {
			url: '/user-profile',
			templateUrl: 'partials/user_profile.html'
		})
		.state('users-list', {
			url: '/users-list',
			templateUrl: 'partials/users_list.html'
		})
		.state('edit-user', {
			url: '/edit-user',
			templateUrl: 'partials/edit_user.html'
		})
		.state('create-new-user', {
			url: '/create-new-user',
			templateUrl: 'partials/create_new_user.html'
		});

});
