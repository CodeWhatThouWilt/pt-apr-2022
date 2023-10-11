# Long Practice: SQL Subqueries And Aggregate Functions

In this project, you will be executing SQL commands with subqueries, aggregate
functions or both.

## Set up

`cd` into the __sql-practice__ folder.

Run `npm install` to install the dependencies.

Execute the file __build-cats.sql__ in the terminal to build the `cats`
database, and populate it with seed data.

```shell
sqlite3 cats.db ".read build-cats.sql"
```

## Refresh your memory

Review the schema.

![cat-owners-schema]

Then, run a few queries using the command line (CLI) to see the `cats`,
`owners` and `toys` provided in the seed data. Additionally, you can use
`JOIN` queries to explore their relationships.

## Research

You may find it helpful to output plain text as one of the fields in a query, or
as the entire result of a query. For example, if you run multiple queries in the
same file, you could output something between them to make the results easier to 
read when you execute the file.

Search online for the syntax used to `SELECT` constants in SQL.

## Time saver (optional)

You may find it very helpful to run more than one `.read` command in some of 
your testing. The `sqlite3` shell command will allow this.

Experiment with it now. You can try searching online, but it might be difficult
to find examples. Some trial and error should do the trick. Don't worry if you
aren't able to figure it out at this time. This will only save you 2-5 minutes
for this practice (more later, if you continue to use **SQLite**).


[cat-owners-schema]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/module-04/week-10/practices/sql-2-long-practice/cat-owners-schema.PNG