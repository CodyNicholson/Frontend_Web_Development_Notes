# Saving & Restoring Canvas States

Every canvas object contains a stack of drawing states. Stacks are data structures that only let you push new items at one end. When you retrieve an item, it's the last item that was pushed or Last In-First Out(LIFO).

Let's see how this would work in code. Let's say you wanted to draw a couple rectangles in different colors. For this small example, we could get away with reassigning the **fillStyle** each time instead of using **save** and **restore**.

```js
var c = document.querySelector("#c");
var ctx = c.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0,0,50,50);

ctx.fillStyle = "green"
ctx.fillRect(100,100,10,10);

ctx.fillStyle = "blue";
ctx.fillRect(200,10,20,20);
```

This is better:

```js
var c = document.querySelector("#c");
var ctx = c.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0,0,50,50);

// Save state with blue fill
ctx.save();
ctx.fillStyle = "green";
ctx.fillRect(100,100,10,10);
// Restore to blue fill
ctx.restore();

ctx.fillRect(200,10,20,20);
```

#### The canvas state can store:

- The current transformation matrix (rotation, scaling, translation)
- strokeStyle
- fillStyle
- font
- globalAlpha
- lineWidth
- lineCap
- lineJoin
- miterLimit
- shadowOffsetX
- shadowOffsetY
- shadowBlur
- shadowColor
- globalCompositeOperation
- textAlign
- textBaseline
- The current clipping region
