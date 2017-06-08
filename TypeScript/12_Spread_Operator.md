# Spread Operator

```ts
// We can separate values in an array into
// attributs in a function
 
function theSum(x, y, z): void{
  document.write("Sum : " + (x + y + z) + "<br />");
}
 
var args = [4, 5, 6];
 
theSum(...args);
```
