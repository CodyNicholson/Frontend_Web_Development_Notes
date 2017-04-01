# Using The '!' To Change Variables

When you call a string method on a string it will update the string but it will not change the variable

Example:

```ruby
name = "Cody"
puts name.upcase
puts name
```

Output:

```
CODY
Cody
nil
```

Notice that the .upcase method clearly worked on the string "name", but after when we called name it was no longer all caps, **String methods do not change string variables, they display them differently**

-

### Using The !

By using an exclamation point we can make string methods change the variables as seen below:

```ruby
name = "Cody"
puts name.upcase!
puts name
```

Output:

```
CODY
CODY
nil
```
