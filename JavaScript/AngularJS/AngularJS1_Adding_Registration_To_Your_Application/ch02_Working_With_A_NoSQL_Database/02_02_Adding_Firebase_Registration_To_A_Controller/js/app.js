var myApp = angular.module('myApp', ['ngRoute', 'firebase']).constant('FIREBASE_URL', 'http://angularjs1-registration-app.firebaseio.com/');
//We added firebase to the dependencies and created a constant URL pointing to the URL for our firebase app

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    }).
    when('/success', {
      templateUrl: 'views/success.html',
      controller: 'SuccessController'
    }).
    otherwise({
      redirectTo: '/login'
    });
}]);