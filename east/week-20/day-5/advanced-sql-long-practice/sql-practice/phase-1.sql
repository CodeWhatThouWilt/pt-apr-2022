--Insert new cat named "Red" born this year
INSERT INTO cats
(name, birth_year)
VALUES
('Red', 2021);

--Assign ownership of new cat to George Beatty using subqueries
INSERT INTO cat_owners
(cat_id, owner_id)
VALUES
(
    (
        SELECT id AS cat_id
        FROM cats
        WHERE name = 'Red'
    ),
    (
        SELECT id AS owner_id
        FROM owners
        WHERE first_name = 'George' AND last_name = 'Beatty'
    )
);

--Query to verify INSERTs worked properly

--For debugging (optional)
SELECT '----- All cats and their owners after both INSERTs -----';

--Simple solution (not the only possibility)
SELECT cats.name, owners.first_name, owners.last_name
FROM cats
JOIN cat_owners ON cat_owners.cat_id = cats.id
JOIN owners ON owners.id = cat_owners.owner_id;
