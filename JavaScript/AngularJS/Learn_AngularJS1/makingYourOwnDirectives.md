# Making your own Directives in Angular

Make your own directive in a .js file that should be named after the directive you are creating:

appInfo.js:

```javascript
app.directive('appInfo', function(){
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/appInfo.html'
    };
});
```

Restrict specifies how the directive will be used, 'E' means it will be used as a new web element

Scope says that we will pass info into this directive through an attribute named 'info'

The '=' tells the directive to look for an attribute named info in the <app-info> element like this:

-

```javascript
<app-info info="Example"></app-info>
```

The data in info becomes available to use in the template given by templateURL

TemplateURL specifies the html to use in order to display the data in scope.info, in this case wwe use the html provided in app.Info.html

Code from appInfo.html:

```javascript
    <img class="icon" ng-src="{{ info.icon }}">
    <h2 class="title">{{ info.title }}</h2>
    <p class="developer">{{ info.developer }}</p>
    <p class="price">{{ info.price | currency }}</p>
```

Code from index.html:

```HTML
<div class="main" ng-controller="MainController">
    <div class="container">
        <div class="card">
            <app-info info="Some Item"></app-info>
        </div>
    </div>
</div>
```
