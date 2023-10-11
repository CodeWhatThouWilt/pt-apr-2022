-- Find the name of the cats co-owned by both George Beatty and Melynda Abshire

-- For debugging
SELECT '----- Cats co-owned by George and Melynda -----';

-- SOLUTION
SELECT name
FROM cats
WHERE id IN
(
    SELECT cat_id
    FROM cat_owners
    WHERE owner_id =
    (
        SELECT id
        FROM owners
        WHERE first_name = 'George' AND last_name = 'Beatty'
    )
)
AND id IN
(
    SELECT cat_id
    FROM cat_owners
    WHERE owner_id =
    (
        SELECT id
        FROM owners
        WHERE first_name = 'Melynda' AND last_name = 'Abshire'
    )
);