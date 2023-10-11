UPDATE friends
SET first_name = 'Ryder'
WHERE first_name = 'River' AND last_name = 'Song';

UPDATE friends
SET first_name = 'Ryder'
WHERE id = 5;

UPDATE friends
SET last_name = 'Blue'
WHERE first_name = 'Tyler'
  AND last_name = 'Sky';


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