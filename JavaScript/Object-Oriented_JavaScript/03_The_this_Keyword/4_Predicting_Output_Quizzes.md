# Predicting Output Quizzes

What is the parameter "two" bound to?

```js
var fn = function(one, two){
	log(one, two);
};
```

There is no binding for the second parameter or any positional parameters until this function gets called

***

At this point, now that we have some values, we can finally call the function and pass in a couple of the objects that we've made so we can see how they are treated. Input parameters to a function only have bindings when that function is actually running. So only now that we have an example of invocation can we really meaningfully evaluate what we expect parameter two to be bound to. 

What will be logged in the below example?

```js
var fn = function(one, two){
	log(one, two);
};

var r={}, g={}, b={};

fn(g,b);
```

The two objects: **g**, and **b**. Since they are both empty we will get: "{}, {}"

These two objects - g and b - were given the names "one" and "two" when they were passed into the function

***

What will be logged?

```js
var fn = function(){
	log(this);
};

var r={}, g={}, b={};

r.method = fn;

r.method();
```

This will log the object "r" since this points to it in this example since "r" is the object to the left of the dot operator in the "r.method()" call

***

Notice that we have been using the expression "left of the dot operator" to discuss the idea of finding a focal object during method invocation. *This is done only to keep it simple*. The same rules wouldapply if you used brackets instead of dots to get access to the method. 

What would "this" be bound to in this situation?

```js
var fn = function(){
	log(this);
};

var r={}, g={}, b={};

r.method = fn;

fn();
```

In this case the answer is the global object since fn() is defined in the global scope. When you don't have a dot to help you pass a specific binding for the keyword "this", JavaScript binds "this" by default to the global object. This is similar to how JavaScript binds undefined to positional parameters when we call in the function without enough inputs.

The dot is the mechanism by which we pass in a binding for the keyword "this"

***

What if you wanted to call a function and it didn't happen to be stored as a property of the object that you want the parameter "this" to be bound to? 

Besides the "left of the dot rule" this is another way to specify the value that you'd like to the parameter "this" to be bound to.

By using a function's .call() method we get to override the default binding to global and override the left of the dot rule. In this case we will pass through any value we want to the first parameter of the function and it will get bound to the keyword "this". When using .call() we pass in one extra value at the beginning of the argument list. That value will be bound to the parameter "this". 

What will be logged?

```js
var fn = function(one, two){
	log(this, one, two);
};

var r={}, g={}, b={}, y={};

r.method = fn;

fn.method.call(y,g,b);
```

the "y" object will be logged since .call() overrides the method access rules so "this" will get bound to the yellow object

***

One of the most confusing things for a lot of people about the parameter "this" is how it will get bound within functions when they get passed as callbacks. Consider this example where we pass our function to .setTimeout(), which will call the function for us a second later, and as you can see we are not passing through any of our values, so it seems hard to imagine what will be logged. 

What will be logged?

```js
var fn = function(one, two){
	log(this, one, two);
};

var r={}, g={}, b={}, y={};

r.method = fn;

setTimeout(fn, 1000);
```

The output will be the "r" object twice since "this" points to it in this example
