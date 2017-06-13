# Return

### Returning a Single Value

When a single value is returned, it can be used like any other value on the right-hand side of a WHERE or HAVING condition

```
    SELECT * FROM ASSIGNMENT
    WHERE Hours > (SELECT AVG(Hours) FROM ASSIGNMENT);
```

***

### Returning a Table

Can check whether the returned table is empty:

    - EXISTS (query) is true if table is not empty

    - NOT EXISTS (query) is true if table is empty

Can check contents of table:

    - tuple IN (query) returns true if tuple appears in the returned table

        - (in most cases, the tuple and the SELECT in the subquery each contain just one attribute…)

Can compare an attribute to table contents:

    - …only when SELECT contains just one attribute

    - *attribute* > ALL (query) returns true if attribute is greater than all values in the returned column

    - *attribute* > ANY (query) returns true if attribute is greater than any value in the returned column

(Any type of comparison is allowed, not just > …)
