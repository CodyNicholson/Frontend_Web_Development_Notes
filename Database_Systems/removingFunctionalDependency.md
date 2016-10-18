#Removing a Functional Dependency

Suppose R contains the functional dependency XY where X is not a superkey

Replace R with two relations:

```
R – Y

No longer contains X -> Y

X U Y

Contains X -> Y, but X is a superkey in this relation
```