----------
-- Step 0 - Create a Query 
----------
-- Query: Select all cats that have a toy with an id of 5

    -- Your code here
    -- SELECT * FROM cats
    -- JOIN cat_toys ON cats.id = cat_toys.cat_id
    -- JOIN toys ON toys.id = cat_toys.toy_id
    -- WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):
-- ┌──────┬─────────┬──────────┬────────────┬───────┬────────┬────────┬────┬─────────────┬───────┬───────┐
-- │  id  │  name   │  color   │   breed    │  id   │ cat_id │ toy_id │ id │    name     │ color │ price │
-- ├──────┼─────────┼──────────┼────────────┼───────┼────────┼────────┼────┼─────────────┼───────┼───────┤
-- │ 4002 │ Rachele │ Maroon   │ Foldex Cat │ 4509  │ 4002   │ 5      │ 5  │ Shiny Mouse │ Blue  │ 7     │
-- │ 31   │ Rodger  │ Lavender │ Oregon Rex │ 10008 │ 31     │ 5      │ 5  │ Shiny Mouse │ Blue  │ 7     │
-- │ 77   │ Jamal   │ Orange   │ Sam Sawet  │ 10051 │ 77     │ 5      │ 5  │ Shiny Mouse │ Blue  │ 7     │
-- └──────┴─────────┴──────────┴────────────┴───────┴────────┴────────┴────┴─────────────┴───────┴───────┘



----------
-- Step 1 - Analyze the Query
----------
-- Query:

    -- Your code here
    -- EXPLAIN QUERY PLAN
    -- SELECT * FROM cats
    -- JOIN cat_toys ON cats.id = cat_toys.cat_id
    -- JOIN toys ON toys.id = cat_toys.toy_id
    -- WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):
-- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
-- |--SCAN cat_toys
-- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)
-- sqlite> 

-- What do your results mean?
-- We are using a mixture of searches and scans

    -- Was this a SEARCH or SCAN?
    -- A combo of both search and scan

    -- What does that mean?
    -- It means that there's potentially room for improvement
    -- by adding an index



----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here
    -- SELECT * FROM cats
    -- JOIN cat_toys ON cats.id = cat_toys.cat_id
    -- JOIN toys ON toys.id = cat_toys.toy_id
    -- WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):
-- Run Time: real 0.001 user 0.000000 sys 0.000567



----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

    -- Your code here
    -- CREATE INDEX idx_cat_toys_toy_id ON cat_toys(toy_id);
    

-- Analyze Query:
    -- Your code here
    -- EXPLAIN QUERY PLAN
    -- SELECT * FROM cats
    -- JOIN cat_toys ON cats.id = cat_toys.cat_id
    -- JOIN toys ON toys.id = cat_toys.toy_id
    -- WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):
-- QUERY PLAN
-- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
-- |--SEARCH cat_toys USING INDEX yake_index_lets_goooooooo (toy_id=?)
-- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

-- Analyze Results:

    -- Is the new index being applied in this query?
    -- Yes it is



----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here
    -- SELECT * FROM cats
    -- JOIN cat_toys ON cats.id = cat_toys.cat_id
    -- JOIN toys ON toys.id = cat_toys.toy_id
    -- WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):
    -- Run Time: real 0.000 user 0.000000 sys 0.000151

-- Analyze Results:
    -- Are you still getting the correct query results?
    -- Yes

    -- Did the execution time improve (decrease)?
    -- Yes it did

    -- Do you see any other opportunities for making this query more efficient?
    -- SELECT * FROM cats
    -- JOIN cat_toys ON cats.id = cat_toys.cat_id
    -- WHERE cat_toys.toy_id = 5;

---------------------------------
-- Notes From Further Exploration
---------------------------------