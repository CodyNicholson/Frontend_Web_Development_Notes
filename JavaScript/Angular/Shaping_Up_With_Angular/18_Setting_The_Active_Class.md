# Setting The Active Class

"tab === 1" is the expression to evaluate, and if it is true then we set the class "active" to the corresponding li web element

```html
<section ng-init="tab = 1">
	<ul class="nav nav-pills">
		<li  ng-class="{ active:tab === 1 }">
			<a href ng-click="tab = 1"> Description </a>
		</li>
		<li  ng-class="{ active:tab === 2 }">
			<a href ng-click="tab = 2"> Specifications </a>
		</li>
		<li  ng-class="{ active:tab === 3 }">
			<a href ng-click="tab = 3"> Reviews </a>
		</li>
	</ul>
</section>
```
