# Advanced Phase 4: INSERT Multiple Rows, Order By Aggregate

This is the most challenging of the challenging SQL practices. If you've made it
this far, you have what it takes to complete these tasks as well! When you get 
to the project weeks, you'll be glad you did!!

You will want to put your SQL statements into __sql-practice/phase-4.sql__, and 
rerun the database build for your statements each time you test changes.

## Dynamically `INSERT` Multiple Rows

Write an `INSERT` statement to give "Red" the cat one of every toy the other 
cats have. 

> Hint: A simple query will give you the `name` value for each new toy. 

Use a subquery to set the value of the `cat_id` foreign key.

> Hint: The cat's id is the same each time.

If you are seeing syntax errors, double check the documentation on how to set
the `VALUES` (and whether to include the keyword and/or parentheses, etc.).

## `ORDER BY` An Aggregate Function

Query for spoiled cats (meaning those with two or more toys) reporting the 
most-spoiled cat at the top of the list.

> Hint: It is helpful to list the cat's names, and the number of toys in the
> results to confirm the ordering is correct.