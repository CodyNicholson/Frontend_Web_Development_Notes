There are collections of CSS classes that make a page layout easy to implement

One such collection, bootstrp, divides the webpage into 12 columns to display data on a webpage by using classes

For example:

```HTML
<div class="container">
    <div class="col-md-1">
        <img src="images/pic1.jpg">
    </div>
    <div class="col-md-11">
        <img src="images/pic2.jpg">
    </div>
</div>
```
The above code will use a div to occupy 1/12th of the webpage with pic1, and then another div to occupy the other 11/12ths of the webpage
This is all possible because of the classes "col-md" classes that can divide up the webpage


Creating a framework is easy since you can divide like this

If you want to display two elements and exagerate one of them, you can use "col-md-8" for the exagerated one and "col-md-4" for the other so they display side-by-side but one of them will be twice as large as the other
