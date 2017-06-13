# Modules

Modules are:

- Where we write pieces of our Angular application
- Makes our code more maintainable, testable, and readable
- Where we define dependencies for our app

Modules can use other modules

***

### Including Our Module

index.html:

```html
<!DOCTYPE html>
<html ng-app="store"> <!-- ng-app="store" tells it to run this module when the document loads -->
	<head>
		<link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
	</head>
	<body>
		<script type="text/javascript" src="angular.min.js"></script>
		<script type="text/javascript" src="app.js"></script>
	</body>
</html>
```

app.js:

```js
var app = angular.module('store', [ ]);
```
