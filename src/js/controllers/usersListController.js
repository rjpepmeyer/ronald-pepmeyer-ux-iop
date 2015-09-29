onboarding.controller('usersListController', ['$scope', 'usersService', function($scope, usersService) {
	$scope.getUsers = function() {
		usersService.getUsers().then(function(result) {
			$scope.users = result;
		}, function(error) {
			console.log(error);
		}).finally(function() {
			console.log($scope.users);
		});
	}
}]);
