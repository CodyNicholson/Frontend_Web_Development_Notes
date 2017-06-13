# Ng-Src Directive

Using Angular Expressions inside a src attribute causes an error

The ng-src directive overrides the original src attribute of an img element

The ng-src directive should be used instead of src if you have AngularJS code inside the src value

The ng-src directive makes sure the image is not displayed wrong before AngularJS has evaluated the code

```html
<body ng-controller="StoreController as store">
	<ul class="list-group">
		<li class="list-group-item" ng-repeat="product in store.products">
			<h3> {{product.name}}
				<em class="pull-right">{{product.price | currency}}</em>
				<img ng-src="{{product.images[0].full}}"/>
			</h3>
		</li>
	</ul>
</body>
```
