# Flexbox

By default a webpage will display its elements with the from top to bottom in a single column without worrying about putting any elements side-to-side

For Example:

```HTML
<div class="container">
    <p>Hello there</p>
    <p>How are you?</p>
</div>
```

This code will display the first 'p' element on top of the second in a column

This code will look like:

```
Hello there
How are you?
```

Using flexbox, we can arrang eour web elements in rows rather than a single column which allows us to organize our webpage much more effectively

```HTML
<div class="container" style="display: flex">
    <p>Hello there</p>
    <p>How are you?</p>
</div>
```

Now that we have our 'p' elements inside a 'div' with style "display: flex", the elements will arrange themselves side-by-side in rows until they can no longer fit, then they will drop down to a new row

This code will produce:

```
Hello thereHow are you?
```

Since the elements are displayed in a row, not a column

Check out some of the layouts I have provided in html files in this directory to see how you can organize your code using flexbox
