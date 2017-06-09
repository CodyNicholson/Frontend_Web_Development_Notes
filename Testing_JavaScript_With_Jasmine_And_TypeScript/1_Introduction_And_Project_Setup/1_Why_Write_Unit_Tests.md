# Why Write Unit Tests

Opponents of unit testing might say:

- It is time consuming
- It is useless code
- It adds complexity

***

### Time

##### Bug Found In Development

If you find a bug while you are developing, it is easy to fix since you are just developing that code. Just write the fix, compile, make sure everything works. 

##### Bug Found By User

If a user finds a bug that escaped development, then the user will freak out because they won't understand what is going wrong. They will talk to their supervisor. The supervisor will confirm the bug and then call support. Support will try and reproduce the problem so they can better understand. The project team will then meet to prioritize, estimate the severity, and schedule the patch release. Developers will then perform digital forensics on the bug, and then they will find the bug and fix it.

***

### Are Unit Tests Useless?

In addition to helping avoid bugs in the developers code, unit tests also provide a "safety net" so that we can try new things with the application without fear of breaking something. This is similar to how a gymnast can try risky tricks if they know that the safety net will catch them if they mess up.

***

### Unit Tests Add Clarity, Not Complexity

You can read a test result and know exactly what a class or file is designed to do. Unit testing also favors decoupling - being able to easily isolate the test subject discourages embedded dependencies. Unit testing encourages simplification - if the testing for a function gets too complex it is likely the function is doing too much. By supporting these software principles, unit testing supports extensibility.
