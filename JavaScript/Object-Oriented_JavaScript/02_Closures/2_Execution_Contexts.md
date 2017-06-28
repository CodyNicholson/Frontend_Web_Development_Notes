# Execution Contexts

```js
var sagas = [];
var hero = aHero();
var newSaga = function(){
	var foil = aFoil();
	sagas.push(function(){
		var deed = aDeed();
		log(hero+deed+foil);
	});
};
newSaga();
sagas[0](); // When this line is invoked, what scope is it in?
newSaga();
```

When "sagas[0]();" executes it creates a new lexical scope inside the "newSaga()" function's scope, which is inside the global scope

**Global scope, newSaga function scope, sagas.push(function()) scope**
