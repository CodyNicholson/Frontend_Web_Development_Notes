# Set Operations

Given two sets A and B:

A ∪ B = {x | x ∈ A ∨ x ∈ B} (“union”)
The set of all elements that are in A or B (or both)

A ∩ B = {x | x ∈ A ∧ x ∈ B} (“intersection”)
The set of all elements that are in both A and B

A – B = {x | x ∈ A ∧ x ∉ B} (“difference”)
The set of all elements that are in A but not in B

***

### Set Operations in SQL

Combine the results of two queries, as long as the results contain compatible tuples:

- UNION: tuples that appear in at least one result
- INTERSECT: tuples that appear in both results
- MINUS: tuples that appear in the first result but not in the second
- The final result must be a set, so duplicates are removed from the two results first…

-

To keep duplicates: For each tuple, if it appears i times in the first result and j times in the second result, then in the final result:

UNION ALL: that tuple appears i + j times

[ INTERSECT ALL: that tuple appears min( i , j ) times ]

[ MINUS ALL: that tuple appears max( i – j , 0 ) times ]
