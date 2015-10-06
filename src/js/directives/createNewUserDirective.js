onboarding.directive('$templateCache', 'createNewUser', function($templateCache) {
	return {
		template: $templateCache.get('create_new_user.html')
	}
});
