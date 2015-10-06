onboarding.directive('$templateCache', 'usersList', function($templateCache) {
	return {
		template: $templateCache.get('users_list.html')
	}
});
