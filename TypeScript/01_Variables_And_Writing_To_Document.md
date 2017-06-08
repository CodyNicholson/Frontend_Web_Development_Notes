# Variables & Writing To Document

```ts
// Variables must start with a letter, _, or $
// and then can contain numbers
 
// Declaring variables as statically typed is optional
// If you only provide a value the type is inferred
 
var myName: string = "Derek";
 
var myAge: number = 41;
 
// booleans can only be true or false
var canVote: boolean = true;
 
// A variable marked as any is a dynamic type
var anything: any = "dog";
anything = 2;
 
// You can print in the defined element
document.getElementById("tsStuff").innerHTML = "My Name is " + myName;
 
// A variable that didn't get a value assigned
// gets undefined
 
// null is a user assigned value saying that
// no value is assigned
 
// typeof returns the data type
document.write("myName is a " + typeof(myName) + "<br />");
document.write("canVote is a " + typeof(canVote) + "<br />");
document.write("anything is a " + typeof(anything) + "<br />");
 
// We can convert strings to numbers
var strToNum: number = parseInt("5");
document.write("strToNum is a " + typeof(strToNum) + "<br />");
 
// toString() converts anything into a string
var numToStr: number = 5;
document.write("numToStr is a " + typeof(numToStr.toString()) + "<br />");
 
// You define constants with const
const PI = 3.14159;
```
