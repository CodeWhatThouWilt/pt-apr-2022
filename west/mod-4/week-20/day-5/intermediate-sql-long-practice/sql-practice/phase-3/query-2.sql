-- Find All the Toys for Hermione's cats
-- Your code here
-- Three JOINs
-- SELECT toys.name
-- FROM toys
-- JOIN cats ON (toys.cat_id = cats.id)
-- JOIN cat_owners ON (cats.id = cat_owners.cat_id)
-- JOIN owners ON (cat_owners.owner_id = owners.id)
-- WHERE
--     owners.first_name = 'Hermione';

-- Two JOINs
SELECT toys.name
FROM toys
JOIN cat_owners ON (cat_owners.cat_id = toys.cat_id)
JOIN owners ON (owners.id = cat_owners.owner_id)
WHERE
    owners.first_name = 'Hermione';