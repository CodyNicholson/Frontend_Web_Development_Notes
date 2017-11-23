### Adding Colors To Shapes In Canvas

```js
ctx.strokeStyle = "#33CC33";

ctx.strokeRect(50,50,100,100);
ctx.beginPath();
ctx.moveTo(75,75);
ctx.lineTo(125,125);
ctx.lineTo(125,75);

ctx.fillStyle = "blue";
ctx.fill();
```

We can change the colors of our drawings using the methods strokeStyle() and fillStyle()

We need these methods to be called before we call our drawing methods: beginPath() and fill()
