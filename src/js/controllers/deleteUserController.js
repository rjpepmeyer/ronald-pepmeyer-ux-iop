onboarding.controller('deleteUserController', ['$scope', 'usersService', function($scope, usersService) {
	$scope.deleteUser = function(user) {
		usersService.deleteUser(user).then(function(result) {
			console.log(result);
		}, function(error) {
			console.log(error);
		});
	};
}]);
