var app = angular.module('iContact', ['ngRoute']);

iContact.config(function($routeProvider){
  $routeProvider

    .when('/', {
      templateUrl : 'pages/home.html',
      controller: 'MainCtrl'
    })
    .when('/add', {
      templateUrl : 'pages/add.html',
      controller: 'MainCtrl'
    })

    .when('/email', {
      templateUrl: 'pages/email.html',
      controller: 'MainCtrl'
    });
});

app.controller('MainCtrl', ['$scope', function($scope){
  $scope.listContacts = [];

  $scope.addContact = function(){
    $scope.listContacts.push({name: $scope.name, email: $scope.email});
  };
  // $scope.removeContact = function(){
  //   $scope.listContacts.
  // }
}]);
