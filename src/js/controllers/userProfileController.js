onboarding.controller('userProfileController', ['$scope', '$stateParams', '$state',
'usersService', function($scope, $stateParams, $state, usersService) {

	function getUser() {
		usersService.getUsers().then(function(result) {
			angular.forEach(result, function(user) {
				if (user._id === $stateParams.id) {
					$scope.user = user;
				}
			});
		}, function(error) {
			console.log(error);
		});
	}

	$scope.deleteUser = function(user) {
		usersService.deleteUser(user).then(function(result) {
			console.log(result);
			$state.go('usersList');
		}, function(error) {
			console.log(error);
		});
	}

	$scope.editUser = function(options) {
		usersService.editUser($stateParams.id, options).then(function(result) {
			console.log(result);
		}, function(error) {
			console.log(error);
		});
	}

	getUser();

}]);
