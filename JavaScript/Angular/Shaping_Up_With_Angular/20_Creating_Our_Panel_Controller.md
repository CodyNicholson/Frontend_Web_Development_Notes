# Creating Our Panel Controller

Here is our current code that we want to create a controller for:

```html
<section ng-init="tab = 1">
	<ul class="nav nav-pills">
		<li ng-class="{ active:tab === 1 }">
			<a href ng-click="tab = 1">Description</a>
		</li>
		<li ng-class="{ active:tab === 2 }">
			<a href ng-click="tab = 2">Specifications</a>
		</li>
		<li ng-class="{ active:tab === 3 }">
			<a href ng-click="tab = 3">Reviews</a>
		</li>
	</ul>
	<div class="panel" ng-show="tab === 1">
		<h4>Description </h4>
		<p>{{product.description}}</p>
	</div>
</section>
```

In app.js we can define a PanelController with the selectTab and isSelected functions:

```js
app.controller("PanelController", function(){
	this.tab = 1;

	this.selectTab = function(setTab) {
		this.tab = setTab;
	};
	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
});
```

Now our code is organized much better and will scale without as much confusion

```html
<section ng-init="tab = 1" ng-controller="PanelController as panel">
	<ul class="nav nav-pills">
		<li ng-class="{ active: panel.isSelected(3) }">
			<a href ng-click="panel.isSelected(3)">Description</a>
		</li>
		<li ng-class="{ active: panel.isSelected(3) }">
			<a href ng-click="panel.isSelected(3)">Specifications</a>
		</li>
		<li ng-class="{ active: panel.isSelected(3) }">
			<a href ng-click="panel.isSelected(3)">Reviews</a>
		</li>
	</ul>
	<div class="panel" ng-show="panel.isSelected(3)">
		<h4>Description </h4>
		<p>{{product.description}}</p>
	</div>
</section>
```
