# Drawing With Paths

```html
<!DOCTYPE html>
<html>
<head>
	<title>Canvas Test</title>
</head>
<body>
	<canvas id="c" width="500" height="500"></canvas>
	<script type="text/javascript">
		var c = document.querySelector("#c");
		var ctx = c.getContext("2d");

		ctx.fillRect(100,100,100,100);
		ctx.strokeRect(50,50,50,50);

		ctx.beginPath();
		ctx.moveTo(10,10); // The pen will begin at this location
		ctx.lineTo(50,50); // The pen will draw a line from (10,10) to (50,50)
		ctx.lineTo(50,10); // Draw from (50,50) to (50,10)
		ctx.lineTo(10,10); // Draw from (50,10) to (10,10)

		ctx.fill(); // Will draw the shape we created above filled in
		ctx.stroke(); // Will draw the shape we created above empty
		// The above two lines of code will draw shapes over each other
	</script>
</body>
</html>
```
