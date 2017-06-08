# Services

To fetch data from an API we use services in Angular

Services give your Controller additional functionality, like ...

- Fetching JSON data from a web service with $http
- Logging messages to the JavaScript console with $log
- Filtering an array with $filter

All built-in services start with a "$" sign

***

### The $http Service

The $http Service is how we make an async request to a server

By using $http as a function with an options object:

```js
$http({ method: 'GET', url: '/products.json' });
```

Or using one of the shortcut methods:

```js
$http.get('/products.json', { apiKey: 'myApiKey' });
```

Both return a Promise object with .success() and .error()

If we tell $http to fetch JSON, the result will be automatically decoded into JavaScript objects and arrays

***

### Using A Service

```js
app.controller('SomeController', [ '$http', '$log', function($http, $log){

} ]);
```

We pass the service name as an argument to the function using dependency injection

If you need more than one service, all you need to do is add more arguments

When angular is loaded services are registered and a controller is initialized:

```js
app.controller('SomeController', [ '$http', '$log', function($http, $log){

} ]);
```

When the controller runs the dependencies are injected

```js
(function(){
	var app = angular.module('store', [ 'store-products' ]);

	app.controller('StoreController', [ '$http', function($http){
		this.products = ???;
	}]);
})();
```

StoreController needs the $http Service, so $http gets injected as an argument

***

### Using Our Service

```js
(function(){
	var app = angular.module('store', [ 'store-products' ]);

	app.controller('StoreController', [ '$http', function($http){
		this.products = ???;
		$http.get('/products.json')
	}]);
})();
```

Our service will return data:

```js
(function(){
	var app = angular.module('store', [ 'store-products' ]);

	app.controller('StoreController', [ '$http', function($http){
		this.products = ???;

		$http.get('/products.json').success(function(data){
			??? = data
		});
	}]);
})();
```

This will store the data for use on our page

```js
(function(){
	var app = angular.module('store', [ 'store-products' ]);

	app.controller('StoreController', [ '$http', function($http){
		var store = this; // We need to store what this is

		$http.get('/products.json').success(function(data){
			store.products = data // And put this into our data
		});
	}]);
})();
```

Lastly, we need to initialize Products to be a blank array since the page will render before our data returns from our get request

```js
(function(){
	var app = angular.module('store', [ 'store-products' ]);

	app.controller('StoreController', [ '$http', function($http){
		var store = this; // We need to store what this is
		store.products = [ ];

		$http.get('/products.json').success(function(data){
			store.products = data // And put this into our data
		});
	}]);
})();
```

***

### Additional &http Functionality

In addition to get() requests, $http can post(), put(), delete() methods:

```
$http.post('/path/to/resource.json', { param: 'value' });
```

```
$http.delete('/path/to/resource.json');
```

or any other HTTP method by using a config object:

```
$http({ method: 'OPTIONS', url: '/path/to/resource.json' });
```

```
$http({ method: 'PATCH', url: '/path/to/resource.json' });
```

```
$http({ method: 'TRACE', url: '/path/to/resource.json' });
```
