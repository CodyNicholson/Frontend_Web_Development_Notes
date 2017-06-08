# Ng-Include

The ng-include directive includes HTML from an external file

The included content will be included as childnodes of the specified element

The value of the ng-include attribute can also be an expression, returning a filename

By default, the included file must be located on the same domain as the document

index.html:

```html
<h3 ng-include="'product-title.html'" name of file to include </h3>
```

ng-include is expecting a variable with the name of the file to include

To pass the name directly as a string, use single quotes ('...')

product-title.html:

```html
{{product.name}}
<em class="pull-right">${{product.price}}</em>
```

Generated Code:

```html
<h3 ng-include="'product-title.html'" class="ng-scope">
	<span class="ng-scope ng-binding">Awesome Multi-touch Keyboard</span>
	<em class="pull-right ng-scope ng-binding">$250.00</em>
</h3>
```
