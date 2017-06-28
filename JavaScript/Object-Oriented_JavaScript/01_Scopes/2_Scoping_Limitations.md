# Scoping Limitations

JavaScript allows you to assign values to variables that you have never even declared using "var". When you do this kind of assignment, variables your assigning to are automatically added to the global scope and not the scope you in which you did the assignment. For example:

```js
var x = "Some string";
var someFunction = function(){
	y = x;
}
console.log(y);
```

Notice that we assigned to a variable y without declaring it. Also, even though we used y for the first time inside of a function, we can use y outside of the function since y is added to the global scope when it is created without declaration.

You should not create variables like we created y because it leads to disorganized code since everything is declared in the global scope

***

Also, unlike other programming languages, not all curly braces in JavaScript are relevant for scoping. Blocks - which is another name for the spaces between curly braces - on if, while, and looping statements do not create new scopes. Only the curly braces that you find on a function statement creates a new scope.
