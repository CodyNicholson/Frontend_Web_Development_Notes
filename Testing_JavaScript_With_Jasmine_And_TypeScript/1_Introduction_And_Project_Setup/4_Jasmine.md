# Jasmine

Jasmine is a unit testing framework with an intuitive syntax that will help you to optimize your time, organize your code, isolate your units, and communicate your results in a human-readable format

***

### Jasmine Functions

- describe() defines a scope, or grouping of tests. It accepts a testing parameter describing the grouping, and a closure containing the steps to execute for the group. The closure can also contain additional subgroups if needed. Since describe() functions can be nested, it is simple to create a test structure that is easy to follow. 
- it() defines an actual test. The first parameter is a string that allows us to clearly state the expectation. The second closure parameter defines additional steps if any are needed to perform the test, and mos importantly the assertions.
- expect() defines an assertion that intuitively defines the actual value uf the test using its first parameter. Using a fluent interface, the expect() call is chained using a matcher construct that allows various types of comparisons and modifiers.
- spyOn() allows marking and stubbing of dependencies making it possible to isolate the unit from other components.

With nested describe blocks, code reuse is maximized for your tests

The beforeEach() function is run for each test in the group. The ability to combine beforeEach() functionality with describe() nesting makes tests really simple with some only needing a single line of code
