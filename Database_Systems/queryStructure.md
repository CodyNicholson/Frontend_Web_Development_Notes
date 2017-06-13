# Query Structure

General form of a query:

1. SELECT list of expressions
2. FROM set of records
3. [WHERE condition on tuples]
4. [GROUP BY grouping attributes]
5. [HAVING condition on groups]
6. [ORDER BY ordering attributes] ;
7. Grouping goes after WHERE, before ORDER BY

***

### Writing a Query

1. SELECT: What values do I have to compute and display?
2. FROM: What table should I use?
3. WHERE: How do I indicate which rows to include?
4. GROUP BY: What attribute’s values will define the sets? (May have to change SELECT * here…)
5. HAVING: How do I indicate which sets to include?
6. ORDER BY: How should I sort the rows/sets?