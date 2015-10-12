'use strict';

onboarding.directive('userProfile', function($templateCache) {
	return {
		restrict: 'E',
		templateUrl: 'user_profile.html',
		replace: false
	};
});
