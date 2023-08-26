-- JOIN statement
-- SELECT toys.id, toys.name FROM cats
-- JOIN toys ON cats.id = toys.cat_id
-- WHERE cats.name = 'Garfield';

-- SELECT id, name FROM toys
-- WHERE cat_id IN (
--     SELECT id FROM cats
--     WHERE name = 'Garfield'
-- );

INSERT INTO toys (name, cat_id)
VALUES
    ('Pepperoni', (
        SELECT id FROM cats
        WHERE name = 'Garfield'
    ));

SELECT id, name FROM toys
WHERE cat_id IN (
    SELECT id FROM cats
    WHERE name = 'Garfield'
);

-------------------- Bonus Phase 1 --------------------

-- Multiple dynamic insert
INSERT INTO toys (name, cat_id)
SELECT 'Cat Bed', id
FROM cats
WHERE birth_year < 2013;

-- Cat Beds and their cat (Subquery)
SELECT toys.name AS toy_name, cats.name AS cat_name
FROM toys
JOIN cats
    ON toys.cat_id = cats.id
WHERE toys.name = 'Cat Bed';

-------------------- Bonus Phase 2 --------------------

-- Backup the cats table
INSERT INTO cats_backup
SELECT * FROM cats;
