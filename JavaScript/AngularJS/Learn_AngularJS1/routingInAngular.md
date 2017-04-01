# Routing in Angular

Instead of stuffing code into a single view, we can use multiple templates to display different pieces of data based on the URL the user is visiting

We can do this by using Angular's Application Routes

in app.js:

```javascript
var app = angular.module('GalleryApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/',{
        controller: 'HomeController',
        template: 'view/home.html'
    }).when('/photos/:id', {
        controller: 'PhotoController',
        templateURL: 'view/photo.html'
    }).otherwise({
        redirectTo:'/'
    });
});
```

We mapped a URL to home controller and home.html in the first 'when' statement

We added a variable port id to the url using /photos/:id

-

In app.js inside the app.config() method we use Angular's $routeProvider to define application routes

PhotoController.js:

```javascript
app.controller('PhotoController', ['$scope', 'Photos', '$routeParams', function($scope, photos, $routeParams){
    Photos.success(function(data){
        $scope.detail = data[$routeParams.id];
    });
}]);
```

In PhotoController we use Angular's $routeParams to retrieve id from the URL using $routeParams.id

Notice that we injected both $routeParams and the photos service into the PhotoController dependency array to make them available to use inside the controller

Then to fetch the individual photo we first used the photos service to fetch the array of photos from the server and used $routeParams.id to access the specific photo by its id

Any properties attached to $scope become available in the view, meaning in photo.html we can display the photos detail using expressions

-

Summary:

Instead of filling a single view with lots of messy code routes let us map URL's to self-contained controllers & templates

The users can also now share and bookmark different pages of the app
