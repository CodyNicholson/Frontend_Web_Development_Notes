# Dealing With NULLs

Any arithmetic expression involving a NULL will yield NULL (as will most functions)
To replace NULLs in output, use the function NVL(expr1, expr2)
If expr1 is not NULL, will display expr1
If expr1 is NULL, will display expr2 instead
e.g., SELECT NVL(phone, ‘no phone given’) …

***

Any comparison involving a NULL will yield UNKNOWN
Use IS NULL (not =) to check if a value is NULL
There are extended definitions of AND, OR, and NOT that include UNKNOWN
UNKNOWN will not satisfy a WHERE condition
UNKNOWN will satisfy a CHECK condition
