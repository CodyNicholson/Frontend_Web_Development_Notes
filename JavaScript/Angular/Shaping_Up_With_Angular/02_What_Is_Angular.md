# Directives

How do we tell our HTML when to trigger our JavaScript?

index.html:

```html
<!DOCTYPE html>
<html>
	<body ng-controller="StoreController">
		<!-- Stuff -->
	</body>
</html>
```

app.js:

```js
function StoreController()
{
	alert('Welcome, Gregg!');
}
```

A **Directive** is a marker on a HTML tag that tells Angular to run or reference some JavaScript code
