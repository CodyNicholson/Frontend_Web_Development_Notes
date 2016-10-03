#Subqueries

The result of one query may be needed by another to compute its result

    - A *subquery* is nested using parentheses within an outer query

    - Outer query uses the result of the subquery, which can be either a single value or a table

The subquery usually appears in a WHERE or HAVING clause and  sometimes in a FROM

***

###Correlated Subqueries
-

A subquery may refer to attributes of the table in the outer query

    - The subquery will be evaluated repeatedly, once for each tuple in the table in the outer query

    - Attributes from outer query table must be qualified with the table name if they appear in the subquery

    - If the tables in the outer query and subquery are the same, must create an alias for the outer query table

Example:

```
SELECT * FROM TABLE
    WHERE Value = (SELECT MAX(Value) FROM TABLE WHERE Id = TABLE.Id)
    ORDER BY Id;
```

In this example, "SELECT MAX(Value) FROM TABLE WHERE Id = TABLE.Id" is the subquery