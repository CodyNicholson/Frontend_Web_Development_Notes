# Expressions

Expressions allow you to insert dynamic values into your HTML

### Numerical Operations

```html
<p>
 I am {{4 + 6}}
</p>
```

Evaluates to:

```html
<p>
 I am 10
</p>
```

***

### String Operations

```html
<p>
 {{"hello" + " you"}}
</p>
```

Evaluates to:

```html
<p>
 hello you
</p>
```

***

### Example

```html
<!DOCTYPE html>
<html ng-app="store">
	<head>
		<link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
	</head>
	<body>
		<script type="text/javascript" src="angular.min.js"></script>
		<script type="text/javascript" src="app.js"></script>
		<p>{{"hello" + " you"}}</p>
	</body>
</html>
```
