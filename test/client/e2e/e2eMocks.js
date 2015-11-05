'use strict';

exports.mockFunction = function() {

  var user1 = {firstName: 'Bruce', lastName: 'Wayne', Phone: '(111) 222-3333',
  email: 'batman@example.com', _id: 1};
  var user2 = {firstName: 'Clark', lastName: 'Kent', Phone: '(222) 333-4444',
  email: 'superman@example.com', _id: 2};
	var endpoint = 'http://localhost:24149/users';

  angular.module('userMock', ['onboarding', 'ngMockE2E'])
  .run(function ($httpBackend) {
    alert("mockFunction runs");
		$httpBackend.whenGET(endpoint).respond(function(){
      return [200, [user1, user2]];
    });
    $httpBackend.whenGET(/.*/).passThrough();
	});

}
