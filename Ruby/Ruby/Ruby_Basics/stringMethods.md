#String Methods

Since everything in Ruby is an object everything also has built-in methods attached to it. In this tutorial we will explore some of the most useful built-in functions for Strings in Ruby.

***

###.length

The **.length** method will return the number of characters in the string that you call it on

Example:

```ruby
s = "Hello World!"
s.length
```

Output:

```
12
```

***

###.reverse

The **.reverse** method will reverse the characters of the string it is called on

Example:

```ruby
s = "123"
s.reverse
```

Output:

```
"321"
```

***

###.upcase & .downcase

The methods **.upcase** and **.downcase** convert all the characters of a string to uppercase/lowercase

Example:

```ruby
name = "Cody"
puts name.upcase
name.downcase
```

Output:

```
CODY
"cody"
```

Notice that the "name.downcase" returned the string with quotations wrapped around it. This is because we did not use print or puts to display the string, we just left it as "name.downcase"