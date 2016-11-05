#Boolean Operators

The three boolean operators we will be discussing are: And, Or, and Not

***

###And (&&)

Example:

```ruby
1<2 && 3>4
```

The above code will return false because the first condition (1<2) is true, but the second condition (3>4) is false

And requires that both conditionals be true for the entire conditional to be true

***

###Or (||)

Example:

```ruby
1<2 && 3>4
```

The above code will return true because **Or only requires one of the two conditionals to be true**, and (1<2) is true

***

###Not (!)

Example:

```ruby
3 != 4    # 3 does not equal 4 - this is true
!(3 == 4) # The conditional "3 is the same as 4" is not true - this is true
!(6 == 6) # The conditional " 6 is the same as 6" is not true - this is false
```

Using "!" you can check if expressions or conditionals are false, and return true if they are false