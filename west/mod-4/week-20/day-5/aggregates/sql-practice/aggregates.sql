-- SELECT * FROM cats;
-- SELECT * FROM toys;

-- SELECT * FROM cats
-- JOIN toys ON cats.id = toys.cat_id;

-- Common aggregate functions MIN() MAX() SUM() COUNT() AVG()

SELECT COUNT(*) FROM cats;

SELECT name, MIN(birth_year) AS year FROM cats;

SELECT name, MAX(birth_year) FROM cats;

-- SELECT name, MIN(birth_year), MAX(birth_year)  FROM cats;

----------
-- BONUS Step 1
----------

-- Number of toys per cat
SELECT cats.name, COUNT(toys.id) AS toy_count
FROM toys
JOIN cats ON cats.id = toys.cat_id
GROUP BY toys.cat_id;

----------
-- BONUS Step 2
----------

-- Cats "spoiled" with two or more toys
SELECT cats.name, COUNT(toys.id) AS toy_count
FROM toys
JOIN cats ON cats.id = toys.cat_id
GROUP BY cat_id
HAVING toy_count >= 2;