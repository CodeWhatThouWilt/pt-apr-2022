# Advanced Phase 1: Dynamic INSERTion

Write a series of `INSERT` statements to create a new cat 

* Named "Red"
* Born this year
* Owned by George Beatty

Also, write a `SELECT` statement to verify the insertions worked properly.

Do NOT hard-code any `id`s in these statements. Instead, use a subquery for each
`id` you need to set as the value for a foreign key column.

> HINT: After creating the `cat`, write the subqueries for foreign keys 
> separately before you try to use them to establish the `cat_owners` 
> relationship.

This work should be completed in _sql-practice/phase-1.sql_. Run this file after
re-running the database build each time.