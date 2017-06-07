var myApp = angular.module('myApp', [ngRoute]);

myApp.config(['$routeProvider', function($routeProvider){
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

// The above code shows the routes that our Angular app can take on it's single page application
// If no route is provided or if a route that does not exist is provided, it will redirect to the login route