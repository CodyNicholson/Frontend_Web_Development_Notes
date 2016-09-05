There are two different syntax for functions in javascript:


var functionName = function(arguements)
{
    function body code;
};


function functionName = function(arguements)
{
    function body code;
};



Returning values:


If you want a function to give you back something, you need to add a return statement


var someNumber = 0;

var addOne = function(someNumber)
{
    someNumber = someNumber + 1;
    return someNumber;
}

console.log(addOne(someNumber));


The above function will return the number it was given after adding 1 to it, the console.log() statement will print that number to the console