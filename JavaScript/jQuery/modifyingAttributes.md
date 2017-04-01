# Modifying Attributes

Example Code for Changing Attribute lesson:

```HTML
<nav id="nav" class="navigator">
    <h1>Nav Header</h1>
    <ul class="nav-list">
        <li class="nav-item"><a>Item #1</a></li>
        <li class="nav-item active"><a href="#2">Item #2</a></li>
        <li class="nav-item"><a href="#3">Item #3</a></li>
        <li class="nav-item"><a href="#4">Item #4</a></li>
        <li class="nav-item"><a href="#5">Item #5</a></li>
        <li class="nav-item"><a href="#6">Item #6</a></li>
    </ul>
</nav>
```

-

js for using attr() and first():

```javascript
var navList;

navList = $('.nav-list');

firstItem = navList.children().first();
// Selects the first child of the children of the element with the class 'nav-list'

link = firstItem.find('a');
// Selects the child of the firstItem node with tag 'a'

link.attr('href', '#1');
// Adds the attribute 'href' with a value of '#1' to the 'a' tag of the first child of the node with class 'nav-list'
// the attr() method can be used two different ways. If passed only the name of an attribute it will return the value of that attribute. If passed an attribute and a value, it will add that attribute with that value to the element you selected
```
