# Creating A Canvas

Below is the code for a basic canvas:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Canvas Test</title>
</head>
<body>
	<canvas id="c" width="200" height="200"></canvas>
	<script type="text/javascript">
		var c = document.querySelector("#c");
		var ctx = c.getContext("2d");
	</script>
</body>
</html>
```

We create a canvas tag with an optional width and height set

We then select the canvas and save it in a variable "c"

Then we grad the canvas's context and save it in a variable "ctx"

From here we can start calling methods on our canvas to begin drawing
