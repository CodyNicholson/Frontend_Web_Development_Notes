# Getting User Input

To get user input we use **.get**

Example:

```ruby
varToStoreInput = gets
```

Output if you entered "Test Input":

```
"Test Input\n"
```

Notice there is a "\n" that we did not originally include

To fix this we can use:

```ruby
varToStoreInput = gets.chomp
```

Output with "Test Input":

```
"Test Input"
```
