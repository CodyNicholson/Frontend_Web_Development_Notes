# Canvas 2D Image Data

The image backing a canvas is represented in a JavaScript with an Image Data object. It contains values for the width, height, and a data array containing the red, green, blue, and alpha values for each pixel.

The data property is usually represented by a Uint8ClampedArray. The "U" means that the array is unsigned (contains only positive values). "Int8" indicates that it will store 8-bit numbers.

The data in an image is stored in one giant list you need to parse when you apply effects: [r1,g1,b1,a1,r2,g2,b2,a2,r3,g3,b3,a3...]

We can retrieve of modify the image data by calling one of these functions:

createImageData() - initializes a blank image data object that you can modify

getImageData() - retrieve image data from canvas

putImageData() - put image data into canvas

***

### Code

1. Create a Canvas2DRenderingContext

2. Call getImageData to retrieve the pixels in the canvas

3. Change every 10th pixel to a solid green color

```js
<!DOCTYPE html>
<html>
<head>
	<title>Test Canvas Methods</title>
</head>
<body>
	<canvas width="400" height="400"></canvas>
	<script type="text/javascript">
		var canvas = document.querySelector("canvas");
		var ctx = canvas.getContext("2d");
		// get image data object
		var data = ctx.getImageData(0,0,400,400);

		function paintGreen(imageData)
		{
			var numPixels = imageData.data.length/4;
			for (var i = 0; i < numPixels; i++)
			{
				if (i % 10 === 0)
				{
					imageData.data[i * 4 + 1] = 255;
					imageData.data[i * 4 + 3] = 255;
				}
			}
			ctx.putImageData(imageData,0,0)
		}
		paintGreen(data);
	</script>
</body>
</html>
```
