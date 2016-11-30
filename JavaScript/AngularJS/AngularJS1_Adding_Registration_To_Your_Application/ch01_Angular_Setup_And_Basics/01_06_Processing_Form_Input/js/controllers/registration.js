myApp.controller('RegistrationController', ['$scope', function($scope) {

  $scope.login = function() {
    $scope.message = "Welcome " + $scope.user.email;
  };
// This is the function that is called in the form tag of the login.html file when the form is submitted
  $scope.register = function() {
    $scope.message = "Welcome " + $scope.user.firstname;
  };
// This is the same function being used for the register template
}]);