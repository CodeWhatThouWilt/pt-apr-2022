CREATE TABLE puppies (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50),
    age_yrs DECIMAL(3,1),
    breed VARCHAR(100),
    weight_lbs INTEGER,
    microchipped BOOLEAN
);

DROP TABLE puppies;

DROP TABLE IF EXISTS puppies;