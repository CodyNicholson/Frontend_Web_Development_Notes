#Database Storage

Typically, each table is stored in a separate file on the disk

Each file consists of a collection of records, each corresponding to one row of the table

Each record consists of a collection of fields, each corresponding to one attribute of the table

-

Each table is stored in a separate file, where each file is of a collection of n records that represent the rows

- Unordered file: No guarantee on the order of the records

- Ordered file: Records are stored in order according to the value of some field(s)

***

###Unordered Files

#####No particular order maintained on the records

Insertions done at the end of the file (O(1))

Deletions can be done efficiently also (O(1))

- move last element in file to replace deleted element

Searching for a record needs linear search (O(n))

- n/2 records read on average, n in worst case

Updating a record may be costly also (O(n))

- O(1) if you do not have to search for the record

***

###Ordered Files

Records are stored in order based on the value of an ordering field

- Searches are faster, using binary search

    - O(log n) steps in worst case, for ordering field only

    - No benefit for accesses on other fields (O(n))

- Inserts, deletes, and updates are slower in the worst case, since order must be maintained (O(n))

Oracle does not support ordered files, but some other DBMSs do
