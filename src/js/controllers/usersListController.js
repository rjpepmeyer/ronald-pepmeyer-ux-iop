'use strict';

onboarding.controller('usersListController', ['$scope', '$stateParams',
'usersService', function($scope, $stateParams, usersService) {


	function getUsers() {
		usersService.getUsers().then(function(result) {
			$scope.users = result;
		}, function(error) {
			console.log(error);
		});
	}

	getUsers();

}]);
