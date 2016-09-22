#Wildcards

LIKE compares character strings to strings that include wildcard characters that match anything:

- _ matches any single character
- %   matches any consecutive set of characters

For example:
```
‘b_d’ will match ‘bad’, ‘bed’, but not ‘band’
‘bat%’ will match ‘bat’, ‘bath’, ‘battery’…
```