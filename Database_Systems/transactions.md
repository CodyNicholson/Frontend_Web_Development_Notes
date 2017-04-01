# Transactions

A transaction is a collection of SQL statements that must be executed as a unit

The Transaction manager in the DBMS must handle

- Interruptions: Logging and recovery, log pages

- Concurrency: Concurrency control, Lock tables

![alt tag](https://github.com/Cody-Nicholson96/Web_Development/blob/master/Database_Systems/pics/componentsOfDBMS.jpg)

***

### ACID Properties
-

Transactions should satisfy the following properties:

- Atomicity: Execute completely or not at all

- Consistency: Satisfy all database constraints

- Isolation: Execute “separately” from others

- Durability: Once executed, results are permanent

***

#### Atomicity

Transaction operations are kept in a local store, not applied to database immediately

- Transaction can see its own changes, others can’t

When transaction is completed, results are “committed” to the database in their entirety

Partial results can be “rolled back” before completion (by user or by system)

***

#### Durability

Committing changes also insures durability

- Once results are committed to the database, they are permanent, and cannot be rolled back

***

####Consistency

As long as legal SQL is used, the DBMS will insure that database constraints are satisfied

- Constraints can be “deferred”, so that they are only checked when the transaction commits

    - Add DEFERRABLE INITIALLY DEFERRED (or   IMMEDIATE) to end of constraint definition

    - Change later with SET CONSTRAINT Name   DEFERRED (or IMMEDIATE)

    - If constraint is violated, transaction is rolled back

***

#### Isolation

Must maintain separation among transactions that access data concurrently

- Several different levels of isolation

- Tradeoffs of  data integrity vs. performance

- Transactions might read or modify data

-

#### Serialize-able Isolation

Transactions must behave as though they were run serially (first one, then the other)

DBMS can “lock” all tables used by a transaction

- Transactions using the same tables would have to wait until they were released

- Transactions using other tables could run at the same time

-

#### Read Committed Isolation

Not as strict as serialize-able

If one transaction tries to read data that was written by another, it can only see changes that have been committed

- Can’t be rolled back, but could be changed later

- Multiple queries of the same table might not yield the same results...

This isolation level allows:

- Phantoms: Tuples may be added to query results while the transaction is running

- Non-repeatable reads: Tuples may be added to or removed from query results while the transaction is running

Stricter “Repeatable Read” level allows phantoms, but not other non-repeatable reads

***

### Read Uncommitted Isolation
-

What about uncommitted changes?

Reads of uncommitted changes from another transaction are called dirty reads

- They could be rolled back later, in which case we shouldn’t even have known about them…

“Read uncommitted” level allows dirty reads

- Some are more dangerous than others!

***

### Isolation Levels
-

**SERIALIZABLE:** Transactions must appear to run serially – cannot read any changes from others

**REPEATABLE READ:** Can read committed changes that only add data (allows phantoms)

**READ COMMITTED:** Can read all committed changes (allows phantoms, non-repeatable reads)

**READ UNCOMMITTED:** Can read all changes (allows phantoms, non-repeatable reads, dirty reads)

***

### Transactions in Oracle
-

Supports READ COMMITTED (by default) and SERIALIZABLE isolation levels only

- (Can have READ WRITE (by default) and READ ONLY transactions…)

SET TRANSACTION to start transaction, COMMIT or ROLLBACK to end

- SQL statements that modify data start an implicit transaction; use COMMIT to end it
