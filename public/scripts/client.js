console.log('IN Client JS');

//Declare App
var myApp = angular.module('myApp', ['ngRoute']);

//MyApp Config
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/addMessage', {
    templateUrl:'../views/partials/addMessage.html',
    controller: 'addMessageController'
    })
  .when('/home', {
      templateUrl:'../views/partials/home.html',
      controller: 'homeController'
    })
  .otherwise({
      redirectTo: '/home'
    });

}]); //end my app config

//Controllers

myApp.controller('homeController', ['$scope', '$http', function ($scope, $http){
  console.log("IN HOME");



}]); //end home controller

myApp.controller('addMessageController', ['$scope', '$http', function ($scope, $http){
	console.log('In add Message controller');


  $scope.addMessage = function () {

    var contactForm = {
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      phoneNumber: $scope.phoneNumber,
      address: $scope.address,
      city: $scope.city,
      state: $scope.state,
      zip: $scope.zip,
      email: $scope.email,
      message: $scope.message
    };

    $http({
        method: 'POST',
        url: '/addMessage',
        data: contactForm
    }).then(function(response) {
        console.log('response ->', response);
    });



  }

}]); //end add message controller
