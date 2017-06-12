# SpyOn Function

The SpyOn function lets you intercept sensitive data. You can then do things like examine the data, stop the datafrom going to its intended target (isolation) and set a return value for the call. 

Using the spyOn() function, we pass in the object to be spyed on and the method we want to spy on as a string

Example:

```ts
describe('broadcast related property', () => {
	let broadcastObject: dog.DogObject;
	beforeEach(() => {
		broadcastObject = new dog.DogObject('meh', false, false);
		spyOn($rootScope, '$broadcast');
	});
	describe('throwSomething', () => {
		it('should broadcast the throw event name and the object thrown', () => {
			sut.throwSomething(broadcastObject);
			expect($rootScope.$broadcast).toHaveBeenCalledWith(
				dog.eventNames.masterThrow, broadcastObject);
		});
	});
});
```
