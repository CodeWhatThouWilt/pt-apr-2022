CREATE TABLE friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);


INSERT INTO friends (id, first_name, last_name)
VALUES
    (1, 'Amy', 'Pond');


INSERT INTO friends (first_name, last_name)
VALUES
    ('Rose', 'Tyle'),
    ('Martha', 'Jones'),
    ('Donna', 'Noble'),
    ('River', 'Song');


INSERT INTO friends (first_name, last_name)
VALUES ('Jenny', 'Who');