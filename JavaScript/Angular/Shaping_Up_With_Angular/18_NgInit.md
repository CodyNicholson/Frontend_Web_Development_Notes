# NgInit

ng-init allows us to evaluate an expression in the current scope

```html
<section ng-init="tab = 1">
	<ul class="nav nav-pills">
		<li> <a href ng-click="tab = 1"> Description </a> </li>
		<li> <a href ng-click="tab = 2"> Specifications </a> </li>
		<li> <a href ng-click="tab = 3"> Reviews </a> </li>
	</ul>
</section>
```
