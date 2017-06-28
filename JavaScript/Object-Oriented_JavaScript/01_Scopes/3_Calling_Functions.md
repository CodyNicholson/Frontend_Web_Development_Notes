# Calling Functions

```js
var hero = aHero();
var newSaga = function(){
	var foil = aFoil();
	var saga = function(){
		var deed = aDeed();
		log(hero+deed+foil);
	};
	saga(); // This is how you call a function
	saga(); // This is how you call a function
};
newSaga(); // This is how you call a function
newSaga(); // This is how you call a function
```
