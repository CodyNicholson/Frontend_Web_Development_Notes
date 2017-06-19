# Drawing Text In Canvas

```js
ctx.strokeStyle = "#33CC33";

// Creates a triangle
ctx.strokeRect(50,50,100,100);
ctx.beginPath();
ctx.moveTo(75,75);
ctx.lineTo(125,125);
ctx.lineTo(125,75);

// Fills in the triangle with blue
ctx.fillStyle = "blue";
ctx.fill();

ctx.strokeText("HELLO UDACITY!", 50, 10);
// Draws the text at (50, 10)
```

```js
ctx.font = "36pt Impact";
ctx.textAlign = "center";

ctx.fillStyle = "white";
ctx.fillText("CANVAS MEME!", c.width/2, 40);

ctx.strokeStyle = "Black";
ctx.lineWidth = 3;
ctx.strokeText("CANVAS MEME!", c.width/2, 40);
```
