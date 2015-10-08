'use strict';

onboarding.directive('usersList', function($templateCache) {
	return {
		restrict: 'E',
		templateUrl: 'users_list.html',
		replace: false
	};
});
