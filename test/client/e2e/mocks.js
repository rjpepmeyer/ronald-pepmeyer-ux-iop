'use strict';

exports.mockFunction = function() {

  var user1 = {firstName: 'Bruce', lastName: 'Wayne', Phone: '(111) 222-3333',
  email: 'batman@example.com', _id: 1};
  var user2 = {firstName: 'Clark', lastName: 'Kent', Phone: '(222) 333-4444',
  email: 'superman@example.com', _id: 2};

  angular.module('userMock', ['onboarding', 'ngMockE2E'])
  .run(function ($httpBackend) {
		$httpBackend.whenGET(endpoint).respond(function(){
      alert('mock get');
      return (200, [user1, user2]);
    });
	});
}
