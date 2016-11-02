#PL/SQL

PL/SQL is Oracle’s version of  the SQL/PSM (“Persistent Stored Modules”) standard

PL/SQL is a procedural programming language that includes SQL – it can:

- create and issue SQL statements

- store and process the results of queries

- define triggers to respond to database events, as well as other named procedures and functions

***

###Database Programming in PL/SQL

Three places PL/SQL code can go:

1. Within a trigger that is executed in response to database events

2. Within a procedure or function that is executed when called by name

3. Within an anonymous block that is executed directly by a user

***

###Anonymous Block

Will be executed directly, like an SQL script:

```
    declare
           -- variable and subprogram declarations
    begin
           -- PL/SQL statements to execute
           -- each statement must end with a semicolon
    exception
           -- exception handling (optional)
    end;
    /
```

***

###Output

To display output:

- dbms_output.put_line(string);

Output buffer displayed in DBMS Output tab

- Use View -> Dbms Output and ‘+’ to open tab

Concatenation of strings uses ||

***

###Declaring Variables

All variables must be declared:

```
varName dataType [:= initialValue];
```

SQL data types are available (e.g., number, char, varchar2), plus binary_integer and boolean

Assignments use :=, and PL/SQL has typical arithmetic operations

-

Only one variable can be declared per line, but variable types can be given in terms of the domain of another variable or attribute:

```
varName otherVar%type;
varName TABLE.Attribute%type;
```

Can use substitution variables (e.g., &X) to prompt user for values

***

###Branching

if-then:

```
if condition then
        …’true’ statements…
end if;
```

-

if-else:

```
if condition then
    …’true’ statements…
els
    …’false’ statements…
end if;
```

-

if-elsif:

```
if condition1 then
    … ‘t’ statements…
elsif condition2 then
    … ‘f-t’ statements…
elsif condition3 then
    … ‘f-f-t’ statements…
(… as many times as needed…)
else
    … ‘all f’ statements…
end if;
```

-

Case:

```
case variable
when value1 then
    … ‘value1’ statements…
when value2 then
    … ‘value2’ statements…
(… as many times as needed…)
else
   … ‘nomatch’ statements…
end case;
```

***

###Loops


General loop:

```
loop
    …loop body…
end loop;
```

Repeats until exit; is executed in loop body

-

While loop:

```
while condition loop
   …loop body…
end loop;
```

Repeats until condition is false

-

For loop:

```
for variable in [reverse] lower..upper loop
        …loop body…
end loop;
```

Can only increment/decrement by one

lower always appears before upper in header

***

###Incorporating SQL Queries

Result of a query can be stored in a set of variables by adding INTO clause to query

Variable types must match attribute types

Query must return a single record

```
SELECT list of attributes
INTO list of variables
FROM list of tables
…
```

***

##Cursors

A cursor represents a pointer into a set of records returned by a query

```
cursor name is query;
```

Cursor name can be used to iterate through the records returned by query

-

###Cursor Commands/Expressions

```
open name;
    -- initializes to beginning of set

fetch name into variableList;
    -- reads the next record into the variables

close name;
    -- closes the cursor

name%found
    -- true if last call to fetch succeeded

name%rowcount
    -- number of records successfully fetched
```

***

###Parameterized Cursors

Can supply a parameter in cursor declaration and query

```
cursor name (parameter in type) is query;
```

Each time cursor is opened, a value of the parameter must be specified in parentheses to complete the query

***

###Records

Can declare a record with the same structure as a table row (fields are table attributes):

```
recordName TABLE%rowtype;
```

Can select a row of a table directly into a record, and access individual fields with

```
recordName.Attribute
```

***

###Cursor For Loop

To iterate through all of the rows returned by a query:

```
for recordName in cursorName
    …loop body…
end loop;
```

The needed record must be declared, but open/fetch/close can be omitted in this loop

***

###Procedures

```
CREATE [OR REPLACE] PROCEDURE name
  (paramName IN [OUT] paramType …) AS
  …declarations…
    BEGIN
        …body of procedure…
END;
/
```

‘IN’ parameters are passed by value, for input only…

‘IN OUT’ parameters are passed by reference, to return results…

***

###Functions

```
CREATE [OR REPLACE] FUNCTION
  name  (paramName IN paramType …)
  RETURN returnType AS …declarations…
BEGIN
    …body of function…
    return returnValue;
END;
/
```

No ‘OUT’ parameters, only ‘IN’ parameters

Specify return type and return value instead

***

###Review Oracle Trigger Syntax

```
CREATE [OR REPLACE] TRIGGER Name
  BEFORE/AFTER INSERT OR DELETE OR UPDATE [OF Attribute]
  ON Table
[REFERENCING
        OLD AS OldName
        NEW AS NewName]
[FOR EACH ROW]
[WHEN (condition)]
BEGIN
    PL/SQL statements
END;
/
```