# What Could Possibly Go Wrong?

The trouble with tests:

- *Brittle tests* break whenever changes are made to the code, this is bad because the test is supposed to signal a failure in the code and not the test which is often called a false positive
- *Complex tests* make it hard for other developers to understand and maintain the tests which wastes time
- *Ignored tests* when tests repeatedly fail developers lose confidence in their validity and mark them as ignored, they do the same for failing tests that are to complex for them to examine quickly
