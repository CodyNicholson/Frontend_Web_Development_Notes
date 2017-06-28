# What Is 'this' Bound To?

```js
var fn = function(a,b){
	log(this);
}

var obj2 = {method: fn};

obj2.fn(3,4);
```

'this' refers to the object found **to the left of the dot** where the **containing function is called**

When you notice a dot to the left of a function invocation, meaning it was looked up as a property of an object, you can look to the left of that dot and see what object it was looked upon. The object that a function is looked up upon when it's being invoked, that object is what the keyword 'this' will be bound to. This is an approximate definition that is true in about 90% of situations, because sometimes we won't use a dot to access a function. We may use brackets.

It is not true that the object you find a given function stored within will be what the keyword 'this' refers to, nor is it the case that an object a function was originally defined within is going to be what the keyword 'this' refers to

It has everything to do with that call-time dot, and the object that we find to the left of it
