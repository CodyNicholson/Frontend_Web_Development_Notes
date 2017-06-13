# Adding A Button With NgShow & NgHide

We can add a button to the code we wrote earlier like this:

```html
<body ng-controller="StoreController as store">
	<div>
		<h1> {{store.product.name}} </h1>
		<h2> ${{store.product.price}} </h2>
		<p> {{store.product.description}} </p>
		<button> Add to cart </button>
	</div>
	<script type="text/javascript" src="angular.min.js"></script>
	<script type="text/javascript" src="app.js"></script>
</body>
```

However, we only want our button to be displayed when the product's "canPurchase" variable is true:

```js
var gem = {
	name: 'Dodecahedron',
	price: 2.95,
	description: '. . .',
	canPurchase: false,
	soldOut: true
}
```

***

### NgShow Directive

Using the ng-show directive we can make webelements show only when the value of an expression is true:

```html
<body ng-controller="StoreController as store">
	<div>
		<h1> {{store.product.name}} </h1>
		<h2> ${{store.product.price}} </h2>
		<p> {{store.product.description}} </p>
		<button ng-show="store.product.canPurchase"> Add to cart </button>
	</div>
	<script type="text/javascript" src="angular.min.js"></script>
	<script type="text/javascript" src="app.js"></script>
</body>
```

***

### NgHide Directive

```html
<body ng-controller="StoreController as store">
	<div ng-hide="store.product.soldOut">
		<h1> {{store.product.name}} </h1>
		<h2> ${{store.product.price}} </h2>
		<p> {{store.product.description}} </p>
		<button ng-show="store.product.canPurchase"> Add to Cart </button>
	</div>
	<script type="text/javascript" src="angular.min.js"></script>
	<script type="text/javascript" src="app.js"></script>
</body>
```
