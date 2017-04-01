# SQL Queries

#### General form of a query:
SELECT list of expressions
FROM set of records
[WHERE condition on tuples]
[GROUP BY grouping attributes]
[HAVING condition on groups]
[ORDER BY ordering attributes] ;
Result is an ordered set of ordered tuples

___

### Select
-

SELECT list of expressions …

- Indicates what information will be displayed
- Values of attributes
- * or list of attributes, DISTINCT, AS
- Expressions computed from attributes e.g., +, -, *, /, ||
- Functions computed from attributes e.g., round(x,i), upper(s), lower(s), to_char(d, field)

___

### From
-

Select FROM set of records

- Indicates the set of records from which information will be retrieved
- A single table (that’s all we’ll use for now…)
- A list or other combination (“join”) of tables
- The result of a “subquery”

___

### Where
-

Select thing from list… WHERE condition on tuples …
<br>
Each tuple is tested against the condition, and only those that satisfy it are returned by the query
<br>
Condition expression can contain:
- comparisons
- expressions with wildcards (for strings)
- logical operators

