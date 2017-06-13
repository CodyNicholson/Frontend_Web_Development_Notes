# Adding Validation

Without Validation:

```html
<form name="reviewForm" ng-controller="ReviewController as reviewCtrl" ng-submit="reviewCtrl.addReview(product)">
	<select ng-model="reviewCtrl.review.stars">
		<option value="1">1 star</option>
		<option value="2">2 stars</option>
		<option value="3">3 stars</option>
		<option value="4">4 stars</option>
		<option value="5">5 stars</option>
	</select>
	<textarea name="body" ng-model="reviewCtrl.review.body"></textarea>
	<label>by:</label>
	<input name="author" ng-model="reviewCtrl.review.author" type="email" />
	<input type="submit" value="Submit" />
</form>
```

With Validation:

```html
<form name="reviewForm" ng-controller="ReviewController as reviewCtrl" ng-submit="reviewForm.$valid && reviewCtrl.addReview(product)" novalidate>
	<select ng-model="reviewCtrl.review.stars" required>
		<option value="1">1 star</option>
		<option value="2">2 stars</option>
		<option value="3">3 stars</option>
		<option value="4">4 stars</option>
		<option value="5">5 stars</option>
	</select>
	<textarea name="body" ng-model="reviewCtrl.review.body" required></textarea>
	<label>by:</label>
	<input name="author" ng-model="reviewCtrl.review.author" type="email" required/>
	<div> reviewForm is {{reviewForm.$valid}} </div> <!-- Prints form validity -->
	<input type="submit" value="Submit" />
</form>
```

The form element's ng-submit attribute makes it so that the addReview method cannot be called unless the "reviewForm.$valid" is true. The "reviewForm.$valid" will not be true unless the body, name, and stars are entered by the user since those elements have "required" written in them.
