'use strict';

onboarding.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/usersList/');

	$stateProvider
		.state('userProfile', {
			url: '/userProfile/:id',
			controller: 'userProfileController',
			template: '<user-profile></user-profile>'
		})
		.state('usersList', {
			url: '/usersList/:id',
			controller: 'usersListController',
			template: '<users-list></users-list>'
		})
		.state('createNewUser', {
			url: '/createNewUser/:id',
			controller: 'createUserController',
			template: '<create-new-user></create-new-user>'
		});

}]);
