# String Methods in Javascript

### .replace():

```javascript
var awesome = "I am awesome";

var fun = awesome.replace("awesome", "fun");

$('#main').append(fun);

// This code will change the message displayed by the console of a website with an element with id = 'main'

// append() adds a child as the last child, prepend() adds a child as the first child
```

### .toUpperCase() & .toLowerCase():

```javascript
var str = "hElLo";
str = str.toUpperCase();
console.log(str);
// This will print "HELLO"

str = str.toLowerCase();
console.log(str);
// This will print "hello"
```

### .split():

```javascript
var str = "Some String";
var strs = str.split(" ");
console.log(strs);
// This will print: ["Some", "String"]
// This happens because split(" ") divided the one string into two and deleted the space

var strsSplitByO = str.split("o");
console.log(strsSplitByO);
// This will print: ["S", "me String"] since it will split at the "o" and delete the "o"
```

### .slice():

```javascript
var str = "abcdefgh";
console.log(str.slice(0,1));
// "a"

console.log(str.slice(0,3));
// "abc"

console.log(str.slice(3,2));
// ""

console.log(str.slice(3,5));
// "de"

console.log(str.slice(1));
// "bcdefgh"

console.log(str.slice(5));
// "fgh"
```

***

This function takes a two-word string and will uppercase the lowercase the first word and capitalize its first letter, and it will uppercase the second word and return the result

```javascript
function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}
```
