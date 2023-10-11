-- Using subqueries, find the names of the cats whose owners are either George Beatty or Melynda Abshire

-- For debugging
SELECT '----- Cats owned by George OR Melynda (1 subquery, 1 JOIN) -----';

--FOR INSTRUCTOR REFERENCE: Replaced 1 JOIN (good, but not best - see below)
SELECT DISTINCT cats.name
from cats
JOIN cat_owners ON cats.id = cat_owners.cat_id
WHERE cat_owners.owner_id IN
(
    SELECT id
    FROM owners
    WHERE
        (first_name = 'George' AND last_name = 'Beatty')
        OR
        (first_name = 'Melynda' AND last_name = 'Abshire')
);

-- For debugging
SELECT '----- Cats owned by George OR Melynda (nested subqueries) -----';

-- BEST SOLUTION
SELECT DISTINCT cats.name
from cats
WHERE id IN
(
    SELECT cat_id
    FROM cat_owners
    WHERE owner_id IN
    (
        SELECT id
        FROM owners
        WHERE
            (first_name = 'George' AND last_name = 'Beatty')
            OR
            (first_name = 'Melynda' AND last_name = 'Abshire')
    )
);