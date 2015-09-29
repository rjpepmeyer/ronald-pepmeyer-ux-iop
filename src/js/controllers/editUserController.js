onboarding.controller('editUserController', ['$scope', 'usersService', function($scope, usersService) {
	$scope.editUser = function(user) {
		usersService.editUser(user).then(function(result) {
			console.log(result);
		}, function(error) {
			console.log(error);
		});
	};
}]);
