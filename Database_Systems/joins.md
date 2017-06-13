# Joins

Data that is distributed among multiple tables can be combined into a single set of tuples for use in a query using different types of joins:

- Inner joins (equi-join, natural join)

- Outer joins (left, right, full)

***

### Cartesian Product

What if we list two tables in the FROM?

The tuples in the result come from combining all pairs of tuples from the two tables – the Cartesian Product of the tables
(This is sometimes called the “cross join”…)

This is almost certainly more tuples than we want – most combinations are meaningless!

***

### Equi-Joins

An equi-join keeps only those tuples where the two combined tuples agree on the shared attribute(s):

…FROM TABLE1, TABLE2
WHERE
TABLE1.Attribute = TABLE2.Attribute;

***

### Natural Joins

Like an equi-join, but one of the duplicated columns is removed (the most common join):

SELECT all but the duplicated attribute(s)
FROM TABLE1, TABLE2
WHERE
TABLE1.Attribute = TABLE2.Attribute;

***

### Inner Joins

These are both examples of inner joins

In an inner join, the Cartesian Product is restricted to only include the combined tuples that satisfy some condition

Condition is usually equality in some shared key
e.g., equi-joins, natural joins

***

Rather than list of tables in the FROM and a WHERE condition, can use just:

FROM TABLE1 INNER JOIN TABLE2 ON condition;

For the special case of natural joins, might have the shortcut:

FROM TABLE1 NATURAL JOIN TABLE 2

***

### Join Example

COURSE (CourseNumber, CourseName)
SECTION(SectionID, CourseNumber, SectionNumber)
ENROLLMENT(StudentID, SectionID)
STUDENT(StudentID, FirstName, LastName)

***

### Table Aliases

Can give alternate names to tables in FROM
FROM TABLE1 T1 INNER JOIN TABLE2 T2
ON condition;
Can use aliases T1 and T2 anywhere in query
Useful in joins if table names are long…

***

### Inner Joins vs. Outer Joins

An inner join requires that tuples in the tables satisfy some condition to create a tuple in the result.

An outer join does not: a tuple in the result may be either

The combination of two tuples that satisfy the condition (matching tuple)

A tuple that does not match anything, combined with an all-NULL tuple (non-matching tuple)

***

### Left Outer

Includes all matching tuples, plus a tuple for each tuple in the first table that has no match

… TABLE1 LEFT OUTER JOIN TABLE2 ON TABLE1.Attribute = TABLE2.Attribute;

### Right Outer Join

Includes all matching tuples, plus a tuple for each tuple in the second table that has no match

… TABLE1 RIGHT OUTER JOIN TABLE2 ON TABLE1.Attribute = TABLE2.Attribute;

### Full Outer Join

Includes all matching tuples, plus a tuple for each tuple in either table that has no match

… TABLE1 FULL OUTER JOIN TABLE2 ON TABLE1.Attribute = TABLE2.Attribute;

***

### Join Query Examples

Give the names of all students that have enrolled in any CSC course

SELECT DISTINCT FirstName, LastName
    FROM STUDENT JOIN ENROLLED JOIN COURSETABLE
    WHERE Dept = ComputerSci;

***

Give the ID numbers of all students who have not enrolled in any classes

SELECT SID
    FROM STUDENT LEFT OUTER JOIN ENROLLED ON SID=StudentID
    WHERE CourseID IS NULL;

***

Give the names of all students who are the president of a student group

SELECT StudentName
    FROM STUDENT WHERE StudentRole = President;

***

Give the names of all members of HerCTI

***

Give the names of all courses that Angelo Krol has enrolled in
