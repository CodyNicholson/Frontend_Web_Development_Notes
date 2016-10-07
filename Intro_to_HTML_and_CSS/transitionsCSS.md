#Transitions

```CSS
body
{
    background-color: black;
}
    body:hover
    {
        background-color: slategrey;
        transition: all 1s ease-in;
    }
```

The above CSS code will set the background color to black, but when you hover over the body (the whole webpage) the background will change to slategrey and it will ease-in and take a total of 1 second


```CSS
body
{
    background-color: black;
}
    body:hover
    {
        background-color: white;
        transition: all 2s cubic-bezier(0,.99,.75,1);
    }
```

Instead of using the default ease-in, you can create your own type of transition curve using http://cubic-bezier.com/ and including your curve as seen in the above code
