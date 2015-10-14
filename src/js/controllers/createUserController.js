'use strict';

onboarding.controller('createUserController', ['$scope', '$stateParams', '$state',
'usersService', function($scope, $stateParams, $state, usersService) {

	$scope.createUser = function(user) {
		usersService.createUser(user).then(function(result) {
			console.log(result);
			$state.go('userProfile', {id: result._id});
		}, function(error) {
			console.log(error);
		});

	};
}]);
