onboarding.controller('createUserController', ['$scope', 'usersService', function($scope, usersService) {
	$scope.createUser = function(user) {
		usersService.createUser(user).then(function(result) {
			console.log(result);
		}, function(error) {
			console.log(error);
		});
	};
}]);
