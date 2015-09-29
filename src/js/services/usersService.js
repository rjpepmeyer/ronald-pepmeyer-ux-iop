'use strict';

onboarding.factory('usersFactory', function($resource) {
	return $resource('http://localhost:24149/users/:id',
	{
		id: '@userId'
	},
	{
		update: {method: 'PUT'}
	});
});
onboarding.factory('usersService', function(usersFactory) {
	function createUser(user) {
		return usersFactory.save(user).$promise;
	}
	function getUser(options) {
		return usersFactory.get({userId:options.userId}).$promise;
	}
	function getUsers() {
		return usersFactory.query().$promise;
	}
	function editUser(options) {
		return usersFactory.update({userId:options.userId}).$promise;
	}
	function deleteUser(options) {
		return usersFactory.remove({userId:options.userId}).$promise;
	}

	return {
		createUser: createUser,
		getUser: getUser,
		getUsers: getUsers,
		editUser: editUser,
		deleteUser: deleteUser
	};
});
