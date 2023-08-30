# Sequelize "queryInterface" Object Methods

## Creating Tables:

- `createTable`: Used to create a new table in the database with specified columns and their data types.

## Modifying Tables:

- `addColumn`: Adds a new column to an existing table.
- `removeColumn`: Removes a column from an existing table.
- `changeColumn`: Modifies the data type or properties of an existing column.
- `renameColumn`: Renames a column in a table.
- `addConstraint` and `removeConstraint`: Add or remove constraints like foreign keys, unique keys, etc.

## Manipulating Data:

- `bulkInsert`: Inserts multiple rows into a table in a single query.
- `bulkUpdate`: Updates multiple rows in a table with specified values.
- `bulkDelete`: Deletes multiple rows from a table based on a condition.

## Querying Data:

- `select`: Performs a raw SELECT query on the database.
- `findOne`, `findAll`: Finds one or all rows in a table based on specified criteria.
- `count`: Counts the number of rows matching a condition.
- `max`, `min`, `sum`, `avg`: Computes aggregate functions on a column.

## Indexing:

- `addIndex`, `removeIndex`: Adds or removes an index on one or more columns.

## Sequelize-specific Operations:

- `sequelize.query`: Executes a raw SQL query using Sequelize.
- `sequelize.literal`: Represents a literal SQL expression.
