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
