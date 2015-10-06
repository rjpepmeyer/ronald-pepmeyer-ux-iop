onboarding.directive('$templateCache', 'userProfile', function($templateCache) {
	return {
		template: $templateCache.get('user_profile.html')
	}
});
