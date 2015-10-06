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
	function getUsers() {
		return usersFactory.query().$promise;
	}
	function editUser(id, option) {
		console.log(id);
		console.log(option);
		return usersFactory.update({id: id}, option).$promise;
	}
	function deleteUser(options) {
		return usersFactory.remove({id: options}).$promise;
	}

	var users = getUsers();

	return {
		users: this.users,
		createUser: createUser,
		getUsers: getUsers,
		editUser: editUser,
		deleteUser: deleteUser
	};
});
