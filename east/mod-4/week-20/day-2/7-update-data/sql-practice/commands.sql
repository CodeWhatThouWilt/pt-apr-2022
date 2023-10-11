UPDATE friends
SET first_name = 'Ryder'
WHERE id = 1;

UPDATE friends
SET first_name = 'Ryder'
WHERE first_name = 'Ryan' AND last_name = 'Pond';

-- #### BONUS #### --

-- Will cause an error because the first_name column
-- doesn't allow for null
UPDATE friends 
SET first_name = NULL
WHERE id = 5;

-- Will not cause an error
UPDATE friends 
SET first_name = ""
WHERE id = 5;