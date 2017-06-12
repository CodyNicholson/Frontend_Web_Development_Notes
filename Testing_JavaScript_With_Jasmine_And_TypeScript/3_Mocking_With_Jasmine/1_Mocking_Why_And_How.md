# Mocking: Why & How

#### Why?

Use mocks and stubs to isolate. Use dynamic mocking frameworks to save time and simplify maintenance.

#### How?

Use stubs to enable state / output testing. Use mocks to test interactions. Do not test implementation details.

***

### Stubs Vs Mocks

Stubs are placeholders for functions that the feature we are testing depends on. For example, if we are testing a ball rolling down a hill correctly, we could use a stub to push the ball to get it to move, and then let the hill do all of the work. The stub is not a factor of whether the test passes or not, it just helps get us started. A placeholder for something we required for our test. We should always prefer stubs to mocks.

A mock is used for the validation of our test. When the ball rolls down the hill, we might use a mock "bucket" to catch the ball so we can verify that our test worked.
