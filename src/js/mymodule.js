var onboarding = angular.module('onboarding', ['ui.router', 'ngResource']);

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

onboarding.factory('Create', function($resource) {
	return $resource('localhost:24149/users:id', {}, {
		query: {method: PUT, params: {id: @id}, isArray: false}
	})
})
.factory('Get', function($resource) {
	return $resource('localhost:24149/users:id', {}, {
		query: {method: GET, params: {id: @id}, isArray: false}
	})
})
.factory('List', function($resource) {
	return $resource('localhost:24149:/users', {}, {
		query: {method: GET, params: {}, isArray: true}
	})
})
.factory('Update', function($resource) {
	return $resource('localhost:24149:/users:id', {}, {
		query: {method: PUT, params: {id: @id}, isArray: false}
	})
})
.factory('Delete', function($resource) {
	return $resource('localhost:24149:/users:id', {}, {
		query: {method: DELETE, params: {id: @id}, isArray: false}
	})
});
