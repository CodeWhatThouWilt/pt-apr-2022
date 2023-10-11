# Practice: Inserting Data with Sequelize

In this short practice, you will be using **Sequelize** models to insert data
into a database.

## Getting started

Download starter.

Execute the __setup-commands.sh__ script from the root directory of this
practice.

```shell
sh setup-commands.sh
```

View the contents of the script to see the commands that are executed. View the
results in the terminal to confirm that setup was successful in creating the
following `Puppies` table in your database:

| `id` | `name`   | `ageYrs` | `breed`             | `weightLbs` | `microchipped` |
| ---- | -------- | -------- | ------------------- | ----------- | -------------- |
| 1    | Cooper   | 1        | Miniature Schnauzer | 18          | true           |
| 2    | Indie    | 0.5      | Yorkshire Terrier   | 13          | true           |
| 3    | Kota     | 0.7      | Australian Shepherd | 26          | false          |
| 4    | Zoe      | 0.8      | Korean Jindo        | 32          | true           |
| 5    | Charley  | 1.5      | Basset Hound        | 25          | false          |
| 6    | Ladybird | 0.6      | Labradoodle         | 20          | true           |
| 7    | Callie   | 0.9      | Corgi               | 16          | false          |
| 8    | Jaxson   | 0.4      | Beagle              | 19          | true           |
| 9    | Leinni   | 1        | Miniature Schnauzer | 25          | true           |
| 10   | Max      | 1.6      | German Shepherd     | 65          | false          |

`cd` into the __server__ folder.

Start the development server with `npm run dev` and navigate to `/puppies` to
ensure that application has been initialized correctly. You should see all ten
puppies from the seeder file displayed in the browser.

In this practice you will be utilizing the **Sequelize** `Puppy` to create new
records in the `Puppies` table of the database. You will implement `POST`
route handlers, combining your **Express** and **Sequelize** knowledge to
create new puppies.

## Step 1: Build a new puppy

In __server/script.js__, implement the following code in the _first_ `try/catch`
block. This block of code should utilize the `build` method of your model in
order to create a new instance of a `Puppy`. Use the following attributes for
this instance:

| `name` | `ageYrs` | `weightLbs` | `breed`          | `microchipped` |
| ------ | -------- | ----------- | ---------------- | -------------- |
| Trudy  | 2        | 38          | Brittany Spaniel | false          |

Remember to `save` the instance of the `Puppy` model to the database after it
has been built.

Run `node script.js` in the __server__ folder to run the __server/script.js__ file
which will rebuild, migrate, and seed your database.

Run `sqlite3 db/dev.db` and a SQL query to directly view the `'Puppies'` table
contents.

You can also run `npm test test/01-build-and-save-spec.js` from the __server__
directory to make sure you implemented this step correctly.

## Step 2: Create a new puppy

In __server/script.js__, implement the following code in the _second_ `try/catch`
block. This block of code should utilize the `create` method of your model in
order to create a new instance of a `Puppy`. Use the following attributes for
this instance:

| `name` | `ageYrs` | `weightLbs` | `breed` | `microchipped` |
| ------ | -------- | ----------- | ------- | -------------- |
| Beans  | 1.6      | 42          | Bulldog | true           |

Comment out the code in the first `try/catch` block before running
__server/script.js__ again.

Run `node script.js` in the __server__ folder to run the __server/script.js__ file
which will rebuild, migrate, and seed your database.

Run `sqlite3 db/dev.db` and a SQL query to directly view the `'Puppies'` table
contents.

You can also run `npm test test/02-create-spec.js` from the __server__
directory to make sure you implemented this step correctly.

> Compare the two methods of inserting a new record that you utilized in these
> first two steps. The `create` method calls both the `build` and `save` methods.
> Can you think of a reason why you would want to use `build` over `create` to
> insert information into your SQL database?

## Step 3: Create a `POST` route

In __server/app.js__ there are three endpoints associated with `/puppies`. The
`GET` route has been completed for you. This endpoint allows you to navigate to
`/puppies` in your browser to see the contents of the `Puppies` table. In this
step, you will complete two `POST` routes. This endpoints will accept attributes
from the body of a request and build/create a new `Puppies` record.

Capture the `name`, `ageYrs`, `breed`, `weightLbs`, and `microchipped`
attributes from the body of the request (`req.body`), and use those
values to create a new instance of a `Puppy`. Utilize either of the methods
from the two previous steps.

After the record has been saved to the database, create a JSON response, with a
`message` key indicating that the record was successfully saved, as well as a
`data` key with the newly created `Puppy` as its value.

Test that the build route is working as intended by utilizing Postman. Make a
`POST` request to `/puppies/build` with the following JSON request body:

```json
{
  "name": "George",
  "ageYrs": 1.2,
  "breed": "Bulldog",
  "weightLbs": 40,
  "microchipped": true
}
```

Test that the create route is working as intended by utilizing Postman. Make a
`POST` request to `/puppies/create` with the following JSON request body:

```json
{
  "name": "Fred",
  "ageYrs": 2.1,
  "breed": "Boston Terrier",
  "weightLbs": 20,
  "microchipped": true
}
```

You should get a successful response from making this request. You should also
double-check that the record was saved by making a `GET` request to `/puppies`,
navigating to `http://localhost:8000/puppies` in your browser, or checking
`sqlite3` directly.

Run `npm test test/03-post-spec.js` from the __server__ directory to make sure
you implemented both endpoints properly.

## Congratulations!

You are now able to use **Sequelize** models to insert data into a database.

## Submission

Submit your work.

1. Delete the `node_modules` folder in the __server__ directory
2. Zip up the project folder
3. Submit the zip file
