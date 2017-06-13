# Creating A Custom Directive

Using ng-include:

```html
<h3 ng-include="'product-title.html'"></h3>
```

Custom Directive:

```html
<product-title></product-title>
```

Our old code and our custom Directive will do the same thing with some additional code

Why write a Directive?

Directives allow you to write HTML that expresses the behavior of your application

***

### Writing Custom Directives

Template-expanding Directives are the simplest:

- define a custom tag or attribute that is expanded or replaced
- can include Controller logic, if needed

Directives can also be used for:

- Expressing complex UI
- Calling events and registering event handlers
- Reusing common components

index.html:

```html
<product-title></product-title>
```

app.js:

```js
app.directive('productTitle', function(){
	return
	{
		restrict: 'E',
		templateUrl: 'product-title.html'
	};
});
```

The productTitle directive changes index.html to be:

```html
<h3>
	{{product.name}}
	<em class="pull-right">$250.00</em>
</h3>
```
