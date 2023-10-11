----------
-- Step 0 - Create a Query 
----------
-- Query: Select all cats that have a toy with an id of 5

    -- Your code here
    -- SELECT * FROM cats
    -- JOIN cat_toys ON cats.id = cat_toys.cat_id
    -- WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):

-- ┌──────┬─────────┬──────────┬────────────┬───────┬────────┬────────┐
-- │  id  │  name   │  color   │   breed    │  id   │ cat_id │ toy_id │
-- ├──────┼─────────┼──────────┼────────────┼───────┼────────┼────────┤
-- │ 4002 │ Rachele │ Maroon   │ Foldex Cat │ 4509  │ 4002   │ 5      │
-- │ 31   │ Rodger  │ Lavender │ Oregon Rex │ 10008 │ 31     │ 5      │
-- │ 77   │ Jamal   │ Orange   │ Sam Sawet  │ 10051 │ 77     │ 5      │
-- └──────┴─────────┴──────────┴────────────┴───────┴────────┴────────┘


----------
-- Step 1 - Analyze the Query
----------
-- Query:

    -- Your code here
    -- EXPLAIN QUERY PLAN
    -- SELECT * FROM cats
    -- JOIN cat_toys ON cats.id = cat_toys.cat_id
    -- WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):
-- QUERY PLAN
--SCAN cat_toys
--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

-- What do your results mean?

    -- Was this a SEARCH or SCAN?
    -- Scan for cat_toys
    -- Search for cats

    -- What does that mean?
    -- Going through cat_toys with O(n) speeds
    -- Going through cats using an index which means we have O(log n)



----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here
    -- SELECT * FROM cats
    -- JOIN cat_toys ON cats.id = cat_toys.cat_id
    -- WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):
-- Run Time: real 0.001 user 0.000582 sys 0.000000



----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

    -- Your code here
    -- CREATE INDEX idx_cat_toys_cat_id ON cat_toys(cat_id);
    -- CREATE INDEX idx_cat_toys_toy_id ON cat_toys(toy_id);

-- Analyze Query:
    -- Your code here
    -- EXPLAIN QUERY PLAN
    SELECT cats.id, cats.name, cats.color, cats.breed FROM cats
    JOIN cat_toys ON cats.id = cat_toys.cat_id
    WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):
-- QUERY PLAN
|--SEARCH cat_toys USING INDEX idx_cat_toys_toy_id (toy_id=?)
`--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

-- Analyze Results:

    -- Is the new index being applied in this query?




----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here
    -- SELECT * FROM cats
    -- JOIN cat_toys ON cats.id = cat_toys.cat_id
    -- WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):
-- Run Time: real 0.000 user 0.000000 sys 0.000318

-- Analyze Results:
    -- Are you still getting the correct query results?
    -- Yes

    -- Did the execution time improve (decrease)?
    -- Overall increased execution time

    -- Do you see any other opportunities for making this query more efficient?


---------------------------------
-- Notes From Further Exploration
---------------------------------