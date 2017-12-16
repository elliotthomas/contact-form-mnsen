console.log('IN Client JS');

//Declare App
var myApp = angular.module('myApp', ['ngRoute']);

//MyApp Config
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl:'../views/index.html',
    controller: 'homeController'
    })

}]); //end my app config

myApp.controller('homeController', ['$scope', function ($scope){
	console.log('In Home controller');

  var contactForm = {
    name: $scope.name,
    phoneNumber: $scope.phoneNumber,
    address: $scope.address,
    city: $scope.city,
    state: $scope.state,
    zip: $scope.zip,
    email: $scope.email,
    message: $scope.message
  };

  $scope.addMessage = function () {
    console.log($scope.name);

  }

}]); //end home controller
