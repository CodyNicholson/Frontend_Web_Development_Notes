# Understanding Scope

The scope of the "StoreController" is only inside the div it is defined in

When we call store.product.name below the div, no value will ever be returned wince it is outside the div

```html
<body>
	<div ng-controller="StoreController as store">
 		<h1> {{store.product.name}} </h1>
		<h2> ${{store.product.price}} </h2>
		<p> {{store.product.description}} </p>
	</div>
	{{store.product.name}} <!-- This line with never print a value -->
	<script type="text/javascript" src="angular.min.js"></script>
	<script type="text/javascript" src="app.js"></script>
</body>
```
