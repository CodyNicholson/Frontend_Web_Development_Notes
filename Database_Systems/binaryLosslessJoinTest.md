#Binary Lossless Join Test

```
D = {R1, R2} has the lossless join property if and only if one or both of the following hold:

1. (R1 ∩ R2) -> (R1 - R2) can be derived from F

2. (R1 ∩ R2) -> (R2 - R1) can be derived from F
```

That is, if and only if the intersection between the two sets of attributes is a superkey in one of the relations…

***

##General Test for Lossless Join

```
1. Create a matrix S with a row i for each Ri and a column for j for each Aj

2. Set each S(i,j) = “bij”

3. For each entry (i,j)
    If relation Ri includes Aj, then set S(i,j) = “aj”

4. Repeat the following loop until there are no changes to S:
    For each X -> Y in F
        For all rows in S that have the same symbols in all columns in X, set all of the columns in Y in those rows to agree as follows:
            If any row has aj for the columns, set all rows to that same aj
            If not, choose one of the bijs and set all rows to that same bij

5. If any row has all aj’s, return true (D has lossless join); if not, return false D does not have lossless join).
```