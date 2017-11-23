# What Is 'this' Not Bound To?

```js
var fn = function(a,b){
	log(this);
}

var obj2 = {method: fn};

obj2.fn(3,4);
```

Generally 'this' is not bound to:

- The function object, like "function(a,b)", that 'this' appears within
- An instance of the function 'this' appears within (Sometimes this is the case, but not normally)
- An object that happens to have that function as a property, like "obj2" above (What if that function was a part of two different objects? 'this' cannot refer to both, so 'this' cannot be bound like this)
- An execution context or scope of the function call, like the one created by calling the obj2.fun() function
