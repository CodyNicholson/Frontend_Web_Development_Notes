# Arrays

These are the same as lists in python

Arrays in JS start at index '0'

-

Array manipulation example code:

```JavaScript
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    newArray = _array;
    var lastNum = newArray.length - 1;

    newArray[lastNum] = newArray[lastNum] + 1;

    return newArray;
};

console.log(incrementLastArrayElement(sampleArray));
```
