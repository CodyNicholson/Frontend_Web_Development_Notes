# The Game Loop & Processing User Input In Canvas

Playing a video in a canvas using **requestAnimationFrame** is just one of the many interactive things you can do.

To create more complex applications, we have to think more about not only the things we are displaying to the user on-screen but also any input (keyboard, mouse, audio) the user might generate that we need to process.

The game loop is a sequence of events that run continuously while an app or game is being used. **requestAnimationFrame** handles most of the heavy lifting in that it ensures that your app runs as close to 60 frames per second as possible while the app is being actively viewed.

Assuming we have already created the functions we plan to call, a fleshed out game loop could look something like this.

```js
function draw() {
    // request to execute this function at the next earliest convenience
    requestAnimationFrame(draw);
    processInput();
    moveObjectsAndEnemies();
    drawAllTheThings();
}
```

### Processing Mouse Input

Like many other DOM elements, the canvas can accept **click** and **mousedown** events. We do however have to do a little work to figure out where exactly in the canvas the user has clicked. Mouse click events return **clientX** and **clientY** positions that are global to the browser window. Every element knows where it is positioned relative to the browsers (0,0) position (**offsetLeft** and **offsetTop**).

To get the canvas-relative of a click, you need to subtract the **offsetLeft** and **offsetTop** values from **clientX** and **clientY**. Check out the example code below.

```js
var c = document.querySelector("canvas");

function handleMouseClick(evt) {
        x = evt.clientX - c.offsetLeft;
        y = evt.clientY - c.offsetTop;
        console.log("x,y:"+x+","+y);
}
c.addEventListener("click", handleMouseClick, false);
```

[Kibo.js](https://github.com/marquete/kibo) - a JavaScript library for processing keyboard input.

***

### Code

```js
// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/
var canvas, context;
init();
animate();
function init() {
    canvas = getCanvas();
    context = canvas.getContext( '2d' );
}
function animate() {
    requestAnimationFrame( animate );
    draw();
}
function draw() {
    var time = new Date().getTime() * 0.002;
    var x = Math.sin( time ) * 96 + 38;
    var y = Math.cos( time * 0.9 ) * 96 + 38;

    context.fillStyle = 'rgb(245,245,245)';
    context.fillRect( 0, 0, 255, 255 );
    context.fillStyle = 'rgb(255,0,0)';
    context.beginPath();
    context.arc( x, y, 10, 0, Math.PI * 2, true );
    context.closePath();
    context.fill();
}
```

This code will draw a canvas with a moving ball that goes through it
