# If-Statements & Else & Elsif & Unless

### If-Statements

If-Statements in Ruby take an ***expression**, which is just a fancy word for something that has a value like: 4, true, "Hello there"

If the expression in the If-Statement is true, it executes the code inside the If-Statement

Example:

```ruby
name = "Cody"
if name
    puts "Hi Cody"
end
```

Output:

```
Hi Cody
nil
```

Notice that we have to use **end** to tell Ruby that our If-Statement is done

Also notice that the expression, name, has a value of true since **all string expressions have a value of true by default** and the If-Statement code runs printing "Hi Cody" to the screen

***

### Else

What if our expression is false? Then "Hi Cody" would not be printed to the screen and nothing would happen

If we want something to happen if our expression is false then we need to write an Else-Statement

Example:

```ruby
name = "Cody"
if name == "cody"
    puts "Hi Cody"
else
    puts "You are not Cody"
end
```

Output:

```
You are not Cody
nil
```

Our expression is false, "Cody" is not the same as "cody" so the program runs the else-statement and prints "You are not Cody"

To check if something is the same as something else we use "==" which is called the **comparator**

***

### Elsif

What if you want to check multiple conditions? Then you need to use **Elsif**

Example:

```ruby
if x < y  # Assumes x and y are defined
  puts "x is less than y!"
elsif x > y
  puts "x is greater than y!"
else
  puts "x equals y!"
end
```

This with check the first condition (x < y) and if that is false it will check the second condition (x > y) and if that is false it with run the else statement and end

If **the first condition is true**, it will run the if statement code and none of the other code

If **the second condition is true**, it will run the elsif code and none of the other code

***

### Unless

What if you want to run code if your condition is false? Then you need an **Unless** statement

Example:

```ruby
hungry = false
unless hungry
  puts "I'm writing Ruby programs!"
else
  puts "Time to eat!"
end
```

This program is saying that **unless I am hungry** I am writing Ruby programs, **or else** it is time to eat

***

### Useful Comparators

```
>  - greater than
<  - less than
>= - greater than or equal to
<= - less than or equal to
== - has the same value as
!= - does not have the same value as
```
