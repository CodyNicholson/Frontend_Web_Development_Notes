# Using Describe To Describe

First we open the file at ../app/people/masterController.ts

You will see that the two classes have methods that we can test using jasmine. To test these we will go back to ../test/spec/masterControllerSpec.ts

We will create a new describer() and pass it a string that will describe what we are testing: "In the file masterControllerSpec.ts". This may seem odd, but we will add more to this in the second parameter, the closure. We can nest multiple describe functions to make sure we are testing everything:

```ts
/// <reference path="../../typings/index.d.ts" />
// The above code brings in the type definitions for any libraries we are using like angular and jasmine

describe("In the file masterController.ts", () => {
	describe("the masterController's", () => {
		describe("constructor", () => {

		});
		describe("throwSomething method", () => {

		});
		describe("the feedTheDog method", () => {

		});
	});
	describe("the MasterAction object's constructor", () => {

	});
});
```

Above you can see the testing skeleton we made, now we can begin adding the content we want to test. 

```ts
/// <reference path="../../typings/index.d.ts" />
// The above code brings in the type definitions for any libraries we are using like angular and jasmine

import dog = dogsrus.virtdog;

describe("In the file masterController.ts", () => {
	describe("the masterController's", () => {
	let sut: vdog.MasterController,
			$rootScope: ng.IRootScopeService,
			$controller: ng.IControllerService,
			masterControllerParams: {
				$rootScope: ng.IRootScopeService;
				eventNames: dog.EventNames
		};
		// All of these variables are no available to our test code
		// inside the MasterController describe scope. They are not
		// available to the Master action describe scope 

		beforeEach(() => {
			angular.mock.module("app.people");
			inject(($injector: ng.auto.IInjectorService) => {
				$controller = $injector.get<ng.IControllerService>('$controller');
				$rootScope = $injector.get<ng.IRootScopeService>('$rootScope');
				masterControllerParams = {
					$rootScope: $rootScope,
					eventNames: dog.eventNames
				};
			});
			sut = $controller<dog.MasterController>('masterController', masterControllerParams);
		});
		describe("constructor", () => {

		});
		describe("throwSomething method", () => {

		});
		describe("the feedTheDog method", () => {

		});
	});
	describe("the MasterAction object's constructor", () => {

	});
});
```

First, we define our *sut* (System Under Test). We set the type for our sut by getting our virtual dog. For efficiency, we import the virtual dog into the variable dog. 

Now we will create our beforeTest() setup function that will execute before every test. Since we are running angular we need to bring in our mocking framework. This mocking is all handled behind the scenes by the framework.

To set some references to the angular services we use angular's inject function. We pass through an injector service that we use to grab references to our angular services. First we will get the controller service so we can instantiate the controller using the get() function.

Next, we set up the masterControllerParams with $rootScope and eventNames.

Last, we can instantiate the controller services using the controller service, and we make sure that the type parameter is "dog.MasterController". We just pass through the controller name and its parameters.

