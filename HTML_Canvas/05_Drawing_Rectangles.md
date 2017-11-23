# Drawing Rectangles

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
	</script>
</body>
</html>
```

The fillRect() method will draw a rectangle that is filled in, and the strokeRect() method will draw a rectangle that is empty

***

We can use what we already know about rectangles to "erase" portions of a canvas using fillRect and setting the fillStyle to our background color. Your background color will likely be white. You haven't learned about fillStyle yet but trust me on this, that's how you set a color. So don't act surprised when it comes up again in a couple videos.

clearRect is an easier way to do the same thing without modifying the fillStyle. You'll learn more why changing the fillStyle isn't always the best option a bit later.

If you have a canvas c and given some code to draw a rectangle in a given color, you might write something like

```js
var c = document.querySelector("#c");
var ctx = c.getContext("2d");
ctx.fillStyle = "blue";
// Start at (0,0) and draw a 50px x 50px blue rectangle.
ctx.fillRect(0,0,50,50);
// Start at (0,0) and clear a 25px x 25px rectangle.
ctx.clearRect(0,0,25,25);
```

If you want to erase the entire canvas, you could call clearRect with the dimensions of canvas as follows:

ctx.clearRect(0, 0, c.width, c.height);

A slightly shorter way to clear a full canvas is to change either the height or the width on the canvas:

c.width = c.width;

Doing so saves some keystrokes but may not be as readable to others who are viewing your code.

Use clearRect when you want to erase a portion of the canvas or object
