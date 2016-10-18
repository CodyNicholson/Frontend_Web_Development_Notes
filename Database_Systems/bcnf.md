#BCNF

A relation R is in Boyce-Codd Normal Form (BCNF) if for every non-trivial functional dependency X -> Y in R, X is a superkey

“Every determinant must contain a candidate key”

A relation in BCNF will not have any redundancy, since every functional dependency in the relation will have a superkey as its determinant

***

###BCNF Decomposition Algorithm

```
Set D = {R}

While there is some Q in D that is not in BCNF:
    Choose a Q that is not in BCNF
    Find an X -> Y in Q that violates BCNF
    Replace Q with two relations:
            Q – Y and (X union Y)

(When algorithm is done, all relations will be in BCNF)
```