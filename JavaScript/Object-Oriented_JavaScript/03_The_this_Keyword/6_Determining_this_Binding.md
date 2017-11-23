# Determining 'this' Binding

To find what 'this' refers to we're supposed to find call time, look for a dot (period), and look to the left of that dot to find the object 'this' refers to

```js
var fn = function(one, two){
	log(this, one, two);
};

var r={}, g={}, b={}, y={};
r.method = fn;

r.method(g,b);
fn(g,b);
fn.call(r,g,b);
setTimeout(fn,1000);
setTimeout(r.method, 1000);
```

```
var setTimeout = function(cb,ms){
	wait(ms);
	cb(); // This is where the function is invoked
}
```

Since only the moment of call time influences how the parameter 'this' will get bound, 'this' will be assigned to the global scope since the **setTimeout()** function is called in the global scope
