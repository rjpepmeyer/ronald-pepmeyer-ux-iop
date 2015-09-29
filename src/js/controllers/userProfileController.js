onboarding.controller('userProfileController', ['$scope', 'usersService', function($scope, usersService) {
	$scope.getUser = function(user) {
		usersService.getUser(user).then(function(result) {
			$scope.user = result;
		}, function(error) {
			console.log(error);
		}).finally(function() {
			console.log($scope.user);
		});
	};
}]);
