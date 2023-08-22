CREATE TABLE IF NOT EXISTS puppies (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50),
    age_yrs DECIMAL(3,1), -- NUMERIC(3,1) for sqlite
    breed VARCHAR(100),
    weight_lbs INTEGER,
    microchipped BOOLEAN
);

DROP TABLE puppies;

DROP TABLE IF EXISTS puppies;