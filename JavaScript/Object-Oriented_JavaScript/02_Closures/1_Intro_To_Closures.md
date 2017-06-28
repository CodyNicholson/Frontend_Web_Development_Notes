# Intro To Closures

Every function should have access to all variables from all the scopes that surround it

A **closure** is just any function that somehow remains available after those outer scopes have returned

```js
var hero = aHero();
var newSaga = function(){
	var foil = aFoil();
	var saga = function(){
		var deed = aDeed();
		log(hero+deed+foil); // This is where we start looking at other scopes
	};
	saga();
	saga();
};
newSaga();
newSaga();
```

To retain access to the saga() function objects after the newSaga() calls that created them have returned we can:

- Return saga() fromnewSaga()
- Save saga() to a global variable
- Pass saga() to setTimeout
