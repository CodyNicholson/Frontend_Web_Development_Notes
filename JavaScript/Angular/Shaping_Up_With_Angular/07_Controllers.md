# Controllers

Controllers are where we define our app’s behavior by defining functions and values

app.js:

```js
(function(){
	var app = angular.module('store', [ ]);
	
	app.controller('StoreController', function(){

	});
})();
```

Notice that controller is attached to (inside) our app

Wrapping your Javascript in a closure is a good habit

***

### Storing Data Inside A Controller

app.js

```js
(function(){
	var app = angular.module('store', [ ]);
	app.controller('StoreController', function(){
		this.product = gem;
	});
	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'A 12-sided figure',
	}
})();
```

**Our current html file**:

```html
<!DOCTYPE html>
<html ng-app="store">
	<head>
		<link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
	</head>
	<body>
		<div ng-controller="StoreController as store">>
 			<h1> Product Name </h1>
 			<h2> $Product Price </h2>
 			<p> Product Description </p>
 		</div>
 		<script type="text/javascript" src="angular.min.js"></script>
		<script type="text/javascript" src="app.js"></script>
	</body>
</html>
```

In: ng-controller="StoreController as store", ng-controller is the directive, StoreController is the controller name, and store is the alias
