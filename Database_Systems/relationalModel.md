#Relational Model
-
<br>
First model that separated the logical organization of the data from its physical organization

Model is based on formal logic and the relational algebra

<br><br><br>

Data is stored in two-dimentional tables called relations, each one having a name

Each row is a tuple representing one instance of the entity the table represents

Each column is called an attribute, representing a property for which each instance has a value

Every component in a tuple must have a value taken from its attribute's associated domain
<br>
<br>
Example:
<br>
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
<br>
<br>
<br>
###Properties of Relations
<br>
1. Each relation has a unique name (in database)
2. Each attribute has a unique name (in relation)
3. Each entry of a relation contains a single value from its attribute’s domain (or NULL)
4. The order of the records does not matter
5. The order of the attributes does not matter
6. No two records in a relation are identical
<br>
<br>
<br>
###Relation Schemas vs. Instances
<br>
<br>
The schema of a relation consists of the name of the relation followed by a list of its attributes (domains may be included also…)
<br>
EMPLOYEE ( ID , Name , Dept , Salary ) …
<br>
EMPLOYEE ( ID:number , Name:string , Dept:string , Salary:number ) … ?
<br>
EMPLOYEE ( ID:integer(3) , Name:string(20) , Dept:string(12) , Salary:number(5.2) ) … ?
<br>
<br>
An instance of a relation is a set of tuples, where each tuple contains a value for each attribute (from the associated domain), or perhaps NULL (indicating no value)
<br>
DBMS enforces these “domain constraints”
<br>
Instances are often presented as tables rather than as sets, but the order of the rows in these tables is not significant

<br><br><br>

###Candidate Keys
<br>
A candidate key is a set of attributes for which each tuple in the relation must have a unique set of values (“key constraints”), and for which no subset of the set has this property
<br>
The book calls these just keys, but I will use the more specific term candidate keys since there are different types of keys…
<br>
This property must hold for all possible relation instances for it to be a candidate key

<br><br><br>

###Primary Keys
<br>
One of the candidate keys can be chosen as the primary key for the relation
A relation may have many candidate keys, but can have only one primary key
The primary key will be underlined in the schema
A primary key must not contain any NULL values in any tuple (“entity integrity”)

<br><br><br>

###Foreign Keys
<br>
We link a pair of relations using a shared key that is the primary key in one of the relations
In the referencing relation, this key is called the foreign key (dotted underline in schema)
In every tuple, the foreign key must have a value that is the value of the primary key for some tuple in the referenced relation (“referential integrity”)
The foreign key associates each tuple with exactly one tuple in the referenced relation

<br><br><br>

###Referential Integrity
<br>
Every foreign key value must appear as the value of the primary key in some row of the referenced table
<br>
This restricts the changes that can be made:
<br>
We can add a row containing a foreign key only if the value of the foreign key appears among the values of the referenced primary key
<br>
We can remove a row containing a primary key only if the value of the primary key does not appear among the values of any referencing foreign key

<br><br><br>

###Constraints

<br><br>
All of these will be maintained by the DBMS:
<br>
-Domain constraints: In every tuple, the value of each attribute must come from its specified domain
<br>
-Key constraints: Each tuple must have a unique set of values in each of its candidate keys
<br>
-Entity integrity: No primary key can contain a NULL value in any tuple
<br>
-Referential integrity: Every foreign key value must appear as the value of the primary key in some tuple of the relation it references
<br>
<br>
<br>
###Database Schema vs. Instance
<br><br>

The schema of a relational database consists of:
<br>
The schema of each relation in the database
<br>
Name, list of attributes (and maybe domains)
<br>
Primary keys and foreign keys underlined
<br>
An arrow from each foreign key to the primary key it references

<br><br>
An instance of a relational database consists of:
<br>
An instance of each relation in the database, where each relation instance satisfies all the required constraints:
<br><br>
-domain constraints
<br>
-key constraints
<br>
-entity integrity
<br>
-referential integrity (and any user-defined constraints)
<br><br>

The only changes allowed by the DBMS are those that result in another valid instance…

<br><br><br>

###