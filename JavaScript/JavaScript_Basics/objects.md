#Objects

There are objects in JS, but there are NO CLASSES!
To create an object we use Object Literal Notation

-

###Object Literal Notation

```javascript
var myObj =
{
    "name" : "Cody Nicholson",
    "age" : 20,
};
```

####Changing existing properties (Dot notation)

```javascript
myObj.name = "Joe Shmoe";
```

Changes the value of "name" in myObj to "Joe Shmoe"

-

###Adding new properties to existing objects (Bracket notation)

```javascript
myObj["city"] = "Chicago";
```

Creates a new property "city" with value "Chicago" in the object myObj
