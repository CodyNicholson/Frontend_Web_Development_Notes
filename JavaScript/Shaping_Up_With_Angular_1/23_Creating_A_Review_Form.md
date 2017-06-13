# Creating A Review Form Using Ng-Model

The ng-model directive binds the value of HTML controls (input, select, textarea) to application data

Using ng-model we can access the variables from our 

index.html:

```html
<form name="reviewForm" ng-controller="ReviewController as reviewCtrl" ng-submit="reviewCtrl.addReview(product)">
	<blockquote>
		<b>Stars: {{reviewCtrl.review.stars}}</b>
		{{reviewCtrl.review.body}}
		<cite>by: {{reviewCtrl.review.author}}</cite>
	</blockquote>
	<select ng-model="reviewCtrl.review.stars">
		<option value="1">1 star</option>
		<option value="2">2 stars</option>
		. . .
	</select>
	<textarea ng-model="reviewCtrl.review.body"></textarea>
	<label>by:</label>
	<input ng-model="reviewCtrl.review.author" type="email" />
	<input type="submit" value="Submit" />
</form>
```

***

### Initializing The Review

To initialize the above review we could use ng-init, but we are better off creating a controller:

```js
app.controller("ReviewController", function()
{
	this.review = {};

	this.addReview = function(product) // Push review onto this product’s reviews array
	{
		product.reviews.push(this.review);
		this.review = {}; // Clear out the review, so the form will reset
	};
});
```
