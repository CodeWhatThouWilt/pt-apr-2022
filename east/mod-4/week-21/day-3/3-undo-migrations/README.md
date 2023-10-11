# Practice: Undoing Migrations in Sequelize

In this short practice, you will be using **Sequelize** to practice undoing and 
redoing migrations.

## Getting started

Download starter.

Execute the __setup-commands.sh__ script from the root directory of this
practice. View the contents of the script to see the commands that are executed,
and view the results in the terminal to confirm that setup was successful.

```shell
sh setup-commands.sh
```

The Express routes for this practice will not yield results from a database but
are included in order to demonstrate how to initialize Sequelize with an 
existing server. This can be seen from the plaintext responses given by these 
routes.

In future practices you will utilize routes in order to interact with a 
connected database.


## Step 1: Run migration files

Take a look at the __migrations__ directory. There are currently five migration 
files.

In the terminal, use `sequelize-cli` to migrate the tables defined for you in 
the migration files using the following command:

```powershell
npx dotenv sequelize db:migrate
```

When this step is completed you have a database file created. Verify that the 
tables specified in these files have been created using `sqlite3` in the 
terminal.


## Step 2: Undo a single migration

Use `sequelize-cli` to undo the most recent migration using the command:

```powershell
npx dotenv sequelize db:migrate:undo
```

Verify that the `down` function specified in the last migration file has been 
executed by making sure that the table no longer exists in your database.


## Step 3: Redo the migrations that have been undone

Use `sequelize-cli` to run the migrations. By default, each migration that has 
not been run will be executed.

Verify that the `up` functions in each of the migrations have been executed by 
making sure that each of the tables now exist again within your database.


## Step 4: Undo all migrations

Use `sequelize-cli` to undo all migrations using the command:

```powershell
npx dotenv sequelize db:migrate:undo:all
```

Verify that the `down` functions in each of the undone migrations have been 
executed by making sure that each of these tables no longer exists in your 
database.

## Step 5: Research task - Undo migrations to a specific file

What if you wanted to undo migrations to a specific migration file instead of
undoing just the last migration or all migrations?

Research how to undo up to the `20211008225902-create-cats.js` migration in one
command using the Sequelize docs. **IMPORTANT NOTE**: You will need to refer to
the `dotenv-cli` docs on [how to add flags to an underlying dotenv-cli command].

```diff
    20211008201504-create-color.js
    20211008225744-create-shapes.js
-   20211008225902-create-cats.js
-   20211008225940-create-users.js
-   20211008225957-create-games.js
```
After you run the command, the `create-games`, `create-users`, and `create-cats`
migrations should be undone, and the `create-color` and `create-shapes` should be the
only migrations still committed.
Make sure all the migrations have been committed before running the command to
make sure the command is working.


## Congratulations!

You are now able to undo and redo migrations with **Sequelize**.

[how to add flags to an underlying dotenv-cli command]: https://www.npmjs.com/package/dotenv-cli#flags-to-the-underlying-command
