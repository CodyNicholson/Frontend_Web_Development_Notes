#Finding a Closure

To find the closure of X with respect to F:

```
set X+ = X

repeat
    set oldX+ = X+
    for each W  Z in F do
        if X+ includes W, then set X+ = X+ U  Z

until oldX+ = X+
```

***

###Determining if E Follows from F

To determine if E follows from F:

```
for each X -> Y in E
    find the closure X+ of X with respect to F
    check if Y is a subset of X+
if X+ includes Y for every X -> Y in E,
    then E follows from F; if not, then E doesn’t follow from F
```