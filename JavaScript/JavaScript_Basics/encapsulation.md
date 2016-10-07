#Encapsulation

Encapsulation in js is the technique of putting a function inside of an object

In js, almost everything is an object

In the below json, you will see that I have included some data, and beneath that I added a function to the projects json object that I can call using "projects.someName();"

```JavaScript
var projects =
{
    "projs" :
        {
            "title" : "MyProject",
            "dates" : "2016",
            "description" : "A project I made",
            "images" : "images/197x148.gif"
        },
};

projects.someName = function()
{
    $('#idName').append(projects.proj.title).append(proj.dates);
}

projects.someName();
```
