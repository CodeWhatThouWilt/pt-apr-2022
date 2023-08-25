DROP TABLE IF EXISTS albums;

CREATE TABLE albums (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(100) NOT NULL,
  band_id INTEGER,
  year INTEGER NOT NULL,
  num_sold INTEGER NOT NULL DEFAULT 0
);

INSERT INTO albums (title, band_id, year, num_sold)
VALUES ('The Falling Box', 1, 2015, 25000),
  ('Again', 1, 2018, 30000),
  ('The End', 1, 2020, 120000),
  ('The Prelude', 2, 2020, 60000),
  ('Bases Loaded', 2, 2021, 75000),
  ('One', 3, 2018, 55000),
  ('Two', 3, 2020, 80000),
  ('Three?', 3, 2021, 17000),
  ('Back To The Middle', 4, 2019, 12000),
  ('Where We Go', 4, 2020, 63000),
  ('The King River', 5, 2017, 85000),
  ('Under Water', 5, 2020, 106000),
  ('Another Fork', 5, 2021, 140000);
  
-- QUERY 1
-- SELECT * FROM albums
-- WHERE num_sold >= 100000;

-- QUERY 2
-- SELECT * FROM albums 
-- WHERE year >= 2018 AND year <= 2020;

-- SELECT * FROM albums
-- WHERE year BETWEEN 2018 AND 2020;

-- QUERY 3
-- SELECT * FROM albums
-- WHERE id = 1
-- OR id = 3 
-- OR id = 4;

SELECT * FROM albums 
WHERE id IN (1,3,4);


-- EXTRA STUFF
-- OFFSET / LIMIT
-- ORDER BY 

-- SELECT * FROM albums 
-- ORDER BY num_sold DESC
-- LIMIT 10
-- OFFSET 3;


