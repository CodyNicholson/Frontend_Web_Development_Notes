Angular is a JS web framework aimed to make web apps simple to build and easy to maintain

In a .js file you can create modules that will contain the different components of an AngularJS app



Intro to Directives and making apps:

In an .html file we can put our app inside a tag, for example: <body ng-app="myApp">

Our app lives inside this web element

ng-app is a built-in directive and the body tag is the scope of the app, myApp



Intro to controllers:

In a .js file you can also create a controller

A controller manages an app's data

Example, in a js file:


app.controller('ControllerName', ['$scope', function($scope)
{
    $scope.title = "Some Title";
    $scope.people =
    [
        {
            name: "Cody",
            id: "1",
            money: 123.45,
            birthday: new Date('2014', '03', '08')
        },
        {
            name: "Henry",
            id: "2",
            money: 123.56,
            birthday: new Date('2014', '04', '08')
        }
    ];
}]);

// Here we use the property 'title' to store a string and attach it to scope


In the index.html file we can add a new built-in directive called ng-controller='ControllerName' by adding it to the <div class="main"> element

The directive, ng-controller, defines the controllers scope

This means the properties attached to scope become available to use in <div class="main" ng-controller="ControllerName">


We access properties of scope in our html file like so:


<div class="main" ng-controller="ControllerName">
    <h1>{{ title }}</h1>
    <h2>{{ people.name | uppercase}}</h2>
    <h3>{{ people.money | currency}}</h3>
    <h4>{{ people.birthday | date}}</h4>
</div>

// This will print the value of the 'title' property defined in scope in the <h1> element, as if the data was written there
// We use {{ }} to get the title from scope, this is called an expression in Angular
// Notice that we call for the title inside the div that has the controller attached, we do not have access to the title property outside of the div because the controller is only alive inside the div
// Notice that we use JSON dot notation to get the name and money from scope
// We pipe the "name", "money", and "birthday" parameters to format how they will display using "|" and filters like 'uppercase', 'currency', and 'date'



Summary:


A module contains different components of an AngularJS app

A controller manage's an apps data

An expression moves values from a controller to an html file to be displayed

A filter formats the values used in expressions, like how the 'currency' filter will change '8' into '$8.00'



The directive ng-repeat:


In the above controller "ControllerName" we used the people array to store different properties including 'name', 'money', and 'birthday'

Using ng-repeat we can repeat the same html code as many times as we need to so we can display each element in the array like this:


<div class="main" ng-controller="ControllerName">
    <div class="container">
        <h1>{{ title }}</h1>
        <div ng-repeat="person in people" class="col-md-6">
            <p class="name">{{ people.name }}</p>
            <p class="money">{{ people.money | currency }}</p>
            <p class="birthday">{{ people.birthday | date}}</p>
        </div>
    </div>
</div>

// The html code inside the div with the ng-repeat will be displayed once for every element in the list, so twice
// The <h1> with the title will display once since it is not in the div with ng-repeat



The directive ng-click is used to execute some code when a webelement is clicked

In a .js file:


app.controller('MainController', ['$scope', function($scope){
    $scope.num = 0;
    $scope.plusOne = function(index) {$scope.num += 1;}
}]);


In an .html file:


<p class="num" ng-click="plusOne($index)">{{ num }}</p>

// In the code above we defined a function inside of the controller, and gave the user the ability to call the function by clicking the <p> element on the webpage that will display the number stored in scope
// When the page loads, a '0' with display and when it is clicked it the function in the controller will update the state of the data by adding 1 to the num value and displaying that value without needing to reload the page


Summary:


The view will present the app's data through the use of expressions, filters, and directives

Directives make your code more readable and reusable