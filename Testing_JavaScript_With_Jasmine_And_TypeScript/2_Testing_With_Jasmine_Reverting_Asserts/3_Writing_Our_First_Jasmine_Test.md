# Writing Our First Jasmine TEst

To start, in the _Virtual_Dog project we will go to ../test/spec/ and we will create a file called masterControllerSpec.ts

```ts
/// <reference path="../../typings/index.d.ts" />
// The above code brings in the type definitions for any libraries we are using like angular and jasmine

describe('my first test', () => {
    it('my first expectation', () => {
        expect(true).toBeTruthy('What? Why was true not truthy');
    });
});
```

The describe() function returns void and takes two parameters: a string description, and a specDefinition function that also returns void

We set our specDefinition parameter to a function. We start this function with the it() function that defines a single test scope. It() takes a string description, an optional assertion closure that takes no parameters and returns nothing, and an optional timeout number.

The first line of our expectation is the expect() function that returns a jasmine.Matchers object. For this example, we pass "true" through the expect function which causes our test to always pass. We then chain the expect() function with the toBeTruthy() function that takes an optional parameterexpectationFailOutput of type any. This is used to tell people what is going wrong if your test fails, but it is unnecessary.

***

We use the ../test/SpecRunner.html file to run the tests and display the results in the browser

At the top we have references to jasmine style elements and libraries, as well as the bower and node libraries, and the app libraries under that. Below all of that we add the reference to the spec:

```html
<script src="spec/masterControllerSpec.js"></script>
```

If we open that file in the browser we should see the test results
