#Services in Angular

So far we have made AngularJS apps by adding controllers and displaying the controller's data in the view

This is hardcoding

If we have to keep track of data that changes, like the weather or financial data, we need to read the data from a server by creating a service

Service example, forecast.js:

```javascript
app.factory('forecast', ['http', function($http){
    return $http.get('http://s3.amazonaws.com/codecademy-content/courses/itp4/forecast-api/forecast.json').success(function(data){
        return data;}).error(function(err){
            return err;
    });
}]);
```

This service uses Angular's built-in #http to fetch json from a server

We add $http to the forecast serviceas a dependency like this:

>['$http', function($http){ ... }]

Now $http is available to use inside forecast

Then we use .get to request weather data and if it succeeds we return the data, if it fails we return an error message

-

Controllers for services, ServiceController.js:

```javascript
app.controller('ServiceController', ['$scope', 'forecast', function($scope, forecast){
    forecast.success(function(data){
        $scope.fiveDay = data;
    });
}]);
```

In this controller we use the forecast service to fetch data from the server

First we added forecat into ServiceController as a dependency so it's available to use

Within the controller we used forecast to asynchronously fetch the weather data from the server and store it into $scope.fiveDay

ANY property attached to scope becomes availabe in the view, so we can use the weather data stored in fiveDay in our expressions

-

Displaying this in the view:

```HTML
<div class="forecast" ng-repeats="day in fiveDays.days">
    <div class="day row">
        <div class="weekday col-md-4">
            <p>{{ day.datetime | date }}</p>
        </div>
        <div class="weather col-md-3">
            <img ng-src="{{ day.icon }}">
        </div>
        <div class="weather col-md-1">
        </div>
        <div class="high col-md-2">
            <p>{{ day.high }}$deg;</p>
        </div>
        <div class="low col-md-2">
            <p>{{ day.low }}$deg;</p>
        </div>
    </div>
</div>
```

-

###Summary

Services avoid having to fill a controller with code to fetch weather data from a server by moving the independant logic into a service so they can be reused by other parts of the app
