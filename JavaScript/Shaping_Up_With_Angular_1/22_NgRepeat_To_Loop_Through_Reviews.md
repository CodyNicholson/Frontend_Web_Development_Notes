# Ng-Repeat To Loop Through Reviews

index.html:

```html
<li class="list-group-item" ng-repeat="product in store.products">
	. . .
	<div class="panel" ng-show="panel.isSelected(3)">
	<h4> Reviews </h4>
	<blockquote ng-repeat="review in product.reviews">
		<b>Stars: {{review.stars}}</b>
		{{review.body}}
		<cite>by: {{review.author}}</cite>
	</blockquote>
</div>
```

The above code will display each review in the blockquote web element using ng-repeat
