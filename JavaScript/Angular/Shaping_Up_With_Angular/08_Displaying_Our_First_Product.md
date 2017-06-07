# Displaying Our First Product

By modifying the code we wrote in 07_Controllers we can display the "gem" product we made:

```html
<body>
	<div ng-controller="StoreController as store">
		<h1> {{store.product.name}} </h1>
		<h2> ${{store.product.price}} </h2>
		<p> {{store.product.description}} </p>
	</div>
	<script type="text/javascript" src="angular.min.js"></script>
	<script type="text/javascript" src="app.js"></script>
</body>
```

app.js

```js
(function(){
	var app = angular.module('store', [ ]);
	app.controller('StoreController', function(){
	this.product = gem;
	});
	. . .
})();
```
