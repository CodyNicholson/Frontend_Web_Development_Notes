# Looping

```ts
// Looping works the same in TypeScript as in JS
// but for..of is added to get values in either
// an array or string
 
var randArray = [5,6,7,8];
 
// for..in provides the indexes
for(var val in randArray){
  document.write(val + "<br />");
}
 
// Convert a number array into a string array
var strArray = randArray.map(String)
 
// for..of provides the values
for(var val of strArray){
  document.write(val + "<br />");
}
```
