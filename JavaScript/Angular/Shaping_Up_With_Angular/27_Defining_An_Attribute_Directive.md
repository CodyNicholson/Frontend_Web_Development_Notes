# Defining An Attribute Directive

index.html:

```html

```

app.js:

```js

```

index.html after product-title attribute directive renders:

```html
<h3>
	{{product.name}}
	<em class="pull-right">$250.00</em>
</h3>
```

Normally attributes would be for mixin behaviors

***

### Directives allow you to write better HTML

When you think of a dynamic web application, do you think you’ll be able to understand the functionality just by looking at the HTML? (No)

When you're writing an Angular JS application, you should be able to understand the behavior and intent from just the HTML

And you’re likely using custom directives to write expressive HTML
