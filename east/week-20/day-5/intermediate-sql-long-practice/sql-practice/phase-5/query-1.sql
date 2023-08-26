-- Find the first owner that has a last name containing the lowercase letter "r"
-- Your code here
SELECT *
FROM owners
WHERE
    owners.last_name LIKE '%r%'
LIMIT 1;