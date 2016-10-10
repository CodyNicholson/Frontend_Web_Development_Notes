#Relational Database Design

Start with a set of attributes
    R = {A1, A2, …, An}

(Can also be written as a universal relation
      R(A1, A2, …, An) …)

Construct a decomposition of R into relations
 D = {R1, R2, …, Rm}
Each Ri is a subset of R

-

The decomposition D = {R1, R2, …, Rm} should satisfy the following conditions:

    1. The union of the Ri’s is R

    2. All redundancy has been removed from the Ri’s

    3. The functional dependencies in R are preserved

    4. The original relation R can be recovered from D

Conditions 2.-4. have to be formalized…

***

###Redundancy

Redundancy occurs when more than one record in a table stores the same information

- Wastes space

- Allows update and deletion anomalies

Remove redundancy by identifying (and perhaps removing) functional dependencies in R

***

###Functional Dependencies

A set of attributes Y = {Y1, Y2, …, Yn} is functionally dependent on a set of attributes X = {X1, X2, …, Xm} if and only if every pair of tuples that have the same values for X must also have the same values for Y

- Also “X functionally determines Y” or “X  Y”

- X is called the determinant

(Less formally, “the values of X uniquely determine the values of Y”…)

-

“Every pair of tuples that have the same values on X also have the same values on Y”

- For X to functionally determine Y, this condition must be satisfied by every possible relation state

- If some relation state does not satisfy the condition because two tuples have the same values on X but different values on Y, then X does not functionally determine Y

***

###Finding Functional Dependencies
-

DVD ( DVDID , MovieID , Title , Genre ,     Length , Rating )

INVOICE ( OrderID , OrderDate ,     CustomerID , Name , Address , ProductID , Description , Finish , Price ,  Quantity )

(We do not typically include trivial functional dependencies, where Y is a subset of X…)

***

###Inference Rules

Let us derive other functional dependencies from known ones

```
If X -> Y1, Y2, …, Ym , then
   X -> Y1 and X -> Y2 …  and X -> Ym
```

“The splitting rule”

-

```
If X -> Y1 and X -> Y2 … and X -> Ym ,
    then X -> Y1, Y2, …, Ym
```

“The combining rule”

-

```
If X1, X2, …, Xm -> Y1, Y2, …, Yn  and
   Y1, Y2, …, Yn -> Z1, Z2, …, Zp , then
        X1, X2, …, Xm -> Z1, Z2, …, Zp

Or, “If X -> Y and Y -> Z , then X -> Z”
```

“The transitive rule”

***

###Equivalence

E follows from F if every functional dependency in the set E can be derived from those in the set F

If F follows from E and E follows from F, then E and F are equivalent

But how can you tell if XY in the set E can be derived from the set F?

***

###Closures

How to tell if X -> Y in set E can be derived from the functional dependencies in set F?

    Start with X … see what attributes you can determine from X using F …  then see what other attributes you can determine from those … and so on … and so on … can you determine all of Y?

For F and a set of attributes X, the closure of X with respect to F (written X+) is the set of all attributes that can be determined from X

-

###Finding a Closure

To find the closure of X with respect to F:

```
set X+ = X
repeat
    set oldX+ = X+
    for each W  Z in F do
        if X+ includes W, then set X+ = X+ U  Z
until oldX+ = X+
```

-

###Determining if E Follows from F

To determine if E follows from F:

for each X -> Y in E

    find the closure X+ of X with respect to F

    check if Y is a subset of X+

if X+ includes Y for every X -> Y in E,

    then E follows from F; if not, then E doesn’t follow from F

***

###Definitions of Keys

A set of attributes X is a *superkey* of R if X determines all attributes of R

A set of attributes X  is a *candidate key* of R if it is a superkey, but no proper subset Y of X is a superkey

An attribute is *prime* if it is contained in some candidate key (and is *non-prime* otherwise)

***

###Notes for future

Redundancy comes from functional dependencies whose determinants are not superkeys

We construct decompositions by eliminating these functional dependencies

How do we measure the quality of the resulting decompositions?
