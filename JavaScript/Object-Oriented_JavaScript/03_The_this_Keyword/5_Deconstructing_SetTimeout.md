# Deconstructing SetTimeout()

Let's take a look at how setTimeout() would be implemented if it were written in javaScript in a file called timer.js

```js
var fn = function(one, two)
{
	log(this, one, two);
}

var r={}, g={}, b={}, y={};
r.method = fn;

setTimeout(fn, 1000);
```

timer.js:

```js
var setTimeout = function(cb, ms)
{
	wait(ms);
	cb();
}
```

We would first have a wait that would take in the amount of milliseconds we want to wait for, and then it would have to refer to your function and somehow invoke it. What values is setTimeout likely to pass along to your callback function? Since setTimeout has no way to know these values, it would probably have to invoke it with no parameters at all. If that were the case, the last two positions of the log output would be undefined.

