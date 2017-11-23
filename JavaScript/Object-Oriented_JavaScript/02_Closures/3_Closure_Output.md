# Closure Output

A new context always gets created in the same context as its function was defined within

```js
var sagas = [];
var hero = aHero(); // "Boy"
var newSaga = function(){
	var foil = aFoil(); // "Rat"
	sagas.push(function(){
		var deed = aDeed(); // "Eyes"
		log(hero+deed+foil);
	});
};
newSaga();
sagas[0](); // What does this return?
sagas[0](); // aDeed() returns "Digs" this time, what will this return?
newSaga();  // This will create a new newSaga() context
sagas[0](); // aDeed() returns "Pins" this time, what will this return?
sagas[1](); // aFoil() returns "ET", and aDeed() returns "Gets", what will this return?
sagas[0](); // The "Rat" aFoil() from before is still alive in this scope, and aDeed() returns "Eats", what will the output be?
```

The first sagas[0]() call will return "BoyEyesRat"

Running the second sagas[0]() call will create a new deed since we call the aDeed() function again, which will make the log() function return "BoyDigsRat"

Running the third sagas[0]() call will create a new deed since we call the aDeed() function again, which will make the log() function return "BoyPinsRat"

Running the first sagas[1]() call will create a new deed since we call the aDeed() function again AND a new foil since we call the aFoil() function, which will make the log() function return "BoyGetsET"

Running the fourth sagas[0]() call will create a new deed since we call the aDeed() function again - and we still have the foil from before that is "Rat" in our scope - which will make the log() function return "BoyEatsRat"
