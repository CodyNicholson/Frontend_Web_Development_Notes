# Moving Objects In A Canvas

So far, we’ve been drawing everything using exact coordinates. This is fine for a couple shapes but breaks down if you need to draw a bunch of objects.

Canvas2D allows you to translate (move), rotate, or scale objects.

### Scaling

**scale(x,y)** multiplies the x and y values by a given factor so

**ctx.scale(2,3);**

will make all values twice as large on the x axis and three times as large on the y axis.

### Translation

**translate(x,y)** moves all subsequent draw commands by **x** number of pixels on horizontally and y pixels vertically.

**ctx.translate(20,40);** moves all elements drawn after it 20 pixels to the rights and 40 pixels down.

### Rotation

**ctx.rotate(angleRadians)** rotates an object a certain number of radians (generally) about its center. You may have learned about radians in school but here's a handy formula to convert a value from degrees to radians.

**radians = degrees * (Math.PI/180)**

Don't ask us why everything in Computer Graphics uses radians. We have no idea. :)

### Order of operations

You should generally scale objects first, rotate them next, and then finally translate last. There are times when you'd want to rotate around an arbitrary point instead of an object's center, that's out of scope for this lesson.

It’s important to note that whatever transformations apply for all subsequent objects until you reverse them

### Example

```js
var c = getCanvas();
var ctx = c.getContext('2d');

ctx.save();
ctx.fillStyle = 'blue';
ctx.translate(10,10);
ctx.fillRect(0,0,10,10);
ctx.restore();

ctx.rotate(Math.PI/4);
ctx.translate(50,0);
ctx.fillStyle = 'green';
ctx.fillRect(0,0, 10,10);
```
