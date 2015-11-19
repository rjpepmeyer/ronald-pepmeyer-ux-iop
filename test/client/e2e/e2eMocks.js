'use strict';

exports.mockFunction = function() {

  var user1 = {firstName: 'Bruce', lastName: 'Wayne', phone: '(111) 222-3333',
  email: 'batman@example.com', _id: '1'};
  var user1Edit = angular.copy(user1);
  user1Edit.phone = '(123) 456-7890';

  var user2 = {firstName: 'Clark', lastName: 'Kent', phone: '(222) 333-4444',
  email: 'superman@example.com', _id: '2'};

  var user3 = {firstName: 'Harvey', lastName: 'Dent', phone: '(333) 444-5555',
  email: 'twoface@example.com'};
  var user3withID = angular.copy(user3);
  user3withID._id = '3';

  var userArray = [user1, user2];

	var endpoint = 'http://localhost:24149/users';

  angular.module('userMock', ['ngMockE2E'])
  .run(function ($httpBackend) {
		$httpBackend.whenGET(endpoint).respond(function(){
      return [200, userArray];
    });
    $httpBackend.whenPOST(endpoint, user3).respond(function(){
      userArray.push(user3withID);
      return [200, user3withID];
    });
    $httpBackend.whenPUT(endpoint.concat('/1'), user1Edit).respond(function(){
      userArray[0] = user1Edit;
      return [200];
    });
    $httpBackend.whenDELETE(endpoint.concat('/1')).respond(function(){
      userArray = userArray.slice(1);
      return [200];
    });
    $httpBackend.whenGET(/.*/).passThrough();
	});

}
