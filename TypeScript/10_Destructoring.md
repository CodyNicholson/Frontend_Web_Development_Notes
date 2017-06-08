# Destructoring

```ts
// You can assign multiple values on one line
 
var randVals = {x: 1, y: 2, z: 3};
var {x, y, z} = randVals;
 
document.write(x + y + z + "<br />");
 
// Do the same with arrays
[x, y, z] = [z, y, x];
document.write("Switch : " + x + y + z + "<br />");
```
