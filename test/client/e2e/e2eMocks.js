'use strict';

exports.mockFunction = function() {

  var user1 = {firstName: 'Bruce', lastName: 'Wayne', phone: '(111) 222-3333',
  email: 'batman@example.com', _id: '1'};
  var user2 = {firstName: 'Clark', lastName: 'Kent', phone: '(222) 333-4444',
  email: 'superman@example.com', _id: '2'};
  var user3 = {firstName: 'Harvey', lastName: 'Dent', phone: '(333) 444-5555',
  email: 'twoface@example.com'};
	var endpoint = 'http://localhost:24149/users';

  angular.module('userMock', ['ngMockE2E'])
  .run(function ($httpBackend) {
		$httpBackend.whenGET(endpoint).respond(function(){
      return [200, [user1, user2]];
    });
    $httpBackend.whenPOST(endpoint, user3).respond(function(){
      return [200, ''];
    });
    $httpBackend.whenGET(/.*/).passThrough();
	});

}
