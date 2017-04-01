# Indexes

An index is an auxiliary data structure constructed to speed up accesses to a data file

An index is associated with a particular indexing field

An index is stored in a separate index file

- Typically much smaller than the data file

***

### Benefits of Indexes

Indexes can speed up various file operations

- Accessing records according to the indexing field

- Computing queries ordered or grouped by the indexing field

- Computing queries conditioned on a range of values of the indexing field

- Computing joins where tables have a common indexing field

***

### Drawbacks of Indexes

Space to store the index file

- Not a major concern for most indexes

Time to maintain the index file

- A greater concern – index file may have to be modified every time a record is inserted, deleted, or updated

***

### B-Tree

Frequently used to implement indexes

- Leaves contain values of indexing field, in ascending order; all leaves are at the same level

- Each leaf stores one value and a pointer to a block in the data file

- Each internal node stores pointers to 2 or 3 children

- An internal node with q pointers stores q-1 values representing largest values in its first q-1 subtrees

***

### Performance Comparison

|               |   Unordered   | Ordered |Unordered w/ Index|
| ------------- |:-------------:|:-------:|:----------------:|
| INSERT        | O(1)          |  O(n)   | O(log n)         |
| DELETE        | O(1)          |  O(n)   | O(log n)         |
| UPDATE        | O(1)          |  O(n)   | O(log n)         |
| Search        | O(n)          | O(log n)| O(log n)         |
| Extra Space   | none          | none    | O(n)             |

***

### Files and Indexes in Oracle SQL

Tables are by default unordered files

Indexes will be created for any attributes with UNIQUE or PRIMARY KEY constraints

Can create indexes on other attributes with

```
CREATE INDEX INDEXNAME
     ON TABLENAME(Attribute);
```

-0

Can also create index-organized tables (with an index defined on the primary key), where data is actually stored within the index

```
CREATE TABLE TABLENAME
(
    …declare table, with primary key…
)
ORGANIZATION INDEX;
```
