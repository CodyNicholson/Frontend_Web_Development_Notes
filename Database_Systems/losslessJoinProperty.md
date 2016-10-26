#Lossless Join Property

For every relation state r of R, the natural join of the restrictions of r to the relations R1, R2, …, Rm in the decomposition is r itself

- If we decompose and then join back the resulting relations, we get the original relation state – no spurious tuples are added

    - This property is important, but not all decompositions satisfy it…

    - To test this property, can always use the general “chase test”

    - In the special case where m = 2, can use the binary lossless join test


***

##General Test for Lossless Join

1 - Create a matrix S with a row i for each Ri and a column for j for each Aj

2 - Set each S(i,j) = “bij”

3 - For each entry (i,j)
    If relation Ri includes Aj, then set S(i,j) = “aj”

4 - Repeat the following loop until there are no changes to S:

```
    For each X -> Y in F

        For all rows in S that have the same symbols in all columns in X,
        set all of the columns in Y in those rows to agree as follows:

            If any row has aj for the columns, set all rows to that same aj

            If not, choose one of the bijs and set all rows to that same bij
```

5 - If any row has all aj’s, return true (D has lossless join); if not, return false D does not have lossless join)
