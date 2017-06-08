# Functions

```ts
// You can assign the variable types for the attributes
// You assign the return type after the attributes
// or if nothing is returned use void
var getSum = function(num1: number, num2: number): number{
  return num1 + num2;
}
 
var theSum1: number = getSum(5,2);
 
document.write("5 + 2 = " + theSum1 + "<br />");
 
// Assign a default value in the function declaration
// If an attribute isn't required follow the variable
// with a ?
var getDiff = function(num1: number, num2 = 2, num3?: number): number{
 
  // Check if a value was assigned with typeof
  if (typeof num3 !== 'undefined'){
    return num1 - num2 - num3;
  }
  return num1 - num2;
}
 
document.write("5 - 2 = " + getDiff(5) + "<br />");
document.write("5 - 2 - 3 = " + getDiff(5,2,3) + "<br />");
 
// You can receive an unknown number of values
// with a rest parameter ...nums
var sumAll = function(...nums: number[]): void{
 
  // We can use reduce with the array to add all
  // the values together one by one
  var sum = nums.reduce((a, b) => a + b, 0);
  document.write("Sum : " + sum + "<br />");
}
 
sumAll(1,2,3,4,5);
 
// Arrow functions don't include function in
// the definition
 
var addOne = (x)=>x+1;
 
document.write("1 + 1 = " + addOne(1) + "<br />");
```
