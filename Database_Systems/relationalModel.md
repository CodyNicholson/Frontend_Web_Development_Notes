#Relational Model
-

First model that separated the logical organization of the data from its physical organization

Model is based on formal logic and the relational algebra

***

As a data model, the relational model must describe three things about stored data:

Structure of the data: A collection of linked two-dimensional tables

Operations on the data: Described by SQL statements

Constraints on the data: Domain, key, entity integrity, referential integrity, check … what else?

***

Data is stored in two-dimentional tables called relations, each one having a name

Each row is a tuple representing one instance of the entity the table represents

Each column is called an attribute, representing a property for which each instance has a value

Every component in a tuple must have a value taken from its attribute's associated domain

Example:

'''
Name: EMPLOYEE
Tuples: { (100, ‘Margaret Simpson’, ‘Marketing’, 48,000) ,
(140, ‘Allen Beeton’, ‘Accounting’, 52,000.00) ,
(110, ‘Chris Lucero’, ‘Info Systems’, 43,000.00) ,
…and three more… }
Attributes: ID, Name, Dept, Salary
Domains: (Three-digit) integer, string (of length at most 20), string (of length at most 12), decimal number (with at most five digits to the left of the decimal point and two to the right)
Note that domains can be a little complicated to describe...
'''

***

###Properties of Relations

1. Each relation has a unique name (in database)

2. Each attribute has a unique name (in relation)

3. Each entry of a relation contains a single value from its attribute’s domain (or NULL)

4. The order of the records does not matter

5. The order of the attributes does not matter

6. No two records in a relation are identical

***

##Relational Model Constraints

####Built-in constraints in the relational model:

- Domain constraints

    - Created by definitions of attributes and their domains

- Key constraints

    - Created by uses of UNIQUE and PRIMARY KEY

- Entity integrity

    - Created by uses of PRIMARY KEY

- Referential integrity

    - Created by uses of FOREIGN KEY … REFERENCES

***

###Check Constraints

User-defined, verified when a tuple is added or updated

Attribute-level:

- CHECK within an attribute, can only involve that attribute

- Verified when a tuple is updated in that attribute

Tuple-level:

- A separate CONSTRAINT, can involve any attributes

- Verified when a tuple is updated in any attribute


***

#Working with Constraints

Give constraints names when creating them

Add or remove with ALTER TABLE …

- ADD CONSTRAINT …

- DROP CONSTRAINT Name …

Make constraint DEFERRABLE, then …

- …INITIALLY DEFERRED

- SET CONSTRAINT Name DEFERRED

***

###Referential Integrity Violations

Default is to cancel the violating operation

ON DELETE …

- SET NULL: If primary key record is deleted, set foreign keys referencing that record to NULL

- CASCADE: If primary key record is deleted, delete any records with foreign keys referencing it

ON UPDATE …

- SET NULL and CASCADE (but not in Oracle)

***

###Assertions

An assertion is a condition that cannot be false for any state of the database

- (if deferred, just at the end of any transaction…)

Can involve any tables in the database

```
    CREATE ASSERTION SalaryCap CHECK
    ( 1000000 >=
        (SELECT SUM(Salary) FROM WORKER) );
```

Assertions are not supported by major DBMSs

***

###Relation Schemas vs. Instances

The schema of a relation consists of the name of the relation followed by a list of its attributes (domains may be included also…)

EMPLOYEE ( ID , Name , Dept , Salary ) …

EMPLOYEE ( ID:number , Name:string , Dept:string , Salary:number ) … ?

EMPLOYEE ( ID:integer(3) , Name:string(20) , Dept:string(12) , Salary:number(5.2) ) … ?

An instance of a relation is a set of tuples, where each tuple contains a value for each attribute (from the associated domain), or perhaps NULL (indicating no value)

DBMS enforces these “domain constraints”

Instances are often presented as tables rather than as sets, but the order of the rows in these tables is not significant

***

###Candidate Keys

A candidate key is a set of attributes for which each tuple in the relation must have a unique set of values (“key constraints”), and for which no subset of the set has this property

The book calls these just keys, but I will use the more specific term candidate keys since there are different types of keys…

This property must hold for all possible relation instances for it to be a candidate key

***

###Primary Keys

One of the candidate keys can be chosen as the primary key for the relation

A relation may have many candidate keys, but can have only one primary key

The primary key will be underlined in the schema

A primary key must not contain any NULL values in any tuple (“entity integrity”)

***

###Foreign Keys

We link a pair of relations using a shared key that is the primary key in one of the relations

In the referencing relation, this key is called the foreign key (dotted underline in schema)

In every tuple, the foreign key must have a value that is the value of the primary key for some tuple in the referenced relation (“referential integrity”)

The foreign key associates each tuple with exactly one tuple in the referenced relation

***

###Referential Integrity

Every foreign key value must appear as the value of the primary key in some row of the referenced table

This restricts the changes that can be made:

We can add a row containing a foreign key only if the value of the foreign key appears among the values of the referenced primary key

We can remove a row containing a primary key only if the value of the primary key does not appear among the values of any referencing foreign key

***

###Constraints

All of these will be maintained by the DBMS:

-Domain constraints: In every tuple, the value of each attribute must come from its specified domain

-Key constraints: Each tuple must have a unique set of values in each of its candidate keys

-Entity integrity: No primary key can contain a NULL value in any tuple

-Referential integrity: Every foreign key value must appear as the value of the primary key in some tuple of the relation it references

***

###Database Schema vs. Instance

The schema of a relational database consists of:

The schema of each relation in the database

Name, list of attributes (and maybe domains)

Primary keys and foreign keys underlined

An arrow from each foreign key to the primary key it references

An instance of a relational database consists of:

An instance of each relation in the database, where each relation instance satisfies all the required constraints:

-domain constraints

-key constraints

-entity integrity

-referential integrity (and any user-defined constraints)

-

The only changes allowed by the DBMS are those that result in another valid instance…
