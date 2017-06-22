# Execution Contexts

When a program runs, it builds up storage systems for holding the variables and their values. These in-memory scope structures are called **execution contexts**.

Execution contexts - or *in memory scopes* - differ from lexical scopes. Execution contexts are built as the code runs, not as it's typed. Their rules govern which variables a program has access to at different points during the execution.

***

### In-Memory Data Stores

As the program runs, it will be building up internal data stores for keeping track of all the variables that are available to different function objects. Since each run of a function is supposed to operate in complete isolation from all previous runs, a new execution context should be created every time you run a function. Thus, for each lexical scope there may be many in-memory scopes created during execution, or there may be none. It all depends on how many times you run a given function in your code.

To examine execution contexts we'll need to actually run this program. 

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

When we call log() in the saga() function, we start looking for the variable deed. We realize it is not in the local scope, so we **fall through** and go to the lexical scope of the newSaga() function. Since it is not there either, we fall through to the global scope where we find the variable and move on to locating "deed". Deed is easy to find since it is defined in the local scope. To find "foil", we fall through once before finding it in the newSage() scope.
