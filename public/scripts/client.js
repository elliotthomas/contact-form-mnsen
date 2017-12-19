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
    .when ('/splashThankYou', {
      templateUrl:'../views/partials/splashThankYou.html',
      controller: 'splashThankYouController'
    })
  .otherwise({
      redirectTo: '/home'
    });

}]); //end my app config

// Factory
myApp.factory('senatorFactory', function() {
  var factory = {};
  factory.senatorInfo



  return factory


}); //end factory

//Controllers

myApp.controller('homeController', ['$scope', '$http', 'senatorFactory', '$location', function ($scope, $http, senatorFactory, $location){
  console.log("IN HOME");

  $http({
      method: 'GET',
      url: '/getSenators'
  }).then(function(response) {
      console.log('Senators back from DB ->', response);
      $scope.districts = response.data
  }); //end http get call

$scope.contactSenator = function () {
  var selectedDistrict = $scope.selectedDistrict
  console.log('in contact senator');
  console.log(selectedDistrict);
  var selectedPerson = []

  $scope.districts.forEach(function(district){
    if (district.number == selectedDistrict) {
    selectedPerson.push(district.number)
    selectedPerson.push(district.senator)
    selectedPerson.push(district.email)
  } else {
    return
    }
  })

senatorFactory.senatorInfo = selectedPerson;

$location.path('/addMessage')

};//end contact senator

}]); //end home controller

myApp.controller('addMessageController', ['$scope', '$http', 'senatorFactory', '$location', function ($scope, $http, senatorFactory, $location){
	console.log('In add Message controller');

  $scope.selectedSenator = senatorFactory.senatorInfo[1]
  console.log('senator->', $scope.selectedSenator);



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
      message: $scope.message,
      senatorData: senatorFactory.senatorInfo
    };

    $http({
        method: 'POST',
        url: '/addMessage',
        data: contactForm
    }).then(function(response) {
        console.log('response ->', response);
    });


    $location.path('/splashThankYou')


  }

}]); //end add message controller

myApp.controller('splashThankYouController', ['$scope', '$http', 'senatorFactory', '$location','$timeout', function ($scope, $http, senatorFactory, $location, $timeout){

$scope.selectedSenator = senatorFactory.senatorInfo[1]

$timeout(function() {
    $location.path('/home')
}, 3000);



}]); //end splash thank you controller
