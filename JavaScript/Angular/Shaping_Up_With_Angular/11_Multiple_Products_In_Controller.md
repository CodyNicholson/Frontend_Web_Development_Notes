# Multiple Products In Controller

Currently our StoreController looks like this:

```js
app.controller('StoreController', function(){
	this.product = gem
});

var gem =
	name: "Dodecahedron",
	price: 2.95,
	description: ". . .",
	canPurchase: true,
},
```

We want our controller to be able to handle multiple products, so we can do that like this:

```js
app.controller('StoreController', function(){
	this.products = gems
});

var gems = [
	{
		name: "Dodecahedron",
		price: 2.95,
		description: ". . .",
		canPurchase: true,
	},
	{
		name: "Pentagonal Gem",
		price: 5.95,
		description: ". . .",
		canPurchase: false,
	}…
];
```

***

### Working With Multiple Products

Since we now have an array of products, the syntax for displaying their variables is different:

```html
<body ng-controller="StoreController as store">
	<div>
		<h1> {{store.products[0].name}} </h1>
		<h2> ${{store.products[0].price}} </h2>
		<p> {{store.products[0].description}} </p>
		<button ng-show="store.products[0].canPurchase"> Add to Cart </button>
	</div>
	<div>
		<h1> {{store.products[1].name}} </h1>
		<h2> ${{store.products[1].price}} </h2>
		<p> {{store.products[1].description}} </p>
		<button ng-show="store.products[1].canPurchase"> Add to Cart</button>
	</div>
</body>
```
