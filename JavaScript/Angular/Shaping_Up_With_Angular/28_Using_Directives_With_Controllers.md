# Using Directives With Controllers

What if we *need* a controller?

WE could use a directive for the below code block

index.html:

```html
<section ng-controller="PanelController as panels">
	<ul class="nav nav-pills"> . . . </ul>
	<div class="panel" ng-show="panels.isSelected(1)"> . . . </div>
	<div class="panel" ng-show="panels.isSelected(2)"> . . . </div>
	<div class="panel" ng-show="panels.isSelected(3)"> . . . </div>
</section>
```

First we can extract the template:

product-panels.html:

```html
<section>
	<ul class="nav nav-pills"> . . . </ul>
	<div class="panel" ng-show="panels.isSelected(1)"> . . . </div>
	<div class="panel" ng-show="panels.isSelected(2)"> . . . </div>
	<div class="panel" ng-show="panels.isSelected(3)"> . . . </div>
</section>
```

Now we can write the directive:

```js
app.directive('productPanels', function()
{
	return
	{
		restrict: 'E',
		templateUrl: 'product-panels.html'
	};
});

app.controller('PanelController', function()
{
	...
}
```

Then we can include the directive in our index.html:

```html
<product-panels ng-controller="PanelController as panels">
	...
</product-panels>
```

Now we will move the controller functionality in the app.js into our directive:

```js
app.directive('productPanels', function()
{
	return
	{
		restrict: 'E',
		templateUrl: 'product-panels.html',
		controller:function()
		{
			...
		},
		controllerAs: 'panels' // Now it works, using panels as our Controller Alias
	};
});
```
