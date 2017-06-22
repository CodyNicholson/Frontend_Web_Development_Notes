# Lexical Scope

The most common use of the word scope refers to **Lexical Scope**. This use of the word "Scope" describes the regions in your source code where you can refer to a variable by name without getting access errors. The specific rules for this version of scoping can be understood even without running your code since it only concerns the area of your code where different variables names will have meaning.

In programs with no functions at all, there is a single scope called the **global scope**. Every variable in such a program would be stored there.

In some JavaScript environments, global scope is shared across different files as a way for any part of the program interact with any other part. If we add a variable to a program with no functions, that variable is said to be within the global scope and thus it can be accessed from anywhere else in the entire program.

After defining a variable in a lexical scope, you may make references to that variable from anywhere else in that lexical scope

### Lexical Scope & Functions

A new lexical scope is created every time you type out a function definition:

```js
var hero = aHero();
var newSaga = function()
{
	var str = "You cant access me from outside this functions lexical scope"; 
}
log(hero);
```

The function definition spans from the letter "f" in "function" to the end curly brace. The two curly braces around the function's body enclosed the area of the code where different access rules will apply, and is a new and different lexical scope from the one outside the curly braces.

Once you have mad a new lexical scope by defining a function it has a few more limitations than the lexical scope around it. Although you can still access variables from the outside lexical scope containing that inner lexical scope and you can access variables inside that inner scope, the variables that you define inside the inner scope cannot be referred to from outside that scope.
