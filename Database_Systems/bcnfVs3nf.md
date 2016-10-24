#BCNF Vs 3NF

##BCNF

A relation R is in Boyce-Codd Normal Form (BCNF) if for every non-trivial functional dependency X -> Y in R, X is a superkey

“Every determinant must contain a candidate key”

A relation in BCNF will not have any redundancy, since every functional dependency in the relation will have a superkey as its determinant

-

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

***

##3NF

A relation R is in Third Normal Form (3NF) if for every non-trivial functional dependency X -> A in R, either X is a superkey or A is a prime attribute

    This is a weaker condition than BCNF, since X doesn’t have to be a superkey if A is prime

    3NF may allow some redundancy if there is more than one candidate key

***

##BCNF Vs 3NF

- Every relation in BCNF is in 3NF

- Not every relation in 3NF is in BCNF

    - In a 3NF relation, a prime attribute may be determined by something that is not a superkey, but BCNF will not allow that

    - 3NF and BCNF conditions are equivalent if there is only one candidate key in the relation

***

##Minimal Basis

A minimal basis of F is a set G that is equivalent to F and is “as small as possible”:

    1. The right side of every dependency is a single attribute

    2. No XA can be replaced with YA, where Y is a proper subset of X, and still be equivalent to F

    3. No XA can be removed and still be equivalent to F

-

###Constructing a Minimal Basis

```
Start with a set of functional dependencies…

    1. Split each X -> Z into an equivalent set with only one attribute on the right side of each f.d.

    2. For each X -> {a}, replace it with Y -> {a} (where Y is a proper subset of X) as long as the resulting set is equivalent

    3. Remove every X -> {a} that can be removed as long as the resulting set is equivalent
```

***

##3NF Decomposition Algorithm

1. Find a minimal basis G of F

2. For each set X that appears as the determinant of some functional dependency in G:

    Find all k dependencies of the form X -> Ai in G, and create a relation in D with the attributes in X and A1,…,Ak.

3. If none of the relations in D contains a candidate key of R, find a candidate key K of R and create a relation in D whose attributes are the attributes of K.

4. Remove any redundant relations. (A relation Q1 in D is redundant if all of its attributes are included in another relation Q2 in D.)
