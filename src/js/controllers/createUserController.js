'use strict';

onboarding.controller('createUserController', ['$scope', '$stateParams', '$state',
'usersService', function($scope, $stateParams, $state, usersService) {

	$scope.phoneRegEx = /^\(?(\d{3})\)?[-|' ']?(\d{3})[-|' ']?(\d{4})$/;

	$scope.createUser = function(user) {
		usersService.createUser(user).then(function(result) {
			console.log(result);
			// SHOULD REDIRECT TO CORRECT PROFILE PAGE
			$state.go('userProfile', {id: result._id});
		}, function(error) {
			console.log(error);
		});

	};
}]);
