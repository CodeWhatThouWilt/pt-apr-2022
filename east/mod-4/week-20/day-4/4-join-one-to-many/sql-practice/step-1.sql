-- Step 1
-- JOIN the tables, matching FOREIGN KEYs to the corresponding PRIMARY KEY.
-- Your code here

-- SELECT * FROM table1
-- JOIN table2 ON table1.id = table2.foreignKey

SELECT bands.name, albums.title FROM bands
JOIN albums ON bands.id = albums.band_id;
