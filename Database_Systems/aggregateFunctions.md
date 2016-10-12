#Aggregate Functions

Given an attribute, an aggregate function takes the values of that attribute in the set of returned tuples and computes a single value from them

COUNT(…): Number of non-NULL values

SUM(…): Sum of the values

AVG(…): Average of the values

MIN(…): Smallest of the values

MAX(…): Largest of the values

***

###Group By
-

… GROUP BY grouping attributes …

- Combines the tuples into sets based on the value(s) of some attribute(s)
- Can only display the value(s) of this attribute(s) and/or aggregate information for each group
- If we group tuples into sets, we cannot look at the values in the individual tuples anymore…

-

Example:

SELECT SUM(Hours) FROM TABLENAME WHERE Project = 2;

// This will get the sum of the Hours for Project 2

SELECT Project, COUNT(*), SUM(Hours) FROM TABLENAME GROUP BY Project ORDER BY COUNT(*);

SELECT Dept, MAX(Salary) FROM WORKERS GROUP BY Dept HAVING MAX(Salary) >= 75000 ORDER BY Dept;

SELECT Dept, round(AVG(Salary),2) FROM WORKERS GROUP BY Dept ORDER BY AVG(Salary) DESC;

// Compute Average salary of each Dept
