# Ng-Click - Making Our Application More Interative

```html
<section>
	<ul class="nav nav-pills">
		<li> <a href ng-click="tab = 1">Description</a> </li>
		<li> <a href ng-click="tab = 2">Specifications</a> </li>
		<li> <a href ng-click="tab = 3">Reviews</a> </li>
	</ul>
	{{tab}}
</section>
```

Our ng-click assigns a value to tab when the element is clicked that we print at the bottom of the screen

When ng-click changes the value of tab the {{tab}} expression automatically gets updated

Expressions define a 2-way Data Binding, which means Expressions are re-evaluated when a property changes

***

```html
<div class="panel" ng-show="tab === 1">
	<h4>Description</h4>
	<p>{{product.description}}</p>
</div>
<div class="panel" ng-show="tab === 2">
	<h4>Specifications</h4>
	<blockquote>None yet</blockquote>
</div>
<div class="panel" ng-show="tab === 3">
	<h4>Reviews</h4>
	<blockquote>None yet</blockquote>
</div>
```

Now when a tab is selected it will show the appropriate panel because of the added ng-show directive
