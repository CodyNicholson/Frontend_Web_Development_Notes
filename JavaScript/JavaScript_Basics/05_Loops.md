# Loops

### While loop syntax:

```javascript
while (condition)
{
    doSomething();
}
```

The loop will repeat itself until the condition is no longer true, or you get a runtime error

### For loop syntax:

```javascript
for (initialization; condition; mutator)
{
    doSomething();
}
```

***

For loops are more advanced than while loops because you can set a variable to control how many times it repeats; Example:

```
for (x = 0; x < 3; x++)
{
    console.log("HI!");
}
```

The above for loop will repeat 3 times for x with value 0, 1, and 2

The loop will not run for x = 3 because 3 is not less than 3

***

For-in loops:

```javascript
for(item in object)
{
    doSomething();
}
```

This will repeat once for every item in object

```javascript
var abc = ["a", "b", "c"];

for (i in abc)
{
    console.log("abc!");
}
```

Since there are 3 items in abc, this will run 3 times

i does not need to be initialized, and can be named anything. It will always start at the first element and iterate through the rest one at a time
