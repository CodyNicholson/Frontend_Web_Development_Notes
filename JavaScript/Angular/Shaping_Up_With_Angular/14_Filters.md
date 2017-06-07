# Filters

```html
<body ng-controller="StoreController as store">
	<ul class="list-group">
		<li class="list-group-item" ng-repeat="product in store.products">
			<h3> {{product.name}} </h3>
		</li>
	</ul>
</body>
```

The "|" pipe means “send the output into”

So we send the product.price into currency, which changes the formating of the number into a monetary format

***

### Formatting With Filters

##### *Our Recipe

```
{{ data | filter:options }}
```

##### Date:

```
{{'1388123412323' | date:'MM/dd/yyyy @ h:mma'}}
```

Evaluates to:

12/27/2013 @ 12:50AM

##### Uppercase & Lowercase: 

```
{{'octagon gem' | uppercase}}
```
Evaluates to:

OCTAGON GEM

##### limitTo

```
{{'My Description' | limitTo:8}}
```

Evaluates to:

My Descr

##### OrderBy

```html
<li ng-repeat="product in store.products | orderBy:'-price'">
```

Will list products by descending price

Without the - products would list in ascending order
