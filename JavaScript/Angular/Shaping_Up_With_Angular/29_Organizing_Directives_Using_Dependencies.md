# Organizing Directives Using Dependencies

This is starting to feel cluttered:

```js
(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){ . . . });

	app.directive('productTitle', function(){ . . . });

	app.directive('productGallery', function(){ . . . });

	app.directive('productPanels', function(){ . . . });

	...
})();
```

We can extract these directives into a new file products.js and create a module:

```js
(function(){
	var app = angular.module('store-products', [ ]);

	app.directive('productTitle', function(){ . . . });

	app.directive('productGallery', function(){ . . . });

	app.directive('productPanels', function(){ . . . });
})();
```

app.js:

```js
(function(){
	var app = angular.module('store', [ 'store-products' ]);

	app.controller('StoreController', function(){ ... });

	...
})();
```

Store depends on Store-Products and we also need to include products.js in our index.html file:

```html
<!DOCTYPE html>
<html ng-app="store">
	<head> . . . </head>
	<body ng-controller="StoreController as store">
		. . .
		<script src="angular.js"></script>
		<script src="app.js"></script>
		<script src="products.js"></script>
	</body>
</html>
```

***

### How We Organize Application Modules

Best to split Modules around functionality:

- app.js – top-level module attached via ng-app
- products.js – all the functionality for products and only products
