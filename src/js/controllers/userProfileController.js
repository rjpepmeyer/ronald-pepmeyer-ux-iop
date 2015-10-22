'use strict';

onboarding.controller('userProfileController', ['$scope', '$stateParams', '$state',
'usersService', function($scope, $stateParams, $state, usersService) {

	function getUser() {
		usersService.getUsers().then(function(result) {
			angular.forEach(result, function(user) {
				if (user._id === $stateParams.id) {
					$scope.user = user;
					$scope.userCopy = angular.copy(user);
				}
			});
		}, function(error) {
			console.log(error);
		});
	}

	$scope.deleteUser = function() {
		usersService.deleteUser($stateParams.id).then(function(result) {
			$scope.userDeleted = true;
			console.log(result);
			$state.go('usersList');
		}, function(error) {
			$scope.userDeleted = false;
			console.log(error);
		});
	};

	$scope.editUser = function(options) {
		usersService.editUser($stateParams.id, options).then(function(result) {
			console.log(result);
			$state.reload();
		}, function(error) {
			console.log(error);
		});
	};

	getUser();

}]);
