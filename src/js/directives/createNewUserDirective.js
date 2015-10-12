'use strict';

onboarding.directive('createNewUser', function($templateCache) {
	return {
		restrict: 'E',
		templateUrl: 'create_new_user.html',
		replace: false
	};
});
