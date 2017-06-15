# Selecting Elements in jQuery

```javascript
$
// Makes a jQuery object

('div')
// This arguement for the jQuery object is the tag that jQuery will search for

$('div')
// This statement will select all the divs on a webpage using jQuery

$('.container')
// This will select all the elements on a webpage with the class 'container' using jQuery

$('#main')
// This will select all the elements on a webpage with the id 'main' using jQuery
```

***

ANY vaild CSS selector is also a jQuery selector!

In a js file:

```javascript
var listElements;
// creates a variable

listElements = $('li');
// Uses jQuery to put all 'li' elements into a list variable

console.log(listElements);
// Prints the elements in listElements
```
