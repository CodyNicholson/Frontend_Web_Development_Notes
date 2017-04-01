# Views

Result of a query can be stored in a view

    CREATE [OR REPLACE] VIEW VNAME AS query;

- Columns can be renamed using AS

- Views can be used like tables in later queries

- Dynamic views are updated each time they are used so that they always reflect the current state of the base table(s)

***

### Updating Views Directly

To update a dynamic view directly, every update must be traceable to a unique update operation in the base table

An update-able view must:

- be defined from just one base table

- not use GROUP BY, DISTINCT, or any aggregate function

- not involve a subquery on the base table

-

If a view is update-able, all updates are allowed by default

- WITH READ ONLY forbids all updates

- WITH CHECK OPTION forbids all updates that would cause a row to be removed from the view

Even if a view is directly update-able, we may not be able to insert new rows to it directly, unless it includes all attributes of the primary key…

***

### Triggers for Modifying Views

If a view cannot be updated or inserted to directly, we can define a trigger to do it

- The trigger fires INSTEAD OF the update or insert operation

- The trigger will modify the base table(s) in such a way that the view will be modified as needed

***

### Materialized Views

Materialized views are stored independently:

    CREATE MATERIALIZED VIEW MVNAME AS query;

Give faster access than default views

Update frequency:

- REFRESH ON COMMIT – end of transaction

- REFRESH ON DEMAND – by procedure call

- NEVER REFRESH
