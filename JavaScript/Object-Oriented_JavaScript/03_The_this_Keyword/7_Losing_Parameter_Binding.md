# Losing Parameter Binding

The problem of losing parameter bindings is widespread since any function-like setTimeout that takes another function as a callback may actually call that function differently than you expect. Callback functions are inherently designed so that they will be invoked by the system you pass them to. Thus, you generally have very little control over what the bindings will be for the parameter of the functions that you passed in. For this reason, you need to be careful about all the parameter bindings including the parameter 'this', whenever you pass a function as an input to another function.

Despite the fact that you see an object at the left of the dot when you pass the function in, this object will not be passed along as the binding for the parameter 'this' when the system you passed it to eventually calls your callback function.

One way to pass a callback without complicating the parameter binding situation is to pass a different function, one that doesn't receive any parameters at all, including 'this'. Then you just make room in the body of that function for your custom code. Inside that area, you reference your method and then you can do the indication yourself, passing along whichever bindings you want for the parameter 'this'.
