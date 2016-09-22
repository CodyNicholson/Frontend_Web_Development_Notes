#Database Models:


Older Models:

- File Systems
- Hierarchical
- Network

***

###The Relational Model
-

Newer Models:

- Semi-structures
- Object-relational
- NoSQL

***

###File Systems:
-

Data stored in simple text files, each one possibly having a different fixed organization of its data
<br>
High level of program-data dependence
<br>
Difficult to share data
<br>
Not practical to optimize queries

***

###Hierarchical/Network Models:
-

Hierarchical Model - Data arranged in "parent-child" relationships
<br>
Network Model - Can represent more general relationships among types of data
<br>
Both of these models have similar weaknesses, applications must navigate relationships explicitly, DBMS can not rearrange data to optimize queries

***

###Relational Model:
-

First model to separate the logical structure of the database from its physical structure
<br>
Data are divided into two-dimensional tables called relations
<br>
Tables are linked by shared columns of data
<br>
Rules exist for dividing data among tables
<br>
A standardized query language (SQL) exists

***

###Newer Models:
-

Semi-Structured Databases - XML-based collections of data
<br>
Object-relational databases - Add support for structured data types to relational databases
<br>
Document Databases - Less restrictive structure, typically no fixed schemas
<br>
Data warehouses - Integration of multiple sources of data from different models

***

###Components of a DBMS:
-

> Include picture from book

***

###User Interactions with DBMS:
-

Database - Create database schema, links between tables, constraints
<br>
Query Processing - Request retrival of modification of data ("queries"/"actions")
<br>
Transaction Processing - Execute sets of operations that must each be executed as a unit ("Transactions")

***

###Important DBMS Components
-

Query Processor - Translates user queries into efficient execution plans
<br>
Transaction Processor - Manages concurrent requests to access the database
<br>
File/buffer/storage managers - Control internal storage of the database, schema, and related info

***

###Our Plan:
-

Relational Database Modeling:


- The Relational Model
- Relational Database Design
- Defining Relational Databases

-

Relational Database Implementation:

- SQL Queries and Transactions
- Constraints, Triggers, Views, Indexes
- PL/SQL Programming